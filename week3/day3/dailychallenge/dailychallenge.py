import math

class Circle:
    def __init__(self, radius=None, diameter=None):
        if radius is not None and diameter is not None:
            raise ValueError("Only one of radius or diameter should be provided.")
        elif radius is not None:
            self.radius = radius
        elif diameter is not None:
            self.radius = diameter / 2
        else:
            raise ValueError("Either radius or diameter should be provided.")

    @property
    def diameter(self):
        return self.radius * 2

    @property
    def area(self):
        return math.pi * self.radius**2

    def __str__(self):
        return f"Circle(radius={self.radius})"

    def __add__(self, other):
        if not isinstance(other, Circle):
            raise ValueError("Unsupported operand type. Only Circle objects can be added.")
        return Circle(radius=self.radius + other.radius)

    def __lt__(self, other):
        if not isinstance(other, Circle):
            raise ValueError("Unsupported operand type. Only Circle objects can be compared.")
        return self.radius < other.radius

    def __eq__(self, other):
        if not isinstance(other, Circle):
            raise ValueError("Unsupported operand type. Only Circle objects can be compared.")
        return self.radius == other.radius

# Example usage:
circle1 = Circle(radius=5)
circle2 = Circle(diameter=8)

print(f"Circle 1: {circle1}")
print(f"Diameter of Circle 2: {circle2.diameter}")
print(f"Area of Circle 1: {circle1.area}")

# Adding two circles
new_circle = circle1 + circle2
print(f"New Circle after addition: {new_circle}")

# Comparing circles
print(f"Is Circle 1 smaller than Circle 2? {circle1 < circle2}")
print(f"Are Circle 1 and Circle 2 equal? {circle1 == circle2}")
