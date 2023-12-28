const express = require('express');
const { getAllUsers, deleteUser } = require('../controllers/admin.controller');
const { authMiddleware } = require('../middlewares/auth.middleware');
const router = express.Router();

router.get('/users', authMiddleware, getAllUsers);
router.delete('/users/:id', authMiddleware, deleteUser);

module.exports = router;
