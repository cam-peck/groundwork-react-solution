export interface DataNode {
  name: string
  children: DataNode[] | []
}

export const root: DataNode = {
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

