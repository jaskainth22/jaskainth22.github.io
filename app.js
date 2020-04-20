var express                 =  require("express");
var app                     =  express();
var mongoose                =  require("mongoose");
mongoose.set('useNewUrlParser', true);
mongoose.set('useFindAndModify', false);
mongoose.set('useCreateIndex', true);
mongoose.set('useUnifiedTopology', true);

app.set('view engine', 'ejs');

app.get("/",function(req,res){
    res.render("landing.ejs");
})




var port = process.env.PORT || 3000;
app.listen(port,() => console.log(" okay Dailylife Server is listening"));