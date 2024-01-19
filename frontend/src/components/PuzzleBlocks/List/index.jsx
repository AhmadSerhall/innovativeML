import React, { useEffect } from 'react';
import Blockly from 'blockly/core';
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
    this.appendStatementInput('STACK');
    this.setTooltip(Blockly.Msg.LISTS_CREATE_WITH_CONTAINER_TOOLTIP);
    this.contextMenu = false;
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
  },
};

// Blockly.Python['lists_length'] = function(block) {
//   var value = Blockly.Python.valueToCode(block, 'VALUE', Blockly.Python.ORDER_ATOMIC) || '[]';
//   return [f'len({value})', Blockly.Python.ORDER_FUNCTION_CALL];
// };
Blockly.Blocks['lists_isEmpty'] = {
  init: function () {
    this.appendValueInput('VALUE')
      .setCheck('Array')
      .appendField('is empty');
    this.setOutput(true, 'Boolean');
    this.setColour(260);
    this.setTooltip('Returns true if the list is empty, false otherwise.');
    this.setHelpUrl('');
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

  return (
    <div>
      <div id="lists_create_with_item" style={{ display: 'none' }}></div>
      <div id="lists_create_with_container" style={{ display: 'none' }}></div>
      <div id="lists_length" style={{ display: 'none' }}></div>
      <div id="lists_isEmpty" style={{ display: 'none' }}></div>
    </div>
  );
};

export default List;
