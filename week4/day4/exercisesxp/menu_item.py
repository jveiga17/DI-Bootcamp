# menu_item.py

import psycopg2
from psycopg2 import sql

class MenuItem:
    def __init__(self, item_name, item_price):
        self.item_name = item_name
        self.item_price = item_price

    def save(self):
        connection = psycopg2.connect(
            user="username",
            password="password",
            host="host",
            port="port",
            database="database"
        )

        cursor = connection.cursor()
        insert_query = sql.SQL("INSERT INTO Menu_Items (item_name, item_price) VALUES ({}, {})")
        cursor.execute(insert_query, [self.item_name, self.item_price])

        connection.commit()
        cursor.close()
        connection.close()

    def delete(self):
        connection = psycopg2.connect(
            user="username",
            password="password",
            host="host",
            port="port",
            database="database"
        )

        cursor = connection.cursor()
        delete_query = sql.SQL("DELETE FROM Menu_Items WHERE item_name = {}")
        cursor.execute(delete_query, [self.item_name])

        connection.commit()
        cursor.close()
        connection.close()

    def update(self, new_name, new_price):
        connection = psycopg2.connect(
            user="username",
            password="password",
            host="host",
            port="port",
            database="database"
        )

        cursor = connection.cursor()
        update_query = sql.SQL("UPDATE Menu_Items SET item_name = {}, item_price = {} WHERE item_name = {}")
        cursor.execute(update_query, [new_name, new_price, self.item_name])

        connection.commit()
        cursor.close()
        connection.close()

