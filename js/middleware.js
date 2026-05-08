const pathNav = window.location.pathname;

export const routeAuth = {
    getPathName(){
        const path = pathNav.toLowerCase();
        if (path.includes("register")) return "register";
        if (path.includes("login")) return "login";
        return "other";
    }
}