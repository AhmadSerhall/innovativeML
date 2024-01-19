import React, { useEffect,useState } from 'react';
import Blockly from 'blockly';
import 'blockly/blocks';
import './style.css';
import Text from '../../components/PuzzleBlocks/Text';
import Logic from '../../components/PuzzleBlocks/Logic';
import Loops from '../../components/PuzzleBlocks/Loops';
import Math from '../../components/PuzzleBlocks/Math';
import list from '../../components/PuzzleBlocks/List';
import InputOutput from '../../components/PuzzleBlocks/InputOutput';
// Register custom block types

  Blockly.Blocks['create_variable_button'] = {
    init: function() {
      this.jsonInit({
        "message0": "Create variable",
        "category": "Variables",
        "colour": "#F4F4F4",
        "tooltip": "Create a new variable",
        "events": {
          "click": function(event) {
            if (event.blockId === 'create_variable_button') {
               // Show an alert to prompt the user to name a variable
               alert('Please name a variable');
            }
           }
        }
      });
    }
  };
  //trying to Update the variable block
  const CreateVariableBlock = (props) => {
    const { variableName, setVariableName } = props;
   
    const handleChange = (e) => {
       setVariableName(e.target.value);
    };
   
    const handleClick = () => {
       alert('Please enter a variable name.');
    };
   
    return (
       <div>
         <input
           type="text"
           value={variableName}
           onChange={handleChange}
           placeholder="Enter variable name"
         />
         <button onClick={handleClick}>Create Variable</button>
       </div>
    );
   };
   

  //Variable section where the blocks that are related to the variable will be initialized
  // Blockly.Blocks['create_variable'] = {
  //   init: function () {
  //     this.appendDummyInput()
  //       .appendField('create variable')
  //       .appendField(new Blockly.FieldTextInput(''), 'VAR_NAME');
  //     this.setOutput(true, 'Variable');
  //     this.setColour(330);
  //     this.setTooltip('Create a new Variable');
  //     this.setHelpUrl('');
  //     // this.setDeletable(false);
  //   },
  // };
  // Blockly.JavaScript['create_variable'] = function (block) {
  //   const varName = block.getFieldValue('VAR_NAME');
  //   return [varName, Blockly.JavaScript.ORDER_ATOMIC];
  // };
  
const Puzzle = () => {
  const [variableName, setVariableName] = useState('');
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
          <block type='create_text_with'></block>
          <block type='to_item_append_text'></block>
          <block type='text_is_empty'></block>
          <block type='text_transform'></block>
          <block type='find_occurence'></block>
          <block type='get_letter'></block>
          <block type='trim_spaces'></block>
        </category>
        {/* review the variable category after */}
        <category name="Variable" colour="#218762">
        {/*<block type="create_variable"></block>*/}
        <block type="variables_get">
            <field name="VAR" variabletype="">{variableName}</field>
          </block>
          <block type="variables_set">
            <field name="VAR" variabletype="">{variableName}</field>
          </block>
          <block type="create_variable_button">
            <field name="TEXT" variabletype="">{variableName}</field>
          </block>
        </category>
        <category name="logic" colour="#222342">
          <block type="do_if"></block>
          <block type="math_operations"></block>
          <block type="logic_connector"></block>
          <block type="logic_not"></block>
          <block type="true_false"></block>
          <block type="null_block"></block>
          <block type="conditional_test_if_else"></block>
        </category>
        <category name="loops" colour="#00FF00">
        <block type="repeat_times_do"></block>
        <block type="repeat_while_until_do"></block>
        <block type="count_with"></block>
        <block type="for_each_item_in_list"></block>
        <block type="loop_control"></block>
        </category>
        <category name="math" colour="#A020F0">
          <block type='type_integer'></block>
          <block type='math_operations'></block>
          <block type='math_functions'></block>
          <block type='math_trigo'></block>
          <block type='check_number_property'></block> 
          <block type='list_operations'></block> 
          <block type='random_integer'></block> 
        </category>
        <category name="list" colour="#964B00">
        <block type='lists_create_with_container'></block>
        <block type='lists_create_with_item'></block>
        <block type='lists_length'></block>  
        <block type='lists_isEmpty'></block>
        <block type='lists_getIndexOfItem'></block>  
        <block type='lists_getItem'></block>    
        <block type='lists_set_insert_at'></block>    
        {/* <block type='lists_create_with'></block>  */}
        </category>
        <category name="input_output" colour="#333">
        <block type='print'></block>  
        <block type='input'></block> 
        </category>
      </xml>
      <div id='blocklyDiv' className="playground" style={{ height: '600px', width: '900px' }}></div>
    </div>
  );
};

export default Puzzle;