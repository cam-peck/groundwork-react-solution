import React, { useState } from 'react';
import { DataNode } from '../data';
import {
  DndContext, 
  closestCenter,
  useSensor,
  useSensors,
  DragEndEvent,
  DragStartEvent,
  DragOverlay
} from '@dnd-kit/core';
import {
  arrayMove,
  rectSortingStrategy,
  SortableContext,
  sortableKeyboardCoordinates,
} from '@dnd-kit/sortable';

import { KeyboardSensor, MouseSensor } from './CustomSensors';
import {SortableItem} from './SortableItem';

export default function Tree({ name, children }: DataNode) {
  
  const [value, setValue] = useState('')
  const [nodeChildren, setNodeChildren] = useState(children); // using this instead of dndkit [items, setItems] hook
  const [activeItem, setActiveItem] = useState<DataNode | undefined>(undefined);
  const [duplicateError, setDuplicateError] = useState(false);

  const sensors = useSensors(
    useSensor(MouseSensor),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    })
  );

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      for (let i = 0; i < nodeChildren.length; i++) {
        if (nodeChildren[i].name === value) {
          setDuplicateError(true);
          setTimeout(() => {
            setDuplicateError(false)
          }, 5000)
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

  const handleDragStart = (event: DragStartEvent) => {
    const { active } = event;
    setActiveItem(nodeChildren.find(child => child.name === active.id))
  }

  const handleDragCancel = () => {
    setActiveItem(undefined)
  }

  const handleDragEnd = (event: DragEndEvent) => {
    const { active, over } = event
    if (!over) return
    const activeItem = nodeChildren.find((item) => item.name === active.id)
    const overItem = nodeChildren.find((item) => item.name === over.id)
    if (!activeItem || !overItem) {
      return
    }
    const activeIndex = nodeChildren.findIndex((item) => item.name === active.id)
    const overIndex = nodeChildren.findIndex((item) => item.name === over.id)

    if (activeIndex !== overIndex) {
      setNodeChildren((prev) => arrayMove(prev, activeIndex, overIndex))
    }
  }

  const duplicateErrorText = <p className="text-red-500 italic">A node with that name already exists.</p>

  return (
    <section className="pl-6 w-full mb-2">
      {/* Node */}
      <div>
        <h4>{name}</h4>
        <input data-no-dnd={true} onDragStart={e => {e.preventDefault(); e.stopPropagation();}} onChange={e => { setValue(e.target.value)}} value={value} onKeyDown={event => handleKeyDown(event)} className="border border-blue-500 rounded-md pl-2 pt-1 pb-1 w-full" type="text" placeholder='Add Child'/>
        { duplicateError && duplicateErrorText }
      </div>
      {/* Node's Children */}
      <div className="relative flex flex-col top-2 pl-8">
        <DndContext collisionDetection={closestCenter} onDragEnd={handleDragEnd} onDragStart={handleDragStart} onDragCancel={handleDragCancel} sensors={sensors}>
          <SortableContext items={nodeChildren} strategy={rectSortingStrategy}>
            { 
              nodeChildren.map((node: DataNode) => <SortableItem key={node.name} id={node.name} children={node.children} isDragging={false} isOpacityEnabled={false} />) 
            }
          </SortableContext>
          <DragOverlay>
              {activeItem ? <SortableItem key={activeItem.name} id={activeItem.name} children={activeItem.children} isDragging isOpacityEnabled/> : null}
            </DragOverlay>
        </DndContext>
      </div>
    </section>
  )
}

