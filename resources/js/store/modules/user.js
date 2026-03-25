export default {
    actions: {
        async fetchUser(ctx) {
            let user
            
            if (localStorage.getItem("user") && JSON.parse(localStorage.getItem("user")).length !== 0)
                user = JSON.parse(localStorage.getItem("user"))
            else {
                user = {
                    name: "user",
                    role: "user"
                }
                localStorage.setItem('user', JSON.stringify(user));
            }

            ctx.commit("updateUser", user)
        }
    }, 
    mutations: {
        updateUser(state, user) {
            state.user = user
            this.commit("updateLocalStorage", state)
        },
        resetUser(state) {
            state.user = {
                name: "user",
                role: "user"
            }
            this.commit("updateLocalStorage", state)
        },
        updateLocalStorage(state) {
            localStorage.setItem('user', JSON.stringify(state.user));
        },
        updateRole(state, role) {
            state.user.role = role
            this.commit("updateLocalStorage", state)
        }
    },
    state: {
        user: {},
    },
    getters: {
        user(state) {
            return state.user
        },
    }
}