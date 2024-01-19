import React from 'react'
import Blockly, { Block } from 'blockly/core';
import { useEffect } from 'react'

Blockly.Blocks['print'] = {
    init: function () {
      this.appendValueInput('TEXT')
        .setCheck(null)
        .appendField('Print');
      this.appendDummyInput()
        .appendField('End:')
        .appendField(new Blockly.FieldDropdown([
          ['new line', '\\n'],
          ['tab', '\\t'],
          ['space', ' '],
          ['comma', ',']
        ]), 'END');
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour('#333');
      this.setTooltip('Prints the specified text with the chosen end character.');
      this.setHelpUrl('');
    },
  };
  Blockly.Blocks['input_block'] = {
    init: function () {
      this.appendDummyInput()
        .appendField('Input');
      this.setOutput(true, null);
      this.setColour(160);
      this.setTooltip('Reads input from the user.');
      this.setHelpUrl('');
    },
  };
  
const InputOutput = () => {
    useEffect(() => {
        const block = new Blockly.Block('print');
        block.initSvg();
        block.render();
      }, []);
  return (
    <div>
        <div id="print" style={{ display: 'none' }}></div>
    </div>
  )
}

export default InputOutput
