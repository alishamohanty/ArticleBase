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
    },
    create:function (req,res,next)
    {
         var title=req.body.title;
         var body=req.body.body;
         var article={title:title,body:body};
         Articles.create(article).exec(function(err, article)
        {
            if(err)
            {
                next(err);
            }
            res.redirect('/articles/list');
        });
    }

};

