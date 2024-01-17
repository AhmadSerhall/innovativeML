import React from 'react'
import Blockly from 'blockly';
import { useEffect } from 'react';

Blockly.Blocks['repeat_times_do'] = {
    init: function () {
      this.appendDummyInput()
        .appendField('repeat');
      this.appendValueInput('TIMES')
        .setCheck('Number');
      this.appendDummyInput()
        .appendField('times');
      this.appendStatementInput('DO')
        .setCheck(null)
        .appendField('do');
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(120);
      this.setTooltip('Repeat a block of code a certain number of times');
      this.setHelpUrl('');
    },
  };
const Loops = () => {
    useEffect(() => {
        const block = new Blockly.Block('repeat_times_do');
        block.initSvg();
        block.render();
      }, []);
  return (
    <div>
        <div id="repeat_times_do" style={{ display: 'none' }}></div>
    </div>
  )
}

export default Loops
