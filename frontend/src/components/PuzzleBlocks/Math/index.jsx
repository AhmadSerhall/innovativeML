import React from 'react'
import Blockly from 'blockly';
import { useEffect } from 'react';

Blockly.Blocks['math_operations'] = {
    init: function () {
      this.appendValueInput("LEFT")
        .setCheck("Number")
        .appendField("");
      this.appendDummyInput()
        .appendField(new Blockly.FieldDropdown([
          ["+", "ADD"],
          ["-", "SUBTRACT"],
          ["*", "MULTIPLY"],
          ["/", "DIVIDE"]
        ]), "OPERATOR");
      this.appendValueInput("RIGHT")
        .setCheck("Number")
        .appendField("");
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour("#FF9933"); // Orange color for math operations
      this.setTooltip("Perform a math operation");
      this.setHelpUrl("");
    }
  };
  
const Math = () => {
    useEffect(() => {
        const block = new Blockly.Block('repeat_times_do');
        block.initSvg();
        block.render();
      }, []);
  return (
    <div>
      
    </div>
  )
}

export default Math
