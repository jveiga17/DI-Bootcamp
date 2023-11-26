#Exercise 1

print('\n'.join(['Hello world' for _ in range(4)]))

#actions: print; newline; join; for _ in; range 

#-------------

#Exercise 2 

print((99**3)*8)
#or
result = ((99**3)*8)
print(result)

#actions: print; defining/setting a variable; exponentiation and multiplication 

#-------------

#Exercise 3

print(5 < 3) #False

print(3 == 3) #True

print(3 == "3") #False

print("3" > 3) #TypeError 

print("Hello" == "hello") #False

#actions: it's not possible to directly compare two operands of different types (int and str); operands 

#-------------

#Exercise 4 

computer_brand = "Apple"
print(f'I have an {computer_brand} computer')

#actions: variables; print; f-string; 

#-------------

#Exercise 5 

name = "Joao"
age = int("26")
shoe_size = int("42")

print(f"Hi! I'm {name}, and I've made {age} laps around the Sun. Random fact: even though my shoe size is {shoe_size}, I always buy bigger flip-flops.")

#actions: variables; int(); print; f-string

#-------------

#Exercise 6 

a = 2
b = 1
if a > b:
    print("Hello World")

#actions: variables; If statements 

#-------------

#Exercise 7

user_input = input("Type a number: ")
number = int(user_input)
if number % 2 ==0:
    print(f"{number} is an even number.")
else:
    print(f"{number} is an odd number.")    

#actions: variables; If/Else statements; operands

#-------------

#Exercise 8 

user_input = input("Hey! What's your name? ")
my_name = "Joao"
if user_input == my_name:
    print("Wow! Somos xarás!")
else:
    print("Also a beautiful name!")

#actions: variables; input; if/else statements

#-------------

#Exercise 9

height_inches = float(input("Enter your height in inches: "))
height_cm = height_inches * 2.54
if height_cm > 145:
    print("You're tall enough to ride. Come on in!")
else:
    print("Sorry, you need to grow some more to ride. See you soon!")


#actions: variables; float; input; if/else statements