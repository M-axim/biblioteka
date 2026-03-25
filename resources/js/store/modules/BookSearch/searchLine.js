export default {
    mutations: {
        updateSearchSetting(state, searchSetting) {
            state.searchSetting = searchSetting
        },
        updateSearchSettingCurrent(state, searchSettingCurrent) {
            state.searchSettingCurrent = searchSettingCurrent
        },
        updateWarehouseDocumentName(state, documentName) {
            state.warehouseDocumentName = documentName
        },
        updateWarehouseCurrentTab(state, currentTab) {
            state.warehouseCurrentTab = currentTab
        },
        fullUpdateWarehouseSetting(state, searchSetting)
        {
            state.searchSetting = searchSetting
            state.searchSettingCurrent = searchSetting[0]
        }
    },
    state: {
        searchSetting: [],
        searchSettingCurrent: {},
        warehouseDocumentName: "",
        warehouseCurrentTab: ""
    },
    getters: {
        searchSetting(state) {
            return state.searchSetting
        },
        searchSettingCurrent(state) {
            return state.searchSettingCurrent
        },
        warehouseDocumentName(state) {
            return state.warehouseDocumentName
        },
        warehouseCurrentTab(state) {
            return state.warehouseCurrentTab
        },
    }
}