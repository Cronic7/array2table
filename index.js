
function buildTable(data) {
  if(!Array.isArray(data)){
    return 'Invalid input. Please provide an array.';
  }
  if (data.length === 0) {
    return 'Error: The array is empty. Please provide data.';
  }

  for (let i = 0; i < data.length; i++) {
    if (!Array.isArray(data[i])) {
      return `Error: Invalid input. Element at index ${i} is not an array.`;
    }
  }
  const lines = [];

  // Generate the header line
  lines.push(createTableRow(data[0]));

  // Generate the separator line
  lines.push(createTableSeparator(data[0]));

  // Generate the data rows
  for (let i = 1; i < data.length; i++) {
    lines.push(createTableRow(data[i]));
  }

  return lines.join('\n');
}

function createTableRow(rowData) {
  return '| ' + rowData.map(cell => padRight(cell.toString(), 10)).join(' | ') + ' |';
}

function createTableSeparator(rowData) {
  return '+-' + rowData.map(() => '----------').join('-+-') + '-+';
}

function padRight(str, length) {
  return (str + ' '.repeat(length)).slice(0, length);
}


module.exports =buildTable