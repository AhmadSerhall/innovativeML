// Text.js
import Blockly from 'blockly';

function initializePythonBlocks() {
  Blockly.Python = Blockly.Python || {};
}

initializePythonBlocks();

Blockly.Python['text_print'] = function (block) {
  var textValue = Blockly.Python.valueToCode(block, 'TEXT', Blockly.Python.ORDER_ATOMIC) || "''";
  return `print(${textValue})\n`;
};
