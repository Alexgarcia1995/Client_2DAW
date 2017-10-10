
'use strict';
import Person from './person.js';
var verdadero=false;
var contador=0;
var students = [
  new Person("Paco", "Vañó", 5),
  new Person("Lucia", "Botella", 10),
  new Person("German", "Ojeda", 3),
  new Person("Salva", "Peris", 1),
  new Person("Oscar", "Carrion", 40),
];

function getRanking(students) {
  students.sort(function(a, b) {
    return (b.points - a.points)
  });

  var studentsEl = document.getElementById("llistat");
  var task= document.getElementById("task");

  //studentsEl.innerHTML = "";
  while (studentsEl.firstChild) {
    studentsEl.removeChild(studentsEl.firstChild);
  }
  task.onclick= function(){
    contador=contador+1;
    alert(contador);
  }
  students.forEach(function(studentItem) {
    var liEl = document.createElement("li");
    var t = document.createTextNode(studentItem.surname + ", " + studentItem.name + ", " + studentItem.points + " "); // Create a text node
    liEl.appendChild(t);

    var addPointsEl = document.createElement("button");
    var tb = document.createTextNode("+20");
    addPointsEl.appendChild(tb);

    studentsEl.appendChild(liEl);
    liEl.appendChild(addPointsEl);
    if(verdadero){
      for (var i = 0; i < contador; i++) { 
        carga(liEl,studentItem);
    }
      
    }
    task.addEventListener("click", function() {
      carga(liEl,studentItem);
      verdadero=true;
    });
    
    addPointsEl.addEventListener("click", function() {
     
      studentItem.addPoints(20);
      setTimeout(function(){getRanking(students)},1000);
    });
    
    //console.log(studentItem.surname + ", "+studentItem.name+ ", "+studentItem.points ); 
  });

}

function carga(liEl,studentItem){
  var tabla= document.createElement("input");
  tabla.setAttribute("type","number");
  tabla.addEventListener("change",function() {
   var valor= parseInt(tabla.value);
   studentItem.addPoints(valor);
   setTimeout(function(){getRanking(students)},1000);
 });
  liEl.appendChild(tabla);
} 

window.onload = function() {
  getRanking(students);
}