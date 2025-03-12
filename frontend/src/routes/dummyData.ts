import type { ElementDefinition } from 'cytoscape';

export const dummyNodes: ElementDefinition[] = [
  {
    group: 'nodes',
    data: {
      id: '1',
      labels: ['Person'],
      properties: {
        born: 1964,
        name: 'Keanu Reeves',
      },
    },
  },
  {
    group: 'nodes',
    data: {
      id: '0',
      labels: ['Movie'],
      properties: {
        tagline: 'Welcome to the Real World',
        title: 'The Matrix',
        released: 1999,
      },
    },
  },
  {
    group: 'nodes',
    data: {
      id: '2',
      labels: ['Person'],
      properties: {
        born: 1967,
        name: 'Carrie-Anne Moss',
      },
    },
  },
  {
    group: 'nodes',
    data: {
      id: '3',
      labels: ['Person'],
      properties: {
        born: 1961,
        name: 'Laurence Fishburne',
      },
    },
  },
  {
    group: 'nodes',
    data: {
      id: '4',
      labels: ['Person'],
      properties: {
        born: 1960,
        name: 'Hugo Weaving',
      },
    },
  },
  {
    group: 'nodes',
    data: {
      id: '5',
      labels: ['Person'],
      properties: {
        born: 1967,
        name: 'Lilly Wachowski',
      },
    },
  },
  {
    group: 'nodes',
    data: {
      id: '6',
      labels: ['Person'],
      properties: {
        born: 1965,
        name: 'Lana Wachowski',
      },
    },
  },
  {
    group: 'nodes',
    data: {
      id: '7',
      labels: ['Person'],
      properties: {
        born: 1952,
        name: 'Joel Silver',
      },
    },
  },
  {
    group: 'nodes',
    data: {
      id: '8',
      labels: ['Person'],
      properties: {
        born: 1978,
        name: 'Emil Eifrem',
      },
    },
  },
  {
    group: 'nodes',
    data: {
      id: '9',
      labels: ['Movie'],
      properties: {
        tagline: 'Free your mind',
        title: 'The Matrix Reloaded',
        released: 2003,
      },
    },
  },
  {
    group: 'nodes',
    data: {
      id: '10',
      labels: ['Movie'],
      properties: {
        tagline: 'Everything that has a beginning has an end',
        title: 'The Matrix Revolutions',
        released: 2003,
      },
    },
  },
  {
    group: 'nodes',
    data: {
      id: '11',
      labels: ['Movie'],
      properties: {
        tagline: 'Evil has its winning ways',
        title: "The Devil's Advocate",
        released: 1997,
      },
    },
  },
  {
    group: 'nodes',
    data: {
      id: '12',
      labels: ['Person'],
      properties: {
        born: 1975,
        name: 'Charlize Theron',
      },
    },
  },
  {
    group: 'nodes',
    data: {
      id: '13',
      labels: ['Person'],
      properties: {
        born: 1940,
        name: 'Al Pacino',
      },
    },
  },
];

