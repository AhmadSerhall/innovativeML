import React from 'react'
import Blockly from 'blockly';
import { useEffect } from 'react';
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
const Text = () => {
    
  return (
    <div>
      
    </div>
  )
}

export default Text
