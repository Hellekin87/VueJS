new Vue({
    el: "#vue-app",
    data:{
        name: "maik",
        job: "ITler",
        website: "http://www.google.de",
        websiteTag: '<a href="http://www.google.de"> Google Site from Tag</a>'
    }, 
    methods: {
        greet:function(time){
            var name = this.name;
            return "Good "+time+" "+name;
        }
    }
});