export const dummyEdges: ElementDefinition[] = [
  {
    group: 'edges',
    data: {
      id: '0',
      source: '1',
      target: '0',
      type: 'ACTED_IN',
      properties: {
        roles: ['Neo'],
      },
    },
  },
  {
    group: 'edges',
    data: {
      id: '1',
      source: '2',
      target: '0',
      type: 'ACTED_IN',
      properties: {
        roles: ['Trinity'],
      },
    },
  },
  {
    group: 'edges',
    data: {
      id: '2',
      source: '3',
      target: '0',
      type: 'ACTED_IN',
      properties: {
        roles: ['Morpheus'],
      },
    },
  },
  {
    group: 'edges',
    data: {
      id: '3',
      source: '4',
      target: '0',
      type: 'ACTED_IN',
      properties: {
        roles: ['Agent Smith'],
      },
    },
  },
  {
    group: 'edges',
    data: {
      id: '4',
      source: '5',
      target: '0',
      type: 'DIRECTED',
      properties: {},
    },
  },
  {
    group: 'edges',
    data: {
      id: '5',
      source: '6',
      target: '0',
      type: 'DIRECTED',
      properties: {},
    },
  },
  {
    group: 'edges',
    data: {
      id: '6',
      source: '7',
      target: '0',
      type: 'PRODUCED',
      properties: {},
    },
  },
  {
    group: 'edges',
    data: {
      id: '7',
      source: '8',
      target: '0',
      type: 'ACTED_IN',
      properties: {
        roles: ['Emil'],
      },
    },
  },
  {
    group: 'edges',
    data: {
      id: '8',
      source: '1',
      target: '9',
      type: 'ACTED_IN',
      properties: {
        roles: ['Neo'],
      },
    },
  },
  {
    group: 'edges',
    data: {
      id: '9',
      source: '2',
      target: '9',
      type: 'ACTED_IN',
      properties: {
        roles: ['Trinity'],
      },
    },
  },
  {
    group: 'edges',
    data: {
      id: '10',
      source: '3',
      target: '9',
      type: 'ACTED_IN',
      properties: {
        roles: ['Morpheus'],
      },
    },
  },
  {
    group: 'edges',
    data: {
      id: '11',
      source: '4',
      target: '9',
      type: 'ACTED_IN',
      properties: {
        roles: ['Agent Smith'],
      },
    },
  },
  {
    group: 'edges',
    data: {
      id: '12',
      source: '5',
      target: '9',
      type: 'DIRECTED',
      properties: {},
    },
  },
  {
    group: 'edges',
    data: {
      id: '13',
      source: '6',
      target: '9',
      type: 'DIRECTED',
      properties: {},
    },
  },
  {
    group: 'edges',
    data: {
      id: '14',
      source: '7',
      target: '9',
      type: 'PRODUCED',
      properties: {},
    },
  },
  {
    group: 'edges',
    data: {
      id: '15',
      source: '1',
      target: '10',
      type: 'ACTED_IN',
      properties: {
        roles: ['Neo'],
      },
    },
  },
  {
    group: 'edges',
    data: {
      id: '16',
      source: '2',
      target: '10',
      type: 'ACTED_IN',
      properties: {
        roles: ['Trinity'],
      },
    },
  },
  {
    group: 'edges',
    data: {
      id: '17',
      source: '3',
      target: '10',
      type: 'ACTED_IN',
      properties: {
        roles: ['Morpheus'],
      },
    },
  },
  {
    group: 'edges',
    data: {
      id: '18',
      source: '4',
      target: '10',
      type: 'ACTED_IN',
      properties: {
        roles: ['Agent Smith'],
      },
    },
  },
  {
    group: 'edges',
    data: {
      id: '19',
      source: '5',
      target: '10',
      type: 'DIRECTED',
      properties: {},
    },
  },
  {
    group: 'edges',
    data: {
      id: '20',
      source: '6',
      target: '10',
      type: 'DIRECTED',
      properties: {},
    },
  },
  {
    group: 'edges',
    data: {
      id: '21',
      source: '7',
      target: '10',
      type: 'PRODUCED',
      properties: {},
    },
  },
  {
    group: 'edges',
    data: {
      id: '22',
      source: '1',
      target: '11',
      type: 'ACTED_IN',
      properties: {
        roles: ['Kevin Lomax'],
      },
    },
  },
  {
    group: 'edges',
    data: {
      id: '23',
      source: '12',
      target: '11',
      type: 'ACTED_IN',
      properties: {
        roles: ['Mary Ann Lomax'],
      },
    },
  },
  {
    group: 'edges',
    data: {
      id: '24',
      source: '13',
      target: '11',
      type: 'ACTED_IN',
      properties: {
        roles: ['John Milton'],
      },
    },
  },
];
