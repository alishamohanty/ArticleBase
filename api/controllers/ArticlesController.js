/**
 * ArticlesController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
  
    list: function(req,res,next) 
    {
        Articles.find({}).exec(function (err , articles)
        { 
            console.log("Done");
          if(err)
          {
             res.status(500);
             res.send({error:'Database Error'});  
          }
          console.log('Inside article method');
          res.view('pages/list', { articles : articles});
        });
    },
    add: function(req,res)
    {
      res.view('pages/add');
    }

};

