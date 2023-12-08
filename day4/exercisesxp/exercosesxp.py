#1 

import random

def get_words_from_file(file_path):
    with open(file_path, 'r') as file:
        words = file.read().split()
    return words

def get_random_sentence(length, words):
    random_words = random.sample(words, length)
    sentence = ' '.join(random_words)
    return sentence.lower()

def main():
    print("Welcome to the Random Sentence Generator!")
    print("This program will generate a random sentence based on a given word list.")

    # Input validation loop
    while True:
        try:
            sentence_length = int(input("How long would you like the sentence to be (between 2 and 20)? "))
            if 2 <= sentence_length <= 20:
                break  # exits the loop if input is within the valid range
            else:
                print("Error: Please enter a valid integer between 2 and 20.")
        except ValueError:
            print("Error: Please enter a valid integer.")

    words = get_words_from_file("sowpods.txt")  #list path
    if not words:
        print("Error: Word list is empty or file not found.")
        return

    sentence = get_random_sentence(sentence_length, words)
    print("\nGenerated Sentence:", sentence)

if __name__ == "__main__":
    main()

#-----

#2

import json

sampleJson = """{ 
   "company":{ 
      "employee":{ 
         "name":"emma",
         "payable":{ 
            "salary":7000,
            "bonus":800
         }
      }
   }
}"""

#parsing the json string
data = json.loads(sampleJson)

#access to the nested "salary" key
salary_value = data["company"]["employee"]["payable"]["salary"]
print("Salary:", salary_value)

#"birth_date" to the json string
data["company"]["employee"]["birth_date"] = "1997-11-12" 

# Save the dictionary as JSON to a file
with open("output.json", "w") as json_file:
    json.dump(data, json_file, indent=2)

print("Updated JSON saved to 'output.json'.")
