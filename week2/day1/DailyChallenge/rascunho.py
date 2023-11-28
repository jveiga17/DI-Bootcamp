import random
user_input = input("name: ")
characters = list(user_input)

# Shuffle the list of characters
random.shuffle(characters)

# Convert the list back to a string
jumbled_string = ''.join(characters)

# Print the newly jumbled string
print(f"Jumbled String: {jumbled_string}")
