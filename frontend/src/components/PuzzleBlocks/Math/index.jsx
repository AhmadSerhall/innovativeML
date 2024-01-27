import React from 'react'
import Blockly from 'blockly';
import { useEffect } from 'react';

Blockly.Blocks["type_integer"] = {
  init: function () {
    this.appendDummyInput().appendField(new Blockly.FieldNumber(0), "NAME");
    this.setOutput(true, "Number");
    this.setColour("#FFD700");
    this.setTooltip("This is a custom integer block");
    this.setHelpUrl("");
    this.generatePythonCode = function (block) {
      const value = block.getFieldValue('NAME');
      return value === '0' ? '0' : value;
  };
  },
};

Blockly.Blocks['math_operations'] = {
    init: function () {
      this.appendValueInput("LEFT")
        .setCheck("Number")
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
      this.setColour("#FFD700"); 
      this.setTooltip("Perform a math operation");
      this.setHelpUrl("");
      this.generatePythonCode = function (block) {
        const leftBlock = block.getInputTargetBlock('LEFT');
        const rightBlock = block.getInputTargetBlock('RIGHT');
        const operator = block.getFieldValue('OPERATOR');

        const leftValue = leftBlock ? leftBlock.getFieldValue('NAME') || '0' : '0';
        const rightValue = rightBlock ? rightBlock.getFieldValue('NAME') || '0' : '0';

        return `${leftValue} ${operator} ${rightValue}`;
    };    
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
      this.setColour("#FFD700");
      this.setTooltip("Apply a mathematical function to a number");
      this.setHelpUrl("");
      this.setInputsInline(true);
      this.generatePythonCode = function (block) {
        const functionValue = block.getFieldValue('FUNCTION');
        const numberBlock = block.getInputTargetBlock('NUMBER');
        const numberValue = numberBlock ? numberBlock.getFieldValue('NAME') || '0' : '0';

        switch (functionValue) {
            case 'SQRT':
                return `math.sqrt(${numberValue})`;
            case 'MODULO':
                return `${numberValue} %`;
            case 'ABS':
                return `abs(${numberValue})`;
            case 'LOG10':
                return `math.log10(${numberValue})`;
            case 'exponential':
                return `math.exp(${numberValue})`;
            case 'ten to the power':
                return `10 ** ${numberValue}`;
            default:
                return '0';
        }
    };
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
      this.setColour("#FFD700");
      this.setTooltip("Apply a mathematical function to a number");
      this.setHelpUrl("");
      this.setInputsInline(true);
      this.generatePythonCode = function (block) {
        const functionValue = block.getFieldValue('FUNCTION');
        const numberBlock = block.getInputTargetBlock('NUMBER');
        const numberValue = numberBlock ? numberBlock.getFieldValue('NAME') || '0' : '0';

        switch (functionValue) {
            case 'cosine':
                return `math.cos(math.radians(${numberValue}))`;
            case 'sine':
                return `math.sin(math.radians(${numberValue}))`;
            case 'tangent':
                return `math.tan(math.radians(${numberValue}))`;
            case 'acos':
                return `math.degrees(math.acos(${numberValue}))`;
            case 'asin':
                return `math.degrees(math.asin(${numberValue}))`;
            case 'atan':
                return `math.degrees(math.atan(${numberValue}))`;
            default:
                return '0';
        }
    };
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
      this.setColour('#FFD700');
      this.setTooltip('Check if a number has a specific property (even, odd, prime).');
      this.setHelpUrl('');
      this.setInputsInline(true);
      this.generatePythonCode = function (block) {
        const numberBlock = block.getInputTargetBlock('NUMBER');
        const numberValue = numberBlock ? numberBlock.getFieldValue('NAME') || '0' : '0';
        const propertyValue = block.getFieldValue('PROPERTY');

        switch (propertyValue) {
            case 'EVEN':
                return `(${numberValue} % 2 == 0)`;
            case 'ODD':
                return `(${numberValue} % 2 != 0)`;
            case 'PRIME':
                return `is_prime(${numberValue})`;
            case 'WHOLE':
                return `(${numberValue} % 1 == 0)`;
            case 'POSITIVE':
                return `(${numberValue} > 0)`;
            case 'NEGATIVE':
                return `(${numberValue} < 0)`;
            default:
                return 'False';
        }
    };
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
      this.setColour('#FFD700');
      this.setTooltip('Perform an operation on a list by a variable.');
      this.setHelpUrl('');
      this.setInputsInline(true);
      this.generatePythonCode = function (block) {
        const operation = block.getFieldValue('OPERATION');
        const listBlock = block.getInputTargetBlock('LIST');

        if (!listBlock) {
            return '0';
        }

        const listVariable = listBlock.getFieldValue('VAR') || '[]';

        switch (operation) {
            case 'SUM':
                return `sum(${listVariable})`;
            case 'MIN':
                return `min(${listVariable})`;
            case 'MAX':
                return `max(${listVariable})`;
            case 'AVERAGE':
                return `sum(${listVariable}) / len(${listVariable}) if len(${listVariable}) > 0 else 0`;
            case 'RANDOM_ITEM':
                return `${listVariable}[random.randint(0, len(${listVariable})-1)]`;
            default:
                return '0';
        }
    };
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
      this.setColour('#FFD700');
      this.setTooltip('Generate a random integer within the specified range.');
      this.setHelpUrl('');
      this.setInputsInline(true);
      this.generatePythonCode = function (block) {
        const fromBlock = block.getInputTargetBlock('FROM');
        const toBlock = block.getInputTargetBlock('TO');

        if (!fromBlock || !toBlock) {
            return '0';
        }

        const fromValue = fromBlock.getFieldValue('NAME') || '0';
        const toValue = toBlock.getFieldValue('NAME') || '0';

        return `random.randint(${fromValue}, ${toValue})`;
    };
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
