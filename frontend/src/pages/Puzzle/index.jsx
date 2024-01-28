import React, { useEffect, useRef, useState } from 'react';
import Blockly from 'blockly/core';
// import {pythonGenerator} from 'blockly/python';
import 'blockly/blocks';
import 'blockly/python_compressed.js';
import 'blockly/python_compressed'
import 'blockly/python'
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
    const container = document.getElementById('blocklyDiv');

    if (!workspaceRef.current && container) {
      workspaceRef.current = Blockly.inject(container, {
        toolbox: document.getElementById('toolbox'),
        language: 'python',
        zoom:
        {
          controls: true,
          wheel: true
        },
      });
      
      
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

        if (event.type === Blockly.Events.CREATE) {
          console.log('Block Created:', event);
          // const pythonCode = generatePythonCode();
          console.log('Blockly:', Blockly);
          console.log('Blockly.Python:', Blockly.Python);
          updatePythonCode();
          // console.log('Generated Python Code:', pythonCode);
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

  const updatePythonCode = () => {
    const pythonCode = generatePythonCode();
    console.log('Generated Python Code:', pythonCode);
  };
  
  const generatePythonCode = () => {
    if (!workspaceRef.current || typeof Blockly === 'undefined') {
      return 'Blockly is not defined.';
    }

    try {
      const blocks = workspaceRef.current.getAllBlocks();
      let pythonCode = '';

      blocks.forEach((block) => {
        if (typeof block.generatePythonCode === 'function') {
          // pythonCode += block.generatePythonCode();
          const blockCode = block.generatePythonCode(block);
          if (blockCode) {
            pythonCode += blockCode + '\n';
          }
        }
      });

      return pythonCode;
    } catch (error) {
      console.error('Error generating Python code:', error);
      return 'Error generating Python code.';
    }
  };
  const copyPythonCode = () => {
    const pythonCode = generatePythonCode();
    navigator.clipboard.writeText(pythonCode).then(() => {
      alert('Python code copied to clipboard!');
    }).catch((error) => {
      console.error('Error copying Python code to clipboard:', error);
      alert('Failed to copy Python code. Please try again.');
    });
  };

  const downloadLayout = () => {
    if (!workspaceRef.current || typeof Blockly === 'undefined') {
      alert('Blockly is not defined.');
      return;
    }
  
    try {
      const workspace = workspaceRef.current;
      const xmlDom = Blockly.Xml.workspaceToDom(workspace);
      const xmlText = Blockly.Xml.domToText(xmlDom);
  
      const blob = new Blob([xmlText], { type: 'text/xml' });
      const url = URL.createObjectURL(blob);
  
      const a = document.createElement('a');
      a.href = url;
      a.download = 'layout.xml';
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
    } catch (error) {
      console.error('Error downloading layout:', error);
      alert('Failed to download layout. Please try again.');
    }
  };

  const importLayout = async () => {
    const fileInput = document.createElement('input');
    fileInput.type = 'file';
    fileInput.accept = '.xml';
    fileInput.click();
  
    fileInput.addEventListener('change', async (event) => {
      const file = event.target.files[0];
      if (file) {
        try {
          const xmlText = await file.text();
  
          if (workspaceRef.current && typeof Blockly !== 'undefined') {
            const parser = new DOMParser();
            const xmlDoc = parser.parseFromString(xmlText, 'text/xml');
            Blockly.Xml.clearWorkspaceAndLoadFromXml(xmlDoc, workspaceRef.current);
          } else {
            throw new Error('Blockly is not defined or workspaceRef is not set.');
          }
        } catch (error) {
          console.error('Error importing layout:', error);
          alert('Failed to import layout. Please make sure the file is a valid XML file and try again.');
        }
      }
    });
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
        <Button
          text='Copy Python Code'
          textColor={'white'}
          bgColor={'#4CAF50'}
          onClick={copyPythonCode}
        />
        <Button
          text='Download Layout'
          textColor={'white'}
          bgColor={'#2196F3'}
          onClick={downloadLayout}
        />
        <Button
          text='Import Layout'
          textColor={'white'}
          bgColor={'#FF5722'}
          onClick={importLayout}
        />
      </div>
      <div className='puzzle-container'>
        {selectedTab === 'puzzle' && (
          <>
            <xml id='toolbox' style={{ display: 'none' }}>
            <category name="Text" colour="160" className="category">2196F3
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
        <category name="Variable" colour="#2196F3">
        <block type="variables_get" colour="#2196F3">
          <field name="VAR" >j</field></block>
          <block type="set_variable_to" colour='#2196F3'></block>
        </category>
        <category name="logic" colour="#FF9933">
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
        <category name="loops" colour="120">
        <block type="repeat_times_do"></block>
        <block type="repeat_while_until_do"></block>
        <block type="count_with"></block>
        <block type="for_each_item_in_list"></block>
        <block type="loop_control"></block>
        </category>
        <category name="math" colour="#FFD700">
          <block type='type_integer'></block>
          <block type='math_operations'></block>
          <block type='math_functions'></block>
          <block type='math_trigo'></block>
          <block type='check_number_property'></block> 
          <block type='list_operations'></block> 
          <block type='random_integer'></block> 
        </category>
        <category name="list" colour="260">
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