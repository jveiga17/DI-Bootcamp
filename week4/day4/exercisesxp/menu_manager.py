import psycopg2
from psycopg2 import sql
from menu_item import MenuItem

class MenuManager:
    @classmethod
    def get_by_name(cls, item_name):
        connection = psycopg2.connect(
            user="username",
            password="password",
            host="host",
            port="port",
            database="database"
        )

        cursor = connection.cursor()
        select_query = sql.SQL("SELECT * FROM Menu_Items WHERE item_name = {}")
        cursor.execute(select_query, [item_name])
        result = cursor.fetchone()

        cursor.close()
        connection.close()

        if result:
            return MenuItem(result[1], result[2])
        else:
            return None

    @classmethod
    def all(cls):
        connection = psycopg2.connect(
            user="username",
            password="password",
            host="host",
            port="port",
            database="database"
        )

        cursor = connection.cursor()
        select_all_query = sql.SQL("SELECT * FROM Menu_Items")
        cursor.execute(select_all_query)
        results = cursor.fetchall()

        cursor.close()
        connection.close()

        items_list = []
        for result in results:
            items_list.append(MenuItem(result[1], result[2]))

        return items_list


# Example usage:

item = MenuItem('Burger', 35)
item.save()
item.delete()
item.update('Veggie Burger', 37)
item2 = MenuManager.get_by_name('Beef Stew')
items = MenuManager.all()
