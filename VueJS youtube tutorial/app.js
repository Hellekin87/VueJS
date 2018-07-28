new Vue({
    el: "#vue-app",
    data:{
        name: "maik",
        job: "ITler",
        age: 25,
        website: "http://www.google.de",
        websiteTag: '<a href="http://www.google.de"> Google Site from Tag</a>',
        x: 0,
        y: 0
    }, 
    methods: {
        greet:function(time){
            var name = this.name;
            return "Good "+time+" "+name;
        },
        add:function(){
            this.age += 1; 
        },
        sub:function(){
            this.age -= 1; 
        },
        updateXY:function(event){
            this.x = event.offsetX;
            this.y = event.offsetY;
        }
    }
});