import React, { useEffect } from 'react';
import Blockly from 'blockly';
import 'blockly/blocks';
import './style.css';

// Register custom block types
Blockly.Blocks['type_integer'] = {
  init: function () {
    this.appendDummyInput().appendField(new Blockly.FieldNumber(0), 'NAME');
    this.setOutput(true, 'Number');
    this.setColour(230);
    this.setTooltip('This is a custom integer block');
    this.setHelpUrl('');
  },
};
Blockly.Blocks['create_text_with'] = {
  init: function () {
    this.appendValueInput('ITEM1')
      .setCheck(null)
      .appendField('create text with');
    this.appendValueInput('ITEM2')
      .setCheck(null)
      .appendField('and');
    this.setInputsInline(true);
    this.setOutput(true, 'String');
    this.setColour(160);
    this.setTooltip('Concatenate text with items');
    this.setHelpUrl('');
  },
};

Blockly.Blocks['to_item_append_text'] = {
  init: function () {
    this.appendDummyInput()
      .appendField('to');
    this.appendValueInput('ITEM')
      .setCheck(['String', 'Variable']) // Allowed here either String or Variable
    this.appendValueInput('TEXT')
      .setCheck('String')
      .appendField('append');
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(160);
    this.setTooltip('Append text to item');
    this.setHelpUrl('');
  },
};
Blockly.Blocks['text_is_empty']={
init:function(){
  this.appendValueInput('text')
    .setCheck('String')
    .appendField('is empty');
  this.setOutput(true,'Boolean');
  this.setColour(160);
  this.setTooltip('Check if the there is a text or empty Strign')
  this.setHelpUrl('')
}
}

const Puzzle = () => {
  useEffect(() => {
    const toolbox = document.getElementById('toolbox');
    if (!toolbox) {
      console.error('Toolbox not found!');
      return;
    }

    const workspace = Blockly.inject('blocklyDiv', {
      toolbox,
    });

    if (!workspace) {
      console.error('Blockly workspace not initialized!');
      return;
    }

    const block = workspace.newBlock('text_print');
    block.initSvg();
    block.render();

    // Cleanup function to dispose of the workspace when the component unmounts
    return () => {
      console.log('Cleaning up Blockly workspace...');
      workspace.dispose();
    };
  }, []);

  return (
    <div className='puzzle-container'>
      <xml id='toolbox' style={{ display: 'none' }}>
        <category name="Text" colour="#2196F3">
          <block type="text_print"></block>
          <block type='text'></block>
          {/* <block type='type_integer'></block>  */}
          <block type='create_text_with'></block>
          <block type='to_item_append_text'></block>
          <block type='text_is_empty'></block>
        </category>
      </xml>

      <div id='blocklyDiv' className="playground" style={{ height: '600px', width: '900px' }}></div>
    </div>
  );
};

export default Puzzle;
