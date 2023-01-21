
serverVerbs = ["GET", "GET", "GET", "POST", "GET", "POST"]
serverPaths = ["/", "/about", "/contact", "/login", "/panel", "/logout"]
serverResponses = ["Welcome to WEB700 Assignment 1", "This assignment was prepared by Ifeoma Okoye", "Ifeoma Okoye: iokoye@myseneca.ca", "User Logged In", "Main Panel", "Logout Complete"]


function httpRequest(httpVerb, path) {

    for(var i = 0; i < serverPaths.length; i++) {

        if(serverVerbs[i] === httpVerb && serverPaths[i] === path) {
            return "200: " + serverResponses[i];
        }
    }

    return "404: Unable to process " + httpVerb + " request for " + path;
}

console.log(httpRequest("GET", "/")); 
console.log(httpRequest("POST", "/logout"));
console.log(httpRequest("GET", "/login")); 

function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
}
    
function automateTests() {
    
    var testVerbs = ["GET", "POST"];
    var testPaths = ["/", "/about", "/contact", "/login", "/panel", "/logout", "/randomPath1", "/randomPath2"];
    
    function randomRequest() {
        var randVerb = testVerbs[getRandomInt(testVerbs.length)];
        var randPath = testPaths[getRandomInt(testPaths.length)];
        console.log(httpRequest(randVerb, randPath));
    }
    
    setInterval(randomRequest, 1000);
}
    
automateTests();