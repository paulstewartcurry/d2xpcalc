// Area level data straight from the text file.
// The text file's data comes from Epi MG's area level chart.
var rawAreaLevelsAndXP = [
    ["Blood Moor ",1,24,36,2100,67,21400],
    ["Den of Evil ",1,29,36,2600,79,43500],
    ["Cold Plains ",2,30,36,2500,68,27200],
    ["Cave Level 1 ",2,44,36,2500,77,39000],
    ["Cave Level 2 ",2,44,37,2700,78,40300],
    ["Burial Grounds ",3,39,36,2400,80,42200],
    ["Crypt ",3,39,37,2600,83,46100],
    ["Mausoleum ",3,39,37,2600,85,48600],
    ["Stony Field ",4,54,37,3700,68,38200],
    ["Tristram ",6,58,39,2900,76,35700],
    ["Underground Passage Level 1 ",4,53,37,2600,69,28000],
    ["Underground Passage Level 2 ",4,53,38,2800,83,46100],
    ["Dark Wood ",5,54,38,2400,68,23000],
    ["Black Marsh ",6,76,38,3600,69,35900],
    ["Hole Level 1 ",5,61,38,3000,80,45500],
    ["Hole Level 2 ",5,61,39,3200,81,46900],
    ["Tower Cellar Level 1 ",7,74,38,2600,75,33800],
    ["Tower Cellar Level 2 ",7,74,39,2800,76,35100],
    ["Tower Cellar Level 3 ",7,74,40,3000,77,36300],
    ["Tower Cellar Level 4 ",7,74,41,3200,78,37500],
    ["Tower Cellar Level 5 ",7,74,42,3500,79,38700],
    ["Tamoe Highland ",8,77,39,2900,69,26800],
    ["Pit Level 1 ",7,72,39,2700,85,44200],
    ["Pit Level 2 ",7,72,40,2900,85,44200],
    ["Monastery Gate ",8,76,40,3600,70,32700],
    ["Outer Cloister ",9,82,40,3200,70,29000],
    ["Barracks ",9,79,40,3200,70,29500],
    ["Jail Level 1 ",10,91,41,3300,71,29900],
    ["Jail Level 2 ",10,91,41,3300,71,29900],
    ["Jail Level 3 ",10,91,41,3300,71,29900],
    ["Inner Cloister ",10,82,41,3300,72,30700],
    ["Cathedral ",11,92,42,3900,72,34200],
    ["Catacombs Level 1 ",11,90,42,3700,72,32200],
    ["Catacombs Level 2 ",11,100,42,4000,73,35900],
    ["Catacombs Level 3 ",12,140,43,5200,73,44200],
    ["Catacombs Level 4 ",12,132,43,4700,73,40100],
    ["Sewers Level 1 ",13,144,43,4200,74,37200],
    ["Sewers Level 2",13,144,43,4200,74,37200],
    ["Sewers Level 3 ",14,118,44,4100,75,35300],
    ["Rocky Waste ",14,148,43,3800,75,34600],
    ["Stony Tomb Level 1 ",12,149,44,4700,78,44500],
    ["Stony Tomb Level 2 ",12,149,44,4700,79,45900],
    ["Dry Hills ",15,144,44,3900,76,34600],
    ["Halls of the Dead Level 1 ",12,143,44,6100,79,60000],
    ["Halls of the Dead Level 2 ",13,143,45,6900,81,67300],
    ["Halls of the Dead Level 3 ",13,143,45,6900,82,69300],
    ["Far Oasis ",16,189,45,5100,76,41700],
    ["Maggot Lair Level 1 ",17,203,45,4200,84,44100],
    ["Maggot Lair Level 2 ",17,203,45,4200,84,44100],
    ["Maggot Lair Level 3 ",17,203,46,4500,85,45300],
    ["Lost City ",17,204,46,5200,77,41100],
    ["Ancient Tunnels ",17,217,46,5600,85,57000],
    ["Valley of Snakes ",18,172,46,6100,77,48900],
    ["Claw Viper Temple Level 1 ",14,172,47,6500,82,57100],
    ["Claw Viper Temple Level 2 ",14,172,47,6500,83,58800],
    ["Harem Level 2",13,231,47,6200,78,47900],
    ["Palace Cellar Level 1 ",13,231,47,6200,78,47900],
    ["Palace Cellar Level 2",13,231,47,6200,78,47900],
    ["Palace Cellar Level 3",13,231,48,6600,78,47900],
    ["Arcane Sanctuary ",14,265,48,6700,79,49500],
    ["Canyon of the Magi ",16,235,48,4900,79,36300],
    ["Tal Rasha's Tomb (each)",17,318,49,10000,80,71900],
    ["Spider Forest ",21,262,49,5300,79,36900],
    ["Spider Cavern ",21,302,50,5600,79,36600],
    ["Arachnid Lair (Spider Cave) ",21,302,50,5600,79,36600],
    ["Great Marsh ",21,325,50,7900,80,53000],
    ["Flayer Jungle ",22,318,50,8400,80,56500],
    ["Swampy Pit Level 1 ",21,294,51,7800,80,48800],
    ["Swampy Pit Level 2 ",21,304,51,7900,81,50800],
    ["Swampy Pit Level 3 ",21,282,51,8000,82,53000],
    ["Flayer Dungeon Level 1 ",22,299,51,9500,81,61200],
    ["Flayer Dungeon Level 2 ",22,299,51,9500,82,63000],
    ["Flayer Dungeon Level 3 ",22,299,51,9500,83,64800],
    ["Lower Kurast ",22,322,52,6800,80,40500],
    ["Kurast Bazaar ",22,351,52,7200,81,43900],
    ["Ruined Temple ",23,421,53,9400,84,59200],
    ["Disused Fane ",23,421,53,9400,84,59200],
    ["Upper Kurast ",23,409,52,7500,81,45800],
    ["Forgotten Reliquary ",23,421,53,9400,84,59200],
    ["Forgotten Temple ",24,412,54,8500,85,51800],
    ["Sewers Level 1 ",23,322,52,9600,84,63500],
    ["Sewers Level 2 ",24,358,53,10300,85,66100],
    ["Kurast Causeway ",24,459,53,8900,81,51500],
    ["Ruined Fane ",24,412,54,8500,85,51800],
    ["Disused Reliquary ",24,412,54,8500,85,51800],
    ["Travincal ",24,451,54,10300,82,57700],
    ["Durance of Hate Level 1 ",25,450,55,11300,83,61200],
    ["Durance of Hate Level 2 ",25,450,55,11300,83,61200],
    ["Durance of Hate Level 3 ",25,531,55,13400,83,72700],
    ["Outer Steppes ",26,575,56,10400,82,51800],
    ["Plains of Despair ",26,560,56,10800,83,55100],
    ["City of the Damned ",27,634,57,11600,84,57300],
    ["River of Flame ",27,778,57,12100,85,61400],
    ["Chaos Sanctuary (Sanctum) ",28,738,58,14400,85,69100],
    ["Bloody Foothills ",24,873,58,10200,80,42600],
    ["Frigid Highlands ",25,2070,59,13300,81,54100],
    ["Abaddon (Hell1) ",39,1770,60,15500,81,59000],
    ["Arreat Plateau ",26,1250,60,13900,81,53200],
    ["Pit of Acheron (Hell2) ",39,1820,61,18000,82,66900],
    ["Crystalline Passage ",29,1900,61,15600,82,58100],
    ["Frozen River ",29,2030,61,14900,83,56900],
    ["Glacial Trail ",29,1980,61,14000,83,53500],
    ["Drifter Cavern ",29,1830,61,14800,84,58100],
    ["Frozen Tundra ",27,2310,60,13500,81,51600],
    ["Infernal Pit (Hell3) ",39,1530,62,18800,83,67900],
    ["Ancients' Way ",29,2360,62,14900,82,52400],
    ["Icy Cellar ",29,1980,62,15600,83,56300],
    ["Nihlathaks Temple ",32,2570,63,15000,83,50900],
    ["Halls of Anguish ",33,1830,63,16800,83,57200],
    ["Halls of Pain ",34,1680,64,21400,84,70600],
    ["Halls of Vaught ",36,2130,64,17100,84,56200],
    ["The Worldstone Keep Level 1 ",39,1840,65,23500,85,75200],
    ["The Worldstone Keep Level 2 ",40,3010,65,19100,85,61000],
    ["The Worldstone Keep Level 3 ",42,2860,66,23000,85,69700],
    ["Throne of Destruction ",43,3130,66,26900,85,81300]
];

// Create a new 4-column level list from the given raw (7-column) list.
// New format is: [Name, alvl, xp, difficulty]
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

// Sort function for two XP values.
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

// Common code for both scaling functions.
// Covers cases where the clvl is 6 or more than the alvl.
// That is, alvl - clvl < -5.
function lessThanNeg5(delta) {
    switch (delta) {
    case -6: return .81;
    case -7: return .62;
    case -8: return .43;
    case -9: return .24;
    default: return .05;
    }
}

// Scaling factor for clvls < 25.
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

// Scaling factor for clvls >= 25.
function greaterThan25(alvl, clvl) {
    var delta = alvl - clvl;
    if (delta > 0) return clvl / alvl;
    if (delta >= -5 && delta <= 0) return 1;
    return lessThanNeg5(delta);
}

// Returns an area level list with the experience scaled according
// to the player's level.
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
