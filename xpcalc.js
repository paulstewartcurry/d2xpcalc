// Area level data straight from the text file.
// The text file's data comes from Epi MG's area level chart.
var rawAreaLevelsAndXP = [
    ["Blood Moor ",1,24,36,2100,67,21400],
    ["Den of Evil ",1,29,36,2600,79,43500],
    ["Cold Plains ",2,30,36,2500,68,27200],
    ["Cave Level 1 ",2,44,36,2500,77,39000],
    ["Cave Level 2 ",2,44,37,2700,78,40300],
    ["Burial Grounds ",3,39,36,2400,80,42200],
    ["Crypt ",3,39,37,2600,83,46100]
];

// Create a new two-column level list from the given raw (7-column) list.
function splitAreaLevels(alist) {
    var newList = new Array();
    var nrow = 0;
    for (row in alist) {
        newList[nrow++] = new Array(alist[row][0],
                                    alist[row][1], alist[row][2], "N");
        newList[nrow++] = new Array(alist[row][0],
                                    alist[row][3], alist[row][4], "NM");
        newList[nrow++] = new Array(alist[row][0],
                                    alist[row][5], alist[row][6], "H");
    }
    return newList;
}

// Create the HTML table from the given list, and write it to the document.
function makeTable(list) {
    var tableDiv = document.getElementById("table");
    var tableText = "<table border=\"1\">";
    tableText += "<tr><td>Area</td><td>alvl</td>" +
                 "<td>average xp</td><td>difficulty</td></tr>";
    for (row in list) {
        tableText += "<tr>";
        for (col in list[row]) {
            tableText += "<td>" + list[row][col] + "</td>";
        }
        tableText += "</tr>";
    }
    tableText += "</table>";
    tableDiv.innerHTML = tableText;
}

// TODO: should sort by ACTUAL avg experience (depends on clvl)
function sortXP(a, b) {
    return a[2] - b[2];
}

// Filters out all areas that aren't between (alvl - range) and (alvl + range)
function rangeFilter(alist, level, range) {
    var filtered = new Array();
    var nrow = 0;
    for (row in alist) {
        if (alist[row][1] >= level - range &&
            alist[row][1] <= level + range) {
            filtered[nrow++] = alist[row];
       }
    }
    return filtered;
}

// generic "do-it" function
// TODO: replace with something more appropriate.
function calc() {
    var level = parseInt(document.getElementById("levelField").value);
    var range = parseInt(document.getElementById("rangeField").value);
    var list = rangeFilter(splitAreaLevels(rawAreaLevelsAndXP), level, range);
    list.sort(sortXP);
    list.reverse();
    makeTable(list);
}
