<template>

    <v-data-table
        :headers="headers"
        :items="dataCollectionLog"
        :items-per-page="5"
        class="elevation-1"
    ></v-data-table>

</template>

<script>
    const axios = require('axios').default;

    export default {
        name: 'DataCollectionLogView',
        props: {
            value: Object,
            editMode: Boolean,
            isNew: Boolean
        },
        data: () => ({
            headers: [
                { text: "id", value: "id" },
            ],
            dataCollectionLog : [],
        }),
          async created() {
            var temp = await axios.get(axios.fixUrl('/dataCollectionLogs'))

            temp.data._embedded.dataCollectionLogs.map(obj => obj.id=obj._links.self.href.split("/")[obj._links.self.href.split("/").length - 1])

            this.dataCollectionLog = temp.data._embedded.dataCollectionLogs;
        },
        methods: {
        }
    }
</script>

