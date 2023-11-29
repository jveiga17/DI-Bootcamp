matrix_string = """7ii
Tsx
h%?
i #
sM 
$a 
#t%
^r!"""

# Step 1: Convert the matrix string into a 2D list (matrix)
matrix = [list(row) for row in matrix_string.split('\n')]

# Step 2-4: Decrypt the matrix
decoded_message = ""
num_columns = len(matrix[0])

for col in range(num_columns):
    for row in range(len(matrix)):
        char = matrix[row][col]

        # Check if the character is an alpha character
        if char.isalpha():
            decoded_message += char
        else:
            # Replace symbols between two alpha characters by a space
            decoded_message += " "

# Print the decrypted message
print("Decrypted Message:", decoded_message)