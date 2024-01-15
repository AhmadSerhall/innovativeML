import React, { useEffect } from 'react';
import Blockly from 'blockly';
import 'blockly/blocks';
import './style.css';

const Puzzle = () => {
  useEffect(() => {
    // Load the toolbox once when the component mounts
    const toolbox = document.getElementById('toolbox');
    const workspace = Blockly.inject('blocklyDiv', {
      toolbox,
    });

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
