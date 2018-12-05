

google.charts.load('current', {'packages':['bar']});
google.charts.setOnLoadCallback(drawChart);

function drawChart() {
  var data = google.visualization.arrayToDataTable([
    ['Mes', 'Enero'],
    ['Enero', 1000],
    ['Febrero', 250],
    ['Marzo', 300],
    ['Abril', 1030]
  ]);

  var options = {
    'title':' '};


  var chart = new google.charts.Bar(document.getElementById('columnchart_material'));

  chart.draw(data, google.charts.Bar.convertOptions(options));
}

function product(id, name){
  var id = document.getElementById(id);
  var name = document.getElementById(name);
  name.innerHTML = "";
  if (id.value == "1") {
    var optionArrays = ["|", "10|Banano","11|Fresa"];
  }else
    var optionArrays = ["|", "20|Camisa","21|Pantalon"];
    for(var option in optionArrays){
      var par = optionArrays[option].split("|");
      var newOptions = document.createElement("option");
      newOptions.value = par[0];
      newOptions.innerHTML = par[1];
      name.options.add(newOptions);
    }
}


function brand(id, name){
  var id = document.getElementById(id);
  var name = document.getElementById(name);
  name.innerHTML = "";
  if (id.value == "10" || id.value == "11" ) {
    var optionArrays = ["|", "10|Fruit Company"];
  }else if (id.value == "20" || id.value == "21") {
    var optionArrays = ["|", "20|Carolina Herrera"];
    }
    for(var option in optionArrays){
      var par = optionArrays[option].split("|");
      var newOptions = document.createElement("option");
      newOptions.value = par[0];
      newOptions.innerHTML = par[1];
      name.options.add(newOptions);
    }
}
