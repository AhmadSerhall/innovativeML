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

const Logic = () => {
  useEffect(() => {
    const block = new Blockly.Block('do_if');
    block.initSvg();
    block.render();
  }, []);

  return (
    <div id="doIfBlock" style={{ display: 'none' }}>
      {/* Inject the block into the page */}
    </div>
  );
};

export default Logic;