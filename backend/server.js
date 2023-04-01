//imports
const express = require('express');
const app = express();
const port = 8000;
const cors = require('cors');
// const { MongoClient } = require('mongodb');

//created the server using express
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended : true}));

const MongoClient = require('mongodb').MongoClient
const db = 0;

//endpoint for getting all of the orders
app.get("/", async (req, res) => {

    const client = new MongoClient('mongodb://127.0.0.1:27017/?directConnection=true&serverSelectionTimeoutMS=2000&appName=mongosh+1.8.0');
    await client.connect();

    const db = client.db('pizza-db');
    const collection = db.collection('order');
    const order =  await collection.find({}).toArray();
    res.json(order);
    });
    



    

//endpoint for getting one order based on the id
app.get('/api/orders/:id', async (req, res) => {
    const id = req.params.id;
    const client = new MongoClient('mongodb://127.0.0.1:27017/?directConnection=true&serverSelectionTimeoutMS=2000&appName=mongosh+1.8.0');
    await client.connect();
    const db = client.db('pizza-db');

    const order = await db.collection('order').findOne({'id':Number(id)});
    res.json(order);
    });

//server listens on port 8000
app.listen(port, () => console.log(`Express server listening on port ${port}!`))