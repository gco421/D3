// Bar Chart
var bars = d3.select("#bar-chart")
.selectAll("#bar-chart")
.data([4, 8, 15, 16, 20, 12])
bars.enter().append("div")
.text(function(d){ return d; })
.style("width", function(d){ return d*20+"px" })
.style("background-color", (d) => { return "rgb(0," + d*4 + ",0)"})
.style("color", (d) => { return "rgb(255,255,255)"})
function randomsGenerator(){
var nums = [];
var size = Math.floor(Math.random()*50);
for (var i = 0; i < size; i++){
    nums.push(Math.floor(Math.random()*50));
}
buildChart(nums);
}
function buildChart(newdata){
var bars = d3.select("#bar-chart")
    .selectAll("div")
    .data(newdata)
    .transition()
    .duration(2000)
    .text(function(d){ return d; })
    .style("width", function(d){ return d*20+"px" })
    .style("background-color", (d) => { return "rgb(0," + d*4 + ",0)"})
bars.enter().append("div")
    .transition()
    .duration(2000)
    .text(function(d){ return d; })
    .style("width", function(d){ return d*20+"px" })
    .style("background-color", (d) => { return "rgb(0," + d*4 + ",0)"})
bars.exit().remove();
}