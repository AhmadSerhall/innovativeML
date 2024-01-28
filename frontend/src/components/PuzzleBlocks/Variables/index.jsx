import React from 'react'
import Blockly from 'blockly'

// Blockly.Blocks['create_variable'] = {
//     init: function () {
//       this.appendDummyInput()
//         .appendField("Create variable")
//         .appendField(new Blockly.FieldVariableButton("variable"), "VAR");
  
//       this.setCategory(Blockly.Categories.variables);
//       this.setColour('#2196F3');
//       this.setTooltip("Create a new variable");
//       this.setHelpUrl("");
//     }
//   };
  
//   //trying to Update the variable block
//   const CreateVariableBlock = (props) => {
//     const { variableName, setVariableName } = props;
   
//     const handleChange = (e) => {
//        setVariableName(e.target.value);
//     };
   
//     const handleClick = () => {
//        alert('Please enter a variable name.');
//     };
   
//     return (
//        <div>
//          <input
//            type="text"
//            value={variableName}
//            onChange={handleChange}
//            placeholder="Enter variable name"
//            color="#2196F3"
//          />
//          <button onClick={handleClick}>Create Variable</button>
//        </div>
//     );
//    };
   

  // Variable section where the blocks that are related to the variable will be initialized
  // Blockly.Blocks['create_variable'] = {
  //   init: function () {
  //     this.appendDummyInput()
  //       .appendField('create variable')
  //       .appendField(new Blockly.FieldTextInput(''), 'VAR_NAME');
  //     this.setOutput(true, 'Variable');
  //     this.setColour(330);
  //     this.setTooltip('Create a new Variable');
  //     this.setHelpUrl('');
  //   },
  // };
  Blockly.Blocks['set_variable_to'] = {
    init: function () {
      this.appendValueInput('VALUE')
        .appendField('set')
        .appendField(new Blockly.FieldVariable(''), 'VAR')
        .appendField('to');
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(330);
      this.setTooltip('Set the value of a variable');
      this.setHelpUrl('');
  
      this.generatePythonCode = function (block) {
        // Variable setter.
        const valueBlockk = block.getInputTargetBlock('VALUE');
        const varName = block.getFieldValue('VAR');
    
        if (valueBlockk) {
            const argument0 = valueBlockk.generatePythonCode() || 'None';
            return `${varName} = ${argument0}\n`;
        } else {
            return `${varName} = None\n`;
        }
    };
    
    },
  };
  
  
  
const Variables = () => {
  return (
    <div>
      
    </div>
  )
}

export default Variables
