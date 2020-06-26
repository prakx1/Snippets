////pagination

router.route('/')
.get((req,res,next) => {
    let currentPage = parseInt(req.query.page) || 1;
    let perPage = 3;
    let totalItems;
    //currentPage
    Blog.find()
      .countDocuments()
      .then(count => {
        totalItems = count;
        const lastPage = Math.ceil(totalItems / perPage);
        Blog.find()
          .sort("-date")
          .skip((currentPage - 1) * perPage)
          .limit(perPage)
          
          .then(blogs => {
            if (currentPage>lastPage){
              res.render('index',{
                title:"OOPS!!!",
                message:'Page Not Found! :('
              })
            }
            else{
            console.log("req.query.page="+req.query.page)
            console.log('currentPage='+currentPage)
            console.log(totalItems)
              res.render("home", {
                title:'Blog Dialog',
                blogs:blogs,
                totalItems: totalItems,
                lastPage,
                currentPage
              });
            //  res.json(blogs)
            }
          });
      })
  });


module.exports = router;
