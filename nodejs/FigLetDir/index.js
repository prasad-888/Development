// install npm on your device

const figlet = require("figlet");

figlet("LEW World!!", function(err, data){
    if (err) {
        console.log("Something went wrong...");
        console.dir(err);
        return;
    }
    console.log(data);
});