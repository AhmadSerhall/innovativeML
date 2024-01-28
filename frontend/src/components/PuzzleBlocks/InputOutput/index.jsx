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
      this.generatePythonCode = function (block) {
        const textBlock = block.getInputTargetBlock('TEXT');
        const textCode = textBlock ? textBlock.generatePythonCode() : '';

        const endCharacter = block.getFieldValue('END');

        return `print(${textCode}, end='${endCharacter}')`;
    };
    },
  };
  Blockly.Blocks['input'] = {
    init: function () {
      this.appendDummyInput()
        .appendField('Input');
      this.setOutput(true, null);
      this.setColour('#333');
      this.setTooltip('Reads input from the user.');
      this.setHelpUrl('');
      
      this.generatePythonCode = function (block) {
        return `input('')`;
    };
    },
  };
const InputOutput = () => {
    useEffect(() => {
        const block = new Blockly.Block('print');
        block.initSvg();
        block.render();
      }, []);
      useEffect(() => {
        const block = new Blockly.Block('input');
        block.initSvg();
        block.render();
      }, []);
  return (
    <div>
        <div id="print" style={{ display: 'none' }}></div>
        <div id="input" style={{ display: 'none' }}></div>
    </div>
  )
}
export default InputOutput
