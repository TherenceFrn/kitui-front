<template>
  <Card>
    <template v-slot:cardBody>
      <ul class="list-group">
        <li class="list-group-item d-flex justify-content-between align-items-center list-group-item-action" v-for="file in history" :key="file.url">
          {{ file.date }}

          <span class="badge badge-primary badge-pill" @click="getfile(file.url)">
              <font-awesome-icon icon="download"/>
          </span>
        </li>
      </ul>
    </template>
  </Card>
</template>

<script>
import axios from 'axios';
import Card from "@/components/Card.vue"
import {library} from '@fortawesome/fontawesome-svg-core';
import {faDownload} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/vue-fontawesome';

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
    axios.get(`${process.env.API_URL}/css`)
        .then(response => {
          this.history = response.data;
          this.history = this.history.map(x => {
            return {
              'url': x,
              'date': this.formatDate(x)
            }
          })
        })
        .catch(error => {
          console.error(error);
        });
  },
  methods: {
    getfile: function (filePath) {
      axios.get(`${process.env.API_URL}/cssFile`, {
        params: {
          path: filePath
        }
      })
          .then(response => {
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


    },
    formatDate: function (url) {
      url = url.split('/');
      let theDate = url[url.length - 1].split('.')[0];
      return this.formatResult(theDate)
    },

    formatResult: function (timestamp) {
      const months = [
        "Janvier", "Février", "Mars", "Avril", "Mai", "Juin",
        "Juillet", "Août", "Septembre", "Octobre", "Novembre", "Décembre"
      ];

      const date = new Date(parseInt(timestamp));
      const day = date.getDate();
      const month = months[date.getMonth()];
      const year = date.getFullYear();
      const hour = date.getHours();
      const minute = date.getMinutes();

      const formattedDate = `${day} ${month} ${year}, ${hour}h${minute}`;
      return formattedDate;
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