export default {
    actions: {
        async fetchGenreLists(ctx) {
            // Название тегов должно быть с маленькой буквы для поиска
            let genreLists
            if (localStorage.getItem("genreLists") && JSON.parse(localStorage.getItem("genreLists")).length !== 0)
                genreLists = JSON.parse(localStorage.getItem("genreLists"))
            else {
                genreLists = [
                    {
                        id: 1,
                        label: "хоррор",
                        checked: false
                    },
                    {
                        id: 2,
                        label: "романтика",
                        checked: false
                    },
                    {
                        id: 3,
                        label: "фэнтези",
                        checked: false
                    },
                    {
                        id: 4,
                        label: "наука",
                        checked: false
                    },
                    {
                        id: 5,
                        label: "комедия",
                        checked: false
                    },
                    {
                        id: 6,
                        label: "история",
                        checked: false
                    },
                    {
                        id: 7,
                        label: "Научно-популярные",
                        checked: false
                    },
                    {
                        id: 8,
                        label: "Учебная литература",
                        checked: false
                    },
                    {
                        id: 9,
                        label: "Детективы",
                        checked: false
                    },
                    {
                        id: 10,
                        label: "Приключения",
                        checked: false
                    },
                    {
                        id: 11,
                        label: "Фантастика",
                        checked: false
                    },
                ]
                localStorage.setItem('genreLists', JSON.stringify(genreLists));

            }

            ctx.commit("fullUpdateGenreLists", genreLists)
        }
    }, 
    mutations: {
        fullUpdateGenreLists(state, genreObj) {
            state.genreLists = genreObj
        },
        genreChecked(state, genreObj = null) {
            if (genreObj === null) {
                state.genreLists.map(e => e.checked = false)
            }
            else {
                let pos = state.genreLists.findIndex(obj => obj.label === genreObj.label)
                state.genreLists[pos].checked = !state.genreLists[pos].checked
            }
        },
        newGenre(state, genre) {
            state.genreLists.push(genre)
            this.commit("updateLocalStorage", state)
        },
        updateLocalStorage(state) {
            localStorage.setItem('genreLists', JSON.stringify(state.genreLists));
        },
        resetGenreObject(state) {
            state.genreObject = null
        },
        getGenreObject(state, genreId) {
            state.genreObject = state.genreLists.filter( (elem) => elem.id === genreId)[0]
        },
        editGenre(state, genreObject) {
            let findId = state.genreLists.findIndex( (elem) => {
                if (elem.id === genreObject.id)
                    return true
            })
            state.genreLists[findId] = genreObject
            this.commit("updateLocalStorage", state)

        },
        deleteGenres(state, genreId) {
            let tmpBookList = state.genreLists.filter( (elem) => elem.id !== genreId)
            this.commit("fullUpdateGenreLists", tmpBookList)
            this.commit("updateLocalStorage", state)
        }
    },
    state: {
        genreLists: [],
        genreObject: {}
    },
    getters: {
        genreLists(state) {
            return state.genreLists
        },
        genreObject(state) {
            return state.genreObject
        },
    }
}