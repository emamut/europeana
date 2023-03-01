const { createApp } = Vue;

createApp({
  data() {
    return {
      query: 'Barcelona',
      resultData: {},
    };
  },
  methods: {
    buscarAPI(e) {
      let self = this;

      e.preventDefault();

      fetch(
        'https://api.europeana.eu/record/v2/search.json?query=' +
          this.query +
          '&reusability=open&media=true&wskey=rmagnownitni'
      )
        .then((response) => response.json())
        .then((data) => {
          self.resultData = data;
        });
    },
  },
}).mount('#app');
