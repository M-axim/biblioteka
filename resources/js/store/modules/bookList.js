export default {
    state: {
        bookList: [],
        bookObject: null,
        bookListLength: 0,
        countBookOnPage: 0,
        searchLine: ""
    },
    actions: {
        async fetchBookList(ctx, {page = 0, tags = "", search = "", author = "", date = null}) {
            let bookList

            if (localStorage.getItem("bookList") && JSON.parse(localStorage.getItem("bookList")).length !== 0)
                bookList = JSON.parse(localStorage.getItem("bookList"))
            else {
                bookList = [
                    {
                        id: 1,
                        title: "Дорога в неизвестность",
                        description: "Дорога в неизвестность",
                        imgSrc: "https://cm.author.today/content/2021/04/04/74d3fc408095460092263440a97ae0cc.jpg?width=153&height=200&rmode=max&format=webp",
                        tags: ["Фантастика"],
                        author: ["Кирилл Ерохин"],
                        publicationDate: 2020,
                        bookAvailable : true 
                    },
                    {
                        id: 2,
                        title: "Жертва",
                        description: "Жертва",
                        imgSrc: "https://i.livelib.ru/workpic/1002794400/200x305/baaf/workpic.jpg",
                        tags: ["романтика"],
                        author: ["Эми Мун"],
                        publicationDate: 2021,
                        bookAvailable : false 
                    },
                    {
                        id: 3,
                        title: "Магазинчик времени",
                        description: "Магазинчик времени",
                        imgSrc: "https://s1.livelib.ru/boocover/1008341911/200x305/6fdf/Kim_Sonjon__Magazinchik_vremeni.jpg",
                        tags: ["Детективы"],
                        author: ["Алекс Кин"],
                        publicationDate: 2021,
                        bookAvailable : false 
                    },
                    {
                        id: 4,
                        title: "Лиллехейм. Волчий ветер",
                        description: "Лиллехейм. Волчий ветер",
                        imgSrc: "https://s1.livelib.ru/boocover/1008326869/200x305/67be/Nikolaj_Obodnikov__Lillehejm._Volchij_veter.jpg",
                        tags: ["хоррор"],
                        author: ["Владимир Кретов"],
                        publicationDate: 2020,
                        bookAvailable : true 
                    },
                    {
                        id: 5,
                        title: "Пополь-Вух",
                        description: "Пополь-Вух",
                        imgSrc: "https://bookscafe.net/books/143/143109/cover.jpg",
                        tags: ["хоррор"],
                        author: ["Владимир Кретов"],
                        publicationDate: 2023,
                        bookAvailable : false 
                    },
                    {
                        id: 6,
                        title: "Приключения Робин Гуда",
                        description: "Приключения Робин Гуда",
                        imgSrc: "https://bookscafe.net/img/no-cover.png",
                        tags: ["фэнтези", "наука"],
                        author: ["Алиса Росман"],
                        publicationDate: 2023,
                        bookAvailable : true 
                    },
                    {
                        id: 7,
                        title: "Госпожа Кагуя: В любви как на войне",
                        description: "Госпожа Кагуя: В любви как на войне",
                        imgSrc: "https://s1.livelib.ru/boocover/1008499816/200x305/261f/boocover.jpg",
                        tags: ["фэнтези", "романтика"],
                        author: ["Алиса Росман"],
                        publicationDate: 2021,
                        bookAvailable : true 
                    },
                    {
                        id: 8,
                        title: "Магазинчик времени",
                        description: "Магазинчик времени",
                        imgSrc: "https://s1.livelib.ru/boocover/1008341911/200/6fdf/boocover.jpg",
                        tags: ["комедия"],
                        author: ["Ольга Иконникова"],
                        publicationDate: 2021,
                        bookAvailable : true 
                    },
                    {
                        id: 9,
                        title: "Страшная тайна Кощея",
                        description: "Страшная тайна Кощея",
                        imgSrc: "https://i.livelib.ru/workpic/1007172985/200x305/dc4b/workpic.jpg",
                        tags: ["история"],
                        author: ["Ольга Иконникова"],
                        publicationDate: 2021,
                        bookAvailable : false 
                    },
                ]
                localStorage.setItem('bookList', JSON.stringify(bookList));
            }

            if (tags !== "")
                 bookList = bookList.filter(book => book.tags[0].toLowerCase() === tags.toLowerCase())

            if (author !== "" && author !== "0")
                 bookList = bookList.filter(item => item.author.every(l => author.includes(l)))

            if (search !== "")
                bookList = bookList.filter(w => search.split().every(l => w.title.toLowerCase().includes(l)))

            if (date !== null) {
                if (date.to !== "" && date.end === "")
                    bookList = bookList.filter(book => Number(book.publicationDate) >= Number(date.to))
                else if (date.to === "" && date.end !== "")
                    bookList = bookList.filter(book => Number(book.publicationDate) <= Number(date.end))
                else if (date.to !== "" && date.end !== "")
                    bookList = bookList.filter(book => Number(book.publicationDate) >= Number(date.to) && Number(book.publicationDate) <= Number(date.end))
            }
                ctx.commit("updateBookList", bookList)
                ctx.commit("updateBookListLength", bookList.length)

        }
    }, 
    mutations: {
        updateBookList(state, bookList) {
            state.bookList = bookList
        },
        updateBookListLength(state, bookListLength) {
            state.bookListLength = bookListLength
        },
        updateCountBookOnPage(state, newCount) {
            state.countBookOnPage = newCount
        },
        getBookObject(state, bookId) {
            state.bookObject = state.bookList.filter( (elem) => elem.id === bookId)[0]
        },
        resetBookObject(state) {
            state.bookObject = null
        },
        updateLocalStorageBooking(state) {
            console.log("updateLocalStorageBooking");
            if (state.bookList.length >= 1)
                localStorage.setItem('bookList', JSON.stringify(state.bookList));
        },
        newBookItem(state, newBook) {
            this.commit("updateBookListLength", state.bookList.push(newBook))
            this.commit("updateLocalStorageBooking", state)
        },
        editBook(state, bookId, editBook) {
            findId = state.bookList.map( (elem, index) => {
                if (elem.id === bookId)
                    return index
            })

            state.bookList[index] = editBook

        },
        setSearchLine(state, str) {
            return state.searchLine = str.toLowerCase()
        },
        deleteBook(state, bookId) {
            let tmpBookList = state.bookList.filter( (elem) => elem.id !== bookId)
            this.commit("updateBookList", tmpBookList)
            this.commit("updateBookListLength", tmpBookList.length)
            this.commit("updateLocalStorageBooking", state)
        }
    },
    getters: {
        bookList(state) {
            return state.bookList
        },
        bookObject(state) {
            return state.bookObject
        },
        bookListLength(state) {
            return state.bookListLength
        },
        countBookOnPage(state) {
            return state.countBookOnPage
        },
        searchLine(state) {
            return state.searchLine
        },
    }
}