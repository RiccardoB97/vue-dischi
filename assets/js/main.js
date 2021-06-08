const app = new Vue({
    el: '#app',

    data: {
        url: 'https://flynn.boolean.careers/exercises/api/array/music',
        albums: null,
        selected: '',
        options: ['All']
    },

    methods: {},

    mounted() {
        axios.get(this.url)
            .then(response => {
                this.albums = response.data.response;
                this.albums.forEach(album => {
                    if(!this.options.includes(album.genre)){
                        this.options.push(album.genre)
                        console.log(this.options);
                    }
                })
            })
            .catch(e => {
                console.error(e);
            })
    }
})
