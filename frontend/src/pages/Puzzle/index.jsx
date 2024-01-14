import React, { useEffect } from 'react'
import Blockly from 'blockly'
import 'blockly/blocks'
const Puzzle = () => {
    useEffect(()=>{
        const workspace=Blockly.inject('blocklyDiv',{
            toolbox:document.getElementById('toolbox')
        })
        const block=workspace.newBlock('text_print');
        block.initSvg()
        block.render()
    })

    
  return (
    <div id="blocklyid" >
        
    </div>
  )
}

export default Puzzle
