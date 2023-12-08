import string
from collections import Counter

class Text:
    def __init__(self, text):
        self.text = text

    def word_frequency(self, word):
        words = self.text.split()
        count = words.count(word)
        if count > 0:
            return f"The word '{word}' appears {count} times in the text."
        else:
            return f"The word '{word}' is not found in the text."

    def most_common_word(self):
        words = self.text.split()
        word_counts = Counter(words)
        most_common = word_counts.most_common(1)
        return most_common[0][0]

    def unique_words(self):
        words = self.text.split()
        return list(set(words))

    @classmethod
    def from_file(cls, file_path):
        with open(file_path, 'r') as file:
            text = file.read()
        return cls(text)

class TextModification(Text):
    def remove_punctuation(self):
        translator = str.maketrans("", "", string.punctuation)
        return self.text.translate(translator)

    def remove_stop_words(self):
        stop_words = set(['a', 'an', 'the', 'and', 'is', 'of', 'in', 'to', 'for', 'with'])
        words = self.text.split()
        filtered_words = [word for word in words if word.lower() not in stop_words]
        return ' '.join(filtered_words)

    def remove_special_characters(self):
        return ''.join(char for char in self.text if char.isalnum() or char.isspace())

# Example usage
simple_text = "A good book would sometimes cost as much as a good house."
text_instance = Text(simple_text)

print(text_instance.word_frequency("good"))
print("Most common word:", text_instance.most_common_word())
print("Unique words:", text_instance.unique_words())

stranger_text = Text.from_file('the_stranger.txt')
print("\nText from 'the_stranger.txt':", stranger_text.text)

modified_text = TextModification(simple_text)
print("\nText without punctuation:", modified_text.remove_punctuation())
print("Text without stop words:", modified_text.remove_stop_words())
print("Text without special characters:", modified_text.remove_special_characters())
