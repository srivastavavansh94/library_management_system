'use strict'
const express = require('express')
var bodyParser = require('body-parser')
const path = require('path')
const app = express()
const port = process.env.PORT || 80 
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())  
app.use('/static', express.static((path.join(__dirname, 'public'))))
app.set('views', path.join(__dirname, 'views'));

app.use(express.json())  
app.use(express.urlencoded({ extended: true })); 


app.get('/', function (req, res) {
  
  res.render('login.ejs')
})


app.get('/user/login', function (req, res) {
  res.render('studentLogin.ejs')
})

app.post('/user/login', function (req, res) {

  let userId = req.body.user_id
  let password = req.body.password
  const student = [
    { userId: "vansh", password: "vansh123" },
    { userId: "bashar", password: "bashar123" },
    { userId: "arun", password: "arun123" },
  ];
  console.log(userId,password);
  const studentId = student.find((userObj) => userObj.userId === userId && userObj.password === password);

  const list_of_books = [
    {nameOfBook:'book 1',
    authorName:'author 1',
    category:'biology',
    status:'available',
    cost:'5',
    procurement_date:'2023-09-01'
    }
    

  ]
  if (studentId) {
    res.render('student.ejs',{list_of_books:list_of_books})
  } else {

    res.send('wrong details ')
  }
})
app.get('/user/master-list-of-memberships',function(req,res){
  res.render('ListOfActiveMembership.ejs')
})

app.get('/user/active-issues',function(req,res){
  res.render('activeIssues.ejs')
})

app.get('/user/overdue-returns',function(req,res){
  res.render('overdueReturn.ejs')
})

app.get('/user/issue-request',function(req,res){
  res.render('issueRequest.ejs')
})
app.get('/user/master-list-of-books',function(req,res){
  res.render('student.ejs')
})





app.get('/user/transaction',function(req,res){
  res.render('transaction.ejs');
})

app.get('/user/transaction/fine-payment',function(req,res){
  res.render('payFine.ejs')
})

app.get('/user/transaction/book-return',function(req,res){
  res.render('returnBook.ejs')
})


app.get('/user/transaction/book-issue',function(req,res){
  res.render('issueBook.ejs')
})


app.get('/user/transaction/book-available',function(req,res){
  res.render('bookAvailabel.ejs')
})



















// admin 
app.get('/admin/login', function (req, res) {
  res.render('adminLogin.ejs')
})



app.listen(port, () => {
  console.log('your server is running on port' + port)
}) 