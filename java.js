


  var chores = {

    tasks: []
  }

  for(var i =0; i<chores.tasks.length; i++){

  }

  function drawList() {

    var parent = document.getElementById("list-container")

    parent.innerHTML = ""

    var ul = document.createElement("ul")
    for(var i =0; i<chores.tasks.length; i++){
      console.log(chores.tasks[i].taskassigned)
    

      var li = document.createElement("li")

      li.innerHTML = chores.tasks[i].taskassigned


      ul.appendChild(li)
    }

    parent.appendChild(ul)
  }

  function choreMaker(){
    console.log("Get to work!")
    event.preventDefault();
    var form = document.querySelector("form");
    // Create a new house object with form values (just one for right now)
    var newTask = {taskassigned:  form.taskassigned.value}
    // Insert new house object into neighborhood.houses
    chores.tasks.push(newTask)
    // Trigger printing the list to page
    drawList();
  }
  // Will run after all HTML is done rendering
  window.onload = function(){
    // Call this function
    drawList();

    var form = document.querySelector("form");
    form.onsubmit = choreMaker;

    var paras = document.querySelectorAll('p');
    for(var i=0; i<paras.length; i++){

    }


  }
