import React, { useState } from 'react';
import Tree from './components/tree';
import { root } from './data';
import Header from './components/header';

export default function App() {
  return (
    <main className="max-w-6xl pl-8">
      <Header />
      <Tree {...root}/>
    </main>
  )
}
