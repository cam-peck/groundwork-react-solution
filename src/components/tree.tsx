import React, { useState } from 'react';
import { DataNode } from '../data';

export default function Tree({ name, children }: DataNode) {

  const [value, setValue] = useState('')
  const [nodeChildren, setNodeChildren] = useState(children);
  const [duplicateError, setDuplicateError] = useState(false);

  const [isDown, setIsDown] = useState(false);
  const [isDragging, setIsDragging] = useState(false);

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      for (let i = 0; i < nodeChildren.length; i++) {
        if (nodeChildren[i].name === value) {
          setDuplicateError(true);
          return;
        }
      }
      const newNode: DataNode = { name: value, children: [] };
      const childrenCopy = nodeChildren.slice();
      childrenCopy.push(newNode);
      setNodeChildren(childrenCopy);
      setDuplicateError(false)
      setValue('')
    }
  }

  const duplicateErrorText = <p className="text-red-500 italic">A node with that name already exists.</p>

  return (
    <section className="pl-12">
      {/* Node */}
      <div onMouseDown={() => setIsDown(true)} onMouseMove={() => setIsDragging(true)}>
        <h4>{name}</h4>
        <input onChange={e => setValue(e.target.value)} value={value} onKeyDown={event => handleKeyDown(event)} className="border border-blue-500 rounded-md pl-2 pt-1 pb-1" type="text" placeholder='Add Child'/>
        { duplicateError && duplicateErrorText }
      </div>
      {/* Node's Children */}
      <div className="relative flex flex-col left-25 pl-12">
        { nodeChildren.map((node: DataNode) => { return <Tree key={node.name} name={node.name} children={node.children} /> })  }
      </div>
    </section>
  )
}

