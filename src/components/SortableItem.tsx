import React, { CSSProperties } from 'react';
import {useSortable} from '@dnd-kit/sortable';
import {CSS} from '@dnd-kit/utilities';
import Tree from './tree';
import { DataNode } from '../data';
interface SortableItemProps {
  id: string
  key: string,
  children: DataNode[] | [],
  isOpacityEnabled: boolean,
  isDragging: boolean
}

export function SortableItem(props: SortableItemProps) {
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
  } = useSortable({id: props.id});

  const { isDragging, isOpacityEnabled } = props;
  
  const style: CSSProperties = {
    transform: CSS.Transform.toString(transform),
    transition: transition || undefined,
    opacity: isOpacityEnabled ? "0.4" : "1",
    cursor: isDragging ? "grabbing" : "grab",
  };
  
  return (
    <div style={style} ref={setNodeRef} {...attributes} {...listeners}>
      <Tree name={props.id} children={props.children}/>
    </div>
  );
}
