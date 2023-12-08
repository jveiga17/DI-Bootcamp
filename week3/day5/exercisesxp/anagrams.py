from anagram_checker import AnagramChecker  # Use a relative import

def get_user_input():
    user_input = input("Enter a word (or 'exit' to quit): ").strip()
    return user_input

def validate_input(word):
    if ' ' in word:
        print("Error: Only a single word is allowed.")
        return False
    if not word.isalpha():
        print("Error: Only alphabetic characters are allowed.")
        return False
    return True

def main():
    word_list_file = "sowpods.txt"  # Update with the actual path to your word list file
    anagram_checker = AnagramChecker(word_list_file)

    while True:
        user_input = get_user_input()

        if user_input.lower() == 'exit':
            print("Exiting the program.")
            break

        cleaned_word = user_input.strip()
        if not validate_input(cleaned_word):
            continue

        if anagram_checker.is_valid_word(cleaned_word):
            anagrams = anagram_checker.get_anagrams(cleaned_word)
            formatted_anagrams = ", ".join(anagrams)
            print(f"\nYOUR WORD: '{cleaned_word.upper()}'")
            print("This is a valid English word.")
            print(f"Anagrams for your word: {formatted_anagrams}.\n")
        else:
            print(f"\nYOUR WORD: '{cleaned_word.upper()}'")
            print("This is not a valid English word. Please enter a valid word.\n")

if __name__ == "__main__":
    main()
