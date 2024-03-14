
const { superAgent, getAllSuperAgent } = require("../controllers/super_agent");

module.exports = (app) => {
  // create a new superagent
  app.post(
    '/superagent/create',
    superAgent
  );

  // select all superagent from the database.
  app.get('/getallsuperagent/get',
    getAllSuperAgent);
    /* 
      .then((results)=>{
        console.log('API RESULTS: ', results);
      }) */
  
  // update an agent's information in the database 
  app.put("/api/update/:id", function(req, res){
    let id = req.params.id;
    let data = req.body;
    
    superAgent.findByIdAndUpdate(id, data).then(()=>{
      res.sendStatus(200);
    }).catch((err)=>console.error(err));
  });

  // delete an agent from the database
  app.delete("/api/remove/:id", function(req,res){ 
    let id=req.params.id ;
    superAgent.findByIdAndRemove(id).then(()=>{
      res.json({ removed: 'true'});
    }).catch((err)=>{
      console.error(err)
      res.status(500).json({ error: "An error occurred while deleting the super agent" });
    })
  });



    // update an existing super agent by id
  app.put("/api/:id", function(req, res) {
  const id = req.params.id;
  const updatedData = req.body;
  superAgent.findOneAndUpdate({ _id: id }, updatedData, { new: true })
    .then(updatedSuperAgent => {
      res.json(updatedSuperAgent);
    })
    .catch(err => {
      console.error(err);
      res.status(500).json({ error: "An error occurred while updating the super agent" });
    });
}); 

}



