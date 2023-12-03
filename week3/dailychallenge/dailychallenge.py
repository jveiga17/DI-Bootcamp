class Farm:
    def __init__(self, farm_name):
        self.name = farm_name
        self.animals = {}

    def add_animal(self, animal_type, quantity=1):
        if animal_type in self.animals:
            self.animals[animal_type] += quantity
        else:
            self.animals[animal_type] = quantity

    def get_info(self):
        info_str = f"{self.name}'s farm\n"
        for animal_type, quantity in self.animals.items():
            info_str += f"{animal_type} : {quantity}\n"
        info_str += "E-I-E-I-0!"
        return info_str

    def get_animal_types(self):
        return sorted(self.animals.keys())

    def get_short_info(self):
        animal_types = self.get_animal_types()
        animal_types_str = ', '.join(animal_types)
        return f"{self.name}'s farm has {animal_types_str}."


#code test
macdonald = Farm("McDonald")
macdonald.add_animal('cow', 5)
macdonald.add_animal('sheep')
macdonald.add_animal('sheep')
macdonald.add_animal('goat', 12)
print(macdonald.get_info())

#bonus
print(macdonald.get_animal_types())
print(macdonald.get_short_info())
