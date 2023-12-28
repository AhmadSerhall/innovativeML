const Workspace = require('../models/workspace.model');

const createWorkspace = async (req, res) => {
  try {
    console.log('Received data:', req.body);
    const { workspace_data } = req.body;
    const { _id: user_id } = req.user;

    const workspace = await Workspace.create({ workspace_data, user_id });
    
    res.status(201).json({ message: 'Workspace created successfully', workspace });
  } catch (error) {
    console.error('Error creating workspace:', error);
    res.status(500).json({ message: 'Internal server error while creating workspace' });
  }
};

const getWorkspacesByUser = async (req, res) => {
  try {
    const { _id: user_id } = req.user;

    const workspaces = await Workspace.find({ user_id });
    
    res.status(200).json({ workspaces });
  } catch (error) {
    console.error('Error retrieving workspaces:', error);
    res.status(500).json({ message: 'Internal server error while retrieving workspaces' });
  }
};

const updateWorkspace = async (req, res) => {
  try {
    const { id } = req.params;
    const { workspace_data } = req.body;
    const { _id: user_id } = req.user; 

    const updatedWorkspace = await Workspace.findOneAndUpdate(
      { _id: id, user_id },
      { workspace_data },
      { new: true, runValidators: true }
    );

    if (!updatedWorkspace) {
      return res.status(404).json({ message: 'Workspace not found.' });
    }

    res.status(200).json({ message: 'Workspace updated successfully', workspace: updatedWorkspace });
  } catch (error) {
    console.error('Error updating workspace:', error);
    res.status(500).json({ message: 'Internal server error while updating workspace' });
  }
};

const deleteWorkspace = async (req, res) => {
  try {
    const { id } = req.params;
    const { _id: user_id } = req.user;

    const deletedWorkspace = await Workspace.findOneAndDelete({ _id: id, user_id });

    if (!deletedWorkspace) {
      return res.status(404).json({ message: 'Workspace not found.' });
    }

    res.status(200).json({ message: 'Workspace deleted successfully', workspace: deletedWorkspace });
  } catch (error) {
    console.error('Error deleting workspace:', error);
    res.status(500).json({ message: 'Internal server error while deleting workspace' });
  }
};

module.exports = { createWorkspace, getWorkspacesByUser, updateWorkspace, deleteWorkspace };
