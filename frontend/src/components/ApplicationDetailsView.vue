<template>

    <v-data-table
        :headers="headers"
        :items="applicationDetails"
        :items-per-page="5"
        class="elevation-1"
    ></v-data-table>

</template>

<script>
    const axios = require('axios').default;

    export default {
        name: 'ApplicationDetailsView',
        props: {
            value: Object,
            editMode: Boolean,
            isNew: Boolean
        },
        data: () => ({
            headers: [
                { text: "id", value: "id" },
            ],
            applicationDetails : [],
        }),
          async created() {
            var temp = await axios.get(axios.fixUrl('/applicationDetails'))

            temp.data._embedded.applicationDetails.map(obj => obj.id=obj._links.self.href.split("/")[obj._links.self.href.split("/").length - 1])

            this.applicationDetails = temp.data._embedded.applicationDetails;
        },
        methods: {
        }
    }
</script>

