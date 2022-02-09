/* const toast = document.querySelector(`.toast`);
      toast. */
      /* const b1 = document.getElementById(`b1`);
 const toast = document.querySelector(`.toast`);
 
 b1.click(()=>{$('.toast').toast('show')}); */
 $(document).ready(function () {

    $("#showToast").click(function () {
      $('#liveToast1').toast('show');
    });

  });

  const buton = document.getElementById("liveToastBtn");
  const task = document.getElementById("task");
  const ul = document.querySelector("ul");
  
  //burası çok önemli !!!!!
  var taskArr = localStorage.getItem('task') ? JSON.parse(localStorage.getItem('task')) : [];


  
  /* buton.addEventListener("click", ()=>{
    console.log(task.value);


  }) */

  function makeLi(write) {
    var li = document.createElement("li");
    ul.appendChild(li);
    var text = document.createTextNode(write);
    li.appendChild(text);
  }

  function newElement() {
    taskArr.push(task.value);
    console.log(taskArr);
    localStorage.setItem("task", JSON.stringify(taskArr));

      var taskArrLast= JSON.parse(localStorage.getItem("task"));

     for (let i = 0; i < taskArrLast.length; i++) {
       var element = taskArrLast[i];
       
     }
     makeLi(element); 
  }

  addEventListener("load", () => {
    var taskArrLast = JSON.parse(localStorage.getItem("task"));

    for (let i = 0; i < taskArrLast.length; i++) {
      var element = taskArrLast[i];
makeLi(element);
    }
    



  })