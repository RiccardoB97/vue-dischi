const app = new Vue({
    el: '#app',

    data: {
        url: 'https://flynn.boolean.careers/exercises/api/array/music',
        albums: null,
        selected: '',
        options: [{ name: 'All' }]
    },

    methods: {},

    mounted() {
        axios.get(this.url)
            .then(response => {
                this.albums = response.data.response;
                for (var i = 0; i < this.albums.length; i++) {
                    if (this.options.includes({ name: this.albums[i].genre })) {
                        this.options.push({ name: this.albums[i].genre })
                    }
                }
            })
            .catch(e => {
                console.error(e);
            })
    }
})
