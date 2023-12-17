from menu_item import MenuItem
from menu_manager import MenuManager

def show_user_menu():
    print("Program Menu:")
    print("V - View an Item")
    print("A - Add an Item")
    print("D - Delete an Item")
    print("U - Update an Item")
    print("S - Show the Menu")
    print("X - Exit")

def add_item_to_menu():
    item_name = input("Enter the item's name: ")
    item_price = int(input("Enter the item's price: "))
    new_item = MenuItem(item_name, item_price)
    new_item.save()
    print("Item added successfully.")

def remove_item_from_menu():
    item_name = input("Enter the name of the item to remove: ")
    item_to_remove = MenuItem.get_by_name(item_name)
    if item_to_remove:
        item_to_remove.delete()
        print("Item deleted successfully.")
    else:
        print("Error: Item not found.")

def update_item_from_menu():
    current_name = input("Enter the current name of the item to update: ")
    current_price = int(input("Enter the current price of the item: "))
    new_name = input("Enter the new name for the item: ")
    new_price = int(input("Enter the new price for the item: "))
    
    item_to_update = MenuItem.get_by_name(current_name)
    
    if item_to_update and item_to_update.item_price == current_price:
        item_to_update.update(new_name, new_price)
        print("Item updated successfully.")
    else:
        print("Error: Item not found or incorrect price.")

def show_restaurant_menu():
    menu_items = MenuManager.all()
    if menu_items:
        print("Restaurant Menu:")
        for item in menu_items:
            print(f"{item.item_name} - ${item.item_price}")
    else:
        print("The restaurant menu is empty.")

if __name__ == "__main__":
    while True:
        show_user_menu()
        choice = input("Enter your choice: ").upper()

        if choice == 'V':
            item_name = input("Enter the name of the item to view: ")
            item = MenuManager.get_by_name(item_name)
            if item:
                print(f"{item.item_name} - ${item.item_price}")
            else:
                print("Item not found.")

        elif choice == 'A':
            add_item_to_menu()

        elif choice == 'D':
            remove_item_from_menu()

        elif choice == 'U':
            update_item_from_menu()

        elif choice == 'S':
            show_restaurant_menu()

        elif choice == 'X':
            show_restaurant_menu()
            print("Exiting the program.")
            break

        else:
            print("Invalid choice. Please try again.")
