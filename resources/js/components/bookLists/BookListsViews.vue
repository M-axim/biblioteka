<template lang="pug">
.bookListsViews.p-2()
    .flip-book.m-auto#book
        .page.page-cover.page-cover-top(data-density="hard")
            .page-content
                .text-center.d-flex.user-select-none
                    h2.h2.m-auto Книжный каталог
                    v-chevronDoubleRight()
        .page.page-bg-cover.page-cover-top(data-density="hard")
            .page-content.scrollbar
                .text-center.d-flex.user-select-none
                    v-chevronDoubleLeft()
                    h2.h2.m-auto Содержание
                    v-chevronDoubleRight()
                .page-text.fs-4.scrollbar.overflow-auto
                    .page-categories
                        button.btn.btn-sm.btn-outline-dark.mb-2.page-category.w-100.d-flex(@click="fetchBookList({})")
                            span.me-auto Все книги
                            span {{ tmpbookListLength }} книг
                        button.btn.btn-sm.btn-outline-dark.mb-2.page-category.w-100.d-flex(
                            v-for=" (elem, index) in genreLists"
                            :key="index"
                            @click="tags = elem.label, fetchBook()")
                            span.me-auto {{ elem.label}}
                            span {{ getCountBook(elem.label) }} книг
                .page-footer.h-auto
                    .row
                        .col-4
                            v-inputNumber(:placeholder="`Поиск по году (от)`" :min="0" :max="3000" :small="true" v-model:value="dateTo")
                        .col-4
                            v-inputNumber(:placeholder="`Поиск по году (до)`" :min="0" :max="3000" :small="true" v-model:value="dateEnd")
                        .col-4
                            v-inputSelect(:options="authorOptions" v-model:value="targetSelect")
        .page
            //- .page-header
            .page-content.scrollbar.overflow-x-hidden.overflow-y-auto
                SearchLine()
                .bookListsViews__books.page-text.row.row-cols-1.row-cols-sm-2.row-cols-md-3.g-2
                    bookCard()
        .page.page-cover.page-cover-top(data-density="hard")
            .page-content
                .text-center.d-flex.user-select-none
                    v-chevronDoubleLeft()
                    h2.h2.m-auto Книжный каталог
        Auth()
        Employer()
        AuthorEdit()
        GenresEdit()
        BookEdit()
        LibraryCardEdit()

</template>

<script>

import {mapActions, mapGetters, mapMutations} from "vuex"
import bookCard from './BookCard'
import BookListsTag from './BookListsTag';
import SearchLine from "../blocks/SearchLine"
import BookEdit from '../adminPanel/BookEdit'
import GenresEdit from '../adminPanel/GenresEdit'
import AuthorEdit from "../adminPanel/AuthorEdit"
import LibraryCardEdit from "../adminPanel/LibraryCardEdit"
import Auth from "../adminPanel/Auth"
import Employer from "../adminPanel/Employer"

