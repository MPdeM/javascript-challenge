// from data.js
var tableData = data;

// construct the tables as a function that can be called everytime and option is selected
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
    var cityInput = d3.select("#city");
    var cityInputValue = cityInput.property("value");
    var stateInput = d3.select("#state");
    var stateInputValue = stateInput.property("value");
    var countryInput = d3.select("#country");
    var countryInputValue = countryInput.property("value");
    var shapeInput = d3.select("#shape");
    var shapeInputValue = shapeInput.property("value");
    console.log(shapeInputValue)
    // if (dateInputValue !== '' ){
    //     var filtered = tableData.filter(ufo => ufo.datetime === dateInputValue);
    //     buidTable(filtered);
    // }
    // else if (cityInputValue !== '') {
    //     var filtered = tableData.filter(ufo => ufo.city === cityInputValue);
    //     buidTable(filtered);
    // }
    // else if (stateInputValue !== '') {
    //     var filtered = tableData.filter(ufo => ufo.state === stateInputValue);
    //     buidTable(filtered);
    // }
    // else if  (countryInputValue !== '') {
    //     var filtered = tableData.filter(ufo => ufo.country === countryInputValue);
    //     buidTable(filtered);
    // }
    // else (shapeInputValue !== '') { 
    //     var filtered = tableData.filter(ufo => ufo.shape === shapeInputValue);
    //     buidTable(filtered);
    // }
}



