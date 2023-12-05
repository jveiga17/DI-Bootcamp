#Exercise 1 

class Pets():
    def __init__(self, animals):
        self.animals = animals

    def walk(self):
        for animal in self.animals:
            print(animal.walk())

class Cat():
    is_lazy = True

    def __init__(self, name, age):
        self.name = name
        self.age = age

    def walk(self):
        return f'{self.name} is just walking around'

class Bengal(Cat):
    def sing(self, sounds):
        return f'{sounds}'

class Chartreux(Cat):
    def sing(self, sounds):
        return f'{sounds}'

class Siamese(Cat):
    def sing(self, sounds):
        return f'{sounds}'

#list all_cats
all_cats = [Bengal("BengalCat", 3), Chartreux("ChartreuxCat", 4), Siamese("SiameseCat", 2)]

#sara_pets
sara_pets = Pets(all_cats)

#take all the cats for a walk
sara_pets.walk()

#-----

#Exercise 2 

class Dog:
    def __init__(self, name, age, weight):
        self.name = name
        self.age = age
        self.weight = weight

    def bark(self):
        return f'{self.name} is barking'

    def run_speed(self):
        return self.weight / self.age * 10

    def fight(self, other_dog):
        if self.run_speed() * self.weight > other_dog.run_speed() * other_dog.weight:
            return f'{self.name} won the fight!'
        else:
            return f'{other_dog.name} won the fight!'

#create 3 dogs
dog1 = Dog("Buddy", 3, 15)
dog2 = Dog("Max", 4, 20)
dog3 = Dog("Charlie", 2, 10)

#test the bark method
print(dog1.bark())

#test the run_speed method
print(f'{dog1.name}\'s running speed: {dog1.run_speed()}')

#test the fight method
print(dog1.fight(dog2))

#-----

#Exercise 3

from Exercise2 import Dog  # Import the Dog class from Exercise 2

class PetDog(Dog):
    def __init__(self, name, age, weight):
        super().__init__(name, age, weight)
        self.trained = False

    def train(self):
        print(self.bark())
        self.trained = True

    def play(self, *dog_names):
        print(f'{", ".join(dog_names)} all play together')

    def do_a_trick(self):
        if self.trained:
            import random
            tricks = ["does a barrel roll", "stands on his back legs", "shakes your hand", "plays dead"]
            print(f'{self.name} {random.choice(tricks)}')

#create an instance of PetDog
pet_dog = PetDog("Rover", 2, 12)

#the train method
pet_dog.train()

#the play method
pet_dog.play("Buddy", "Max", "Charlie")

#the do_a_trick method
pet_dog.do_a_trick()

#-----

#Exercise 4 

class Family:
    def __init__(self, last_name, members):
        self.last_name = last_name
        self.members = members

    def born(self, **kwargs):
        self.members.append(kwargs)
        print(f'Congratulations! {kwargs["name"]} is born into the family.')

    def is_18(self, name):
        for member in self.members:
            if member['name'] == name:
                return member['age'] >= 18
        return False

    def family_presentation(self):
        print(f'Family Name: {self.last_name}')
        for member in self.members:
            print(f"Name: {member['name']}, Age: {member['age']}, Gender: {member['gender']}, is_child: {member['is_child']}")

#instance of the Family class
family_instance = Family("Smith", [
    {'name':'Michael','age':35,'gender':'Male','is_child':False},
    {'name':'Sarah','age':32,'gender':'Female','is_child':False}
])

#the born method
family_instance.born(name='John', age=0, gender='Male', is_child=True)

#the is_18 method
print(f'Is Sarah over 18? {family_instance.is_18("Sarah")}')

#family_presentation method
family_instance.family_presentation()

#-----

#Exercise 5

class TheIncredibles(Family):
    def __init__(self, last_name, members):
        super().__init__(last_name, members)

    def use_power(self, name):
        for member in self.members:
            if member['name'] == name and member['age'] >= 18:
                print(f'{name}\'s power: {member["power"]}')
                return
        raise Exception(f'{name} is not over 18 years old.')

    def incredible_presentation(self):
        print('*Here is our powerful family*')
        super().family_presentation()

#instance of TheIncredibles class
incredibles_instance = TheIncredibles("Incredibles", [
    {'name':'Michael','age':35,'gender':'Male','is_child':False,'power': 'fly','incredible_name':'MikeFly'},
    {'name':'Sarah','age':32,'gender':'Female','is_child':False,'power': 'read minds','incredible_name':'SuperWoman'}
])

#incredible_presentation method
incredibles_instance.incredible_presentation()

#born method to add Baby Jack
incredibles_instance.born(name='Baby Jack', age=0, gender='Male', is_child=True, power='Unknown Power', incredible_name='BabyJack')

#incredible_presentation method again
incredibles_instance.incredible_presentation()
