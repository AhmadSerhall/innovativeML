import React from 'react'
import Blockly from 'blockly';
import { useEffect } from 'react';
const Loops = () => {
    Blockly.Blocks['repeat_times_do'] = {
        init: function () {
          this.appendValueInput('TIMES')
            .setCheck('Number')
            .appendField('repeat');
          this.appendStatementInput('DO')
            .setCheck(null)
            .appendField('do');
          this.setPreviousStatement(true, null);
          this.setNextStatement(true, null);
          this.setColour(120);
          this.setTooltip('Repeat a block of code a certain number of times');
          this.setHelpUrl('');
        },
      };
  return (
    <div>
      
    </div>
  )
}

export default Loops
