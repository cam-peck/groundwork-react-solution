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

export const veryFullRoot: DataNode = {
  name: 'root',
  children: [
    {
      name: 'first child',
      children: [
        {
          name: 'first first child',
          children: [
            {
              name: 'Super nested child 1!',
              children: [
                {
                  name: 'Super extra nested child 1!',
                  children: [],
                },
              ],
            },
          ],
        },
        {
          name: 'first second child',
          children: [
            {
              name: 'Child here!',
              children: [],
            },
          ],
        },
        {
          name: 'first third child',
          children: [],
        },
      ],
    },
    {
      name: 'second child',
      children: [
        {
          name: 'first second child',
          children: [],
        },
        {
          name: 'Child here!',
          children: [],
        },
        {
          name: 'Another here!',
          children: [],
        },
      ],
    }
  ]
}

