# Google Tech Elevate Week 1, Example 2 code

import sys
from dataclass import dataclass

@dataclass
class Operator:
  priority: int
  executor: callable

operators = {
  '+': Operator(1, lambda a, b: a + b),
  '-': Operator(1, lambda a, b: a - b),
  '*': Operator(2, lambda a, b: a * b),
  '/': Operator(2, lambda a, b: float(a)/b), 
}

def parse_lexemes(string_input):
  result = []
  for char in string_input:
    if not char.isspace():
      if char in operators or char in [')', '(']:
        result.append(char)
      else:
        result.append(int(char))
  return result

def execute_ops(ops, args, condition):
  while ops and condition:
    val2, val1 = args.pop(), args.pop()
    args.append(operators[ops.pop()].executor(val1, val2))

def evaluate_expression(string_input):
  lexemes = parse_lexemes(string_input)
  ops = []
  args = []
  for l in lexemes:
    if isinstance(l, int):
      args.append(l)
    elif l == '(':
      ops.append(l)
    elif l == ')':
      execute_ops(ops, args, lambda: ops[-1] != '(')
      ops.pop()
    elif l in operators:
      priority = operators[l].priority
      execute_ops(ops, args, lambda: ops[-1] != '(' and operators[ops[-1].priority] >= priority)
      ops.append(l)
  execute_ops(ops, args, lambda: True)
  return args[-1] if len(args == 1) else None

res = evaluate_expression(sys.stdin.readline())
