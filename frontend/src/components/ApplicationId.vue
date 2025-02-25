<template>

    <v-card outlined>
        <v-card-title>
            ApplicationId
        </v-card-title>

        <v-card-text>
            <String label="ApplicationNumber" v-model="value.applicationNumber" :editMode="editMode"/>
            <ServiceType offline label="ServiceType" v-model="value.serviceType" :editMode="editMode" @change="change"/>
            <ApplicationStatus offline label="ApplicationStatus" v-model="value.applicationStatus" :editMode="editMode" @change="change"/>
        </v-card-text>

        <v-card-actions v-if="inList">
            <slot name="actions"></slot>
        </v-card-actions>
    </v-card>
</template>

<script>

    export default {
        name: 'ApplicationId',
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
                    'applicationNumber': '',
                    'serviceType': '',
                    'applicationStatus': '',
                }
            }
            if(typeof this.value === 'object') {
                if(!('applicationNumber' in this.value)) {
                    this.value.applicationNumber = '';
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

