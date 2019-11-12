const express=require('express')
const bodyParser=require('body-parser')
const ejs=require('ejs')
const http=require('http')
const container=require('./container')


container.resolve(function(users){

  const app=SetUpExpress()


function SetUpExpress(){

const app=express()
const server=http.createServer(app)
server.listen(3001,()=>{
  console.log("server started on port 3001");
})


ConfigureExpress(app)


// const router=express.Router()
const router=require('express-promise-router')()
users.SetRouting(router)
app.use(router)

  }




function ConfigureExpress(app){
  app.use(express.static('public'))
  app.set('view engine','ejs')
  app.use(bodyParser.urlencoded({extended:true}))
  app.use(bodyParser.json())
}

})
