const ideas = require("../models/idea.model");

// Search for Idias

exports.fatchIdeas = function (req, res) {
  res.status(202).send(ideas);
};

// Crete for Idea

let idCount = 1;

exports.createIdea = function (req, res) {
  // Read the requeste body
  const idea = req.body;

  // need to generate the next idea id
  idea.id = ++idCount;

  // Save is in the list of existing ideas
  ideas[idCount] = idea;

  // return the response
  res.status(201).send(ideas[idCount]);
};

// Update for Idea


exports.updateIdea = (req,res) =>{
       // I need to read the id passed in the path
       // 127.0.0.1:8080/ideaApp/v1/ideas/

       const ideaId = req.params.id;

       // If the idea is present-- modify the return error

       if(ideas[ideaId]){
        ideas[ideaId] = req.body;
        res.status(200).send(ideas[ideaId]);
       }else{
        res.status(400).send({
          massage: "idea Id Passed was not coreect "
        })
       }
}

// Delete for Idea


exports.deleteIdea = (req, res) =>{
  // Check if present - yes delete, no return error massage

  if(ideas[req.params.id]){
    delete ideas[req.params.id];
    res.status(200).send({
      massage: "Successfully deleted"
    })
  }else{
    res.status(400).send({
      massage : "Wrong idea id passed"
  })
}
}
