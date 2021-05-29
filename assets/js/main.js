const app = new Vue({
    el: '#app',

    data: {
        albums: {},
        selected: '',
        options: [
            { name: 'All' },
            { name: 'Rock' },
            { name: 'Pop' },
            { name: 'Metal' }

        ]
    },

    methods: {},

    mounted() {
        axios.get('https://flynn.boolean.careers/exercises/api/array/music')
            .then(response => {
                this.albums = response.data.response;
                console.log(this.response);
            })
    }
})
