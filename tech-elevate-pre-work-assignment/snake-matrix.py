import sys

n = int(sys.stdin.readline())
for i in range(0, n):
    newLine = []
    lineMin = i * n + 1
    lineMax = i * n + n
    if i % 2:
        current = lineMax
        while current >= lineMin:
            newLine.append(current)
            current = current - 1
    else:
        current = lineMin
        while current <= lineMax:
            newLine.append(current)
            current = current + 1
    print(' '.join(map(str, newLine)))