import React, { useEffect } from 'react';
import Blockly, { Block } from 'blockly/core';
import 'blockly/blocks';
import 'blockly/msg/en';

// Check Blockly version compatibility
// const isBlocklyVersionCompatible = () => {
//   const majorVersion = parseInt(Blockly.version.split('.')[0], 10);
//   return majorVersion >= 4;
// };

// if (!isBlocklyVersionCompatible()) {
//   throw new Error('Incompatible Blockly version. Please use Blockly version 4.0.0 or later.');
// }

// Blockly.Blocks['lists_create_with'] = {
//   init: function () {
//     this.setHelpUrl(Blockly.Msg.LISTS_CREATE_WITH_HELPURL);
//     this.setColour(260);
//     this.itemCount_ = 3;
//     this.updateShape_();
//     this.setOutput(true, 'Array');
//     // this.setMutator(new Blockly.Mutator(['lists_create_with_item']));
//     this.setTooltip(Blockly.Msg.LISTS_CREATE_WITH_TOOLTIP);
//   },
//   mutationToDom: function (workspace) {
//     var container = Blockly.utils.xml.createElement('mutation');
//     container.setAttribute('items', this.itemCount_);
//     return container;
//   },
//   domToMutation: function (xmlElement) {
//     var items = parseInt(xmlElement.getAttribute('items'), 10);
//     this.itemCount_ = items;
//     this.updateShape_();
//   },
//   decompose: function (workspace) {
//     var containerBlock = workspace.newBlock('lists_create_with_container');
//     containerBlock.initSvg();
//     var connection = containerBlock.getInput('STACK').connection;
//     for (var i = 0; i < this.itemCount_; i++) {
//       var itemBlock = workspace.newBlock('lists_create_with_item');
//       itemBlock.initSvg();
//       connection.connect(itemBlock.previousConnection);
//       connection = itemBlock.nextConnection;
//     }
//     return containerBlock;
//   },
//   compose: function (containerBlock) {
//     var itemBlock = containerBlock.getInputTargetBlock('STACK');
//     var connections = [];
//     while (itemBlock) {
//       connections.push(itemBlock.valueConnection_);
//       itemBlock = itemBlock.nextConnection &&
//         itemBlock.nextConnection.targetBlock();
//     }
//     this.itemCount_ = connections.length;
//     this.updateShape_();
//     for (var i = 0; i < this.itemCount_; i++) {
//       Blockly.Mutator.reconnect(connections[i], this, 'ITEM' + i);
//     }
//   },
//   saveConnections: function (containerBlock) {
//     var itemBlock = containerBlock.getInputTargetBlock('STACK');
//     var i = 0;
//     while (itemBlock) {
//       var input = this.getInput('ITEM' + i);
//       itemBlock.valueConnection_ = input && input.connection.targetConnection;
//       i++;
//       itemBlock = itemBlock.nextConnection &&
//         itemBlock.nextConnection.targetBlock();
//     }
//   },
//   updateShape_: function () {
//     if (this.getInput('EMPTY')) {
//       this.removeInput('EMPTY');
//     } else {
//       for (var i = 0; i < this.itemCount_; i++) {
//         if (!this.getInput('ITEM' + i)) {
//           this.appendValueInput('ITEM' + i)
//             .setCheck(null)
//             .appendField(new Blockly.FieldTextInput(''), 'TEXT');
//         }
//       }
//     }
//   },
// };

Blockly.Blocks['lists_create_with_container'] = {
  init: function () {
      this.setColour(260);
      this.appendDummyInput()
          .appendField(Blockly.Msg.LISTS_CREATE_WITH_CONTAINER_TITLE_ADD);
      this.appendStatementInput('STACK')    
      this.setTooltip(Blockly.Msg.LISTS_CREATE_WITH_CONTAINER_TOOLTIP);
      this.contextMenu = false;

      this.generatePythonCode = function (block) {
          let code = '';
          for (let i = 0; i < block.itemCount_; i++) {
              const itemBlock = block.getInputTargetBlock('STACK');
              if (itemBlock) {
                  const itemCode = itemBlock.generatePythonCode();
                  code += itemCode + ', ';
              }
          }

          if (code.length > 0) {
              code = code.slice(0, -2);
          }

          return `[${code}]`;
      };
  },
};

