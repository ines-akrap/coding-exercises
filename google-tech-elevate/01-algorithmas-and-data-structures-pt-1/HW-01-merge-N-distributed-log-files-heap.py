import sys

n = int(sys.stdin.readline())
lengths = [int(el) for el in sys.stdin.readline().split()]
arrays = [[int(el) for el in sys.stdin.readline().split()]
          for length in lengths]
priority_queue = [item for array in arrays for item in array]

class MinHeap:
    def __init__(self):
        self.heap = []
    
    def get_left(self, i):
        return 2*i + 1
    def get_right(self, i):
        return 2*i + 2
    def get_parent(self, i):
        return int((i-1)/2)
        
    def has_left(self, i):
        return self.get_left(i) < len(self.heap)
    def has_right(self, i):
        return self.get_right(i) < len(self.heap)
    def has_parent(self, i):
        return self.get_parent(i) >= 0
        
    def swap(self, i, j):
        self.heap[i], self.heap[j] = self.heap[j], self.heap[i]
    
    def insert_node(self, node):
        self.heap.append(node)
        last_index = len(self.heap) - 1
        self.heapify_up(last_index)
        
    def heapify_up(self, i):
        size = len(self.heap)
        while self.has_parent(i) and self.heap[i] < self.heap[self.get_parent(i)]:
            self.swap(i, self.get_parent(i))
            i = self.get_parent(i)
    
    def get_min(self):
        if len(self.heap) == 0:
            return -1
        last_index = len(self.heap) - 1
        self.swap(0, last_index)
        min = self.heap.pop()
        self.heapify_down(0)
        return min
        
    def heapify_down(self, i):
        while self.has_left(i):
            smaller_child = self.get_left(i)
            if self.has_right(i) and self.heap[self.get_left(i)] > self.heap[self.get_right(i)]:
                smaller_child = self.get_right(i)
            if self.heap[i] < self.heap[smaller_child]:
                break
            self.swap(i, smaller_child)
            i = smaller_child
            
    def print_heap(self):
        print (self.heap)
            
min_heap = MinHeap()
for item in priority_queue:
    min_heap.insert_node(item)

merged = []
for i in range(0, len(priority_queue)):
    merged.append(min_heap.get_min())

for el in merged:
    sys.stdout.write(str(el) + ' ')
