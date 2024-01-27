import React from 'react';
import Blockly from 'blockly';
import { useEffect } from 'react';

Blockly.Blocks['do_if'] = {
    init: function() {
        this.appendValueInput("CONDITION")
            .setCheck("Boolean")
            .appendField(" if");

        this.appendStatementInput("DO")
            .setCheck(null)
            .appendField("do");

        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour("#FF9933");
        this.generatePythonCode = function(block) {
            const conditionBlock = block.getInput('CONDITION').connection.targetBlock();
            const conditionValue = conditionBlock ? conditionBlock.getFieldValue('TEXT') || "''" : '';
            const condition = conditionValue ? conditionValue : 'False';
      
            const doBlock = block.getInput('DO').connection.targetBlock();
            const doValue = doBlock ? doBlock.getFieldValue('TEXT') || "''" : '';
            const doStatements = doValue ? `${doValue}\n` : '';
      
            return `if ${condition}:\n  ${doStatements}`;
          };
    }
};

Blockly.Blocks['do_if_else_if'] = {
    init: function() {
        this.appendValueInput("CONDITION")
            .setCheck("Boolean")
            .appendField("else if");

        this.appendStatementInput("DO")
            .setCheck(null)
            .appendField("do");

        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour("#FF9933");
        this.generatePythonCode = function(block) {
            const conditionBlock = block.getInput('CONDITION').connection.targetBlock();
            const conditionValue = conditionBlock ? conditionBlock.getFieldValue('TEXT') || "''" : '';
            const condition = conditionValue ? conditionValue : 'False';
      
            const doBlock = block.getInput('DO').connection.targetBlock();
            const doValue = doBlock ? doBlock.getFieldValue('TEXT') || "''" : '';
            const doStatements = doValue ? `${doValue}\n` : '';
      
            return `elif ${condition}:\n  ${doStatements}`;
          };
    }
};


Blockly.Blocks['do_if_else'] = {
    init: function() {
        this.appendStatementInput("DO")
            .setCheck(null)
            .appendField("else");

        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour("#FF9933");
        this.generatePythonCode = function(block) {
            const doBlock = block.getInput('DO').connection.targetBlock();
            const doValue = doBlock ? doBlock.getFieldValue('TEXT') || "''" : '';
            const doStatements = doValue ? `${doValue}\n` : '';
      
            return `else:\n  ${doStatements}`;
          };
    }
};
  
Blockly.Blocks['logic_comparison'] = {
    init: function () {
      this.appendValueInput("LEFT")
          .setCheck("Number");
      this.appendDummyInput()
          .appendField(new Blockly.FieldDropdown([
              ["=", "EQUAL"],
              ["≠", "DIFFERENT"],
              ["<", "SMALLER"],
              ["≤", "SMALLER_OR_EQUAL"],
              [">", "GREATER"],
              ["≥", "GREATER_OR_EQUAL"],
          ]), "OPERATOR");
      this.appendValueInput("RIGHT")
          .setCheck("Number");
      this.setPreviousStatement(true, null);
      this.setNextStatement(false, null);
      this.setOutput(true, 'Boolean');
      this.setColour("#FF9933");
      this.setTooltip("Perform a logic comparison");
      this.setHelpUrl("");
      
      this.generatePythonCode = function(block) {
        const leftBlock = block.getInput('LEFT').connection.targetBlock();
        const rightBlock = block.getInput('RIGHT').connection.targetBlock();
        const leftValue = leftBlock ? leftBlock.generatePythonCode() : "0";
        const rightValue = rightBlock ? rightBlock.generatePythonCode() : "0";
        const operator = block.getFieldValue('OPERATOR');
        
        return `${leftValue} ${operator} ${rightValue}`;
      };
    }
  };
  
