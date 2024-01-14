import React, { useEffect } from 'react';
import Blockly from 'blockly';
import 'blockly/blocks';
// import 'blockly/themes/classic';

const Puzzle = () => {
  useEffect(() => {
    const toolbox = document.getElementById('toolbox');
    const blocklyDiv = document.getElementById('blocklyDiv');

    // Cleanup Blockly workspace if it already exists
    if (blocklyDiv && blocklyDiv.firstChild) {
      blocklyDiv.removeChild(blocklyDiv.firstChild);
    }

    // Check if Blockly containers are already initialized
    if (!toolbox && !blocklyDiv) {
      // Initialize Blockly
      const workspace = Blockly.inject(blocklyDiv, {
        toolbox: toolbox,
      });

      // Create and render a block in the workspace
      const block = workspace.newBlock('text_print');
      block.initSvg();
      block.render();
    }

    // Cleanup Blockly workspace on component unmount
    return () => {
      if (blocklyDiv) {
        blocklyDiv.removeChild(blocklyDiv.firstChild);
      }
    };
  }, []);

  return (
    <div className='puzzle-container'>
      <xml id='toolbox' style={{ display: 'none' }}>
        <block type='text'></block>
      </xml>
      <div id='blocklyDiv' style={{ height: '480px', width: '600px' }}></div>
    </div>
  );
};

export default Puzzle;
