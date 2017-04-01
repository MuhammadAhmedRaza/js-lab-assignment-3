
document.write("Question:1. Declare an empty array using JS literal notation to store student names in<br /> <br />");
var studentName =[];

document.write("Question:2 Declare an empty array using JS object notation to store student names in future.<br /><br />");
var studentName = new Array();

document.write("Question:3 Declare and initialize a strings<br /><br />");
var arrayString = ["Hello","World","Osama"];

document.write("Question:4 Declare and initialize a numbers array.<br /><br />");
var arrayNumbers = [1,2,3,4,5];

document.write("Question:5 Declare and initialize a boolean array.<br /><br />");
var arrayBoolean = [true,false];

document.write("Question:6 Declare and initialize a mixed array<br /><br />")
var arrayMixed = [false,"ahmed raza",5002];

document.write("Question:7. Declare and Initialize an array and store available mobile networks in Pakistan.<br /><br />");
var mobileNetworks = ["warid","zong","Telenor","Warid","mobilink"];

document.write("Question:8. Declare and Initialize an array and store available education qualifications in Pakistan (e.g. SSC, HSC, BCS, BS, BCOM, MS, M. Phil., PhD). Show the listed qualifications in your browser like:<br /><br />");
 var qualification = ["SSC", "HSC", "BCS", "BS", "BCOM", "MS",
"M. Phil.", "PhD"];

document.write("Qualification: <br /><br />");
for(var i=0;i<qualification.length;i++)
{
document.write(i+1+" ) " +qualification[i]+ "<br />");
}

document.write("Question:9. Declare and initialize an empty array to store top movies of 2015. Add movies one by one in an array. Display the elements & length of array in your browser. (Use array’s length method) <br /><br />");
var topMovies =[];
topMovies.push("Avengers: Age of Ultron");
topMovies.push("Spectre");
topMovies.push("Jurassic World");
topMovies.push("Inside Out");
document.write("Top Movies of 2015: <br /><br />");
for(var i=0;i<topMovies.length;i++)
{
document.write(i+1+ " ) " +topMovies[i]+ "<br />");
}
document.write("<br />Length of Array: "+topMovies.length);

document.write("Question:10. Declare and Initialize an array with your favorite cars.  Show a. First index of the array  b. Car at first index of the array c. Last index of the array <br /><br />");
var cars =["Fortuner","Prado","DOUBLE CABIN","cIVIC 2017"];
document.write("Favourite Cars: <br /><br />");
for(var i=0;i<cars.length;i++)
{
document.write(cars[i]+ ",");
}
var lastIndex =cars.length-1;
document.write("<br />First index of the array: "+0);
document.write("<br />Car at first index of the array: "+cars[0]);
document.write("<br />Last index of the array: "+((cars.length)-1));
document.write("<br />Car at last index of the array: "+cars[lastIndex]);

document.write("Question:11 Write a program to store 3 student names in an array. Take another array to store score of these three students. Assume that total marks are 500 for each student, display the scores & percentages of students like:<br /><br />");
var student = ["Michael","John","Tony"];
var score = [320,230,480];
var totalMarks = 500;
for(var i=0;i<student.length;i++)
{
document.write("<br />Score of " +student[i]+ " is "+score[i]+ ". Percentage is "+(score[i]/totalMarks)*100 + " %");

}

// Question 12
var colors = ["Red","Yellow","Green"];
for(var i=0;i<colors.length;i++)
{
document.write(colors[i]+ ",");
}
colors.unshift(prompt("what color u wants to add to the beginning"));
document.write("<br><br> <b>Updated Array: Element Add in the beginning</b> <br>");
for(var i=0;i<colors.length;i++)
{
document.write(colors[i]+ ",");
}
colors.push(prompt("what color u wants to add to the end"));
document.write("<br><br> <b>Updated Array: Element Add in the End </b><br>");
for(var i=0;i<colors.length;i++)
{
document.write(colors[i]+ ",");
}
colors.unshift(prompt("Add Color in the Beggining"));
colors.unshift(prompt("AGAIN Add Color in the Beggining"));
document.write("<br><br> <b/>Updated Array: Element Add in the beginning</b> <br>");
for(var i=0;i<colors.length;i++)
{
document.write(colors[i]+ ",");
}
colors.shift();
document.write("<br><br><b> Updated Array: Deleted First Color</b><br>");
for(var i=0;i<colors.length;i++)
{
document.write(colors[i]+ ",");
}
colors.pop();
document.write("<br><br> <b>Updated Array: Deleted Last Color</b><br>");
for(var i=0;i<colors.length;i++)
{
document.write(colors[i]+ ",");
}
var index = prompt("which index u wants to add a color ");
var newColor = prompt("color name ?");
colors.splice(index,0,newColor);
document.write("<br><br><b> Updated Array: Add Colors in specified location</b><br>");
for(var i=0;i<colors.length;i++)
{
document.write(colors[i]+ ",");
}
index = prompt("which index u wants to delete colors? ");
var no =  prompt("how many colors u wants to delete?");
colors.splice(index,no);
document.write("<br><br> <b>Updated Array: Delete Colors in specified location</b><br>");
for(var i=0;i<colors.length;i++)
{
document.write(colors[i]+ ",");
}


