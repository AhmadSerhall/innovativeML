import React, { useEffect } from 'react'
import Blockly from 'blockly'
import 'blockly/blocks'
import './style.css'
const Puzzle = () => {
    useEffect(()=>{
        const workspace=Blockly.inject('blocklyDiv',{
            toolbox:document.getElementById('toolbox')
        })
        const block=workspace.newBlock('text_print');
        block.initSvg()
        block.render()
    },[])

    
  return (
    <div id="blocklyDiv "style={{ height: '480px', width: '600px' }}>
        <xml> {/* used extensible markup language --sets of codes,tags,  */}
        <block type="text"></block>
        </xml>
        
    </div>
  )
}

export default Puzzle
