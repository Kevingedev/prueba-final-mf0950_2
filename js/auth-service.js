
export const authService = {
    getUsers(){
        return JSON.parse(localStorage.getItem("users")) || [];
    },
    setUser(user){
        const users = this.getUsers();
        users.push(user);
        localStorage.setItem("users", JSON.stringify(users));
    },
    updateUser(user){
        const users = this.getUsers();
        const index = users.findIndex((user) => user.username === user.username);
        users[index] = user;
        localStorage.setItem("users", JSON.stringify(users));
    },
    loginUser(username, password){
        const users = this.getUsers();
        const user = users.find((user) => user.username === username && user.password === password);
        
        if (user) {
            user.session = true;
            this.updateUser(user);
            return true;
        }
        return false;
    },
    isLoggedIn(){
        return this.getUsers().find((user) => user.session === true);
    },
    userExists(username){
        return this.getUsers().find((user) => user.username === username);
    },
    logoutUser(){
        const users = this.getUsers();
        const index = users.findIndex((user) => user.session === true);
        users[index].session = false;
        this.updateUser(users[index]);
    }
}