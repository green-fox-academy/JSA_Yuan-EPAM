function generateTable() {
    let body = document.getElementsByTagName("body")[0];
    let tb = document.createElement("table");
    let tbBody = document.createElement("tbody");

    for (let i = 0; i < 2; i++) {
        let row = document.createElement("tr");

        for (let j = 0; j < 2; j++) {
            let cell = document.createElement("td");
            let cellText = document.createTextNode("cell in row " + i + ", column " + j);
            cell.appendChild(cellText);
            row.appendChild(cell);
        }
        tbBody.appendChild(row);
    }

    tb.appendChild(tbBody);
    body.appendChild(tb);

    tb.setAttribute("border", "1");
}

function setBackground() {
    myBody = document.getElementsByTagName("body")[0];

    myBodyElements = myBody.getElementsByTagName("p");
    
    myP = myBodyElements[1];
    myP.style.background = "red";
}