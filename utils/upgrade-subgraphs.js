const concurrently = require('concurrently');
const path = require('path');

concurrently(
  [
    {
      command: 'npm install @apollo/subgraph@2.1.3 graphql@16.6.0',
      name: 'locations',
      cwd: path.resolve(__dirname, '../subgraph-locations'),
      prefixColor: 'blue',
    },
    {
      command: 'npm install @apollo/subgraph@2.1.3 graphql@16.6.0',
      name: 'activities',
      cwd: path.resolve(__dirname, '../subgraph-activities'),
      prefixColor: 'magenta',
    },
    {
      command: 'npm install @apollo/subgraph@2.1.3 graphql@16.6.0',
      name: 'reviews',
      cwd: path.resolve(__dirname, '../subgraph-reviews'),
      prefixColor: 'green',
    },
  ],
  {
    prefix: 'name',
    restartTries: 3,
  }
);