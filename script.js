var length = prompt("Enter Length");
length = parseFloat(length);

var width = prompt("Enter Width");
width = parseFloat(width);

var area = length * width;
var perimeter = (2 * length) + (2 * width);

document.write("<h1> Area and Perimeter App</h1>" +
"Length = " + length + "<br>" +
"Width = " + width + "<br>" +
"Area = " + area + "<br>" +
"Perimeter = " + perimeter + "<br><br>");