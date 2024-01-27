import * as Blockly from 'blockly/core';
import 'blockly/blocks';
import 'blockly/python_compressed';

// Blockly.Blocks['text_print'] = {
//   init: function () {
//     this.appendValueInput('TEXT')
//       .setCheck('String')
//       .appendField('print');

//     this.setInputsInline(true);
//     this.setPreviousStatement(true, null);
//     this.setNextStatement(true, null);
//     this.setColour('#2196F3');
//     this.setTooltip('Prints the specified text');
//   },
  
//   toPython: function (block) {
//     const textValue = Blockly.Generator.prototype.valueToCode(block, 'TEXT', Blockly.Generator.prototype.ORDER_ATOMIC) || "''";
//     const pythonCode = `print(${textValue})\n`;
//     return pythonCode;
//   },
// };


  // Blockly.Python['text_print'] = function(block) {
  //   var msg = Blockly.Python.valueToCode(block, 'TEXT',
  //       Blockly.Python.ORDER_NONE) || '\'\'';
  //   return 'print(' + msg + ')\n';
  // };

// Optionally, you can export the block directly
// export { Blockly };
