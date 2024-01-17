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
Blockly.Blocks['math_operations']={
    "kind": "block",
    "type": "logic_compare",
    "message0": "%1 %2 %3",
    "args0": [
    {
        "type": "input_value",
        "name": "A",
        "check": "Number"
    },
    {
        "type": "field_dropdown",
        "name": "OP",
        "options": [
            [">", "GT"],
            ["=", "EQ"],
            ["<", "LT"],
            ["<=", "LTE"],
            [">=", "GTE"]
    ]
    },
    {
        "type": "input_value",
        "name": "B",
        "check": "Number"
    }
],
    "previousStatement": null,
    "nextStatement": null,
    "colour": 210
}
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


  return (
    <div>
    <div id="doIfBlock" style={{ display: 'none' }}>
      {/* Inject the block into the page */}
    </div>
    <div id="math_operations" style={{ display: 'none' }}>
      {/* Inject the block into the page */}
    </div>
    <div id="logic_connector" style={{ display: 'none' }}></div>
    
    </div>
    
    
  );
};

export default Logic;