const pathNav = window.location.pathname;
const pathName = pathNav.split("/");

export const routeAuth = {
    getPathName(){
        // console.log(pathName[pathName.length - 1]);
        return pathName[pathName.length - 1];
    }
}