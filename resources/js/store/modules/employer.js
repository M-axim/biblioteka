export default {
    actions: {
        async fetchEmployerList(ctx) {
            // Название тегов должно быть с маленькой буквы для поиска
            let employerList

            if (localStorage.getItem("employerList") && JSON.parse(localStorage.getItem("employerList")).length !== 0)
                employerList = JSON.parse(localStorage.getItem("employerList"))
            else {
                employerList = [
                    {
                        id: 1,
                        fullname: "Григорьева Полина Максимовна",
                        tel: "74129413112",
                        login: "admin",
                        password: "12345678"
                    },
                    {
                        id: 2,
                        fullname: "Тихомиров Константин Арсентьевич",
                        tel: "79611357591",
                        login: "librarian",
                        password: "123456789"
                    },
                ]
                localStorage.setItem('employerList', JSON.stringify(employerList));
            }
            ctx.commit("fullUpdateEmployerList", employerList)
        }
    }, 
    mutations: {
        fullUpdateEmployerList(state, employerList) {
            state.employerList = employerList
        },
        newEmployer(state, employer) {
            state.employerList.push(employer)
            this.commit("updateLocalStorage", state)
        },
        updateLocalStorage(state) {
            if (state.employerList.length >= 1)
                localStorage.setItem('employerList', JSON.stringify(state.employerList));
        },
        resetEmployerObject(state) {
            state.employerObject = null
        },
        employerAuth(state, employer) {
            state.employerIndex = state.employerList.find( (elem) => { if (elem.login === employer.login && elem.password === employer.password) return true })
        },
        getEmployerObject(state, employerId) {
            state.employerObject = state.employerList.filter( (elem) => elem.id === employerId)[0]
        },
        editEmployer(state, employerObject) {
            let findId = state.employerList.findIndex( (elem) => {
                if (elem.id === employerObject.id)
                    return true
            })
            state.employerList[findId] = employerObject
            this.commit("updateLocalStorage", state)

        },
        deleteEmployer(state, employerId) {
            state.employerList = state.employerList.filter( (elem) => elem.id !== employerId)
            this.commit("updateLocalStorage", state)
        }
    },
    state: {
        employerList: [],
        employerObject: {},
        employerIndex: 0
    },
    getters: {
        employerList(state) {
            return state.employerList
        },
        employerObject(state) {
            return state.employerObject
        },
        employerIndex(state) {
            return state.employerIndex
        },
    }
}