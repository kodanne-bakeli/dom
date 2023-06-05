//**************to do********** */
document.getElementById("todo1").onclick = function Todo() {

    document.getElementById("tache1").classList.remove("bg-warning")
    document.getElementById("tache1").classList.remove("bg-success")
    document.getElementById("tache1").classList.add("bg-danger")

}
document.getElementById("todo2").onclick = function Todo() {

    document.getElementById("tache2").classList.remove("bg-warning")
    document.getElementById("tache2").classList.remove("bg-success")
    document.getElementById("tache2").classList.add("bg-danger")

}
document.getElementById("todo3").onclick = function Todo() {

    document.getElementById("tache3").classList.remove("bg-warning")
    document.getElementById("tache3").classList.remove("bg-success")
    document.getElementById("tache3").classList.add("bg-danger")

}


//**************doing********** */
document.getElementById("doing1").onclick = function Doing() {
    document.getElementById("tache1").classList.remove('bg-danger')
    document.getElementById("tache1").classList.remove('bg-success')
    document.getElementById("tache1").classList.add('bg-warning')
}
document.getElementById("doing2").onclick = function Doing() {
    document.getElementById("tache2").classList.remove('bg-danger')
    document.getElementById("tache2").classList.remove('bg-success')
    document.getElementById("tache2").classList.add('bg-warning')
}
document.getElementById("doing3").onclick = function Doing() {
    document.getElementById("tache3").classList.remove('bg-danger')
    document.getElementById("tache3").classList.remove('bg-success')
    document.getElementById("tache3").classList.add('bg-warning')
}

//**************done********** */
document.getElementById("done1").onclick = function Done() {
    document.getElementById("tache1").classList.remove('bg-warning')
    document.getElementById("tache1").classList.remove('bg-danger')
    document.getElementById("tache1").classList.add('bg-success')
}
document.getElementById("done2").onclick = function Done() {
    document.getElementById("tache2").classList.remove('bg-warning')
    document.getElementById("tache2").classList.remove('bg-danger')
    document.getElementById("tache2").classList.add('bg-success')
}
document.getElementById("done3").onclick = function Done() {
    document.getElementById("tache3").classList.remove('bg-warning')
    document.getElementById("tache3").classList.remove('bg-danger')
    document.getElementById("tache3").classList.add('bg-success')

}

//**************créationd de tâches********** */
function Taches() {
    let tache0 = document.querySelector('#tache0').value
    let i = document.getElementById("form2").length
    document.querySelector('#form2').innerHTML +=
        `<div class="d-flex justify-content-around">
        <span class="w-100 bg-danger rounded-1 align-self-center py-2" id="tache${i}">${tache0}</span>
        <input type="button" class="btn btn-danger" onclick="Todo()" value="to do" id="todo${i}">
        <input type="button" class="btn btn-warning" onclick="Doing()" value="doing" id="doing${i}">
        <input type="button" class="btn btn-success" onclick="Done()" value="done" id="done${i}">
    </div>`
    document.getElementById(`done${i}`).onclick = function Done() {
        document.getElementById(`tache${i}`).classList.remove('bg-warning')
        document.getElementById(`tache${i}`).classList.remove('bg-danger')
        document.getElementById(`tache${i}`).classList.add('bg-success')

    }
    document.getElementById(`doing${i}`).onclick = function Doing() {
        document.getElementById(`tache${i}`).classList.remove('bg-danger')
        document.getElementById(`tache${i}`).classList.remove('bg-success')
        document.getElementById(`tache${i}`).classList.add('bg-warning')
    }
    document.getElementById(`todo${i}`).onclick = function Todo() {
        document.getElementById(`tache${i}`).classList.remove("bg-warning")
        document.getElementById(`tache${i}`).classList.remove("bg-success")
        document.getElementById(`tache${i}`).classList.add("bg-danger")

    }
}
