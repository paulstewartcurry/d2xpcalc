var areaLevelsAndXP = [
    ["Blood Moor ",1,24,36,2100,67,21400],
    ["Den of Evil ",1,29,36,2600,79,43500],
    ["Cold Plains ",2,30,36,2500,68,27200],
    ["Cave Level 1 ",2,44,36,2500,77,39000],
    ["Cave Level 2 ",2,44,37,2700,78,40300],
    ["Burial Grounds ",3,39,36,2400,80,42200],
    ["Crypt ",3,39,37,2600,83,46100]
];

function makeTable() {
    var tableDiv = document.getElementById("table");
    var tableText = "<table>";
    for (row in areaLevelsAndXP) {
        tableText += "<tr>";
        for (col in areaLevelsAndXP[row]) {
            tableText += "<td>" + areaLevelsAndXP[row][col] + "</td>";
        }
        tableText += "</tr>";
    }
    tableText += "</table>";
    tableDiv.innerHTML = tableText;
}

