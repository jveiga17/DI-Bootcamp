import requests
import psycopg2
from psycopg2 import sql
import random

# the function to fetch random countries from REST Countries API
def get_random_countries():
    url = "https://restcountries.com/v3.1/all"
    response = requests.get(url)
    countries = response.json()
    return random.sample(countries, 10)

# inserting data into the PostgreSQL database
def insert_countries_to_database(countries):
    connection = psycopg2.connect(
        host="your_host",
        database="your_database",
        user="your_user",
        password="your_password"
    )
    cursor = connection.cursor()

    for country in countries:
        insert_query = sql.SQL("""
            INSERT INTO countries (name, capital, flag, subregion, population)
            VALUES (%s, %s, %s, %s, %s)
        """)
        data = (
            country.get('name').get('common'),
            country.get('capital')[0],
            country.get('flags').get('png'),
            country.get('subregion'),
            country.get('population')
        )
        cursor.execute(insert_query, data)

    connection.commit()
    cursor.close()
    connection.close()



random_countries = get_random_countries()

insert_countries_to_database(random_countries)
