#Tic Tac Toe Challenge

# Function to display the Tic Tac Toe board (GUI)
def display_board(board):
    for row in board:
        print("|".join(row))
        print("-" * 5)

# Function to get the position from the player
def player_input(player):
    while True:
        try:
            position = int(input(f"Player {player}, enter your position (1-9): "))
            if 1 <= position <= 9:
                return position
            else:
                print("Invalid input. Position must be between 1 and 9.")
        except ValueError:
            print("Invalid input. Please enter a number.")

# Function to check whether there is a winner or not
def check_win(board):
    # Check rows and columns
    for i in range(3):
        if board[i][0] == board[i][1] == board[i][2] != " " or board[0][i] == board[1][i] == board[2][i] != " ":
            return True

    # Check diagonals
    if board[0][0] == board[1][1] == board[2][2] != " " or board[0][2] == board[1][1] == board[2][0] != " ":
        return True

    return False

# The main function
def play():
    board = [[" " for _ in range(3)] for _ in range(3)]
    players = ["X", "O"]
    current_player = 0

    while True:
        display_board(board)
        position = player_input(players[current_player])
        row, col = (position - 1) // 3, (position - 1) % 3

        if board[row][col] == " ":
            board[row][col] = players[current_player]
            if check_win(board):
                display_board(board)
                print(f"Player {players[current_player]} wins!")
                break
            elif all(board[i][j] != " " for i in range(3) for j in range(3)):
                display_board(board)
                print("It's a tie!")
                break
            current_player = 1 - current_player
        else:
            print("Invalid move. The position is already taken.")

# Run the game
play()
