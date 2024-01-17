import React from 'react';
import Blockly from 'blockly';
import { useEffect } from 'react';

Blockly.Blocks['do_if'] = {
  init: function() {
    this.jsonInit({
      "message0": "do if %1",
      "args0": [
        {
          "type": "input_value",
          "name": "CONDITION",
          "check": "Boolean"
        }
      ],
      "colour": "#5BA58C",
      "previousStatement": null,
      "nextStatement": null,
      "tooltip": "Perform an action if a condition is true.",
      "helpUrl": ""
    });
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