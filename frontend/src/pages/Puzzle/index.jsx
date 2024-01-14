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
    <div id="blocklyid "style={{ height: '480px', width: '600px' }}>
        
    </div>
  )
}

export default Puzzle
