#Exercise1

keys = ['Ten', 'Twenty', 'Thirty'] #Given lists
values = [10, 20, 30]

result_dict = dict(zip(keys, values)) #Making the dictionary 

print(result_dict) #Printing results


#----------

#Exercise2

family = {"rick": 43, 'beth': 13, 'morty': 5, 'summer': 8} 

num_members = int(input("Enter the number of family members: ")) #input for the final sum
family = {}
for _ in range(num_members): #loop for asking the info of everyone
     name = input("Enter name: ")
     age = int(input("Enter age: "))
     family[name] = age

# Prices
free_threshold = 3
child_price = 10
adult_price = 15

# Calculate total cost for each family member
total_cost = 0
for name, age in family.items():
    if age < free_threshold:
        cost = 0
    elif 3 <= age <= 12:
        cost = child_price
    else:
        cost = adult_price
    total_cost += cost
    print(f"{name} has to pay ${cost}.")

# Print the family's total cost for the movies
print(f"\nTotal cost for the family: ${total_cost}")



#----------

#Exercise 3 

# Create a dictionary for the brand information
brand = {
    "name": "Zara",
    "creation_date": 1975,
    "creator_name": "Amancio Ortega Gaona",
    "type_of_clothes": ["men", "women", "children", "home"], #keys = "names", values = "data", [] = groups the values into one key
    "international_competitors": ["Gap", "H&M", "Benetton"],
    "number_stores": 7000,
    "major_color": {
        "France": ["blue"],
        "Spain": ["red"],
        "US": ["pink", "green"]
    }
}

#Change the number of stores
brand["number_stores"] = 2 #use the [] to define the key to be changed

#Print customers sentence
print(f"The clients of {brand['name']} include {', '.join(brand['type_of_clothes'][:-1])} and {brand['type_of_clothes'][-1]} customers.")

#Adding spain to the list 
brand["country_creation"] = "Spain"

#adding "Desigual" to the existing key
if "international_competitors" in brand: #checking
    brand["international_competitors"].append("Desigual") #adding "Desigual" to the existing key

print(f"The clients of {brand['name']} include {', '.join(brand['type_of_clothes'][:-1])} and {brand['type_of_clothes'][-1]} customers.")

#delete the creation date
del brand["creation_date"]

#printing the last international competitor
print(brand["international_competitors"][-1]) #**

#major colors in the us
print(brand["major_color"]["US"]) #** the [] go outside the pther [], but still inside the ()

#printing the dict's lenght 
print(len(brand))

#printing keys of the dict
print(list(brand.keys())) #list function

#new dict
more_on_zara = {
    "creation_date": 1975,
    "number_stores": 10000
}

#joining dicts
brand.update(more_on_zara)

#what happened
print(brand["number_stores"]) #the value got updated 

#----------

#Exercise 4 

#defining given variables
disney_users_A = {"Mickey": 0, "Minnie": 1, "Donald": 2, "Ariel": 3, "Pluto": 4}
disney_users_B = {0: "Mickey", 1: "Minnie", 2: "Donald", 3: "Ariel", 4: "Pluto"}
disney_users_C = {"Ariel": 0, "Donald": 1, "Mickey": 2, "Minnie": 3, "Pluto": 4}


#1
recreated_A = {}
for index, character in enumerate(["Mickey", "Minnie", "Donald", "Ariel", "Pluto"]):
    recreated_A[character] = index
print(recreated_A)

#2

recreated_B = {}
for index, character in enumerate(["Mickey", "Minnie", "Donald", "Ariel", "Pluto"]):
    recreated_B[index] = character
print(recreated_B)

#3

recreated_C = dict(enumerate(sorted(["Ariel", "Donald", "Mickey", "Minnie", "Pluto"])))
print(recreated_C)

#4.1
recreated_A_i = {}
for index, character in enumerate(["Mickey", "Minnie", "Ariel"]):
    recreated_A_i[character] = index
print("Result (with 'i'):", recreated_A_i)


#4.2

recreated_A_starting_with_m_or_p = {}
for index, character in enumerate(["Mickey", "Minnie", "Pluto"]):
    recreated_A_starting_with_m_or_p[character] = index
print("Recreated 1st Result (starting with 'm' or 'p'):", recreated_A_starting_with_m_or_p)




