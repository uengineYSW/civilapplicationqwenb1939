<template>

    <v-card outlined>
        <v-card-title>
            Document
        </v-card-title>

        <v-card-text>
            <String label="DocumentName" v-model="value.documentName" :editMode="editMode"/>
            <String label="Type" v-model="value.type" :editMode="editMode"/>
            <String label="Size" v-model="value.size" :editMode="editMode"/>
        </v-card-text>

        <v-card-actions v-if="inList">
            <slot name="actions"></slot>
        </v-card-actions>
    </v-card>
</template>

<script>

    export default {
        name: 'Document',
        components:{},
        props: {
            value: [Object, String, Number, Boolean, Array],
            editMode: Boolean,
            isNew: Boolean,
            offline: Boolean,
            inList: Boolean,
            label: String,
        },
        data: () => ({
        }),
        async created() {
            if(!Object.values(this.value)[0]) {
                this.$emit('input', {});
                this.newValue = {
                    'documentName': '',
                    'type': '',
                    'size': '',
                }
            }
            if(typeof this.value === 'object') {
                if(!('documentName' in this.value)) {
                    this.value.documentName = '';
                }
            }
            if(typeof this.value === 'object') {
                if(!('type' in this.value)) {
                    this.value.type = '';
                }
            }
            if(typeof this.value === 'object') {
                if(!('size' in this.value)) {
                    this.value.size = '';
                }
            }
        },
        watch: {
            value(val) {
                this.$emit('input', val);
            },
            newValue(val) {
                this.$emit('input', val);
            },
        },

        methods: {
            edit() {
                this.editMode = true;
            },
            async add() {
                this.editMode = false;
                this.$emit('input', this.value);

                if(this.isNew){
                    this.$emit('add', this.value);
                } else {
                    this.$emit('edit', this.value);
                }
            },
            async remove(){
                this.editMode = false;
                this.isDeleted = true;

                this.$emit('input', this.value);
                this.$emit('delete', this.value);
            },
            change(){
                this.$emit('change', this.value);
            },
        }
    }
</script>

