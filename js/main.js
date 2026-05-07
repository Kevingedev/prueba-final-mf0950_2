const displayTime = document.getElementById("clock-light");

const days = ["Lunes", "Martes", "Miercoles", "Jueves", "Viernes", "Sabado", "Domingo"];
const months = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];


function updateDisplayTime(){
    const now = new Date();
    const day = days[now.getDay() -1];
    const month = months[now.getMonth() -1];
    const hours = String(now.getHours()).padStart(2, "0");
    const minutes = String(now.getMinutes()).padStart(2, "0");
    const seconds = String(now.getSeconds()).padStart(2, "0");
    displayTime.textContent = `${day}, ${month} - ${hours}:${minutes}:${seconds}`;
}


setInterval(updateDisplayTime, 1000);

