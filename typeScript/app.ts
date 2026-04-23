import express, {Application, Request, Response} from "express";

const app: Application = express();
const PORT: number = 8089;

app.get("/",//path
   (req: Request, res: Response) => {//callback function
  res.send("Hello Typescript with Express!");
});

app.listen(
  PORT, //start backend in this port
  () => { //callback function
    console.log(`Server is running on port ${PORT}`); //backtick
  }
);

