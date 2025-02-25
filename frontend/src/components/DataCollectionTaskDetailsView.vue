<template>

    <v-data-table
        :headers="headers"
        :items="dataCollectionTaskDetails"
        :items-per-page="5"
        class="elevation-1"
    ></v-data-table>

</template>

<script>
    const axios = require('axios').default;

    export default {
        name: 'DataCollectionTaskDetailsView',
        props: {
            value: Object,
            editMode: Boolean,
            isNew: Boolean
        },
        data: () => ({
            headers: [
                { text: "id", value: "id" },
            ],
            dataCollectionTaskDetails : [],
        }),
          async created() {
            var temp = await axios.get(axios.fixUrl('/dataCollectionTaskDetails'))

            temp.data._embedded.dataCollectionTaskDetails.map(obj => obj.id=obj._links.self.href.split("/")[obj._links.self.href.split("/").length - 1])

            this.dataCollectionTaskDetails = temp.data._embedded.dataCollectionTaskDetails;
        },
        methods: {
        }
    }
</script>

