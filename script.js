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

function makeLi(write, idNum) {
    var li = document.createElement("li");
    ul.appendChild(li);
    var text = document.createTextNode(write);
    li.appendChild(text);

    /*   span elementi oluşturulacak
       li elementinin altına yerleştrilecek
       span elementinin içerisine "close" classı eklenecek 
       
       li.appendChild(span);
   
       */
    var spann = document.createElement("span");
    spann.classList.add(`close`);
    spann.appendChild(document.createTextNode(`x`));
    li.appendChild(spann);
    spann.id = idNum;


}





function newElement() {
    taskArr.push(task.value);
    console.log(taskArr);
    localStorage.setItem("task", JSON.stringify(taskArr));

    let taskArrLast = JSON.parse(localStorage.getItem("task"));

    for (let i = 0; i < taskArrLast.length; i++) {
        var element = taskArrLast[i];
        

    }

    makeLi(element);
}








addEventListener("load", () => {
    let taskArrLast = JSON.parse(localStorage.getItem("task"));

    for (let i = 0; i < taskArrLast.length; i++) {
        var element = taskArrLast[i];
        makeLi(element, i);


    }
    close();

})

 function close() {
    let taskArrLast = JSON.parse(localStorage.getItem("task"));
    /* let spanid = document.getElementById()
    for (let i = 0; i < taskArrLast.length; i++) {
        
        const element = taskArrLast[i];
        
    } */
    
    const spann = document.querySelectorAll("li")

for (let i = 0 ; i < spann.length; i++) {
    spann[i].addEventListener('click' , ()=>{
        taskArr.splice(i, 1);
        localStorage.setItem("task", JSON.stringify(taskArr));
        location.reload();


    } ) ; 
 }
}