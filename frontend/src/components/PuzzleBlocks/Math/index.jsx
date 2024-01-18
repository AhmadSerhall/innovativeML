import React from 'react'
import Blockly from 'blockly';
import { useEffect } from 'react';

Blockly.Blocks['math_operations'] = {
    init: function () {
      this.appendValueInput("LEFT")
        .setCheck("Number")
        .appendField("1");
      this.appendDummyInput()
        .appendField(new Blockly.FieldDropdown([
          ["+", "ADD"],
          ["-", "SUBTRACT"],
          ["*", "MULTIPLY"],
          ["/", "DIVIDE"],
          ["%","MODULO"]
        ]), "OPERATOR");
      this.appendValueInput("RIGHT")
        .setCheck("Number")
        .appendField("");
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour("#FF9933"); 
      this.setTooltip("Perform a math operation");
      this.setHelpUrl("");
    }
  };
  Blockly.Blocks['math_functions'] = {
    init: function () {
      this.appendDummyInput()
        .appendField(new Blockly.FieldDropdown([
          ["square root", "SQRT"],
          ["modulo", "MODULO"],
          ["absolute", "ABS"],
          ["log10", "LOG10"],
          ["e^","exponential"],
          ["10^" ,"ten to the power"]
        ]), "FUNCTION");
  
      this.appendValueInput("NUMBER")
        .setCheck("Number")
  
      this.setOutput(true, "Number");
      this.setColour("#FF9933");
      this.setTooltip("Apply a mathematical function to a number");
      this.setHelpUrl("");
      this.setInputsInline(true);
    }
  };
  Blockly.Blocks['math_trigo'] = {
    init: function () {
      this.appendDummyInput()
        .appendField(new Blockly.FieldDropdown([
          ["cos", "cosine"],
          ["sin", "sine"],
          ["tan", "tangente"],
          ["acos", "acos"],
          ["asin", "asin"],
          ["atan", "atan"]
        ]), "FUNCTION");
  
      this.appendValueInput("NUMBER")
        .setCheck("Number");
  
      this.setOutput(true, "Number");
      this.setColour("#FF9933");
      this.setTooltip("Apply a mathematical function to a number");
      this.setHelpUrl("");
      this.setInputsInline(true);
    }
  };
  Blockly.Blocks['check_number_property'] = {
    init: function () {
      this.appendValueInput('NUMBER')
        .setCheck('Number')
        .appendField('number');
      
      this.appendDummyInput()
        .appendField('is');
  
      this.appendDummyInput()
        .appendField(new Blockly.FieldDropdown([
          ['even', 'EVEN'],
          ['odd', 'ODD'],
          ['prime', 'PRIME'],
          ['whole', 'PRIME'],
          ['positive', 'PRIME'],
          ['negative', 'PRIME'],
        ]), 'PROPERTY');
  
      this.setOutput(true, 'Boolean');
      this.setColour('#4C97FF');
      this.setTooltip('Check if a number has a specific property (even, odd, prime).');
      this.setHelpUrl('');
      this.setInputsInline(true);
    }
  };
  Blockly.Blocks['list_operations'] = {
    init: function () {
      this.appendDummyInput()
        .appendField(new Blockly.FieldDropdown([
          ['sum', 'SUM'],
          ['min', 'MIN'],
          ['max', 'MAX'],
          ['average', 'AVERAGE'],
          ['random item', 'RANDOM_ITEM']
        ]), 'OPERATION');
      
      this.appendValueInput('LIST')
        .setCheck('Array')
        .appendField('of list');
  
      this.setOutput(true, 'Number');
      this.setColour('#4C97FF');
      this.setTooltip('Perform an operation on a list by a variable.');
      this.setHelpUrl('');
      this.setInputsInline(true);
    }
  };
  Blockly.Blocks['random_integer'] = {
    init: function () {
      this.appendDummyInput()
        .appendField('random integer from');
      
      this.appendValueInput('FROM')
        .setCheck('Number');
      
      this.appendDummyInput()
        .appendField('to');
      
      this.appendValueInput('TO')
        .setCheck('Number');
  
      this.setOutput(true, 'Number');
      this.setColour('#FF9933');
      this.setTooltip('Generate a random integer within the specified range.');
      this.setHelpUrl('');
      this.setInputsInline(true);
    }
  };

const Math = () => {
    useEffect(() => {
        const block = new Blockly.Block('repeat_times_do');
        block.initSvg();
        block.render();
      }, []);
      useEffect(() => {
        const block = new Blockly.Block('math_functions');
        block.initSvg();
        block.render();
      }, []);
      useEffect(() => {
        const block = new Blockly.Block('math_trigo');
        block.initSvg();
        block.render();
      }, []);
      useEffect(() => {
        const block = new Blockly.Block('check_number_property');
        block.initSvg();
        block.render();
      }, []);
      useEffect(() => {
        const block = new Blockly.Block('list_operations');
        block.initSvg();
        block.render();
      }, []);
      useEffect(() => {
        const block = new Blockly.Block('random_integer');
        block.initSvg();
        block.render();
      }, []);
  return (
    <div>
      <div id="math_operations " style={{ display: 'none' }}></div>
      <div id="math_functions " style={{ display: 'none' }}></div>
      <div id="math_trigo " style={{ display: 'none' }}></div>
      <div id="check_number_property " style={{ display: 'none' }}></div>
      <div id="list_operations " style={{ display: 'none' }}></div>
      <div id="random_integer " style={{ display: 'none' }}></div>

    </div>
  )
}

export default Math
