function createTable(rows, cols) {
    let table = document.createElement("table");
    let count = 1;

    for (let i = 0; i < rows; i++) {
        let row = document.createElement("tr");

        for (let j = 0; j < cols; j++) {
            let column = document.createElement("td");
            column.innerHTML = count;
            count++;
            row.appendChild(column);
        }

        table.appendChild(row);
    }

    document.body.appendChild(table);
}

window.addEventListener("load", function() {
    createTable(10, 10);
});

