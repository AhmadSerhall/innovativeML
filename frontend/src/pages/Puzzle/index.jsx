import React, { useEffect } from 'react';
import Blockly from 'blockly';
import 'blockly/blocks';
import './style.css';

// Register custom block types
const initializeBlockly=()=>{
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

  //Variable section where the blocks that are related to the variable will be initialized
  Blockly.Blocks['create_variable'] = {
    init: function () {
      this.appendDummyInput()
        .appendField('create variable')
        .appendField(new Blockly.FieldTextInput(''), 'VAR_NAME');
      this.setOutput(true, 'Variable');
      this.setColour(330);
      this.setTooltip('Create a new Variable');
      this.setHelpUrl('');
      this.setDeletable(false);
  
      // Set the onchange event to a separate function
      this.setOnChange(this.handleVariableChange.bind(this));
    },
  
    handleVariableChange: function (changeEvent) {
      if (changeEvent.type === Blockly.Events.BLOCK_CHANGE && changeEvent.element === 'field' &&
          changeEvent.name === 'VAR_NAME') {
        // Trigger a prompt to ask for the variable name
        const newVarName = prompt('Enter variable name:');
        if (newVarName !== null) { // Check if the user pressed Cancel
          // Create a new block of type text with the entered variable name
          const textBlock = this.workspace.newBlock('text');
          textBlock.setFieldValue(newVarName, 'TEXT');
          // Add the new block below the create variable block
          const nextBlock = this.getNextBlock();
          if (nextBlock) {
            this.workspace.connection.disconnect(nextBlock.previousConnection);
            textBlock.previousConnection.connect(this.nextConnection);
            nextBlock.previousConnection.connect(textBlock.nextConnection);
          } else {
            this.workspace.addTopBlock(textBlock);
          }
        }
      }
    },
  };
  
  Blockly.JavaScript['create_variable'] = function (block) {
    const varName = block.getFieldValue('VAR_NAME');
    return [varName, Blockly.JavaScript.ORDER_ATOMIC];
  };
}
  
const Puzzle = () => {
  useEffect(() => {
    const toolbox = document.getElementById('toolbox');
    if (!toolbox) {
      console.error('Toolbox not found!');
      return;
    }
    Blockly.ready(initializeBlockly);

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
        <category name="Variable" colour="#218762">
        <block type="create_variable"></block>
        </category>
      </xml>

      <div id='blocklyDiv' className="playground" style={{ height: '600px', width: '900px' }}></div>
    </div>
  );
};

export default Puzzle;
