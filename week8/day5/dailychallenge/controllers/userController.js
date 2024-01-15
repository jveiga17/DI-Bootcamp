const bcrypt = require('bcrypt');
const fs = require('fs');

const usersFile = 'users.json';

const readUsersFile = () => {
  try {
    const data = fs.readFileSync(usersFile);
    return JSON.parse(data);
  } catch (error) {
    return [];
  }
};

const writeUsersFile = (users) => {
  try {
    fs.writeFileSync(usersFile, JSON.stringify(users, null, 2));
  } catch (error) {
    console.error('Error writing to users file:', error.message);
  }
};

const register = (req, res) => {
  const { name, lastName, email, username, password } = req.body;

  // checking if username or pwd already exist
  const existingUsers = readUsersFile();
  const isUserExist = existingUsers.some(user => user.username === username);
  if (isUserExist) {
    return res.status(400).json({ message: 'User arleady exists' });
  }

  // hashing
  bcrypt.hash(password, 10, (err, hash) => {
    if (err) {
      return res.status(500).json({ message: 'Internal Server Error' });
    }

    const newUser = {
      id: existingUsers.length + 1,
      name,
      lastName,
      email,
      username,
      password: hash
    };

    // saving new user to the JSON file
    existingUsers.push(newUser);
    writeUsersFile(existingUsers);

    res.json({ message: 'Registered' });
  });
};

const login = (req, res) => {
  const { username, password } = req.body;

  const existingUsers = readUsersFile();
  const user = existingUsers.find(u => u.username === username);

  if (!user) {
    return res.status(400).json({ message: 'Error with username' });
  }

  // comparing hashed pwds
  bcrypt.compare(password, user.password, (err, result) => {
    if (err || !result) {
      return res.status(400).json({ message: 'Error with password' });
    }

    res.json({ message: 'Logged in' });
  });
};

const getUsers = (req, res) => {
  const existingUsers = readUsersFile();
  res.json(existingUsers);
};

const getUserById = (req, res) => {
  const userId = parseInt(req.params.id);
  const existingUsers = readUsersFile();
  const user = existingUsers.find(u => u.id === userId);

  if (user) {
    res.json(user);
  } else {
    res.status(404).json({ message: 'User not found' });
  }
};

const updateUserById = (req, res) => {
  const userId = parseInt(req.params.id);
  const { name, lastName, email } = req.body;

  const existingUsers = readUsersFile();
  const userIndex = existingUsers.findIndex(u => u.id === userId);

  if (userIndex !== -1) {
    // updating user info
    existingUsers[userIndex] = {
      ...existingUsers[userIndex],
      name,
      lastName,
      email
    };

    writeUsersFile(existingUsers);

    res.json({ message: 'User updated successfully' });
  } else {
    res.status(404).json({ message: 'User not found' });
  }
};

module.exports = { register, login, getUsers, getUserById, updateUserById };
