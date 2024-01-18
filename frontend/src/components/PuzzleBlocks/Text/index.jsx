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
        this.setColour('160');
        this.setTooltip('Transform text to uppercase, lowercase, or CamelCase.');
        this.setHelpUrl('');
        this.setInputsInline(true);
    }
    };
Blockly.Blocks['find_occurence'] = {
    init: function () {
        this.appendValueInput('VARIABLE')
        .setCheck('String')
        .appendField('in text');
    
        this.appendDummyInput()
        .appendField('find')
        .appendField(new Blockly.FieldDropdown([
            ['first', 'FIRST'],
            ['last', 'LAST']
        ]), 'OCCURRENCE');
    
        this.appendValueInput('SEARCH_TEXT')
        .setCheck('String')
        .appendField('occurrence of text');
    
        this.setOutput(true, 'Number');
        this.setColour('160');
        this.setTooltip('Find the first or last occurrence of a specific text in the given variable.');
        this.setHelpUrl('');
        this.setInputsInline(true);
    }
    };
    Blockly.Blocks['get_letter'] = {
        init: function () {
          this.appendValueInput('VARIABLE')
            .setCheck('String')
            .appendField('in text');
      
          this.appendDummyInput()
            .appendField('get')
            .appendField(new Blockly.FieldDropdown([
              ['first letter', 'FIRST_LETTER'],
              ['last letter', 'LAST_LETTER'],
              ['random letter', 'RANDOM_LETTER']
            ]), 'LETTER_TYPE');
      
          this.appendValueInput('TEXT')
            .setCheck('String')
            .appendField('of');
      
          this.setOutput(true, 'String');
          this.setColour('160');
          this.setTooltip('Get the first letter, last letter, or a random letter of a given text in the specified variable.');
          this.setHelpUrl('');
          this.setInputsInline(true);
        }
      };
      Blockly.Blocks['trim_spaces'] = {
        init: function () {
          this.appendDummyInput()
            .appendField('trim spaces from')
            .appendField(new Blockly.FieldDropdown([
              ['bothsides', 'BOTH_SIDES'],
              ['left side', 'LEFT_SIDE'],
              ['right side', 'RIGHT_SIDE']
            ]), 'TRIM_TYPE');
      
          this.appendValueInput('TEXT')
            .setCheck('String');
      
          this.setOutput(true, 'String');
          this.setColour('160');
          this.setTooltip('Trim spaces from both sides, left side, or right side of the given text.');
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
      useEffect(() => {
        const block = new Blockly.Block('find_occurence');
        block.initSvg();
        block.render();
      }, []);
      useEffect(() => {
        const block = new Blockly.Block('get_letter');
        block.initSvg();
        block.render();
      }, []);
      useEffect(() => {
        const block = new Blockly.Block('trim_spaces');
        block.initSvg();
        block.render();
      }, []);
  return (
    <div>
      <div id="text_integer " style={{ display: 'none' }}></div>
      <div id="create_text_with " style={{ display: 'none' }}></div>
      <div id="to_item_append_text " style={{ display: 'none' }}></div>
      <div id="text_is_empty " style={{ display: 'none' }}></div>
      <div id="text_transform " style={{ display: 'none' }}></div>
      <div id="find_occurence " style={{ display: 'none' }}></div>
      <div id="get_letter " style={{ display: 'none' }}></div>



    </div>
  )
}

export default Text
