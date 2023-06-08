
let done = document.querySelectorAll(".done");
let doing = document.querySelectorAll(".doing");
let todo = document.querySelectorAll(".todo");

        function Done() {
            event.target.parentNode.style.background = "#198754"
        }

        function Doing (){
            event.target.parentNode.style.background = "#ffc107"
        }

        function Todo() {

            event.target.parentNode.style.background = "#dc3545"
                
        }

//**************créationd de tâches********** */
function Taches() {
    
    let tache0 = document.querySelector('#tache0').value

    document.querySelector('#form2').innerHTML +=
        `<div class="d-flex justify-content-around align-items-center my-2 rounded border border-danger">
        ${tache0}
        <input type="button" class="btn btn-danger todo" onclick="Todo()" value="to do" id="todo1">
        <input type="button" class="btn btn-warning doing"  onclick="Doing()"value="doing" id="doing1">
        <input type="button" class="btn btn-success done" onclick="Done()" value="done" id="done1">
    </div>`

}