Blockly.Blocks['lists_create_with_item'] = {
  init: function () {
      this.setColour(260);
      this.appendDummyInput()
          .appendField(Blockly.Msg.LISTS_CREATE_WITH_ITEM_TITLE);
      this.setPreviousStatement(true);
      this.setNextStatement(true);
      this.setTooltip(Blockly.Msg.LISTS_CREATE_WITH_ITEM_TOOLTIP);
      this.contextMenu = false;

      this.generatePythonCode = function (block) {
          // Return an empty string for the item block
          return '';
      };
  },
};




Blockly.Blocks['lists_length'] = {
  init: function () {
    this.setColour(260);
    this.appendValueInput('VALUE')
      .setCheck('Array')
      .appendField('length of');
    this.setOutput(true, 'Number');
    this.setTooltip('Returns the length of a list.');
    this.setHelpUrl('');
    this.generatePythonCode = function (block) {
      const valueBlock = block.getInputTargetBlock('VALUE');
      const valueCode = valueBlock ? valueBlock.generatePythonCode() : '[]';

      return `len(${valueCode})`;
  };
  },
};

Blockly.Blocks['lists_isEmpty'] = {
  init: function () {
    this.appendValueInput('VALUE')
      .setCheck('Array')
      .appendField('is empty');
    this.setOutput(true, 'Boolean');
    this.setColour(260);
    this.setTooltip('Returns true if the list is empty, false otherwise.');
    this.setHelpUrl('');
    this.generatePythonCode = function (block) {
      const valueBlock = block.getInputTargetBlock('VALUE');
      const valueCode = valueBlock ? valueBlock.generatePythonCode() : '[]';

      return `not ${valueCode}`;
  };
  },
};
Blockly.Blocks['lists_getIndexOfItem'] = {
  init: function () {
    this.appendValueInput('VALUE')
      .setCheck('Array')
      .appendField('in list');
    this.appendDummyInput()
      .appendField('find')
      .appendField(new Blockly.FieldDropdown([
        ['first', 'FIRST'],
        ['last', 'LAST']
      ]), 'TYPE');
    this.appendValueInput('FIND')
      .appendField('occurrence of item');
    this.setOutput(true, 'Number');
    this.setColour(260);
    this.setTooltip('Returns the index of the first/last occurrence of the item in the list.');
    this.setHelpUrl('');
    this.generatePythonCode = function (block) {
      const listBlock = block.getInputTargetBlock('VALUE');
      const listCode = listBlock ? listBlock.generatePythonCode() : '[]';

      const type = block.getFieldValue('TYPE');
      const findBlock = block.getInputTargetBlock('FIND');
      const findCode = findBlock ? findBlock.generatePythonCode() : '';

      return `${listCode}.index(${findCode}, ${type === 'FIRST' ? 0 : -1})`;
  };
  },
};
Blockly.Blocks['lists_getItem'] = {
  init: function () {
    this.appendValueInput('LIST')
      .setCheck('Array')
      .appendField('in list')
      .appendField(new Blockly.FieldVariable('list'), 'VAR')
      .appendField(new Blockly.FieldDropdown([
        ['get', 'GET'],
        ['get and remove', 'GET_REMOVE'],
        ['remove', 'REMOVE']
      ]), 'OP');
    this.appendDummyInput()
      .appendField(new Blockly.FieldDropdown([
        ['first', 'FIRST'],
        ['last', 'LAST']
      ]), 'TYPE');
    this.setOutput(true, null);
    this.setPreviousStatement(false, null);
    this.setNextStatement(false, null);
    this.setColour(260);
    this.setTooltip('Get or remove the first/last item from the list.');
    this.setHelpUrl('');
    this.generatePythonCode = function (block) {
      const listBlock = block.getInputTargetBlock('LIST');
      const listCode = listBlock ? listBlock.generatePythonCode() : '[]';

      const op = block.getFieldValue('OP');
      const type = block.getFieldValue('TYPE');

      let pythonCode;
      if (op === 'GET') {
          pythonCode = `${listCode}[${type === 'FIRST' ? 0 : -1}]`;
      } else if (op === 'GET_REMOVE') {
          pythonCode = `${listCode}.pop(${type === 'FIRST' ? 0 : -1})`;
      } else {
          pythonCode = `${listCode}.remove(${type === 'FIRST' ? 0 : -1})`;
      }

      return pythonCode;
  };
  },
  
};
Blockly.Blocks['lists_set_insert_at'] = {
  init: function () {
      this.appendValueInput('LIST')
          .setCheck('Array')
          .appendField('in list')
          .appendField(new Blockly.FieldVariable('list'), 'VAR')
          .appendField(new Blockly.FieldDropdown([
              ['set', 'SET_AT'],
              ['insert at', 'INSERT_AT']
          ]), 'OP')
          .appendField(new Blockly.FieldDropdown([
              ['first', 'FIRST'],
              ['last', 'LAST']
          ]), 'TYPE');
      this.appendDummyInput()
          .appendField('as');
      this.appendValueInput('ITEM')
          .setCheck(null);
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(260);
      this.setTooltip('Set or insert an item at the specified index in the list.');
      this.setHelpUrl('');

      this.generatePythonCode = function (block) {
          const listBlock = block.getInputTargetBlock('LIST');
          const listCode = listBlock ? listBlock.generatePythonCode() : '[]';

          const op = block.getFieldValue('OP');
          const type = block.getFieldValue('TYPE');
          const itemBlock = block.getInputTargetBlock('ITEM');
          const itemCode = itemBlock ? itemBlock.generatePythonCode() : '';

          let pythonCode;
          if (op === 'SET_AT') {
              pythonCode = `${listCode}[${type === 'FIRST' ? 0 : -1}] = ${itemCode}`;
          } else {
              pythonCode = `${listCode}.insert(${type === 'FIRST' ? 0 : -1}, ${itemCode})`;
          }

          return pythonCode;
      };
  },
};


