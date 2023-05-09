<template>
    <Card>
        <template v-slot:cardBody>
            <h2 class="title">
                Historique:
            </h2>
            <ul class="list-group">
                <li class="list-group-item d-flex justify-content-between align-items-center list-group-item-action" v-for="file in history" :key="file">
                    {{ file }}

                    <span class="badge badge-primary badge-pill" @click="getfile(file)"> 
                        <font-awesome-icon icon="download" />
                    </span>
                </li>
            </ul>
        </template>
    </Card>
</template>

<script>
// import { contrastingColor } from "@/assets/kitUiFunctions"
import axios from 'axios';
import Card from "@/components/Card.vue"
import { library } from '@fortawesome/fontawesome-svg-core';
import { faDownload } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

library.add(faDownload);

export default {
    name: "History",
    components: {
        Card,
        FontAwesomeIcon
    },
    data() {
        return {
            history: [],
        }
    },
    mounted() {
        axios.get('http://127.0.0.1:3001/css')
        .then(response => {
            this.history = response.data;
        })
        .catch(error => {
            console.error(error);
        });
    },
    methods: {
        getfile: function(filePath) {
            console.log('GetFile')
            console.log(filePath)
            // premiere etape
            axios.get('http://127.0.0.1:3001/cssFile', {
                params: {
                    path: filePath
                }
            })
            .then(response => {
                // deuxieme etape
                const url = window.URL.createObjectURL(new Blob([response.data]));
                const link = document.createElement('a');
                link.href = url;
                link.setAttribute('download', 'style.css');
                document.body.appendChild(link);
                link.click();
            })
            .catch(error => {
            console.error(error);
            });

            
        }
    }
}
</script>

<style lang="css" scoped>
    ul li span {
        background-color: black;
        cursor: pointer;
    }
</style>