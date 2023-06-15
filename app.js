const express = require('express')
const os = require('os')
const app = express()

app.get('/',(req,resp) =>{
    return resp.status(200)
    .json({
        message:"inicio"

    })
})


app.get('/liveness',(req,resp) =>{
    return resp.status(200)
    .json({
        message:"Meu app está vivo",
        path: process.cwd()

    })
})

app.get('/readiness',(req,resp) =>{
    return resp.status(200)
    .json({
        message:"Meu app está pronto",
        plataform: os.platform(),
        freeme: os.freemem(),
        home: os.homedir(),
        date: new Date().getTime()
    })
})

module.exports = app