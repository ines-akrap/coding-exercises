import sys

lenA, lenB = map(int, sys.stdin.readline().split())
listA = [int(sys.stdin.readline()) for _ in range(lenA)]
listB = [int(sys.stdin.readline()) for _ in range(lenB)]

indexA = 0
indexB = 0

while indexA<lenA and indexB<lenB:
  if listA[indexA] < listB[indexB]:
    print (listA[indexA])
    indexA = indexA + 1
  else:
    print (listB[indexB])
    indexB = indexB + 1

if (indexA<lenA):
  while (indexA<lenA):
    print (listA[indexA])
    indexA = indexA + 1

if (indexB<lenB):
  while (indexB<lenB):
    print (listB[indexB])
    indexB = indexB + 1
