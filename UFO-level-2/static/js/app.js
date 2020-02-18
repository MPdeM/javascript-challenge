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
    var filters = []

    console.log(Object.entries(filters))
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
    
    // var filtered= tableData.filter(ufo => (ufo.datetime === dateInputValue || ufo.city === cityInputValue || ufo.state === stateInputValue ||ufo.country === countryInputValue ||ufo.shape === shapeInputValue)  );
    // buidTable(filtered)
    
    if (dateInputValue !== '' ) {
        filters.datetime= (dateInputValue);
    }
    if (cityInputValue !== '' ) {
        filters.city= (cityInputValue);
    }
    if (stateInputValue !== '') {
        filters.state= (stateInputValue);
    }
    if (countryInputValue !== '') {
        filters.country = (countryInputValue);
    }
    if (shapeInputValue !== '') { 
        filters.shape = (shapeInputValue);
    }
    console.log(Object.entries(filters))
    Object.entries(filters).forEach(([key,value]) => {
        var newTable = tableData.filter(ufo => ufo[key] === value);
        console.log(newTable)
        buidTable(newTable)
    })
}
    

     


