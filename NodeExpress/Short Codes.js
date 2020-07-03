//USING A VARIABLE FOR ALL RROUTES
app.use('*',(req,res,next)=>{
  app.locals.auth=req.session.user;
  next()
})
