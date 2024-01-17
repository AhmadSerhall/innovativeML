import React from 'react';
import Blockly from 'blockly';
import { useEffect } from 'react';

Blockly.Blocks['do_if'] = {
    init: function() {
       this.appendDummyInput()
           .appendField("if");
       this.appendValueInput("CONDITION")
           .setCheck("Boolean")           
       this.appendStatementInput("DO")
           .setCheck(null)
           .appendField("do");
       this.setPreviousStatement(true, null);
       this.setNextStatement(true, null);
       this.setColour("#5BA58C");
       this.setTooltip("Perform an action if a condition is true.");
       this.setHelpUrl("");
    }
};
Blockly.Blocks['math_operations'] = {
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
        this.setNextStatement(true, null);
        this.setColour("#FF9933"); // Orange color for math operations
        this.setTooltip("Perform a math operation");
        this.setHelpUrl("");
    }
};

Blockly.Blocks['logic_not'] = {
    init: function () {
        this.appendDummyInput()
            .appendField("not");
        this.appendValueInput("VALUE")
            .setCheck("Boolean")
        this.setOutput(true, "Boolean");
        this.setColour("#FF6666");
        this.setTooltip("Negate a Boolean value");
        this.setHelpUrl("");
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
        this.setColour("#5BA58C");
        this.setTooltip("Combine two conditions using 'And' or 'Or'");
        this.setHelpUrl("");
    }
};
Blockly.Blocks['true_false'] = {
    init: function () {
        this.appendDummyInput()
            .appendField(new Blockly.FieldDropdown([["true", "TRUE"], ["false", "FALSE"]]), "BOOL");
        this.setOutput(true, "Boolean");
        this.setColour("#6699FF"); 
        this.setTooltip("Select true or false");
        this.setHelpUrl("");
        this.setPreviousStatement(null);
        this.setNextStatement(null);
        this.setStyle('logic_blocks'); // Adjust the style to control appearance
    }
};
Blockly.Blocks['null_block'] = {
    init: function () {
        this.appendDummyInput()
            .appendField("null");
        this.setOutput(true, null);
        this.setColour("#808080"); // Gray color for null block
        this.setTooltip("Represents a null value");
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
    const block = new Blockly.Block('math_operations');
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

  return (
    <div>
    <div id="doIfBlock" style={{ display: 'none' }}>
      {/* Inject the block into the page */}
    </div>
    <div id="math_operations" style={{ display: 'none' }}>
      {/* Inject the block into the page */}
    </div>
    <div id="logic_connector" style={{ display: 'none' }}></div>
    <div id="logic_not" style={{ display: 'none' }}></div>
    <div id="true_false" style={{ display: 'none' }}></div>

    </div>
    
    
  );
};

export default Logic;