const csvData = "ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctor's Assistant,26";
const rows = csvData.split("\n");
const firstRow = rows[0];
const numOfRows = rows.length;
const numOfColumns = (firstRow.split(",")).length;
let data2D = [];

//Stores the data into proper 2d format
for (let i = 0; i < rows.length; i++) {
   data2D.push(rows[i].split(","));
}

console.log(data2D);