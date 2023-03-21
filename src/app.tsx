import React, { useState } from 'react';
import Tree from './components/tree';
import { root } from './data';
import Header from './components/header';
import { DndContext } from '@dnd-kit/core';

export default function App() {
  return (
    <main className="max-w-6xl mx-auto">
      <Header />
      <DndContext>
        <Tree {...root}/>
      </DndContext>
    </main>
  )
}
