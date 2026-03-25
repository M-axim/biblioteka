import {PageFlip} from 'page-flip'

export default {
    mutations: {
        pageFlipStart(state, object = null) {
            let pageFlip = new PageFlip(document.getElementById('book'),
            {
                width: 550, // base page width
                height: 533, // base page height

                size: "stretch",
                // set threshold values:
                minWidth: 315,
                maxWidth: 1000,
                minHeight: 420,
                startPage: 2,
                maxHeight: 1350,
                useMouseEvents: false,

                maxShadowOpacity: 0.5, // Half shadow intensity
                showCover: true,
                mobileScrollSupport: false // disable content scrolling on mobile devices
            })
            pageFlip.loadFromHTML(document.querySelectorAll('.page'))
            state.pageFlip = pageFlip
        },
        updatePageFlip(state, pageFlip) {
            state.pageFlip = pageFlip
            console.log(state.pageFlip);
        },
        flipPrev(state) {
            state.pageFlip.flipPrev()
        },
        flip(state, number) {
            state.pageFlip.flip(number)
        },
        flipNext(state) {
            state.pageFlip.flipNext()
        }
    },
    state: {
        pageFlip: {},
        currentPage: 12
    },
    getters: {
        pageFlip(state) {
            return state.pageFlip
        },
        currentPage(state) {
            return state.pageFlip.getCurrentPageIndex()
        }
    }
}