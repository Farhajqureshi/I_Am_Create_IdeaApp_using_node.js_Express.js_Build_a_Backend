const ideaController = require('../controller/idea.controller')

// URI define 

// Define routes for the call lick 
// GET /ideaApp/v1/ideas


module.exports = function(app){
    app.get("/ideaApp/v1/ideas", ideaController.fatchIdeas);
    // Post Call

    app.post("/ideaApp/v1/ideas",ideaController.createIdea);


    // Put Call

    app.put("/ideaApp/v1/ideas/:id",ideaController.updateIdea);

    //  Delete Call

    app.delete("/ideaApp/v1/ideas/:id",ideaController.deleteIdea);
}




