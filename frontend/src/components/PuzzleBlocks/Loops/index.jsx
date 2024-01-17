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
  Blockly.Blocks['repeat_while_until_do'] = {
    init: function () {
      this.appendDummyInput()
        .appendField('repeat')
        .appendField(new Blockly.FieldDropdown([
          ['while', 'WHILE'],
          ['until', 'UNTIL']
        ]), 'MODE');
      this.appendValueInput('CONDITION')
        .setCheck('Boolean')
      this.appendStatementInput('DO')
        .setCheck(null)
        .appendField('do');
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(120);
      this.setTooltip('Repeat a block of code while/until a condition is true/false');
      this.setHelpUrl('');
    },
  };
  Blockly.Blocks['count_with'] = {
    init: function () {
      this.appendDummyInput()
        .appendField('count with');
      this.appendValueInput('VAR')
        .setCheck('Variable')
        .appendField('from');
      this.appendValueInput('FROM')
        .setCheck('Number')
        .appendField('to');
      this.appendValueInput('TO')
        .setCheck('Number')
        .appendField('by');
      this.appendValueInput('BY')
        .setCheck('Number');
      this.appendStatementInput('DO')
        .setCheck(null)
        .appendField('do');
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(120);
      this.setTooltip('Count with a variable from one number to another by a specified increment');
      this.setHelpUrl('');
    },
  };
  
const Loops = () => {
    useEffect(() => {
        const block = new Blockly.Block('repeat_times_do');
        block.initSvg();
        block.render();
      }, []);

    useEffect(() => {
    const block = new Blockly.Block('repeat_while_until_do');
        block.initSvg();
        block.render();
    }, []);
  return (
    <div>
        <div id="repeat_times_do" style={{ display: 'none' }}></div>
        <div id="repeat_while_until_do" style={{ display: 'none' }}></div>
    </div>
  )
}

export default Loops
