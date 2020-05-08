import sys

f = sys.stdin
n = int(f.readline())
words = [f.readline().strip() for _ in range(n)]
prefixes = int(f.readline())
for _ in range(prefixes):
  prefix = f.readline().strip()
  matchingWords = []
  for word in words:
    if word.startswith(prefix):
      matchingWords.append(word)
  print(' '.join(sorted(matchingWords)[:10]))