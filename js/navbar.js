import { authService } from "./auth-service.js";

const navbar = document.getElementById("navbar");
const isLoggedIn = authService.isLoggedIn();
// console.log(isLoggedIn);

navbar.innerHTML = `
<div class="logo">
    <a href="/index.html">AURA</a>
</div>
<ul class="nav-links">
    <li><a href="/index.html">Inicio</a></li>
    <li><a href="/abaut-us.html">Nosotros</a></li>
    <li><a href="/configurator.html">Configurador</a></li>
    <li class="dropdown-perfil">
        <a href="#"><i class="fa-regular fa-user"></i> ${isLoggedIn ? isLoggedIn.username : "Perfil"}</a>
        <ul class="submenu">
        ${isLoggedIn ?
            `<li><a href="/profile.html">Mi Perfil</a></li>
            <li><a href="#" id="logout">Cerrar Sesión</a></li>`
            :
            `<li><a href="/auth/login.html">Iniciar Sesión</a></li>
            <li><a href="/auth/register.html">Registrarse</a></li>`
        }
        </ul>
    </li>
</ul>`;

if(isLoggedIn){
    const logoutBtn = document.getElementById("logout");

    logoutBtn.addEventListener("click", () => {
        authService.logoutUser();
        window.location.href = "/auth/login.html";    
    })
}
