// file for defining methods to handle reqs for user-related actions
// imports
const UserModel = require('../models/userModel');
const BcryptHelper = require('../helpers/bcryptHelper');

class UserController {
    async getAllUsers(req, res) {
        const users = await UserModel.getAllUsers();
        res.json(users);
    }

    async getUserById(req, res) {
        const { id } = req.params;
        const user = await UserModel.getUserById(id);

        if (!user) {
            res.status(404),json({ message: 'User not found'});
            return;
        }

        res.json(user);
    }

    async updateUserById(req, res) {
        const { id } = req.params;
        const userData = req.body;
        const updatedUser = await UserModel.updateUserById(id, userData);
        res.json(updatedUser)
    }

    async registerUser(req, res) {
        const { email, username, first_name, last_name, password } = req.body;
        const hashedPassword = await BcryptHelper.hashPassword(password);
        const userId = await UserModel.addUser(email, username, first_name, last_name, hashedPassword);

        res.json({ userId });
    }

    async loginUser(req, res) {
        const { username, password } = req.body;
        const user = await UserModel.getUserByUsername(username);

        if (!user) {
            res.status(401).json({ message: 'Invalid username or password'});
            return;
        }

        const isPasswordValid = await BcryptHelper.comparePasswords(password, user.password);

        if (!isPasswordValid) {
            res.status(401).json({ message: 'Invalid username or password'});
            return;
        }

        res.json({ message: 'Login successful'});
    }
}

module.exports = new UserController();