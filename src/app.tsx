import React from 'react';
import Tree from './components/tree';

export default function App() {
  
  const sampleData = {
    name: 'root',
    children: [
      {
        name: 'first child',
        children: [],
      },
      {
        name: 'second child',
        children: [
          {
            name: 'first second child',
            children: [],
          }
        ],
      }
    ]
  }

  return (
    <Tree data={sampleData}/>
  )
}
