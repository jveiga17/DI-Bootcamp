#Daily Challenge 1

#input
user_word = input("Enter a word: ")

#dict 
letter_indexes = {}

#building the dict
for index, letter in enumerate(user_word):
    letter = str(letter)  # making the letter a string
    if letter in letter_indexes:
        letter_indexes[letter].append(index)
    else:
        letter_indexes[letter] = [index]

# Display the resulting dictionary
print(letter_indexes)

#------------

#Daily Challenge 2

store_items = {
    "apple": 1,
    "banana": 2,
    "orange": 3,
    "chocolate": 1.5,
    "bread": 0.5,
}

wallet_money = float(input("Enter the amount of money in your wallet: "))

# list of affordable items based on the user's budget
affordable_items = [item for item, price in sorted(store_items.items()) if price <= wallet_money]

affordable_items.sort() #sort the list in alphabetical order

if affordable_items:
    print("Affordable Items:", affordable_items)
else:
    print("Nothing")
