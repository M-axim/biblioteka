import Vuex from "vuex"
// import videoBlock from "./modules/videoBlock"
// import filterList from "./modules/filterLine"
// import enrolledList from "./modules/enrolledList"
// import personalInfo from "./modules/personalInfo"
// import transferCourseList from "./modules/transferCourseList"
// import transferGroupList from "./modules/transferGroupList"
// import expulsionList from "./modules/expulsionList"
// import academicLeaveList from "./modules/academicLeaveList"
// import academicPerformanceList from "./modules/academicPerformanceList"
// import consolidatedStatement from "./modules/consolidatedStatement"
// import accordionItem from "./modules/accordionItem"
// import accordionGroupList from "./modules/accordionGroupList"
// import groupInfo from "./modules/groupInfo"
// import groupStudents from "./modules/groupStudents"
// import studentsList from "./modules/studentsList"
import bookSearchToast from "./modules/bookSearchToast"
import bookList from "./modules/bookList"
import bookSearchTags from "./modules/BookSearchTags"
import languageList from "./modules/BookSearch/languageList"
import genresList from "./modules/BookSearch/genresList"
import calendar from "./modules/calendar"
import user from "./modules/user"
import authorList from "./modules/BookSearch/authorList"
import searchLine from "./modules/BookSearch/searchLine"
import PageFlip from "./modules/PageFlip"
import libraryCardList from "./modules/libraryCardList"
import employer from "./modules/employer"

const store = new Vuex.Store({
    modules: {
        // videoBlock,
        // filterList,
        // enrolledList,
        // personalInfo,
        // transferCourseList,
        // transferGroupList,
        // expulsionList,
        // academicLeaveList,
        // academicPerformanceList,
        // consolidatedStatement,
        // accordionItem,
        // accordionGroupList,
        // groupInfo,
        // groupStudents,
        // studentsList,
        bookSearchToast,
        bookList,
        bookSearchTags,
        languageList,
        genresList,
        calendar,
        user,
        authorList,
        searchLine,
        PageFlip,
        libraryCardList,
        employer
    }
})

export default store