#Exercise 1

class Currency:
    def __init__(self, currency, amount):
        self.currency = currency
        self.amount = amount

    def __str__(self):
        return f"{self.amount} {self.currency}"

    def __repr__(self):
        return f"{self.amount} {self.currency}"

    def __int__(self):
        return self.amount

    def __add__(self, other):
        if isinstance(other, Currency):
            if self.currency != other.currency:
                raise TypeError(f"Cannot add between Currency type <{self.currency}> and <{other.currency}>")
            return Currency(self.currency, self.amount + other.amount)
        elif isinstance(other, (int, float)):
            return Currency(self.currency, self.amount + other)
        else:
            raise TypeError(f"Unsupported operand type: {type(other)}")

    def __iadd__(self, other):
        if isinstance(other, (int, float)):
            self.amount += other
        elif isinstance(other, Currency):
            if self.currency != other.currency:
                raise TypeError(f"Cannot add between Currency type <{self.currency}> and <{other.currency}>")
            self.amount += other.amount
        else:
            raise TypeError(f"Unsupported operand type: {type(other)}")
        return self

#implementation
c1 = Currency('dollar', 5)
c2 = Currency('dollar', 10)
c3 = Currency('shekel', 1)
c4 = Currency('shekel', 10)

print(str(c1)) 
print(int(c1))
print(repr(c1))  
print(c1 + 5)   
print(c1 + c2)  

print(c1)      

c1 += 5
print(c1)       

c1 += c2
print(c1)       

#-----

#Exercise 2

#files created and function imported

#-----

#Exercise 3 

import string
import random

def generate_random_string(length):
    letters = string.ascii_letters  # contains both uppercase and lowercase letters
    return ''.join(random.choice(letters) for _ in range(length))

#random string of length 5
random_string = generate_random_string(5)
print(random_string)

#-----

#Exercise 4 

from datetime import datetime

def display_current_date():
    current_date = datetime.now().date()
    print(f"Current Date: {current_date}")

#calling the function
display_current_date()

#-----

#Exercise 5 

from datetime import datetime, timedelta

def time_until_january_first():
    current_datetime = datetime.now()
    january_first = datetime(current_datetime.year + 1, 1, 1)  # Next year's January 1st

    time_difference = january_first - current_datetime
    days = time_difference.days
    hours, remainder = divmod(time_difference.seconds, 3600)
    minutes, seconds = divmod(remainder, 60)

    print(f"The 1st of January is in {days} days and {hours:02}:{minutes:02}:{seconds:02} hours.")

#calling the function
time_until_january_first()

#-----

#Exercise 6 

from datetime import datetime

def minutes_lived(birthdate):
    # Assuming birthdate is provided in the format 'YYYY-MM-DD'
    birth_datetime = datetime.strptime(birthdate, '%Y-%m-%d')
    current_datetime = datetime.now()

    time_difference = current_datetime - birth_datetime
    minutes_lived = round(time_difference.total_seconds() / 60)

    print(f"You have lived for approximately {minutes_lived} minutes.")

#example
birthdate = '1997-11-12'  
minutes_lived(birthdate)

#-----

#Exercise 7 

from faker import Faker

#empty list
users = []

#import Faker and create a Faker instance
fake = Faker()

#function to add new dictionaries to the users list
def add_fake_user():
    new_user = {
        'name': fake.name(),
        'address': fake.address(),
        'language_code': fake.language_code(),
    }
    users.append(new_user)

#example
for _ in range(3):
    add_fake_user()

#print the generated users list
for user in users:
    print(user)
