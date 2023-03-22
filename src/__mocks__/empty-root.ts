export interface DataNode {
  name: string
  children: DataNode[] | []
}

export const emptyRoot: DataNode = {
  name: 'root',
  children: []
}

