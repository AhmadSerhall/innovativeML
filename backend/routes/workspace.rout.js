const express = require('express');
const router = express.Router();
const workspaceController = require('../controllers/workspace.controller');

router.post('/create', workspaceController.createWorkspace);
router.get('/get/:userId', workspaceController.getWorkspacesByUser);
router.put('/edit/:id',workspaceController.updateWorkspace);
router.delete('/delete/:id',workspaceController.deleteWorkspace);


module.exports = router;
