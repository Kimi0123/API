import express, {Application, Request, Response} from "express";

const app: Application = express();
const PORT: number = 8089;

app.get("/",//path
   (req: Request, res: Response) => {//callback function
 return res.send("Hello Typescript with Express!");
});

app.get("/hello/world",
  (req: Request, res: Response) => {
    return res.send("Hello, World!");
  }
)

app.get(
  "/hello/world/:name",
  (req: Request, res: Response) => {
    //const name = req.params.name; //without destructuring
    const {name} = req.params; //destructuring
    const{title, age} = req.query; //destructuring query parameters
    //query params -> /hello/world/John?title=Mr&age=30
    return res.status(200).json({
      message: `Hello, ${name}!`,
      title,
      age
    });

  }
)
app.listen(
  PORT, //start backend in this port
  () => { //callback function
    console.log(`Server is running on port ${PORT}`); //backtick
  }
);

//execute: npx tsx --watch app.ts


// make a GET requset to match the following URL:
// http://localhost:8089/api/products/123/electronics?sort=asc&limit=10
// 123 and electronics are route parameters, :id and :category
// if category is not "electronics", return 400 with message "Invalid category"
// return a JSON response with the following structure:
/*
{
    "productId": 123,
    "category": "electronics",
    "sort": "asc",
    "limit": 10
}
*/

app.get(
  "/api/products/:id/:category",
  (req: Request, res: Response) => {
    const {id, category} = req.params;
    const {sort, limit} = req.query;
    if(category !== "electronics"){
      return res.status(400).json({
        message: "Invalid category"
      });
    }
    return res.status(200).json({
      productId: id,
      category,
      sort,
      limit
    });
  }

);

app.listen(
    PORT,  // start backend in this PORT
    () => {
        console.log(`Server: http://localhost:${PORT}`); // backtick
    }
);
// execute: npx tsx --watch app.ts
// http://localhost:8089