Blockly.Blocks['logic_not'] = {
    init: function () {
        this.appendDummyInput()
            .appendField("not");
        this.appendValueInput("VALUE")
            .setCheck("Boolean")
        this.setOutput(true, "Boolean");
        this.setColour("#FF9933");
        this.setTooltip("Negate a Boolean value");
        this.setHelpUrl("");
        this.generatePythonCode = function(block) {
            const valueBlock = block.getInput('VALUE').connection.targetBlock();
            const value = valueBlock ? valueBlock.generatePythonCode() : 'False';
            return `not ${value}`;
          };
    }
};
Blockly.Blocks['logic_connector'] = {
    init: function () {
        this.appendValueInput("LEFT")
            .setCheck(null)
        this.appendDummyInput()
            .appendField(new Blockly.FieldDropdown([["and", "AND"], ["or", "OR"]]), "OPERATOR");
        this.appendValueInput("RIGHT")
            .setCheck(null);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour("#FF9933");
        this.setTooltip("Combine two conditions using 'And' or 'Or'");
        this.setHelpUrl("");
    }
};
Blockly.Blocks['true_false'] = {
    init: function () {
        this.appendDummyInput()
            .appendField(new Blockly.FieldDropdown([["true", "TRUE"], ["false", "FALSE"]]), "BOOL");
        this.setOutput(true, "Boolean");
        this.setColour('#FF9933')
        this.setTooltip("Select true or false");
        this.setHelpUrl("");
        this.setPreviousStatement(null);
        this.setNextStatement(null);
        // this.setStyle('logic_blocks'); 
    }
};
Blockly.Blocks['null_block'] = {
    init: function () {
        this.appendDummyInput()
            .appendField("null");
        this.setOutput(true, null);
        this.setColour("#FF9933"); 
        this.setTooltip("Represents a null value");
        this.setHelpUrl("");
    }
};
Blockly.Blocks['conditional_test_if_else'] = {
    init: function () {
        this.appendDummyInput()
            .appendField("test");
        this.appendStatementInput("IF_TRUE")
            .setCheck(null)
            .appendField("if true");
        this.appendStatementInput("IF_FALSE")
            .setCheck(null)
            .appendField("if false");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour("#FF9933"); 
        this.setTooltip("Conditional block with test, if true, and if false branches");
        this.setHelpUrl("");
    }
};
const Logic = () => {
  useEffect(() => {
    const block = new Blockly.Block('do_if');
    block.initSvg();
    block.render();
  }, []);
  useEffect(() => {
    const block = new Blockly.Block('do_if_else_if');
    block.initSvg();
    block.render();
  }, []);
  useEffect(() => {
    const block = new Blockly.Block('do_if_else');
    block.initSvg();
    block.render();
  }, []);
  useEffect(() => {
    const block = new Blockly.Block('logic_comparison');
    block.initSvg();
    block.render();
  }, []);
  useEffect(() => {
    const block = new Blockly.Block('logic_connector');
    block.initSvg();
    block.render();
  }, []);
  useEffect(() => {
    const block = new Blockly.Block('logic_not');
    block.initSvg();
    block.render();
  }, []);
  useEffect(() => {
    const block = new Blockly.Block('true_false');
    block.initSvg();
    block.render();
  }, []);
  useEffect(() => {
    const block = new Blockly.Block('null_block');
    block.initSvg();
    block.render();
  }, []);
  useEffect(() => {
    const block = new Blockly.Block('conditional_test_if_else');
    block.initSvg();
    block.render();
  }, []);

  return (
    <div>
    <div id="doIfBlock" style={{ display: 'none' }}>
    </div>
    <div id="math_operations" style={{ display: 'none' }}>
    </div>
    <div id="logic_connector" style={{ display: 'none' }}></div>
    <div id="logic_not" style={{ display: 'none' }}></div>
    <div id="true_false" style={{ display: 'none' }}></div>
    <div id="null_block" style={{ display: 'none' }}></div>
    <div id="conditional_test_if_else" style={{ display: 'none' }}></div>
    </div>
  );
};
export default Logic;