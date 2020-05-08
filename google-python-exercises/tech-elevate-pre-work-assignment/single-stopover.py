import sys

def isAirport(code):
  return len(code) < 5 and not code.isspace()

f = sys.stdin
map = {}
for _ in range(int(f.readline())):
  fr, to = f.readline().split()
  if not isAirport(fr) or not isAirport(to):
    continue
  if fr in map:
    map[fr].append(to)
  else:
    map[fr] = [to]
for i in range(int(f.readline())):
  fr, to = f.readline().split()
  layovers = []
  if isAirport(fr) and isAirport(to) and fr in map:
    for layover in map[fr]:
      if layover in map and to in map[layover]:
        layovers.append(layover)
  print(' '.join(sorted(layovers)))
  