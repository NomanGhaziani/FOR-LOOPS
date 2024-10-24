var timeSelection;
(function (timeSelection) {
    timeSelection["morning"] = "9 to 12";
    timeSelection["afternon"] = "2 to 5";
    timeSelection["evening"] = "7 to 10";
})(timeSelection || (timeSelection = {}));
var value = timeSelection.evening;
console.log(value);
var student;
(function (student) {
    student["noman"] = "004150";
    student["bilal"] = "004161";
    student["akbar"] = "004149";
})(student || (student = {}));
var value1 = student.noman;
console.log(value1);
var a = 1;
while (a <= 100) {
    console.log("student".concat(a, "work"));
    a++;
    if (a === 50) {
        break;
    }
}
var i = 1;
while (i < 11) {
    console.log("4 * ".concat(i, " = ").concat(i * 4, " :"));
    i++;
}
for (var a_1 = 1; a_1 <= 100; a_1++) {
    console.log("student".concat(a_1, "work"));
    if (a_1 === 50) {
        break;
    }
}
var fruit = ["apple", "mango", "banana", "lychee", "grap", "orange"];
for (var i_1 = 0; i_1 < fruit.length; i_1++) {
    console.log(fruit[i_1]);
}
