#Exercise1 

def display_message():
    """
    Displays a message about what is being learned in this course.
    """
    message = "I am learning about Python programming in this course."
    print(message)


display_message() # calling the function to display the message

#-----

#Exercise 2 

def favorite_book(title):
    """
    Prints a message about one of my favorite books.
    
    Parameters:
    - title (str): The title of the favorite book.
    """
    message = f"One of my favorite books is {title}"
    print(message)

# Call the function with a book title as an argument
favorite_book("Harry Potter")

#-----

#Exercise 3 

def describe_city(city, country="Brazil"):
    """
    Prints a simple sentence describing the city and its country.
    
    Parameters:
    - city (str): The name of the city.
    - country (str): The name of the country (default value is "Unknown").
    """
    message = f"{city} is in {country}"
    print(message)

# Call the function with a specific city and country
describe_city("Reykjavik", "Iceland")

# Call the function with only a city (default country will be used)
describe_city("Rio")

#------

#Exercise 4 

import random

def compare_numbers(user_number):
    """
    Compares a user-provided number with a randomly generated number.
    
    Parameters:
    - user_number (int): The user-provided number between 1 and 100.
    """
    #generating a random number between 1 and 100
    random_number = random.randint(1, 100)
    
    #comparing numbers
    if user_number == random_number:
        print("Success! You guessed the correct number.")
    else:
        print(f"Fail! Your number was {user_number}, and the random number was {random_number}.")

#calling the function with a user-provided number
user_input = int(input("Enter a number between 1 and 100: "))
compare_numbers(user_input)

#-----

#Exercise 5

def make_shirt(size="large", message="I love Python"):
    """
    Prints a sentence summarizing the size of the shirt and the message printed on it.
    
    Parameters:
    - size (str): The size of the shirt (default is "large").
    - message (str): The message printed on the shirt (default is "I love Python").
    """
    print(f"The size of the shirt is {size} and the text is '{message}'")

#calling the function to make a large shirt with the default message
make_shirt()

#calling the function to make a medium shirt with the default message
make_shirt(size="medium")

#calling the function to make a shirt of any size with a different message
make_shirt(size="small", message="Hello World")

#bonus: function using keyword arguments
make_shirt(message="Keyword Arguments Rock!", size="extra-large")

#----- 

#Exercise 6

def make_shirt(size="large", message="I love Python"):
    """
    Prints a sentence summarizing the size of the shirt and the message printed on it.
    
    Parameters:
    - size (str): The size of the shirt (default is "large").
    - message (str): The message printed on the shirt (default is "I love Python").
    """
    print(f"The size of the shirt is {size} and the text is '{message}'")

#calling the function to make a large shirt with the default message
make_shirt()

#calling the function to make a medium shirt with the default message
make_shirt(size="medium")

#calling the function to make a shirt of any size with a different message
make_shirt(size="small", message="Hello World")

# Bonus: calling the function using keyword arguments
make_shirt(message="Keyword Arguments Rock!", size="extra-large")

#-----

#Exercise 7

def make_shirt(size="large", message="I love Python"):
    """
    Prints a sentence summarizing the size of the shirt and the message printed on it.
    
    Parameters:
    - size (str): The size of the shirt (default is "large").
    - message (str): The message printed on the shirt (default is "I love Python").
    """
    print(f"The size of the shirt is {size} and the text is '{message}'")

#calling the function to make a large shirt with the default message
make_shirt()

#calling the function to make a medium shirt with the default message
make_shirt(size="medium")

#calling the function to make a shirt of any size with a different message
make_shirt(size="small", message="Hello World")

# Bonus: calling the function using keyword arguments
make_shirt(message="Keyword Arguments Rock!", size="extra-large")

#-----

#Exercise 8

import random

#dicts w questions and answers
data = [
    {"question": "What is Baby Yoda's real name?", "answer": "Grogu"},
    {"question": "Where did Obi-Wan take Luke after his birth?", "answer": "Tatooine"},
    {"question": "What year did the first Star Wars movie come out?", "answer": "1977"},
    {"question": "Who built C-3PO?", "answer": "Anakin Skywalker"},
    {"question": "Anakin Skywalker grew up to be who?", "answer": "Darth Vader"},
    {"question": "What species is Chewbacca?", "answer": "Wookiee"}
]

def play_star_wars_quiz():
    """
    Play the Star Wars quiz game and track correct/incorrect answers.
    """
    correct_answers = 0
    incorrect_answers = 0
    wrong_answers = []

    # Shuffle the questions to make the quiz more interesting
    random.shuffle(data)

    for question_data in data:
        question = question_data["question"]
        correct_answer = question_data["answer"]

        user_answer = input(f"{question} ")

        if user_answer.lower() == correct_answer.lower():
            print("Correct!\n")
            correct_answers += 1
        else:
            print(f"Incorrect. The correct answer is {correct_answer}.\n")
            incorrect_answers += 1
            wrong_answers.append({"question": question, "user_answer": user_answer, "correct_answer": correct_answer})

    display_results(correct_answers, incorrect_answers, wrong_answers)

def display_results(correct_answers, incorrect_answers, wrong_answers):
    """
    Display the results of the Star Wars quiz.
    """
    print(f"Quiz Results:")
    print(f"Correct Answers: {correct_answers}")
    print(f"Incorrect Answers: {incorrect_answers}")

    if incorrect_answers > 3:
        print("You had more than 3 wrong answers. Maybe you should play again.")
        display_wrong_answers(wrong_answers)

def display_wrong_answers(wrong_answers):
    """
    Display the questions the user answered wrong, along with their answers.
    """
    print("\nQuestions Answered Incorrectly:")
    for i, wrong_answer in enumerate(wrong_answers, start=1):
        print(f"\n{i}. Question: {wrong_answer['question']}")
        print(f"   Your Answer: {wrong_answer['user_answer']}")
        print(f"   Correct Answer: {wrong_answer['correct_answer']}")


play_star_wars_quiz()

