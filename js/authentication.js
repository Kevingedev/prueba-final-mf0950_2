import { routeAuth } from "./middleware.js";
import { authService } from "./auth-service.js";


const form = document.querySelector("form")
const alert = document.querySelector(".alert")
const btnSubmit = document.querySelector("button[type='submit']")
const username = document.getElementById("username")
const password = document.getElementById("password")

if (routeAuth.getPathName() === "register.html") {
    
    const termsCheckbox = document.getElementById("terms")
    // Validando el checkbox de terminos para habilitar el boton de registrarse
    termsCheckbox.addEventListener("change", () => {
        btnSubmit.disabled = !termsCheckbox.checked;
    
        btnSubmit.disabled == true ? btnSubmit.classList.add("btn-disabled") : btnSubmit.classList.remove("btn-disabled");
    })
    
    form.addEventListener("submit", (e) => {
        e.preventDefault();
    
    
        if (authService.userExists(username.value)) {
            alert.textContent = "El usuario ya existe";
            alert.style.display = "block";
            alert.classList.add("alert-warning-visible");
            setTimeout(() => {
                alert.classList.remove("alert-warning-visible");
                alert.textContent = "";
                alert.style.display = "none";
            }, 3000);
            return;
        }
    
        const newUser = {
            username: username.value,
            password: password.value,
            session: false,
            createdAt: new Date().toISOString()
        }
    
        authService.setUser(newUser);
    
        form.remove();
        alert.textContent = "¡Usuario registrado exitosamente! Ahora inicia sesion.";
        alert.style.display = "block";
        alert.classList.add("alert-success-visible");
        setTimeout(() => {
            alert.style.display = "none";
            window.location.href = "/auth/login.html";
        }, 4000);
    
    })
} else if (routeAuth.getPathName() === "login.html"){

    
    form.addEventListener("submit", (e) => {
        e.preventDefault();
        
        const login = authService.loginUser(username.value, password.value);
        if(login){
            // console.log("Im Here?")
            alert.textContent = "¡Inicio de sesion exitoso! Redirigiendo...";
            alert.style.display = "block";
            alert.classList.add("alert-success-visible");
            form.remove();
            setTimeout(() => {
                alert.style.display = "none";
                window.location.href = "/index.html";
            }, 3000);
        }else{
            alert.textContent = "Usuario o contraseña incorrectos. Asegurate de tener una cuenta registrada.";
            alert.style.display = "block";
            alert.classList.add("alert-error-visible");
            setTimeout(() => {
                alert.style.display = "none";
                alert.classList.remove("alert-error-visible");
                alert.textContent = "";
            }, 3000);
        }
    })

}







