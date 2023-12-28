const User = require('../models/user.model');

const getAllUsers = async (req, res) => {
  try {
    const users = await User.find();
    res.status(200).json(users);
  } catch (error) {
    console.error('Error getting all users:', error);
    res.status(500).send({ message: 'Internal server error while getting users.' });
  }
};

const deleteUser = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedUser = await User.findByIdAndDelete(id);

    if (!deletedUser) {
      return res.status(404).send({ message: 'User not found.' });
    }

    res.status(200).json({ message: 'User deleted successfully', user: deletedUser });
  } catch (error) {
    console.error('Error deleting user:', error);
    res.status(500).send({ message: 'Internal server error while deleting user.' });
  }
};

module.exports = { getAllUsers, deleteUser };
