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
          if(err)
          {
             res.status(500);
             res.send({error:'Database Error'});  
          }
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
    },

    destroy: function(req,res,next)
    {
     console.log("Inside delete function");
    
      Articles.destroy({id:req.params.id}).exec(function(err)
    {  console.log("Inside destroy method");
    
       if(err)
       {
           next(err);
       }
       res.redirect('/articles/list');
    });
      return false;
    },
    edit: function(req,res,next)
    {
        console.log('Inside delete method');
        Articles.findOne({id:req.params.id}).exec(function(err,article)
        { 
            if(err)
            {
                next(err);
            }
            res.view('pages/edit',{article:article});
        });
    },
    update: function(req,res)
    {
        console.log('Inside update method');
        var title=req.body.title;
         var body=req.body.body;
         var article={title:title,body:body};
         Articles.update({id:req.params.id},article).exec(function(err, article)
        {
            if(err)
            {
                next(err);
            }
            res.redirect('/articles/list');
        });
    }

};

