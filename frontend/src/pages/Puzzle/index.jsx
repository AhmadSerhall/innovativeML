import React, { useEffect, useRef, useState } from 'react';
import Blockly from 'blockly/core';
import 'blockly/blocks';
import 'blockly/python';
import '../../pythonCode/Text';
import './style.css';
import '../../styles/global.css';
import Text from '../../components/PuzzleBlocks/Text';
import Logic from '../../components/PuzzleBlocks/Logic';
import Loops from '../../components/PuzzleBlocks/Loops';
import Math from '../../components/PuzzleBlocks/Math';
import list from '../../components/PuzzleBlocks/List';
import InputOutput from '../../components/PuzzleBlocks/InputOutput';
import Variables from '../../components/PuzzleBlocks/Variables';
import NavBar from '../../components/NavBar';
import Button from '../../components/Button';
import Footer from '../../components/Footer';

const Puzzle = () => {
  const [selectedTab, setSelectedTab] = useState('puzzle');
  const workspaceRef = useRef(null);
  const workspaceXmlRef = useRef(null);

  useEffect(() => {
    const toolbox = document.getElementById('toolbox');
    if (!workspaceRef.current) {
      const container = document.getElementById('blocklyDiv');
  
      // Check if the container is in the current document
      if (!document.body.contains(container)) {
        console.error('Container is not in the current document.');
        return;
      }
  
      workspaceRef.current = Blockly.inject(container, {
        toolbox,
      });
  
      // Restore workspace from XML if it exists
      if (workspaceXmlRef.current) {
        Blockly.Xml.domToWorkspace(workspaceXmlRef.current, workspaceRef.current);
      }
  
      const workspaceSvg = workspaceRef.current.getParentSvg();
      if (workspaceSvg) {
        workspaceSvg.style.backgroundColor = '#f5f5f5';
      }
  
      // Add a change listener to the workspace
      workspaceRef.current.addChangeListener((event) => {
        console.log('Blockly workspace event:', event);
  
        // Check if the event is a block creation event
        if (event.type === Blockly.Events.CREATE) {
          console.log('Block Created:', event);
          // Here you can generate and log Python code
          const pythonCode = generatePythonCode();
          console.log('Generated Python Code:', pythonCode);
        }
      });
    }
  
    return () => {
      console.log('Cleaning up Blockly workspace...');
      const workspace = workspaceRef.current;
      if (workspace) {
        const workspaceXml = Blockly.Xml.workspaceToDom(workspace);
        workspaceXmlRef.current = workspaceXml;
        workspace.dispose();
        workspaceRef.current = null;
      }
    };
  }, [selectedTab]);
  

  useEffect(() => {
    if (workspaceRef.current) {
      Blockly.svgResize(workspaceRef.current);
    }
  }, []);

  const handleTabChange = (tab) => {
    setSelectedTab(tab);
  };

  const generatePythonCode = () => {
    if (!workspaceRef.current || typeof Blockly === 'undefined' || typeof Blockly.Python === 'undefined') {
      return 'Blockly or Blockly.Python is not defined.';
    }
    if (!workspaceRef.current || !Blockly.Python) {
      return '';
    }
    const allBlocks = workspaceRef.current.getAllBlocks();
    console.log('All Blocks in Workspace:', allBlocks);

    const pythonCode = Blockly.Python.workspaceToCode(workspaceRef.current);
    return pythonCode;
  };

  return (
    <div>
      <NavBar />
      <div className='tab-container flex row '>
        <Button
          text='Puzzle'
          textColor={'black'}
          bgColor={'#FFD700'}
          onClick={() => handleTabChange('puzzle')}
          className={selectedTab === 'puzzle' ? 'active-tab' : 'inactive-tab'}
        />
        <Button
          text='Python code'
          textColor={'white'}
          bgColor={'#1261A9'}
          onClick={() => handleTabChange('python')}
          className={selectedTab === 'python' ? 'active-tab' : 'inactive-tab'}
        />
      </div>
      <div className='puzzle-container'>
        {selectedTab === 'puzzle' && (
          <>
            <xml id='toolbox' style={{ display: 'none' }}>
            <category name="Text" colour="#2196F3" className="category">
          <block type="text_print"></block>
          <block type='text'></block>
          <block type='create_text_with'></block>
          <block type='to_item_append_text'></block>
          <block type='text_is_empty'></block>
          <block type='text_transform'></block>
          <block type='find_occurence'></block>
          <block type='get_letter'></block>
          <block type='trim_spaces'></block>
          <block type='text_length'></block>
        </category>
        {/* review the variable category after */}
        <category name="Variable" colour="#218762">
        {/*<block type="create_variable"></block>*/}
        <block type="variables_get">
            {/* <field name="VAR" variabletype="">{variableName}</field>
          </block>
          <block type="variables_set">
            <field name="VAR" variabletype="">{variableName}</field> */}
          </block>
          {/* <block type="create_variable_button">
            <field name="TEXT" variabletype="">{variableName}</field>
          </block> */}
        </category>
        <category name="logic" colour="#222342">
          <block type="do_if"></block>
          <block type="do_if_else_if"></block>
          <block type="do_if_else"></block>
          <block type="logic_comparison"></block>
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
        </category>            </xml>
            <div id='blocklyDiv' className='playground'></div>
          </>
        )}
        {selectedTab === 'python' && (
          <div className='python-container flex center'>
            
            <pre>{generatePythonCode()}</pre>
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default Puzzle;