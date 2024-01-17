import React from 'react'
import Blockly from 'blockly';
import { useEffect } from 'react';
const {FieldVariableButton} = Blockly;

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
        .appendField("count with")
        .appendField(new Blockly.FieldVariable("count"), "VAR");
      this.appendValueInput("FROM")
        .setCheck("Number")
        .appendField("from");
      this.appendValueInput("TO")
        .setCheck("Number")
        .appendField("to");
      this.appendValueInput("BY")
        .setCheck("Number")
        .appendField("by");
      this.appendStatementInput("DO")
        .setCheck(null)
        .appendField("do");
      this.setInputsInline(true);
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(120);
      this.setTooltip("Count with a variable from one number to another by a specified increment");
      this.setHelpUrl("");
    }
  };
  Blockly.Blocks['for_each_item_in_list'] = {
    init: function () {
      this.appendDummyInput()
        .appendField("for each item in")
        .appendField(new Blockly.FieldVariable("list"), "LIST");
      this.appendStatementInput("DO")
        .setCheck(null)
        .appendField("do");
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(120);
      this.setTooltip("For each item in a list, do the specified action");
      this.setHelpUrl("");
    }
  };
  Blockly.Blocks['loop_control'] = {
    init: function () {
      this.appendDummyInput()
        .appendField(new Blockly.FieldDropdown([
          ["break out", "BREAK"],
          ["continue with next iteration", "CONTINUE"]
        ]), "CONTROL");
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(120);
      this.setTooltip("Control the flow of the loop: break out or continue with the next iteration");
      this.setHelpUrl("");
    }
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
    useEffect(() => {
        const block = new Blockly.Block('count_with');
        block.initSvg();
        block.render();
      }, []);
      useEffect(() => {
        const block = new Blockly.Block('for_each_item_in_list');
        block.initSvg();
        block.render();
      }, []);
      useEffect(() => {
        const block = new Blockly.Block('loop_control');
        block.initSvg();
        block.render();
      }, []);
  return (
    <div>
        <div id="repeat_times_do" style={{ display: 'none' }}></div>
        <div id="repeat_while_until_do" style={{ display: 'none' }}></div>
        <div id="count_with" style={{ display: 'none' }}></div>
        <div id="for_each_item_in_list" style={{ display: 'none' }}></div>
        <div id="loop_control" style={{ display: 'none' }}></div>

    </div>
  )
}

export default Loops
