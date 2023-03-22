export interface DataNode {
  name: string
  children: DataNode[] | []
}

// when adding or removing data, always leave **at least** the root intact, see below //
// 
// export const root: DataNode = {
//   name: 'root',
//   children: [],
// }

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

