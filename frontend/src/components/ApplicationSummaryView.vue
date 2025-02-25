<template>

    <v-data-table
        :headers="headers"
        :items="applicationSummary"
        :items-per-page="5"
        class="elevation-1"
    ></v-data-table>

</template>

<script>
    const axios = require('axios').default;

    export default {
        name: 'ApplicationSummaryView',
        props: {
            value: Object,
            editMode: Boolean,
            isNew: Boolean
        },
        data: () => ({
            headers: [
                { text: "id", value: "id" },
            ],
            applicationSummary : [],
        }),
          async created() {
            var temp = await axios.get(axios.fixUrl('/applicationSummaries'))

            temp.data._embedded.applicationSummaries.map(obj => obj.id=obj._links.self.href.split("/")[obj._links.self.href.split("/").length - 1])

            this.applicationSummary = temp.data._embedded.applicationSummaries;
        },
        methods: {
        }
    }
</script>

