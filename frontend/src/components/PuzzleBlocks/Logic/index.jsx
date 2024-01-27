import React from 'react';
import Blockly from 'blockly';
import { useEffect } from 'react';

Blockly.Blocks['do_if'] = {
    init: function() {
        this.appendValueInput("CONDITION")
            .setCheck("Boolean")
            .appendField(" if");

        this.appendStatementInput("DO")
            .setCheck(null)
            .appendField("do");

        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour("#FF9933");
    }
};

Blockly.Blocks['do_if_else_if'] = {
    init: function() {
        this.appendValueInput("CONDITION")
            .setCheck("Boolean")
            .appendField("else if");

        this.appendStatementInput("DO")
            .setCheck(null)
            .appendField("do");

        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour("#FF9933");
    }
};


Blockly.Blocks['do_if_else'] = {
    init: function() {
        this.appendStatementInput("DO")
            .setCheck(null)
            .appendField("else");

        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour("#FF9933");
    }
};


// Blockly.Extensions.registerMutator('do_if_mutator', {
//     mutationToDom: function() {
//         var container = document.createElement('mutation');
//         container.setAttribute('else', this.elseCount_);
//         return container;
//     },
//     domToMutation: function(xmlElement) {
//         this.elseCount_ = parseInt(xmlElement.getAttribute('else'), 10);
//         this.updateShape_();
//     },
//     decompose: function(workspace) {
//         var containerBlock = workspace.newBlock('do_if_else');
//         containerBlock.initSvg();
//         var connection = containerBlock.getInput('STACK').connection;
//         for (var i = 0; i < this.elseCount_; i++) {
//             var elseIfBlock = workspace.newBlock('do_if_else_if');
//             elseIfBlock.initSvg();
//             connection.connect(elseIfBlock.previousConnection);
//             connection = elseIfBlock.nextConnection;
//         }
//         return containerBlock;
//     },
//     compose: function(containerBlock) {
//         var clauseBlock = containerBlock.getInputTargetBlock('STACK');
//         this.elseCount_ = 0;
//         var clause;
//         while (clauseBlock) {
//             switch (clauseBlock.type) {
//                 case 'do_if_else_if':
//                     this.elseCount_++;
//                     clause = this.appendDummyInput('IF' + this.elseCount_)
//                         .appendField("else if")
//                         .appendField(new Blockly.FieldVariable(true), "VAR");
//                     clause.appendStatementInput('DO' + this.elseCount_)
//                         .setCheck(null)
//                         .appendField('do');
//                     break;
//                 case 'do_if_else':
//                     this.elseCount_++;
//                     clause = this.appendDummyInput('ELSE')
//                         .appendField("else");
//                     clause.appendStatementInput('ELSE_DO')
//                         .setCheck(null)
//                         .appendField('do');
//                     break;
//                 default:
//                     throw TypeError('Unknown block type: ' + clauseBlock.type);
//             }
//             clauseBlock = clauseBlock.nextConnection &&
//                 clauseBlock.nextConnection.targetBlock();
//         }
//         this.updateShape_();
//     },
//     saveConnections: function(containerBlock) {
//         var clauseBlock = containerBlock.getInputTargetBlock('STACK');
//         var i = 1;
//         while (clauseBlock) {
//             switch (clauseBlock.type) {
//                 case 'do_if_else_if':
//                     var inputDo = this.getInput('DO' + i);
//                     clauseBlock.valueConnection_ =
//                         inputDo && inputDo.connection.targetConnection;
//                     i++;
//                     break;
//                 case 'do_if_else':
//                     var inputElseDo = this.getInput('ELSE_DO');
//                     clauseBlock.valueConnection_ =
//                         inputElseDo && inputElseDo.connection.targetConnection;
//                     break;
//                 default:
//                     throw TypeError('Unknown block type: ' + clauseBlock.type);
//             }
//             clauseBlock = clauseBlock.nextConnection &&
//                 clauseBlock.nextConnection.targetBlock();
//         }
//     },
//     updateShape_: function() {
//         // Delete everything.
//         var i = 1;
//         while (this.getInput('IF' + i)) {
//             this.removeInput('IF' + i);
//             this.removeInput('DO' + i);
//             i++;
//         }
//         if (this.getInput('ELSE')) {
//             this.removeInput('ELSE');
//         }
//         if (this.getInput('ELSE_DO')) {
//             this.removeInput('ELSE_DO');
//         }

