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
Blockly.Blocks['text_transform'] = {
    init: function () {
        this.appendDummyInput()
        .appendField('to')
        .appendField(new Blockly.FieldDropdown([
            ['UPPERCASE', 'UPPERCASE'],
            ['lowercase', 'LOWERCASE'],
            ['CamelCase', 'CAMELCASE']
        ]), 'TRANSFORMATION');
    
        this.appendValueInput('TEXT')
        .setCheck('String');
    
        this.setOutput(true, 'String');
        this.setColour('#2196F3');
        this.setTooltip('Transform text to uppercase, lowercase, or CamelCase.');
        this.setHelpUrl('');
        this.setInputsInline(true);
    }
    };
      
const Text = () => {
    useEffect(() => {
        const block = new Blockly.Block('text_integer');
        block.initSvg();
        block.render();
      }, []);
      useEffect(() => {
        const block = new Blockly.Block('create_text_with');
        block.initSvg();
        block.render();
      }, []);
      useEffect(() => {
        const block = new Blockly.Block('to_item_append_text');
        block.initSvg();
        block.render();
      }, []);
      useEffect(() => {
        const block = new Blockly.Block('text_is_empty');
        block.initSvg();
        block.render();
      }, []);
      useEffect(() => {
        const block = new Blockly.Block('text_transform');
        block.initSvg();
        block.render();
      }, []);
  return (
    <div>
      <div id="text_integer " style={{ display: 'none' }}></div>
      <div id="create_text_with " style={{ display: 'none' }}></div>
      <div id="to_item_append_text " style={{ display: 'none' }}></div>
      <div id="text_is_empty " style={{ display: 'none' }}></div>
    </div>
  )
}

export default Text
