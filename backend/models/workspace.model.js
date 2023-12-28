const mongoose = require('mongoose');

const workspaceSchema = new mongoose.Schema({
  workspace_data: {
    type: {
      type: String,
      required: true,
      enum: ['workspace'],
    },
    blocks: [
      {
        id: String,
        type: String,
        position: {
          x: Number,
          y: Number,
        },
        properties: {
          name: String,
          value: Number,
        },
        inputs: {
          A: String,
          B: String,
        },
      },
    ],
  },
  user_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User', 
    required: true,
  },
});

const Workspace = mongoose.model('Workspace', workspaceSchema);

module.exports = Workspace;
