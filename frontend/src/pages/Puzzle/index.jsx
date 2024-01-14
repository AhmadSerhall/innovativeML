import React, { useEffect } from 'react'
import Blockly from 'blockly'
import 'blockly/blocks'
const Puzzle = () => {
    useEffect(()=>{
        const workspace=Blockly.inject('blocklyDiv',{
            toolbox:document.getElementById('toolbox')
        })
    })
  return (
    <div>
        <h1>Puzzle page</h1>
    </div>
  )
}

export default Puzzle
