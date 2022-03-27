const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors')
const multer = require('multer')
const path = require('path')
const express_upload = require('express-fileupload')
const util = require('util')

const app = express();





const schemas = require('./Schemas');

app.use(express.json());
app.use(cors())

const pw = 'Bramborik585'
const use = 'Bydzovsky'

mongoose.connect('mongodb+srv://'+ use + ':' + pw + '@cluster0.591g5.mongodb.net/dbeardies', {
    useNewUrlParser: true,
})



app.post("/insert", async (req,res)=>{

    const morph = req.body.morph
    const price = req.body.price
    const birthday = req.body.birthday
    const sex = req.body.sex
    const indication = req.body.indication
   /*  const photo = req.body.photo */


    const beardieForSale = new schemas({
        morph: morph, birthday: birthday, sex:sex, price: price, indication:indication/* , photo: photo */});
    try {
        await beardieForSale.save();
        res.send('data inserted')
    } catch (error) {
        console.log(error)
    }
})

app.get("/read", async (req,res)=>{
    schemas.find({}, (err, result) =>{
        if(err){
            res.send(err)
        }
        res.send(result);
    })
})


app.listen(8000, ()=>{
    console.log('Connected and running..')
})
