# array2table 🚀

## Description

`array2table` is an npm package that takes a 2D array data and converts it into a table format.

## Installation

You can install the package using npm:

```bash
npm install array2table
```

## Usage

```
const array2table = require('array2table');

// Example data
const data = [
  ['Header1', 'Header2', 'Header3'],
  [1, 'Data A', 10],
  [2, 'Data B', 20],
  // ... add more data as needed
];

const table = array2table(data);
console.log(table);

```

## Output

```
| Header1   | Header2   | Header3   |
+-----------+-----------+-----------+
| 1         | Data A    | 10        |
| 2         | Data B    | 20        |

```


## Author
# Cronic7 🧑‍💻