<template>
    <div>
        <v-data-table
                :headers="headers"
                :items="values"
                :items-per-page="5"
                class="elevation-1"
        ></v-data-table>

        <v-col style="margin-bottom:40px;">
            <div class="text-center">
                <v-dialog
                        v-model="openDialog"
                        width="332.5"
                        fullscreen
                        hide-overlay
                        transition="dialog-bottom-transition"
                >
                    <template v-slot:activator="{ on, attrs }">
                        <v-fab-transition>
                            <v-btn
                                    color="primary"
                                    fab
                                    dark
                                    large
                                    style="position:absolute; bottom: 5%; right: 2%; z-index:99"
                                    @click="openDialog=true;"
                            >
                                <v-icon v-bind="attrs" v-on="on">mdi-plus</v-icon>
                            </v-btn>
                        </v-fab-transition>
                    </template>

                    <DataCollectionDataCollector :offline="offline"  :isNew="true" :editMode="true" v-model="newValue" @add="append" v-if="tick"/>
                
                    <v-btn
                        class="gs-close-btn"
                        @click="closeDialog()"
                        depressed 
                        icon 
                        absolute
                    >
                        <v-icon>mdi-close</v-icon>
                    </v-btn>
                </v-dialog>
            </div>
        </v-col>
    </div>
</template>

<script>
    const axios = require('axios').default;
    import DataCollectionDataCollector from './../DataCollectionDataCollector.vue';

    export default {
        name: 'DataCollectionDataCollectorManager',
        components: {
            DataCollectionDataCollector,
        },
        props: {
            offline: Boolean,
            editMode: Boolean,
            isNew: Boolean
        },
        data: () => ({
            values: [],
            headers: 
                [
                    { text: "dataCollectorId", value: "dataCollectorId" },
                    { text: "status", value: "status" },
                    { text: "schedule", value: "schedule" },
                    { text: "nextRunTime", value: "nextRunTime" },
                    { text: "userData", value: "userData" },
                    { text: "document", value: "document" },
                    { text: "applicationId", value: "applicationId" },
                ],
            dataCollector : [],
            newValue: {},
            tick : true,
            openDialog : false,
        }),
        async created() {
            if(this.offline){
                if(!this.values) this.values = [];
                return;
            }

            var temp = await axios.get(axios.fixUrl('/datacollectors'))
            temp.data._embedded.datacollectors.map(obj => obj.id=obj._links.self.href.split("/")[obj._links.self.href.split("/").length - 1])
            this.values = temp.data._embedded.datacollectors;

            this.newValue = {
                'dataCollectorId': '',
                'status': '',
                'schedule': '',
                'nextRunTime': '2025-02-25',
                'userData': {},
                'document': {},
                'applicationId': {},
            }
        },
        methods: {
            closeDialog(){
                this.openDialog = false
            },
            append(value){
                this.tick = false
                this.newValue = {}
                this.values.push(value)
                
                this.$emit('input', this.values);

                this.$nextTick(function(){
                    this.tick=true
                })
            },
        }
    }
</script>

