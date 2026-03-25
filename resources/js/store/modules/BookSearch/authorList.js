export default {
    actions: {
        async fetchAuthorList(ctx) {
            // Название тегов должно быть с маленькой буквы для поиска
            let authorList

            if (localStorage.getItem("authorList") && JSON.parse(localStorage.getItem("authorList")).length !== 0)
                authorList = JSON.parse(localStorage.getItem("authorList"))
            else {
                authorList = [
                    {
                        id: 1,
                        label: "Мария Лунёва",
                        checked: false
                    },
                    {
                        id: 2,
                        label: "Константин Фрес",
                        checked: false
                    },
                    {
                        id: 3,
                        label: "Ульяна Туманова",
                        checked: false
                    },
                    {
                        id: 4,
                        label: "Алиса Росман",
                        checked: false
                    },
                    {
                        id: 5,
                        label: "Ольга Иконникова",
                        checked: false
                    },
                    {
                        id: 6,
                        label: "Эми Мун",
                        checked: false
                    },
                    {
                        id: 7,
                        label: "Алекс Кин",
                        checked: false
                    },
                    {
                        id: 8,
                        label: "Владимир Кретов",
                        checked: false
                    },
                    {
                        id: 9,
                        label: "Кирилл Ерохин",
                        checked: false
                    },
                    {
                        id: 10,
                        label: "Дубчиков Николай",
                        checked: false
                    }
                ]
                localStorage.setItem('authorList', JSON.stringify(authorList));
            }

            ctx.commit("fullUpdateAuthorList", authorList)
        }
    }, 
    mutations: {
        fullUpdateAuthorList(state, authorObj) {
            state.authorList = authorObj
        },
        authorChecked(state, authorObj = null) {
            if (authorObj === null) {
                state.authorList.map(e => e.checked = false)
            }
            else {
                let pos = state.authorList.findIndex(obj => obj.label === authorObj.label)
                state.authorList[pos].checked = !state.authorList[pos].checked
            }
        },
        newAuthor(state, author) {
            state.authorList.push(author)
            this.commit("updateLocalStorage", state)
        },
        updateLocalStorage(state) {
            localStorage.setItem('authorList', JSON.stringify(state.authorList));
        },
        resetAuthorObject(state) {
            state.authorObject = null
        },
        getAuthorObject(state, authorId) {
            state.authorObject = state.authorList.filter( (elem) => elem.id === authorId)[0]
        },
        editAuthor(state, authorObject) {
            let findId = state.authorList.findIndex( (elem) => {
                if (elem.id === authorObject.id)
                    return true
            })
            state.authorList[findId] = authorObject
            this.commit("updateLocalStorage", state)

        },
        deleteAuthor(state, authorId) {
            let tmpAuthorList = state.authorList.filter( (elem) => elem.id !== authorId)
            this.commit("fullUpdateAuthorList", tmpAuthorList)
            this.commit("updateLocalStorage", state)
        }
    },
    state: {
        authorList: [],
        authorObject: {}
    },
    getters: {
        authorList(state) {
            return state.authorList
        },
        authorObject(state) {
            return state.authorObject
        },
    }
}