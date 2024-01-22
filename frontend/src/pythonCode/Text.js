// import * as Blockly from 'blockly/core';
// import 'blockly/blocks';
// import 'blockly/python';

// function initializePythonBlocks() {
//   Blockly.Python = Blockly.Python || {};
// }

// initializePythonBlocks();

// Blockly.Blocks['text_print'] = {
//   init: function() {
//     this.appendValueInput('TEXT')
//       .setCheck('String')  // Set the check type to String
//       .appendField('print');

//     this.setInputsInline(true);
//     this.setPreviousStatement(true, null);
//     this.setNextStatement(true, null);
//     this.setColour('#2196F3');
//     this.setTooltip('Prints the specified text');
//   },

//   // Define the toPython method outside the init method
//   toPython: function () {
//     const textValue = Blockly.Python.valueToCode(this, 'TEXT', Blockly.Python.ORDER_ATOMIC) || "''";
//     return `print(${textValue})\n`;
//   },
// };

// export default Blockly.Blocks['text_print'];

import * as Blockly from 'blockly/core';
import 'blockly/blocks';
import 'blockly/python';

Blockly.Blocks['text_print'] = {
  init: function () {
    this.appendValueInput('TEXT')
      .setCheck('String')
      .appendField('print');

    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour('#2196F3');
    this.setTooltip('Prints the specified text');
  },
  
  toPython: function (block) {
      const textValue = Blockly.Python.valueToCode(block, 'TEXT', Blockly.Python.ORDER_ATOMIC) || "''";
      const pythonCode = `print(${textValue})\n`;
      return pythonCode;
    },
  };
  // Blockly.Python['text_print'] = function(block) {
  //   var msg = Blockly.Python.valueToCode(block, 'TEXT',
  //       Blockly.Python.ORDER_NONE) || '\'\'';
  //   return 'print(' + msg + ')\n';
  // };

// Optionally, you can export the block directly
// export { Blockly };
