var dataset = [80,35,700,120,180,30,40,120,160];

var svgWidth = 500, svgHeight = 300, barPadding = 5;
var barWidth = (svgWidth / dataset.length);

var svg1 = d3.select('#bar-chart')
    .attr("width", svgWidth)
    .attr("height", svgHeight);

var barChart = svg1.selectAll("rect")
    .data(dataset)
    //enter method takes data from waiting state to perform further operations
    .enter()
    .append("rect")
    .attr("y", function(d) {
        return svgHeight - d
    })
    .attr("height", function(d) {
        return d;
    })
    .attr("width", barWidth - barPadding)
    .attr("transform", function (d,i){
        var translate = [barWidth * i, 0];
        return "translate("+ translate +")";
    })

// var dataset = [24070685,18987918,14844597,9878397,7952386,2521682];

// var svgWidth = 500, svgHeight = 30000000, barPadding = 5;
// var barWidth = (svgWidth / dataset.length);

// var svg = d3.select('svg')
//     .attr("width", svgWidth)
//     .attr("height", svgHeight);

// var barChart = svg.selectAll("rect")
//     .data(dataset)
//     //enter method takes data from waiting state to perform further operations
//     .enter()
//     .append("rect")
//     .attr("y", function(d) {
//         return d- svgHeight - d
//     })
//     .attr("height", function(d) {
//         return d;
//     })
//     .attr("width", barWidth - barPadding)
//     .attr("transform", function (d,i){
//         var translate = [barWidth * i, 0];
//         return "translate("+ translate +")";
//     })



    // var dataset = [80,35,700,120,180,30,40,120,160];

    // var svgWidth = 500, svgHeight = 300, barPadding = 5;
    // var barWidth = (svgWidth / dataset.length);
    
    // var svg = d3.select('svg')
    //     .attr("width", svgWidth)
    //     .attr("height", svgHeight);
    
    // var barChart = svg.selectAll("rect")
    //     .data(dataset)
    //     //enter method takes data from waiting state to perform further operations
    //     .enter()
    //     .append("rect")
    //     .attr("y", function(d) {
    //         return svgHeight - d
    //     })
    //     .attr("height", function(d) {
    //         return d;
    //     })
    //     .attr("width", barWidth - barPadding)
    //     .attr("transform", function (d,i){
    //         var translate = [barWidth * i, 0];
    //         return "translate("+ translate +")";
    //     })
    