//         // Rebuild block.
//         for (i = 1; i <= this.elseCount_; i++) {
//             this.appendDummyInput('IF' + i)
//                 .appendField("else if")
//                 .appendField(new Blockly.FieldVariable(true), "VAR");
//             this.appendStatementInput('DO' + i)
//                 .setCheck(null)
//                 .appendField('do');
//         }
//         if (this.elseCount_ > 0) {
//             this.appendDummyInput('ELSE')
//                 .appendField("else");
//             this.appendStatementInput('ELSE_DO')
//                 .setCheck(null)
//                 .appendField('do');
//         }
//     }
// });

  
Blockly.Blocks['logic_comparison'] = {
    init: function () {
        this.appendValueInput("LEFT")
            .setCheck("Number");
        this.appendDummyInput()
            .appendField(new Blockly.FieldDropdown([
                ["=", "EQUAL"],
                ["≠", "DIFFERENT"],
                ["<", "SMALLER"],
                ["≤", "SMALLER_OR_EQUAL"],
                [">", "GREATER"],
                ["≥", "GREATER_OR_EQUAL"],
            ]), "OPERATOR");
        this.appendValueInput("RIGHT")
            .setCheck("Number");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour("#FF9933");
        this.setTooltip("Perform a math operation");
        this.setHelpUrl("");
    }
};
Blockly.Blocks['logic_not'] = {
    init: function () {
        this.appendDummyInput()
            .appendField("not");
        this.appendValueInput("VALUE")
            .setCheck("Boolean")
        this.setOutput(true, "Boolean");
        this.setColour("#FF9933");
        this.setTooltip("Negate a Boolean value");
        this.setHelpUrl("");
    }
};
Blockly.Blocks['logic_connector'] = {
    init: function () {
        this.appendValueInput("LEFT")
            .setCheck(null)
        this.appendDummyInput()
            .appendField(new Blockly.FieldDropdown([["and", "AND"], ["or", "OR"]]), "OPERATOR");
        this.appendValueInput("RIGHT")
            .setCheck(null);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour("#FF9933");
        this.setTooltip("Combine two conditions using 'And' or 'Or'");
        this.setHelpUrl("");
    }
};
Blockly.Blocks['true_false'] = {
    init: function () {
        this.appendDummyInput()
            .appendField(new Blockly.FieldDropdown([["true", "TRUE"], ["false", "FALSE"]]), "BOOL");
        this.setOutput(true, "Boolean");
        this.setColour('#FF9933')
        this.setTooltip("Select true or false");
        this.setHelpUrl("");
        this.setPreviousStatement(null);
        this.setNextStatement(null);
        // this.setStyle('logic_blocks'); 
    }
};
Blockly.Blocks['null_block'] = {
    init: function () {
        this.appendDummyInput()
            .appendField("null");
        this.setOutput(true, null);
        this.setColour("#FF9933"); 
        this.setTooltip("Represents a null value");
        this.setHelpUrl("");
    }
};
Blockly.Blocks['conditional_test_if_else'] = {
    init: function () {
        this.appendDummyInput()
            .appendField("test");
        this.appendStatementInput("IF_TRUE")
            .setCheck(null)
            .appendField("if true");
        this.appendStatementInput("IF_FALSE")
            .setCheck(null)
            .appendField("if false");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour("#FF9933"); 
        this.setTooltip("Conditional block with test, if true, and if false branches");
        this.setHelpUrl("");
    }
};
const Logic = () => {
  useEffect(() => {
    const block = new Blockly.Block('do_if');
    block.initSvg();
    block.render();
  }, []);
  useEffect(() => {
    const block = new Blockly.Block('do_if_else_if');
    block.initSvg();
    block.render();
  }, []);
  useEffect(() => {
    const block = new Blockly.Block('do_if_else');
    block.initSvg();
    block.render();
  }, []);
  useEffect(() => {
    const block = new Blockly.Block('logic_comparison');
    block.initSvg();
    block.render();
  }, []);
  useEffect(() => {
    const block = new Blockly.Block('logic_connector');
    block.initSvg();
    block.render();
  }, []);
  useEffect(() => {
    const block = new Blockly.Block('logic_not');
    block.initSvg();
    block.render();
  }, []);
  useEffect(() => {
    const block = new Blockly.Block('true_false');
    block.initSvg();
    block.render();
  }, []);
  useEffect(() => {
    const block = new Blockly.Block('null_block');
    block.initSvg();
    block.render();
  }, []);
  useEffect(() => {
    const block = new Blockly.Block('conditional_test_if_else');
    block.initSvg();
    block.render();
  }, []);

  return (
    <div>
    <div id="doIfBlock" style={{ display: 'none' }}>
    </div>
    <div id="math_operations" style={{ display: 'none' }}>
    </div>
    <div id="logic_connector" style={{ display: 'none' }}></div>
    <div id="logic_not" style={{ display: 'none' }}></div>
    <div id="true_false" style={{ display: 'none' }}></div>
    <div id="null_block" style={{ display: 'none' }}></div>
    <div id="conditional_test_if_else" style={{ display: 'none' }}></div>
    </div>
  );
};
export default Logic;