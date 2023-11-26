#Daily Challenge

#1st Part

user_input = input("Enter a string: ")
if len(user_input) > 10:
    print("String too long.")
elif len(user_input) < 10:
    print("String not long enough.")
else:
    print("Perfect string.")


#2nd Part

first_character = user_input[0]
last_character = user_input[-1]
    
print(f"First character: {first_character}")
print(f"Last character: {last_character}")

#3rd Part

for i in range(1, len(user_input) + 1):
    string2 = user_input[:i]
    print(string2)

#4rd Part

import random

characters = list(user_input)
random.shuffle(characters)
shuffle_string = ''.join(characters)
print(f"Jumbled String: {shuffle_string}")

#actions: variables; print; finding data in input; for _ in statements; range; import; join