document.write("13. Write a program to store student scores in an array & sort the array in ascending order using Array’s sort method.<br /><br />")
var score = [320,230,480,120];
document.write("<b>Score of Students: </b><br>");
for(var i=0;i<score.length;i++)
{
document.write(score[i]+ ",");
}
score.sort();
document.write("<br><b>Ordered Scores of Students: </b><br>");
for(var i=0;i<score.length;i++)
{
document.write(score[i]+ ",");
}

document.write("14. Write a program to sort the below mentioned array: var fruits = [“strawberry”, “apple”, “orange”, “banana”];<br /><br />")
var fruits = ["strawberry", "apple", "orange", "banana"];

document.write("<br><b>Fruits List: </b><br>");
for(var i=0;i<fruits.length;i++)
{
document.write(fruits[i]+ ",");
}
fruits.sort();
document.write("<br><b>Ordered Fruits List: </b><br>");
for(var i=0;i<fruits.length;i++)
{
document.write(fruits[i]+ ",");
}

document.write("15. Write a program to initialize an array with city names. Copy 3 array elements from cities array to selectedCities array.<br /><br />")
var cities =["Karachi","Lahore","Islamabad","Quetta","Peshawar"];
var selectedCities =cities.slice(2,5);
document.write("<br><b>Cities List: </b><br>");
for(var i=0;i<cities.length;i++)
{
document.write(cities[i]+ ",");
}
document.write("<br><b>selected Cities List: </b><br>");
for(var i=0;i<selectedCities.length;i++)
{
document.write(selectedCities[i]+ ",");
}

document.write("16. Write a program to create a single string from the below mentioned array: var arr = [“This ”, “ is ”, “ my ”, “ cat”]; (Use array’s join method)<br /><br />");
var arr = ["This ", " is ", " my ", " cat"];

document.write("<br><b>Array: </b><br>");
for(var i=0;i<arr.length;i++)
{
document.write(arr[i]+ ",");
}
var str = arr.join(" ");
document.write("<br><b>String: </b><br>"+str);

document.write("17. Create a new array. Store values one by one in such a way that you can access the values in the order in which they were stored. (FIFO-First In First Out)<br /><br /> ");
var devices = [];
devices.push("Keyboard");
devices.push("Mouse");
devices.push("Printer");
devices.push("Monitor");
document.write("<b>Devices: </b><br>");
for(var i=0;i<devices.length;i++)
{
document.write(devices[i]+ ",");
}

    document.write("<br>Out:<br> ");
document.write(devices.shift());
 document.write("<br>Out:<br> ");
document.write(devices.shift());
 document.write("<br>Out:<br> ");
document.write(devices.shift());
 document.write("<br>Out:<br> ");
document.write(devices.shift());

// Question 18
var devices = [];
devices.push("Keyboard");
devices.push("Mouse");
devices.push("Printer");
devices.push("Monitor");
document.write("<b>Devices: </b><br>");
for(var i=0;i<devices.length;i++)
{
document.write(devices[i]+ ",");
}

    document.write("<br>Out:<br> ");
document.write(devices.pop());
 document.write("<br>Out:<br> ");
document.write(devices.pop());
 document.write("<br>Out:<br> ");
document.write(devices.pop());
 document.write("<br>Out:<br> ");
document.write(devices.pop());


document.write("19. Write a program to store phone manufacturers (Apple, Samsung, Motorola, Nokia, Sony & Haier) in an array. Display the following dropdown/select menu in your browser using document.write() method:<br /><br />");
var manufactures = ["Apple","Samsung", "Motorola", "Nokia", "Sony" , "Haier"];
document.write("<select> <option>"+manufactures[0]+"</option><option>"+manufactures[1]+"</option> <option>"+manufactures[2]+"</option> <option>"+manufactures[3]+"</option><option>"+manufactures[4]+"</option> <option>"+manufactures[5]+"</option></select>");

document.write("20. Declare and initialize an empty multidimensional array. (Array of arrays)<br /><br />");

var multiArray = [
  [],
  
];


document.write("21. Declare and initialize a multidimensional array representing the following matrix:<br /><br /> ");
var multiArray = [
  [0,1, 2,3],
  [1,0,1,2],
  [2,1,0,1]
];