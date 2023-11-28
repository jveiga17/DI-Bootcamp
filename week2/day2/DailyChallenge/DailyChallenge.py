#Daily Challenge
#Challenge 1

number = int(input("Enter a number: "))
length = int(input("Enter the desired length of the list: "))

# Create a list of multiples of the number
multiples_list = [number * i for i in range(1, length + 1)]

# Print the generated list
print(multiples_list)

#-----------

#Challenge 2

user_word = input("Enter a word: ")

cleaned_word = ""
for i in range(len(user_word)):
    if i == 0 or user_word[i] != user_word[i - 1]:
        cleaned_word += user_word[i]

print("Cleaned word:", cleaned_word)