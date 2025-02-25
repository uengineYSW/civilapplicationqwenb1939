<template>

    <v-data-table
        :headers="headers"
        :items="signatureStatus"
        :items-per-page="5"
        class="elevation-1"
    ></v-data-table>

</template>

<script>
    const axios = require('axios').default;

    export default {
        name: 'SignatureStatusView',
        props: {
            value: Object,
            editMode: Boolean,
            isNew: Boolean
        },
        data: () => ({
            headers: [
                { text: "id", value: "id" },
            ],
            signatureStatus : [],
        }),
          async created() {
            var temp = await axios.get(axios.fixUrl('/signatureStatuses'))

            temp.data._embedded.signatureStatuses.map(obj => obj.id=obj._links.self.href.split("/")[obj._links.self.href.split("/").length - 1])

            this.signatureStatus = temp.data._embedded.signatureStatuses;
        },
        methods: {
        }
    }
</script>

