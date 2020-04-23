$(function() {
    let dhakaCityURL = "https://teamtigers.github.io/covid19-dataset-bd/dhakacity/dhakacity.json";
    $.get(dhakaCityURL, function(){}) 
        .done(function(res) {
            let dhakacityArray = Object.entries(res);
            makeTable(dhakacityArray);
        })
        .fail(function () {
            M.toast({html: 'Internal Problem!!!'})
        });

    //Search Location
    $("#search").on("keyup", function () {
        var value = $(this).val().toLowerCase();
        $("#locationTotal tr").filter(function () {
            $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1);
        });
    });
});

function makeTable(dhakacityArray) {
    let tableStr = "<table><thead><tr><th>Location</th><th>Total</th></tr></thead><tbody id='locationTotal'>";
    for (let index = 0; index < dhakacityArray.length; index++) {
        tableStr += "<tr><td>"+dhakacityArray[index][0]+"</td><td>"
                        +dhakacityArray[index][1]+"</td></tr>"
    }
    tableStr += "</tbody></table>";
    $('#dhakaCityInfo').html(tableStr)
}