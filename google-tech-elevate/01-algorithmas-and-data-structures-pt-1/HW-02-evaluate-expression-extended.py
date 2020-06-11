# Extend this basic solution that was introduced in class.
# V1 => not passing one hidden test

import sys
import math
from dataclasses import dataclass

@dataclass
class Operator:
  priority: int
  executor: callable

unary = ['abs', 'sqrt', 'minus']
operators = { # Map of operators allows quick retrieval
  '+': Operator(1, lambda a, b: a + b),
  '-': Operator(1, lambda a, b: a - b),
  '*': Operator(2, lambda a, b: a * b),
  '/': Operator(2, lambda a, b: a / b),
  'abs': Operator(3, lambda a: abs(a)),
  'sqrt': Operator(3, lambda a: math.sqrt(a)),
  'minus': Operator(3, lambda a: -a),
  '^': Operator(4, lambda a, b: a**b),
}

def parse_lexemes(string_input):
  result = []
  temp = []
  
  def get_lexeme(array_to_check):
    lexeme = ''.join(array_to_check)
    try:
      if lexeme in unary or not math.isnan(float(lexeme)):
        return lexeme
      else:
        return None
    except:
      return None
  
  for c in string_input:
    if not c.isspace():
      if c in operators or c in [')', '(']:
        if len(temp) > 0:
          current_lexeme = get_lexeme(temp)
          if current_lexeme:
            temp = []
            result.append(current_lexeme)
          else:
            return ['Error']
        result.append(c)
      elif c == '.':
        # Error: Number with 2 dots
        if c in temp:
          return ['Error']
        temp.append(c)
      # Digit
      else:
        temp.append(c)
    # Space => may be end of the number
    else:
      if len(temp) > 0:
        current_lexeme = get_lexeme(temp)
        if current_lexeme:
          temp = []
          result.append(current_lexeme)
        else:
            return ['Error']
  if len(temp) > 0:
    current_lexeme = get_lexeme(temp)
    if current_lexeme:
      temp = []
      result.append(current_lexeme)
    else:
      return ['Error']
  return result

def execute_ops(queue):
  args = []
  for l in queue:
    if l in operators:
      if l in unary:
        try:
          arg = float(args.pop())
          eval = operators[l].executor(arg)
        except:
          return 'Error'
      else:
        try:
          arg2 = float(args.pop())
          arg1 = float(args.pop())
          if l == '^' and arg1 < 0:
            return 'Error'
          eval = operators[l].executor(arg1, arg2)
        except:
          return 'Error'
      args.append(eval)
    else:
      args.append(l)
  return args[0]
    
def is_number(string):
  try:
    float(string)
    return True
  except:
    return False
    
def is_unary(previous):
  if previous in operators or previous == '(' or previous == None:
    return True
  else:
    return False

def evaluate_expression(string_input):
  lexemes = parse_lexemes(string_input)
  if len(lexemes) == 1 and lexemes[0] == 'Error':
    return "Invalid mathematical expression."
  ops = []
  queue = []
  last_lex = None
  for l in lexemes:
    if is_number(l):
      queue.append(l)
    elif l in operators:
      if l == '-':
        if is_unary(last_lex):
          l = 'minus'
      priority = operators[l].priority
      if len(ops) > 0:
        last_operator = ops[-1]
        if last_operator in operators and operators[last_operator].priority > priority:
          queue.append(ops.pop())
      ops.append(l)
    elif l == '(':
      ops.append(l)
    elif l == ')':
      operator = ops.pop()
      while operator != '(':
        queue.append(operator)
        operator = ops.pop()
      if len(ops) > 0 and ops[-1] in unary:
        queue.append(ops.pop())
    if not l.isspace():
      last_lex = l
  while len(ops):
    queue.append(ops.pop())
  # New execute all operations
  evaluation = execute_ops(queue)
  if evaluation == 'Error':
    return "Invalid mathematical expression."
  return format(round(evaluation, 2), '.2f')

res = evaluate_expression(sys.stdin.readline())
print (res)