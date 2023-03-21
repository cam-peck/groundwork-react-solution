import React, { useState } from 'react';
import Tree from './components/tree';
import { root } from './data';

export default function App() {
  return (
    <Tree {...root}/>
  )
}
