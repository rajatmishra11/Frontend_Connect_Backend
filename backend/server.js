import express from "express";  

const app= express();

app.get('/', (req, res)=>{
    res.send("servers is ready");
})

//get a list of 5 Jokes
app.get('/api/jokes', (req, res)=>{
    const jokes = [
      {
        id: 1,
        title: "A Joke",
        content: "This is a Joke",
      },
      {
        id: 2,
        title: "A 2nd Joke",
        content: "This 2nd is a Joke",
      },
      {
        id: 3,
        title: "A 3rd Joke",
        content: "This 3rd is a Joke",
      },
      {
        id: 4,
        title: "A 4th Joke",
        content: "This is 4th a Joke",
      },
      {
        id: 5,
        title: "A 5th Joke",
        content: "This 5th is a Joke",
      }
    ];
    res.status(200).send(jokes);
})



const port= process.env.PORT || 3000;

app.listen(port, ()=>{
    console.log(`Port ${port} is live`);
})