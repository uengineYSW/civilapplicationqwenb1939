<template>

    <v-data-table
        :headers="headers"
        :items="pdfDocumentView"
        :items-per-page="5"
        class="elevation-1"
    ></v-data-table>

</template>

<script>
    const axios = require('axios').default;

    export default {
        name: 'PdfDocumentViewView',
        props: {
            value: Object,
            editMode: Boolean,
            isNew: Boolean
        },
        data: () => ({
            headers: [
                { text: "id", value: "id" },
            ],
            pdfDocumentView : [],
        }),
          async created() {
            var temp = await axios.get(axios.fixUrl('/pdfDocumentViews'))

            temp.data._embedded.pdfDocumentViews.map(obj => obj.id=obj._links.self.href.split("/")[obj._links.self.href.split("/").length - 1])

            this.pdfDocumentView = temp.data._embedded.pdfDocumentViews;
        },
        methods: {
        }
    }
</script>

