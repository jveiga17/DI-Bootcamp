class Pagination:
    def __init__(self, items=None, pageSize=10):
        self.items = items or []
        self.pageSize = int(pageSize)
        self.totalPages = self.calculate_total_pages()
        self.currentPage = 1

    def calculate_total_pages(self):
        return -(-len(self.items) // self.pageSize)  # Ceiling division to get the total pages

    def getVisibleItems(self):
        start_idx = (self.currentPage - 1) * self.pageSize
        end_idx = start_idx + self.pageSize
        return self.items[start_idx:end_idx]

    def prevPage(self):
        self.currentPage = max(1, self.currentPage - 1)
        return self

    def nextPage(self):
        self.currentPage = min(self.totalPages, self.currentPage + 1)
        return self

    def firstPage(self):
        self.currentPage = 1
        return self

    def lastPage(self):
        self.currentPage = self.totalPages
        return self

    def goToPage(self, pageNum):
        page_num_int = int(pageNum)
        self.currentPage = max(1, min(self.totalPages, page_num_int))
        return self

# Example usage:
alphabetList = list("abcdefghijklmnopqrstuvwxyz")
p = Pagination(alphabetList, 4)

print(p.getVisibleItems())  # Output: ["a", "b", "c", "d"]

p.nextPage()
print(p.getVisibleItems())  # Output: ["e", "f", "g", "h"]

p.lastPage()
print(p.getVisibleItems())  # Output: ["y", "z"]

p.goToPage(10)
print(p.currentPage)  # Output: 5 (closest valid page)

p.goToPage(-2)
print(p.currentPage)  # Output: 1 (closest valid page)
