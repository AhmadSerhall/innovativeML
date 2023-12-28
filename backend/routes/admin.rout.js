const express = require('express');
const { getAllUsers, deleteUser } = require('../controllers/admin.controller');
const { authMiddleware,adminMiddleware} = require('../middlewares/auth.middleware');
const router = express.Router();

router.use(authMiddleware, adminMiddleware);

router.get('/users', authMiddleware, getAllUsers);
router.delete('/users/:id', authMiddleware, deleteUser);

module.exports = router;