export default {
    components: {
        bookCard,
        BookListsTag,
        SearchLine,
        BookEdit,
        GenresEdit,
        AuthorEdit,
        LibraryCardEdit,
        Auth,
        Employer
    },
    data() {
        return {
            bookPaginationCurrentPage: 0,
            bookPaginationPageCount: 1,
            tmpBookList: [],
            tmpbookListLength: 0,
            dateTo: "",
            dateEnd: "",
            authorOptions: [],
            targetSelect: "",
            tags: "",

        }
    },
    computed: {
        ...mapGetters(["bookListLength", "bookSearchTags", "genreLists", "currentPage", "authorList", "bookList", "searchLine"])
    },
    methods: {
        ...mapMutations(['updateBookListLength', "pageFlipStart"]),
        ...mapActions(["fetchBookList", "fetchGenreLists"]),

        filterBook(label) {
            this.tmpBookList = this.bookList.filter(book => book.tags[0].toLowerCase() === label.toLowerCase())
        },
        getPage(newCurrentPage) {
            this.bookPaginationCurrentPage = newCurrentPage
        },
        increaseCurrentPage() {
            this.bookPaginationCurrentPage += this.bookPaginationCurrentPage >= this.bookPaginationPageCount ? 0 : 1
        },
        decreaseCurrentPage() {
            this.bookPaginationCurrentPage -= this.bookPaginationCurrentPage <= 0 ? 0 : 1
        },
        getCountBook(tagsLabel) {
            return this.tmpBookList.filter( (elem) => elem.tags[0] === tagsLabel).length
        },
        fetchBook() {
            let date = {
                to : this.dateTo,
                end : this.dateEnd
            }
            this.fetchBookList({tags: this.tags, search: this.searchLine, author: this.targetSelect, date: date})
        },
    },
    async mounted() {
        this.fetchGenreLists()
        //this.bookPaginationPageCount = Math.ceil(this.bookListLength / 10)
        this.pageFlipStart()
        this.tmpBookList = this.bookList
        this.tmpbookListLength = this.bookListLength
        this.authorOptions = this.authorList.map( (elem) => ({
            value: elem.label,
            text: elem.label
        }))
        this.authorOptions.unshift({
            value: "0",
            text: "Выберите автора"
        })
    },
    watch: {
        targetSelect() {
            this.fetchBook()
        },
        dateTo() {
            this.fetchBook()
        },
        dateEnd() {
            this.fetchBook()
        },
        searchLine() {
            this.fetchBook()
        },
    }
}
</script>

<style lang="scss">
.bi::before {
    margin-right: 0.5rem;
}

.scrollbar::-webkit-scrollbar {
    width: 6px;
    border-radius: 50px;
}

.scrollbar::-webkit-scrollbar-track {
    background-color:#FFFFFF;
    border-radius: 50px;
}

.scrollbar::-webkit-scrollbar-thumb {
  background-color:#2A2A2A;
  border-radius:10px;
  border-style:solid;
  border-width:2px;
  border-color:#FFFFFF;
}

.flip-book {
  box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.5);
  display: none;
  background-size: cover;
}

.page-table-cover,
.page-table-cover td,
.page-table-cover th,
.page-bg-cover {
    background-color: #e3d0b5 !important;
    color:  black;
    border: solid 1px #998466 !important;
} 

.page-table-cover th,
.page-table-cover td {
    color: black;
    border: none !important;
}

.page {
  padding: 30px;
  background-color: #fdfaf7;
  color: black;
  border: solid 1px #c2b5a3;

  overflow: hidden;

  .page-header {
      height: 15px;
      font-size: 100%;
      text-transform: uppercase;
      text-align: center;
    }

  .page-content {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: stretch;

    .page-image {
      height: 100%;
      background-size: contain;
      background-position: center center;
      background-repeat: no-repeat;
    }

    .page-text {
      height: 100%;
      flex-grow: 1;
      font-size: 80%;
      text-align: justify;
      margin-top: 10px;
      padding-top: 10px;
      box-sizing: border-box;
      border-top: solid 1px #f4e8d7;
    }

    .page-footer {
      height: 30px;
      border-top: solid 1px #f4e8d7;
      font-size: 80%;
      color: black;
    }
  }

  &.--left { // for left page (property will be added automatically)
    border-right: 0;
    box-shadow: inset -7px 0 30px -7px rgba(0, 0, 0, 0.4);
  }

  &.--right { // for right page (property will be added automatically)
    border-left: 0;
    box-shadow: inset 7px 0 30px -7px rgba(0, 0, 0, 0.4);

    .page-footer {
      text-align: right;
    }
  }

  &.hard { // for hard page
    background-color: #f2e8d9;
    border: solid 1px #998466;
  }

  &.page-cover {
    background-color: #e3d0b5;
    color:  black;
    border: solid 1px #998466;

    h2 {
      text-align: center;
      padding-top: 50%;
      font-size: 210%;
    }

    &.page-cover-top {
      box-shadow: inset 0px 0 30px 0px rgba(36, 10, 3, 0.5), -2px 0 5px 2px rgba(0, 0, 0, 0.4);
    }

    &.page-cover-bottom {
      box-shadow: inset 0px 0 30px 0px rgba(36, 10, 3, 0.5), 10px 0 8px 0px rgba(0, 0, 0, 0.4);
    }
  }
}

.fs-7 {
    font-size: .8rem;
}

</style>