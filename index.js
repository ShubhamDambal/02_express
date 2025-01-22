/*CRUD Application*/

import'dotenv/config';
import express from "express";
import logger from "./logger.js";
import morgan from "morgan";

//console.log(process.env.PORT);
const app = express();
const port = process.env.PORT || 3000;

const morganFormat = ":method :url :status :response-time ms";

//this use should be written after express() and before any route bcz it is a middleware
app.use(
  morgan(morganFormat, {
    stream: {
      write: (message) => {
        const logObject = {
          //in logObject we can grab more/all the data from message
          method: message.split(" ")[0],
          url: message.split(" ")[1],
          status: message.split(" ")[2],
          responseTime: message.split(" ")[3],
        };
        logger.info(JSON.stringify(logObject));
      },
    },
  })
);

/*Install "nodemon" thr terminal(it is a 'dev dependency') to see changes made automatically while running server. (add seperate command for it in scripts)*/

app.use(express.json()); //accepts all data from frontend which is in json format

let teaData = []
let nextId = 1;

//whenever you take any data, and store it in db or arr.. then Use 'POST' route

//add data to arr
app.post('/teas', (req, res) => {
  logger.info('A post request was made to add a new tea');
  const {name, price} = req.body;
  const newTea = {id: nextId++, name, price};
  teaData.push(newTea);
  res.status(201).send(newTea);
});

//print whole arr
app.get('/teas', (req, res) => {
  logger.warn('Get request was made to get all teas');
  res.status(200).send(teaData);
});

//get tea by id
app.get('/teas/:id', (req, res) => {  //"/"teas/:id" whatever write after teas its my id
  const tea = teaData.find(t => t.id === parseInt(req.params.id));

  if(!tea){
    return res.status(404).send('Tea not found');
  }
  res.status(200).send(tea); 
});

//update tea (for updating use put request)
app.put('/teas/:id', (req, res) => {
  const tea = teaData.find(t => t.id === parseInt(req.params.id));

  if(!tea){
    return res.status(404).send('Tea not found');
  }
  const {name, price} = req.body;
  tea.name = name;
  tea.price = price;
  res.status(200).send(tea);
})

//delete tea
app.delete('/teas/:id' , (req, res) => {
  const index = teaData.findIndex(t => t.id === parseInt(req.params.id));

  if(index === -1){
    return res.status(404).send('Tea not found');
  }
  teaData.splice(index, 1);
  res.status(204).send('Deleted');
})

app.listen(port, () => {
  console.log(`Server is running at port: ${port}...`);
})