const List = () => {
  useEffect(() => {
    const block = new Blockly.Block('lists_create_with_item');
    block.initSvg();
    block.render();
  }, []);
  useEffect(() => {
    const block = new Blockly.Block('lists_create_with_container');
    block.initSvg();
    block.render();
  }, []);
  useEffect(() => {
    const block = new Blockly.Block('lists_length');
    block.initSvg();
    block.render();
  }, []);
  useEffect(() => {
    const block = new Blockly.Block('lists_isEmpty');
    block.initSvg();
    block.render();
  }, []);
  useEffect(() => {
    const block = new Blockly.Block('lists_getIndexOfItem');
    block.initSvg();
    block.render();
  }, []);
  useEffect(() => {
    const block = new Blockly.Block('lists_getItem');
    block.initSvg();
    block.render();
  }, []);
  useEffect(() => {
    const block = new Blockly.Block('lists_set_insert_at');
    block.initSvg();
    block.render();
  }, []);
  return (
    <div>
      <div id="lists_create_with_item" style={{ display: 'none' }}></div>
      <div id="lists_create_with_container" style={{ display: 'none' }}></div>
      <div id="lists_length" style={{ display: 'none' }}></div>
      <div id="lists_isEmpty" style={{ display: 'none' }}></div>
      <div id="lists_getIndexOfItem" style={{ display: 'none' }}></div>
      <div id="lists_getItem" style={{ display: 'none' }}></div>
      <div id="lists_set_insert_at" style={{ display: 'none' }}></div>


    </div>
  );
};

export default List;
