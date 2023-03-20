import React from 'react';

import { DataNode, root } from './data';

const Tree: React.FC<DataNode> = ({ name, children }: DataNode) => {
  return (
    <main className="pl-12">
      <div>
        <h4>{name}</h4>
        <input className="border border-blue-500 rounded-md pl-2 pt-1 pb-1" type="text" placeholder='Add Child'/>
      </div>
      <div className="relative flex flex-col left-25 pl-12">
      {
        children.map((node: DataNode) => <Tree key={node.name} {...node} />)
      }
      </div>
    </main>
  )
}

export default function App() {
  return (
    <Tree {...root}/>
  )
}
