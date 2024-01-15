import React, { useEffect } from 'react';
import Blockly from 'blockly';
import 'blockly/blocks';
// import './style.css';

const Puzzle = () => {
  useEffect(() => {
    console.log('Initializing Blockly...');
    const toolbox = document.getElementById('toolbox');
    if (!toolbox) {
      console.error('Toolbox not found!');
      return;
    }
  
    const workspace = Blockly.inject('blocklyDiv', {
      toolbox,
    });
  
    if (!workspace) {
      console.error('Blockly workspace not initialized!');
      return;
    }
  
    console.log('Blockly initialized:', workspace);
  
    const block = workspace.newBlock('text_print');
    block.initSvg();
    block.render();
  }, []);
  

  return (
    <div>
      <xml id='toolbox' style={{ display: 'none' }}>
        <block type='text'></block>
      </xml>


      <div id='blocklyDiv' style={{ height: '480px', width: '600px' }}></div>
    </div>
  );
};

export default Puzzle;
