// Area level data straight from the text file.
// The text file's data comes from Epi MG's area level chart.
var rawAreaLevelsAndXP = [
    ["Blood Moor", 1, 24, 36, 2054, 67, 21386],
    ["Den of Evil", 1, 38, 36, 3210, 79, 53801],
    ["Cave Level 1", 2, 44, 36, 2482, 77, 38978],
    ["Cave Level 2", 2, 44, 37, 2653, 78, 40292],
    ["Cold Plains", 2, 37, 36, 2889, 68, 31603],
    ["Burial Grounds", 3, 39, 36, 2439, 80, 42180],
    ["Crypt", 3, 39, 37, 2607, 83, 46053],
    ["Mausoleum", 3, 39, 37, 2607, 85, 48635],
    ["Stony Field", 4, 55, 37, 3733, 68, 38205],
    ["Underground Passage Level 1", 4, 54, 37, 2607, 69, 27978],
    ["Underground Passage Level 2", 4, 54, 38, 2792, 83, 46053],
    ["Dark Wood", 5, 54, 38, 2409, 68, 23035],
    ["Hole Level 1", 5, 61, 38, 3012, 80, 45510],
    ["Hole Level 2", 5, 61, 39, 3222, 81, 46902],
    ["Black Marsh", 6, 88, 38, 4139, 69, 41476],
    ["Tristram", 6, 67, 39, 3301, 76, 40912],
    ["Pit Level 1", 7, 72, 39, 2711, 85, 44155],
    ["Pit Level 2", 7, 72, 40, 2902, 85, 44155],
    ["Tower Cellar Level 1", 7, 75, 38, 2645, 75, 33844],
    ["Tower Cellar Level 2", 7, 75, 39, 2829, 76, 35067],
    ["Tower Cellar Level 3", 7, 75, 40, 3028, 77, 36290],
    ["Tower Cellar Level 4", 7, 75, 41, 3240, 78, 37513],
    ["Tower Cellar Level 5", 7, 75, 42, 3466, 79, 38736],
    ["Monastery Gate", 8, 76, 40, 3575, 70, 32735],
    ["Tamoe Highland", 8, 77, 39, 2861, 69, 26800],
    ["Barracks", 9, 90, 40, 3634, 70, 33274],
    ["Outer Cloister", 9, 96, 40, 3659, 70, 33505],
    ["Inner Cloister", 10, 82, 41, 3300, 72, 30734],
    ["Jail Level 1", 10, 91, 41, 3348, 71, 29917],
    ["Jail Level 2", 10, 91, 41, 3348, 71, 29917],
    ["Jail Level 3", 10, 91, 41, 3348, 71, 29917],
    ["Catacombs Level 1", 11, 102, 42, 4494, 72, 39116],
    ["Catacombs Level 2", 11, 119, 42, 4943, 73, 44771],
    ["Cathedral", 11, 107, 42, 4879, 72, 42468],
    ["Catacombs Level 3", 12, 140, 43, 5219, 73, 44190],
    ["Catacombs Level 4", 12, 133, 43, 4739, 73, 40120],
    ["Halls of the Dead Level 1", 12, 188, 44, 7583, 79, 74030],
    ["Stony Tomb Level 1", 12, 149, 44, 4702, 78, 44460],
    ["Stony Tomb Level 2", 12, 149, 44, 4702, 79, 45910],
    ["Halls of the Dead Level 2", 13, 188, 45, 8114, 81, 78705],
    ["Halls of the Dead Level 3", 13, 188, 45, 8114, 82, 81042],
    ["Harem Level 2", 13, 231, 47, 6212, 78, 47934],
    ["Palace Cellar Level 1 ", 13, 231, 47, 6212, 78, 47934],
    ["Palace Cellar Level 2", 13, 231, 47, 6212, 78, 47934],
    ["Palace Cellar Level 3", 13, 231, 48, 6650, 78, 47934],
    ["Sewers Level 1", 13, 145, 43, 4224, 74, 37152],
    ["Sewers Level 2", 13, 145, 43, 4224, 74, 37152],
    ["Arcane Sanctuary", 14, 265, 48, 6650, 79, 49497],
    ["Claw Viper Temple Level 1", 14, 204, 47, 7202, 82, 62824],
    ["Claw Viper Temple Level 2", 14, 204, 47, 7202, 83, 64636],
    ["Rocky Waste", 14, 148, 43, 3791, 75, 34596],
    ["Sewers Level 3", 14, 119, 44, 4133, 75, 35254],
    ["Dry Hills", 15, 144, 44, 3912, 76, 34580],
    ["Canyon of the Magi", 16, 271, 48, 6129, 79, 45623],
    ["Far Oasis", 16, 220, 45, 6510, 76, 53770],
    ["Ancient Tunnels", 17, 218, 46, 5619, 85, 56954],
    ["Duriel's Lair", 17, 345, 49, 10692, 80, 76748],
    ["Lost City", 17, 204, 46, 5152, 77, 41129],
    ["Maggot Lair Level 1", 17, 235, 45, 5284, 84, 55816],
    ["Maggot Lair Level 2", 17, 235, 45, 5284, 84, 55816],
    ["Maggot Lair Level 3", 17, 235, 46, 5657, 85, 57338],
    ["Tal Rasha's Tomb", 17, 345, 49, 10692, 80, 76748],
    ["Tal Rasha's Tomb", 17, 345, 49, 10692, 80, 76748],
    ["Tal Rasha's Tomb", 17, 345, 49, 10692, 80, 76748],
    ["Tal Rasha's Tomb", 17, 345, 49, 10692, 80, 76748],
    ["Tal Rasha's Tomb", 17, 345, 49, 10692, 80, 76748],
    ["Tal Rasha's Tomb", 17, 345, 49, 10692, 80, 76748],
    ["Tal Rasha's Tomb", 17, 345, 49, 10692, 80, 76748],
    ["Valley of Snakes", 18, 204, 46, 6734, 77, 53764],
    ["Great Marsh", 21, 354, 50, 8768, 80, 58830],
    ["Spider Cave", 21, 353, 50, 7081, 79, 46053],
    ["Spider Cavern", 21, 353, 50, 7081, 79, 46053],
    ["Spider Forest", 21, 262, 49, 5361, 79, 37302],
    ["Swampy Pit Level 1", 21, 294, 51, 7788, 80, 48840],
    ["Swampy Pit Level 2", 21, 305, 51, 7858, 81, 50792],
    ["Swampy Pit Level 3", 21, 282, 51, 7965, 82, 53007],
    ["Flayer Dungeon Level 1", 22, 300, 51, 9469, 81, 61202],
    ["Flayer Dungeon Level 2", 22, 300, 51, 9469, 82, 63020],
    ["Flayer Dungeon Level 3", 22, 300, 51, 9469, 83, 64837],
    ["Flayer Jungle", 22, 327, 50, 8792, 80, 58988],
    ["Kurast Bazaar", 22, 364, 52, 7506, 81, 45759],
    ["Lower Kurast", 22, 322, 52, 6849, 80, 40515],
    ["Disused Fane", 23, 421, 53, 9447, 84, 59180],
    ["Forgotten Reliquary", 23, 421, 53, 9447, 84, 59180],
    ["Ruined Temple", 23, 421, 53, 9447, 84, 59180],
    ["Sewers Level 1", 23, 358, 52, 10208, 84, 67776],
    ["Upper Kurast", 23, 420, 52, 7881, 81, 48046],
    ["Bloody Foothills", 24, 873, 58, 10951, 80, 45668],
    ["Disused Reliquary", 24, 412, 54, 8540, 85, 51834],
    ["Forgotten Temple", 24, 412, 54, 8540, 85, 51834],
    ["Kurast Causeway", 24, 466, 53, 9812, 81, 56436],
    ["Ruined Fane", 24, 412, 54, 8540, 85, 51834],
    ["Sewers Level 2", 24, 401, 53, 10979, 85, 70649],
    ["Travincal", 24, 456, 54, 11527, 82, 64394],
    ["Durance of Hate Level 1", 25, 450, 55, 11289, 83, 61202],
    ["Durance of Hate Level 2", 25, 450, 55, 11289, 83, 61202],
    ["Durance of Hate Level 3", 25, 531, 55, 13413, 83, 72715],
    ["Rigid Highlands", 25, 2070, 59, 21443, 81, 86942],
    ["Arreat Plateau", 26, 1246, 60, 12263, 81, 46902],
    ["Outer Steppes", 26, 616, 56, 11530, 82, 57326],
    ["Plains of Despair", 26, 598, 56, 11925, 83, 61000],
    ["City of the Damned", 27, 662, 57, 12626, 84, 62650],
    ["River of Flame", 27, 855, 57, 13344, 85, 68016],
    ["Tundra Wastelands", 27, 2309, 60, 22731, 81, 86942],
    ["Chaos Sanctum", 28, 907, 58, 16857, 85, 81058],
    ["Moo Moo Farm", 28, 806, 64, 12083, 81, 36607],
    ["Cellar of Pity", 29, 2032, 61, 12891, 83, 49284],
    ["Crystalized Cavern Level 1", 29, 1904, 61, 17752, 82, 65965],
    ["Crystalized Cavern Level 2", 29, 1983, 61, 13948, 83, 53324],
    ["Echo Chamber", 29, 1832, 61, 12680, 84, 49836],
    ["Glacial Caves Level 1", 29, 2360, 62, 19490, 82, 68321],
    ["Glacial Caves Level 2", 29, 1983, 62, 13666, 83, 49284],
    ["Halls of Anguish", 33, 1831, 63, 22442, 83, 76351],
    ["Halls of Death's Calling", 34, 1680, 64, 16110, 84, 53158],
    ["Halls of Vaught", 36, 2127, 64, 14097, 84, 46513],
    ["Rocky Summit", 37, 0, 68, 0, 87, 0],
    ["Hell1", 39, 1767, 60, 19740, 81, 75502],
    ["Hell2", 39, 1818, 61, 21239, 82, 78922],
    ["Hell3", 39, 1353, 62, 16466, 83, 59384],
    ["The Worldstone Keep Level 1", 39, 1842, 65, 19212, 85, 61434],
    ["The Worldstone Keep Level 2", 40, 3005, 65, 12007, 85, 38396],
    ["The Worldstone Keep Level 3", 42, 2861, 66, 24810, 85, 75086],
    ["Throne of Destruction", 43, 3125, 66, 30025, 85, 90871],
    ["Pandemonium Run 1", 50, 1038, 75, 25822, 83, 91621],
    ["Pandemonium Run 2", 50, 430, 75, 25383, 83, 98165],
    ["Pandemonium Run 3", 50, 1284, 75, 36664, 83, 141795]
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
    tableText += "<tr><th>area</th><th>alvl</th>" +
                 "<th>average xp</th><th>difficulty</th></tr>";
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
