
export const authService = {
    getUsers(){
        return JSON.parse(localStorage.getItem("users")) || [];
    },
    setUser(user){
        const users = this.getUsers();
        users.push(user);
        localStorage.setItem("users", JSON.stringify(users));
    },
    updateUser(userToUpdate){
        const users = this.getUsers();
        const index = users.findIndex((u) => u.username === userToUpdate.username);
        if (index !== -1) {
            users[index] = userToUpdate;
            localStorage.setItem("users", JSON.stringify(users));
        }
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
        const index = users.findIndex((u) => u.session === true);
        if (index !== -1) {
            users[index].session = false;
            this.updateUser(users[index]);
        }
    }
}