var employees = [];
var ids=[];
var icon = document.getElementById('browserIcon');

$(function() {
    $('#submitbtn').on('click', addEmployee);
});


function addEmployee(){
  var firstname = document.getElementById('firstname').value;
  var lastname = document.getElementById('lastname').value;
  var department = document.getElementById('department').value;
  var empAdded = document.getElementById('employeeAdded');
  var employeeobj={fname:"", lname:"", dept:"", id:0};
  var employeeid;
  var i = 0;
  
  if(employees.length==0){
    employeeobj.fname=firstname;
    employeeobj.lname=lastname;
    employeeobj.dept=department;
  }
  else{
    for(i=0; i<employees.length; i++){
      if((employees[i].fname == firstname) && (employees[i].lname == lastname)){
        alert("Duplicate Employee Detected\nEmployee Not Added");
        return;
      }
      else{
        employeeobj.fname=firstname;
        employeeobj.lname=lastname;
        employeeobj.dept=department;
      }
    }
  }
  
  var id = Math.floor(Math.random()*89999999)+10000000;
  
  if(ids.includes(id)){
    employeeid = id +1;
    ids.push(employeeid);
    employeeobj.id=employeeid;
  }
  else{
    employeeid = id;
    ids.push(employeeid);
    employeeobj.id=employeeid;
  }
  
  employees.push(employeeobj);
  //console.log(employees);
  
  empAdded.innerHTML += '<h2><b>Employee Added</b></h2><p>Name: ' + lastname +', '+firstname+'<br>Department: '+department+'<br>Employee ID: '+employeeobj.id+'<br>Total Employees: '+employees.length;
  
}

 
window.addEventListener("load", function() {
  if (navigator.userAgent.indexOf("Chrome") != -1 ) {
    icon.innerHTML += '<img src="https://cdn.glitch.com/be6729f6-81f3-40fe-b42f-a5aefb86668c%2FGoogle-Chrome-Logo-Icon-PNG.png?v=1582085981274" alt="Chome" style="width:100px;height:100px">';
  }
  else if (navigator.userAgent.indexOf("Firefox") != -1 ) {
    icon.innerHTML += '<img src="https://cdn.glitch.com/be6729f6-81f3-40fe-b42f-a5aefb86668c%2FFirefox_Logo%2C_2019.png?v=1582085985740" alt="Firefox" style="width:100px;height:100px">';
  }
  else if (navigator.userAgent.indexOf("Edge") != -1 ) {
    icon.innerHTML += '<img src="https://cdn.glitch.com/be6729f6-81f3-40fe-b42f-a5aefb86668c%2Fmicrosoft-edge_160085.png?v=1582085991715" alt="Edge" style="width:100px;height:100px">';
  }
  else if (navigator.userAgent.indexOf("Safari") != -1 ) {
    icon.innerHTML += '<img src="https://cdn.glitch.com/be6729f6-81f3-40fe-b42f-a5aefb86668c%2FLogo.png?v=1582085990277" alt="Safari" style="width:100px;height:100px">';
  }
  else if (navigator.userAgent.indexOf("Opera") != -1 ) {
    icon.innerHTML += '<img src="https://cdn.glitch.com/be6729f6-81f3-40fe-b42f-a5aefb86668c%2Fopera-logo-png-opera-logo-png-1024.png?v=1582085988091" alt="Opera" style="width:100px;height:100px">';
  }
  else{
    icon.innerHTML += "Unknown Browser"
  }
});

