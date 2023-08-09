
const express=require('express');

const cookieParser=require('cookie-parser');
const bodyParser=require('body-parser');
const session=require('express-session');

const app= express();


app.use(express.json());


app.use(cookieParser());
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.urlencoded({extended:true}));
app.use(session({

secret:'1111',
resave:false,
saveUninitialized:false,

}))





app.use(session)

export default { app };
