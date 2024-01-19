import React from 'react'
import Blockly from 'blockly'
import { useEffect } from 'react'
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
  
const Variables = () => {
  return (
    <div>
      
    </div>
  )
}

export default Variables
