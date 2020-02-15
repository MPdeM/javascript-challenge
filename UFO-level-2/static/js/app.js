// from data.js
var tableData = data;

// YOUR CODE HERE!
var tbody = d3.select("tbody");

function buidTable(data) {
    tbody.html("");
    data.forEach((ufo) => {
        var row = tbody.append('tr');
        Object.entries(ufo).forEach(([key, value]) => {
            var cell = row.append("td");
            cell.text(value);
        });
    });
}

buidTable(tableData);

var button = d3.select("#filter-btn");
button.on("click", filterData);

function filterData() {
    var dateInput = d3.select("#datetime");
    var dateInputValue = dateInput.property("value");
    var filteredDate = tableData.filter(ufo => ufo.datetime === dateInputValue);
    buidTable(filteredDate);
}



