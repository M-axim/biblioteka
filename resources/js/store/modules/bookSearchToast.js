export default {
    mutations: {
        updateBookSearchFilterType(state, filterType) {
            state.bookSearchFilterType = filterType
        },
        updateBookToastFilter(state, status) {
            state.bookToastFilter = status
        }
    },
    state: {
        bookSearchFilterType: [],
        bookToastFilter: true 
    },
    getters: {
        bookSearchFilterType(state) {
            return state.bookSearchFilterType
        },
        bookToastFilter(state) {
            return state.bookToastFilter
        },
    }
}