#Exercise 1 

my_fav_numbers = {1, 2, 3, 4}


my_fav_numbers.add(5)
my_fav_numbers.add(6)


my_fav_numbers.remove(6)


friend_fav_numbers = {7, 8, 9, 0}

our_fav_numbers = my_fav_numbers.union(friend_fav_numbers)

print("My Favorite Numbers:", my_fav_numbers)
print("Friend's Favorite Numbers:", friend_fav_numbers)
print("Our Favorite Numbers:", our_fav_numbers)

#----------

#Exercise 2

#Answer ----> No. Once a tuple is defined, you cannot add, remove, or modify elements in it.

#----------

#Exercise 3 

#list
basket = ["Banana", "Apples", "Oranges", "Blueberries"]

basket.remove("Banana")

basket.remove("Blueberries")

basket.append("Kiwi")

basket.insert(0, "Apples")

apple_count = basket.count("Apples")

basket.clear()

print(basket)

#----------

#Exercise 4

#Float: a data type that represents decimal numbers;  Floats allow for greater precision and a wider range of values compared to integers.

#Integer: Represents whole numbers without any decimal point

sequence = [float(i) for i in range(15, 51, 5)] 

sequence_alternative = [float(x) for x in range(3, 16, 1)]

print("Sequence:", sequence)
print("Alternative Sequence:", sequence_alternative)

#----------

#Exercise 5 

for number in range(1, 21):
    print(number)

for number in range(1, 21):
    if number % 2 == 0:
        print(number)

#----------

#Exercise 6

user_name = ""
while user_name.lower() != "Joao":
    user_name = input("Please enter your name: ")

#----------

#Exercise 7

favorite_fruits_input = input("Enter your favorite fruit(s) separated by a space: ")
favorite_fruits_list = favorite_fruits_input.split()

chosen_fruit = input("Enter a name of any fruit: ")

if chosen_fruit in favorite_fruits_list:
    print("You chose one of your favorite fruits! Enjoy!")
else:
    print("You chose a new fruit. I hope you enjoy.")

#----------

#Exercise 8 
    
pizza_toppings = []
while True:
    topping = input("Enter a pizza topping (type 'quit' to stop): ")
    if topping.lower() == 'quit':
        break
    else:
        print(f"I'll add {topping} to your pizza.")
        pizza_toppings.append(topping)

# Printing all toppings and total price
print("Toppings on the pizza:")
for topping in pizza_toppings:
    print(topping)
print(f"Total price: ${10 + 2.5 * len(pizza_toppings)}")

#----------    

#Exercise 9

ages = []
total_cost = 0
while True:
    age_input = input("Enter the age of a person (type 'done' when finished): ")
    if age_input.lower() == 'done':
        break
    age = int(age_input)
    ages.append(age)
    if age < 3:
        total_cost += 0
    elif 3 <= age <= 12:
        total_cost += 10
    else:
        total_cost += 15

print(f"Total cost of all tickets: ${total_cost}")

teenagers = ["Teen1", "Teen2", "Teen3", "Teen4"]
allowed_age_range = range(16, 22)
teenagers = [teen for teen in teenagers if int(input(f"Enter age of {teen}: ")) in allowed_age_range]
print("Final list of teenagers:", teenagers)

#---------- 

#Exercise 10 

sandwich_orders = ["Tuna sandwich", "Pastrami sandwich", "Avocado sandwich", "Pastrami sandwich", "Egg sandwich", "Chicken sandwich", "Pastrami sandwich"]
while "Pastrami sandwich" in sandwich_orders:
    sandwich_orders.remove("Pastrami sandwich")

finished_sandwiches = []
while sandwich_orders:
    current_sandwich = sandwich_orders.pop(0)
    finished_sandwiches.append(current_sandwich)
    print(f"I made your {current_sandwich.lower()}")

print("Sandwiches made:")
for sandwich in finished_sandwiches:
    print(sandwich)
