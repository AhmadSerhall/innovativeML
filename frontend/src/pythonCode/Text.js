import Blockly from 'blockly';

function initializePythonBlocks() {
  Blockly.Python = Blockly.Python || {};
}

initializePythonBlocks();

Blockly.Blocks['text_print'] = {
  init: function() {
    this.appendValueInput('TEXT')
      .setCheck('String')  // Set the check type to String
      .appendField('print');

    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour('#2196F3');
    this.setTooltip('Prints the specified text');
  },

  // Define the toPython method outside the init method
  toPython: function () {
    const textValue = Blockly.Python.valueToCode(this, 'TEXT', Blockly.Python.ORDER_ATOMIC) || "''";
    return `print(${textValue})\n`;
  },
};

export default Blockly.Blocks['text_print'];
