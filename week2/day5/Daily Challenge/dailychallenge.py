#Daily Challenge

#Challenge 1
input_sequence = input("Enter a comma-separated sequence of words: ")
sorted_words = ','.join(sorted([word.strip() for word in input_sequence.split(',')]))
print(sorted_words)

#-----

#Challenge 2 

def longest_word(sentence):
    words = sentence.split()
    longest = max(words, key=len)
    # Handle special characters as part of the word
    special_characters = "',.!"
    for char in special_characters:
        longest = longest.replace(char, '')
    return longest