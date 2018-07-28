new Vue({
    el: "#vue-app",
    data:{
        name: "maik",
        job: "ITler"
    }, 
    methods: {
        greet:function(time){
            var name = this.name;
            return "Good "+time+" "+name;
        }
    }
});