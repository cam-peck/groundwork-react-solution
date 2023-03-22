import React from 'react';
import {useSortable} from '@dnd-kit/sortable';
import {CSS} from '@dnd-kit/utilities';
import Tree from './tree';
import { DataNode } from '../data';
interface SortableItemProps {
  id: string
  key: string,
  children: DataNode[] | []
}

export function SortableItem(props: SortableItemProps) {
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
  } = useSortable({id: props.id});
  
  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };
  
  return (
    <div style={style} ref={setNodeRef} {...attributes} {...listeners}>
      <Tree name={props.id} children={props.children}/>
    </div>
  );
}
