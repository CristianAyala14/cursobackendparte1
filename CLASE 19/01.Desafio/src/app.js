import express from "express";
import session from "express-session";
import mongoStore from "connect-mongo";
const PORT = 8080;
const MONGO = "mongodb+srv://cristianpabloayala:nolimit14@cluster1.3xzue7l.mongodb.net/sessions";
const app = express();
app.use(session({
    store: new mongoStore({
        mongoUrl: MONGO,
        ttl: 15
    }),
    secret: "CoderSecret",
    resave:false,
    saveUninitialized: false
}))

app.get("/", (req,res)=>{
    req.session.user = "Active Session";
    res.send("Session Set")
})

app.get("/test", (req,res)=>{
    res.send(req.session.user);
})

app.listen(PORT, ()=> console.log(`Servidor: ${PORT}`))