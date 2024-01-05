//Part 2
const csvData = "ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctor's Assistant,26";
const rows = csvData.split("\n");
let firstRow = rows[0];
const numOfRows = rows.length;
const numOfColumns = (firstRow.split(",")).length;
let data2D = [];

//Line 10 stores the data into proper 2d format
for (let i = 0; i < rows.length; i++) {
   data2D.push(rows[i].split(","));
}

console.log ((data2D));

//Part 3
//Takes out the first headers array
//and makes each item lower case
const headers = data2D[0].map(headers => headers.toLowerCase());

// Takes every item except the first
// and makes an object for it using 
// the headers as keys and the rest
// of the info as values
const ObjList = data2D.slice(1).map(info => {
   let item = {};
   headers.forEach((key, value) => {
      item[key] = info[value];
   })
   return item;
})

console.log(ObjList);

// Part 4
//Create a copy of the original array of objects
const ObjListCOPY = JSON.parse(JSON.stringify(ObjList));
const barry = {id: "48", name: "Barry", ocupation: "Runner", age: "25",};
const bilbo = {id: "7", name: "Bilbo", occupation: "None", age: "111",};

ObjListCOPY.pop();
ObjListCOPY.splice(1, 0, barry);
ObjListCOPY.push(bilbo);

console.log(ObjListCOPY);

let averageAge = 0;

for (const obj of ObjListCOPY) {
   const age = parseInt(obj.age);
   averageAge += age;
}

averageAge = averageAge / ObjListCOPY.length;

console.log(`The average age of the list is ${averageAge}`);

// Part 5

//Store the keys back into a result variable
let result = Object.keys(ObjListCOPY[0]);

// Put each person's info in a string 
// in the correct order
for (const person of ObjListCOPY) {
   const dataSection = `${person.id},${person.name},${person.occupation},${person.age}\n`;
   
   result += dataSection
}


console.log(result);