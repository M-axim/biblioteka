<template lang="pug">

form
    //button.btn.btn-outline-secondary.dropdown-toggle(type="button" data-bs-toggle="dropdown" aria-expanded="false") Фильтр: {{ searchSettingCurrent.name }}
    //- ul.dropdown-menu
    //-     li(v-for="(item, index) in searchSetting" :index="index")
    //-         a.dropdown-item(href="#" :data-search-setting="item.id" @click="changeSearchSettingCurrent(index)") {{item.name}}
    //-     li
    //-         a.dropdown-item(type="button" data-bs-toggle="offcanvas" @click="clear()" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight") Расширенный поиск
    //- label.form-label.col.m-0.input-group(v-if="InputShow(searchSettingCurrent, 'number')")
    //-     input.form-control(type="number" aria-label="Год (от)" :placeholder="`${searchSettingCurrent.name}(от):`" v-model="inputNumberFirst")
    //-     input.form-control(type="number" aria-label="Год (до)" :placeholder="`${searchSettingCurrent.name}(до):`" v-model="inputNumberLast")
    label.form-label.w-100
        input.form-control.rounded-3.w-100(type="text" name="searchLine" placeholder="Поиск по названию" @input="setSearchLine(inputText)" v-model="inputText")
    
    //button.btn.btn-outline-secondary(type="reset" @click="clear()") Сбросить
    //button.btn.btn-outline-secondary(type="button" @click="filter()") Поиск
</template>

<script>
import {mapMutations, mapGetters, mapActions} from 'vuex'

    export default {
        data() {
            return {
                optionsList: [
                    [
                        {
                            id: 0,
                            name: "л."
                        },
                        {
                            id: 1,
                            name: "кг."
                        }
                    ],
                    [
                        {
                            id: 0,
                            name: "Молочная продукция"
                        },
                        {
                            id: 1,
                            name: "Конфеты"
                        },
                        {
                            id: 2,
                            name: "Мучное"
                        },
                    ]
                ],
                inputFormWarehouseType: 
                [   
                    "text",
                    "number"
                ],
                inputFormWarehouseActiveIndex: 0,
                currentOptionList: [],
                inputText: "",
                inputNumberFirst: "",
                inputNumberLast: "",
            }
        },
        methods: {  
            ...mapMutations(["updateSearchSetting", "updateSearchSettingCurrent", "fullUpdateWarehouseSetting", "setSearchLine"]),
            ...mapActions(["fetchBookList"]),
            changeSearchSettingCurrent(id) {
                this.updateSearchSettingCurrent(this.searchSetting[id])
            },
            InputShow(item = null, warehouseType = "text") {

                if (item === null) return 1

                if (item.inputType === warehouseType)
                {
                    let selectTypeOption = this.inputFormWarehouseType.findIndex( (i) => i === item.inputType)
                    this.inputFormWarehouseActiveIndex = selectTypeOption
                    return (selectTypeOption !== -1)
                }
            },
            filter() {                
                switch(this.inputFormWarehouseActiveIndex) {
                    case 0:
                        this.fetchBookList({filterSetting: 
                            {
                                type: this.searchSettingCurrent.id,
                                first: this.inputText,
                                last: null
                            } })
                        break
                    case 1:
                        this.fetchBookList({page: 0, tags: [], filterSetting: 
                            {
                                type: this.searchSettingCurrent.id,
                                first: this.inputNumberFirst,
                                last: this.inputNumberLast
                            } })
                        break
                }
            },
            fetchFilteredDataList(filter) {
                console.log(this.warehouseDocumentName);
                switch(this.warehouseDocumentName)
                {
                    case "inventory":
                        this.fetchWarehouseInventory({
                            type: this.searchSettingCurrent.id,
                            first: String(filter.first),
                            last: String(filter.last)
                        })
                    break
                    case "entrance":
                        this.fetchWarehouseEntrance({
                                type: this.searchSettingCurrent.id,
                                first: String(filter.first),
                                last: String(filter.last)
                            })
                    break
                    case "document":
                        this.fetchWarehouseDocument({
                                type: this.searchSettingCurrent.id,
                                first: String(filter.first),
                                last: String(filter.last)
                            })
                    break
                }

            },
            clear() {
                this.fetchBookList({})
            }
        },
        computed: {
            ...mapGetters(["searchSetting", "searchSettingCurrent", "warehouseDocumentName"])
        },
        async mounted() {
            let searchSetting = [
                {
                    id: "title",
                    name: "Название документа",
                    inputType: "text",
                    optionsList: null
                },
                {
                    id: "description",
                    name: "Описание",
                    inputType: "text",
                    optionsList: null
                },
                {
                    id: "publicationDate",
                    name: "Год",
                    inputType: "number",
                    optionsList: null
                }
            ]
            this.fullUpdateWarehouseSetting(searchSetting)
        },
        watch: {
        }
}
</script>

<style lang="scss" scoped>

</style>