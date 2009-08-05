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

// Create a new 3-column level list from the given raw (7-column) list.
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

function lessThanNeg5(delta) {
    switch (delta) {
    case -6: return .81;
    case -7: return .62;
    case -8: return .43;
    case -9: return .24;
    default: return .05;
    }
}

function lessThan25(alvl, clvl) {
    var delta = alvl - clvl;
    if (delta >= 10) return .05;
    if (delta == 9) return .15;
    if (delta == 8) return .36;
    if (delta == 7) return .68;
    if (delta == 6) return .88;
    if (delta >= -5 && delta <= 5) return 1;
    return lessThanNeg5(delta);
}

function greaterThan25(alvl, clvl) {
    var delta = alvl - clvl;
    if (delta > 0) return clvl / alvl;
    if (delta >= -5 && delta <= 0) return 1;
    return lessThanNeg5(delta);
}

function scaleXP(alist, level) {
    var scaled = new Array();
    for (area in alist) {
        scaled[area] = alist[area];
        if (level <= 24)
            scaled[area][2] *= lessThan25(alist[area][1], level);
        else
            scaled[area][2] *= greaterThan25(alist[area][1], level);
        scaled[area][2] = Math.round(scaled[area][2]);
    }
    return scaled;
}

// main() function
function calc() {
    var level = parseInt(document.getElementById("levelField").value);
    var range = parseInt(document.getElementById("rangeField").value);
    var filtered = rangeFilter(splitAreaLevels(rawAreaLevelsAndXP), level, range);
    var adjustedXP = scaleXP(filtered, level);
    adjustedXP.sort(sortXP);
    adjustedXP.reverse();
    makeTable(adjustedXP);
}
