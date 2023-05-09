<template>
    <div>
        History:
        <div v-for="file in history" :key="file">
            {{ file }}

            <button @click="getfile(file)">
                Télécharger
            </button>
        </div>
    </div>
</template>

<script>
// import { contrastingColor } from "@/assets/kitUiFunctions"
import axios from 'axios';

export default {
    name: "History",
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