const displayTime = document.getElementById("clock-light");

const days = ["Lunes", "Martes", "Miercoles", "Jueves", "Viernes", "Sabado", "Domingo"];
const months = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];


function updateDisplayTime(){
    const now = new Date();
    const dayIndex = (now.getDay() + 6) % 7; 
    const day = days[dayIndex];
    const month = months[now.getMonth()];
    const hours = String(now.getHours()).padStart(2, "0");
    const minutes = String(now.getMinutes()).padStart(2, "0");
    const seconds = String(now.getSeconds()).padStart(2, "0");
    
    if (displayTime) {
        displayTime.textContent = `${day}, ${month} - ${hours}:${minutes}:${seconds}`;
    }
}


setInterval(updateDisplayTime, 1000);

