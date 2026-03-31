const container = document.querySelector(".container");

const table = document.createElement("table");

for (let i = 1; i <= 10; i++) {
  const tableRow = document.createElement("tr");

  for (let j = 1; j <= 10; j++) {
    const tableCell = document.createElement("td");
    tableCell.textContent = i * j;
    tableRow.appendChild(tableCell);
  }

  table.appendChild(tableRow);
}

container.appendChild(table);