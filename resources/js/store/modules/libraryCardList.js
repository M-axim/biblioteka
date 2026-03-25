export default {
    actions: {
        async fetchLibraryCardList(ctx) {
            let libraryCardList

            if (localStorage.getItem("libraryCardList") && JSON.parse(localStorage.getItem("libraryCardList")).length !== 0)
                libraryCardList = JSON.parse(localStorage.getItem("libraryCardList"))
            else {
            libraryCardList = [
                    {
                        id: 1,
                        fullname: "Родионова Варвара Никитична",
                        birthdate: "1968-12-24",
                        tel: "+79207228874",
                        books: [
                            {
                                id: 1,
                                title: "Немного о России",
                                description: "О колониализме : [Сборник : Перевод] / К. Маркс, Ф. Энгельс. - Москва : Прогресс, Б. г. (1990). - 213,[1] с.; 20 см.; ISBN 5-01-002409-8 (В пер.) : 90 к.",
                                imgSrc: "https://placehold.co/50",
                                tags: ["история", "история России"],
                                author: ["Мария Лунёва"],
                                publicationDate: 2020,
                            },
                            {
                                id: 2,
                                title: "Немного о России",
                                description: "О колониализме : [Сборник : Перевод] / К. Маркс, Ф. Энгельс. - Москва : Прогресс, Б. г. (1990). - 213,[1] с.; 20 см.; ISBN 5-01-002409-8 (В пер.) : 90 к.",
                                imgSrc: "https://placehold.co/50",
                                tags: ["история", "история России"],
                                author: ["Мария Лунёва"],
                                publicationDate: 2020,
                            }
                        ]
                    },
                    {
                        id: 100,
                        fullname: "Родионова Варвара Никитична",
                        birthdate: "1968-12-24",
                        tel: "+79207228874",
                        books: [
                            {
                                id: 1,
                                title: "Немного о России",
                                description: "О колониализме : [Сборник : Перевод] / К. Маркс, Ф. Энгельс. - Москва : Прогресс, Б. г. (1990). - 213,[1] с.; 20 см.; ISBN 5-01-002409-8 (В пер.) : 90 к.",
                                imgSrc: "https://placehold.co/50",
                                tags: ["история", "история России"],
                                author: ["Мария Лунёва"],
                                publicationDate: 2020,
                            },
                            {
                                id: 2,
                                title: "Немного о России",
                                description: "О колониализме : [Сборник : Перевод] / К. Маркс, Ф. Энгельс. - Москва : Прогресс, Б. г. (1990). - 213,[1] с.; 20 см.; ISBN 5-01-002409-8 (В пер.) : 90 к.",
                                imgSrc: "https://placehold.co/50",
                                tags: ["история", "история России"],
                                author: ["Мария Лунёва"],
                                publicationDate: 2020,
                            }
                        ]
                    },
                    {
                        id: 2,
                        fullname: "Родионова Варвара Никитична",
                        birthdate: "1968-12-24",
                        tel: "+79207228874",
                        books: [
                            {
                                id: 1,
                                title: "Немного о России",
                                description: "О колониализме : [Сборник : Перевод] / К. Маркс, Ф. Энгельс. - Москва : Прогресс, Б. г. (1990). - 213,[1] с.; 20 см.; ISBN 5-01-002409-8 (В пер.) : 90 к.",
                                imgSrc: "https://placehold.co/50",
                                tags: ["история", "история России"],
                                author: ["Мария Лунёва"],
                                publicationDate: 2020,
                            },
                            {
                                id: 2,
                                title: "Немного о России",
                                description: "О колониализме : [Сборник : Перевод] / К. Маркс, Ф. Энгельс. - Москва : Прогресс, Б. г. (1990). - 213,[1] с.; 20 см.; ISBN 5-01-002409-8 (В пер.) : 90 к.",
                                imgSrc: "https://placehold.co/50",
                                tags: ["история", "история России"],
                                author: ["Мария Лунёва"],
                                publicationDate: 2020,
                            }
                        ]
                    },
                    {
                        id: 3,
                        fullname: "Родионова Варвара Никитична",
                        birthdate: "1968-12-24",
                        tel: "+79207228874",
                        books: [
                            {
                                id: 1,
                                title: "Немного о России",
                                description: "О колониализме : [Сборник : Перевод] / К. Маркс, Ф. Энгельс. - Москва : Прогресс, Б. г. (1990). - 213,[1] с.; 20 см.; ISBN 5-01-002409-8 (В пер.) : 90 к.",
                                imgSrc: "https://placehold.co/50",
                                tags: ["история", "история России"],
                                author: ["Мария Лунёва"],
                                publicationDate: 2020,
                            },
                            {
                                id: 2,
                                title: "Немного о России",
                                description: "О колониализме : [Сборник : Перевод] / К. Маркс, Ф. Энгельс. - Москва : Прогресс, Б. г. (1990). - 213,[1] с.; 20 см.; ISBN 5-01-002409-8 (В пер.) : 90 к.",
                                imgSrc: "https://placehold.co/50",
                                tags: ["история", "история России"],
                                author: ["Мария Лунёва"],
                                publicationDate: 2020,
                            }
                        ]
                    },
                    {
                        id: 4,
                        fullname: "Родионова Варвара Никитична",
                        birthdate: "1968-12-24",
                        tel: "+79207228874",
                        books: [
                            {
                                id: 1,
                                title: "Немного о России",
                                description: "О колониализме : [Сборник : Перевод] / К. Маркс, Ф. Энгельс. - Москва : Прогресс, Б. г. (1990). - 213,[1] с.; 20 см.; ISBN 5-01-002409-8 (В пер.) : 90 к.",
                                imgSrc: "https://placehold.co/50",
                                tags: ["история", "история России"],
                                author: ["Мария Лунёва"],
                                publicationDate: 2020,
                            },
                            {
                                id: 2,
                                title: "Немного о России",
                                description: "О колониализме : [Сборник : Перевод] / К. Маркс, Ф. Энгельс. - Москва : Прогресс, Б. г. (1990). - 213,[1] с.; 20 см.; ISBN 5-01-002409-8 (В пер.) : 90 к.",
                                imgSrc: "https://placehold.co/50",
                                tags: ["история", "история России"],
                                author: ["Мария Лунёва"],
                                publicationDate: 2020,
                            }
                        ]
                    },
                    {
                        id: 5,
                        fullname: "Родионова Варвара Никитична",
                        birthdate: "1968-12-24",
                        tel: "+79207228874",
                        books: [
                            {
                                id: 1,
                                title: "Немного о России",
                                description: "О колониализме : [Сборник : Перевод] / К. Маркс, Ф. Энгельс. - Москва : Прогресс, Б. г. (1990). - 213,[1] с.; 20 см.; ISBN 5-01-002409-8 (В пер.) : 90 к.",
                                imgSrc: "https://placehold.co/50",
                                tags: ["история", "история России"],
                                author: ["Мария Лунёва"],
                                publicationDate: 2020,
                            },
                            {
                                id: 2,
                                title: "Немного о России",
                                description: "О колониализме : [Сборник : Перевод] / К. Маркс, Ф. Энгельс. - Москва : Прогресс, Б. г. (1990). - 213,[1] с.; 20 см.; ISBN 5-01-002409-8 (В пер.) : 90 к.",
                                imgSrc: "https://placehold.co/50",
                                tags: ["история", "история России"],
                                author: ["Мария Лунёва"],
                                publicationDate: 2020,
                            }
                        ]
                    }
                ]
                localStorage.setItem('libraryCardList', JSON.stringify(libraryCardList));
            }
            ctx.commit("updateLibraryCardList", libraryCardList)

        }
    }, 
    mutations: {
        updateLibraryCardList(state, libraryCardList) {
            state.libraryCardList = libraryCardList
        },
        getLibraryCardObject(state, libraryCardId) {
            state.libraryCardObject = state.libraryCardList.filter( (elem) => elem.id === libraryCardId)[0]
        },
        resetLibraryCardObject(state) {
            state.libraryCardObject = null
        },
        updateLocalStorage(state) {
            if (state.libraryCardList.length >= 1)
                localStorage.setItem('libraryCardList', JSON.stringify(state.libraryCardList));
        },
        newLibraryCard(state, newBook) {
            state.libraryCardList.push(newBook)
            this.commit("updateLocalStorage", state)
        },
        updateLibraryCard(state, libraryCard) {
            let findIndex = state.libraryCardList.findIndex( (elem) => elem.id === libraryCard.id)
            state.libraryCardList[findIndex] = libraryCard.fullname
            state.libraryCardList[findIndex] = libraryCard.birthdate
            state.libraryCardList[findIndex] = libraryCard.tel
            this.commit("updateLocalStorage", state)
        },
        newLibraryCardBook(state, libraryCardBook) {
            let findIndex = state.libraryCardList.findIndex( (elem) => elem.id === state.targetLibraryCard)
            state.libraryCardList[findIndex].books.push(libraryCardBook)
            this.commit("updateLocalStorage", state)
        },
        setTargetLibraryCard(state, libraryCardId) {
            state.targetLibraryCard = libraryCardId
        },
        editLibraryCard(state, bookId, editBook) {
            findId = state.libraryCardList.map( (elem, index) => {
                if (elem.id === bookId)
                    return index
            })

            state.libraryCardList[index] = editBook
            this.commit("updateLocalStorage", state)

        },
        deleteLibraryCard(state, libraryCardId) {
            state.libraryCardList = state.libraryCardList.filter( (elem) => elem.id !== libraryCardId)
            this.commit("updateLocalStorage", state)
        },
        deleteLibraryCardBook(state, bookId) {
            let findIndex = state.libraryCardList.findIndex( (elem) => elem.id === state.targetLibraryCard)
            state.libraryCardList[findIndex].books = state.libraryCardList[findIndex].books.filter( (elem, index) => index !== bookId)
            this.commit("updateLocalStorage", state)
        }
    },
    getters: {
        libraryCardList(state) {
            return state.libraryCardList
        },
        libraryCardObject(state) {
            return state.libraryCardObject
        },
        targetLibraryCard(state) {
            return state.targetLibraryCard
        }
    },
    state: {
        libraryCardList: [],
        libraryCardObject: null,
        targetLibraryCard: null
    },
}