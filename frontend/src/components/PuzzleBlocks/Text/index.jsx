import React ,{useEffect} from 'react';
import Blockly from 'blockly';
import 'blockly/python';
import 'blockly/python_compressed';



Blockly.Blocks['text_print'] = {
  init: function() {
    this.appendValueInput('TEXT')
        .setCheck('String')
        .appendField('print');

    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour('160');
    this.setTooltip('Prints the specified text.');
    this.generatePythonCode = function() {
      const textInput = this.getInput('TEXT');
      if (!textInput.connection.isConnected()) {
        return 'print()\n';
      }

      const textBlock = textInput.connection.targetBlock();
      const textValue = textBlock.getFieldValue('TEXT') || "''";
      return `print(${textValue})\n`;
    };
  }, 
};

Blockly.Blocks['type_integer'] = {
    init: function () {
      this.appendDummyInput().appendField(new Blockly.FieldNumber(0), 'NAME');
      this.setOutput(true, 'Number');
      this.setColour('#FFD700');
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
    toPython: function (block) {
      var value_item1 = Blockly.Python.valueToCode(block, 'ITEM1', Blockly.Python.ORDER_ATOMIC);
      var value_item2 = Blockly.Python.valueToCode(block, 'ITEM2', Blockly.Python.ORDER_ATOMIC);
  
      value_item1 = value_item1 || "''";
      value_item2 = value_item2 || "''";

      var code = 'str(' + value_item1 + ') + str(' + value_item2 + ')';
      return [code, Blockly.Python.ORDER_ATOMIC];
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
            ['random letter', 'RANDOM_LETTER'],
            ['letter # from start', 'LETTER_FROM_START'],
            ['letter # from end', 'LETTER_FROM_END']
          ], function(option) {
            // Disable the connection for POSITION input when 'first letter', 'last letter', or 'random letter' is selected
            return option !== 'FIRST_LETTER' && option !== 'LAST_LETTER' && option !== 'RANDOM_LETTER';
          }), 'LETTER_TYPE');
    
        this.appendValueInput('POSITION')
          .setCheck('Number')
          .appendField('of');
    
        this.setOutput(true, 'String');
        this.setColour(160);
        this.setTooltip('Get the first letter, last letter, random letter, or a letter at a specific position in a given text.');
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
            .appendField('of')
            .setCheck('String');
          this.setOutput(true, 'String');
          this.setColour('160');
          this.setTooltip('Trim spaces from both sides, left side, or right side of the given text.');
          this.setHelpUrl('');
          this.setInputsInline(true);
        }
      };
      Blockly.Blocks['text_length'] = {
        init: function () {
          this.setColour(160);
          this.appendValueInput('VALUE')
            .setCheck('String')
            .appendField('length of');
          this.setOutput(true, 'Number');
          this.setTooltip('Returns the length of a list.');
          this.setHelpUrl('');
        },
      };

const Text = () => {
      useEffect(() => {
        const block = new Blockly.Block('text_print');
        block.initSvg();
        block.render();
      }, []);
    useEffect(() => {
        const block = new Blockly.Block('type_integer');
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
      useEffect(() => {
        const block = new Blockly.Block('text_length');
        block.initSvg();
        block.render();
      }, []);
  return (
    <div>
      <div id="text_print " style={{ display: 'none' }}></div>
      <div id="type_integer " style={{ display: 'none' }}></div>
      <div id="create_text_with " style={{ display: 'none' }}></div>
      <div id="to_item_append_text " style={{ display: 'none' }}></div>
      <div id="text_is_empty " style={{ display: 'none' }}></div>
      <div id="text_transform " style={{ display: 'none' }}></div>
      <div id="find_occurence " style={{ display: 'none' }}></div>
      <div id="get_letter " style={{ display: 'none' }}></div>
      <div id="trim_spaces " style={{ display: 'none' }}></div>
      <div id="text_length " style={{ display: 'none' }}></div>

    </div>
  )
}
export default Text
