<template>

    <v-data-table
        :headers="headers"
        :items="dataCollectionTaskSummary"
        :items-per-page="5"
        class="elevation-1"
    ></v-data-table>

</template>

<script>
    const axios = require('axios').default;

    export default {
        name: 'DataCollectionTaskSummaryView',
        props: {
            value: Object,
            editMode: Boolean,
            isNew: Boolean
        },
        data: () => ({
            headers: [
                { text: "id", value: "id" },
            ],
            dataCollectionTaskSummary : [],
        }),
          async created() {
            var temp = await axios.get(axios.fixUrl('/dataCollectionTaskSummaries'))

            temp.data._embedded.dataCollectionTaskSummaries.map(obj => obj.id=obj._links.self.href.split("/")[obj._links.self.href.split("/").length - 1])

            this.dataCollectionTaskSummary = temp.data._embedded.dataCollectionTaskSummaries;
        },
        methods: {
        }
    }
</script>

