import { createApp } from 'vue'
import axios from 'axios' // Jangan lupa import axios!

createApp({
  data() {
    return {
      basketball_court: []
    }
  },

  created() {
    this.selectCourt()
  },

  methods: {
    selectCourt() {
      axios.get('https://63eb0395f1a969340db07b4f.mockapi.io/basketball_court/')
        .then(response => {
          this.basketball_court = response.data // Simpan seluruh data dari API
        })
        .catch(err => {
          console.log("Error fetching data:", err);
        })
    }
  }
}).mount('#app')
