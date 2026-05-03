import express, { Application, NextFunction, Request, Response } from "express";

const app: Application = express();
app.use(express.json()); //middleware to parse JSON body
app.use(express.urlencoded({ extended: true })); //middleware to parse URL-encoded body x-www-form-urlencoded

const PORT: number = 8089;

interface person {
  id: number;
  name: string;
  age: number;
}

const dataset: person[] = [
  { id: 1, name: "John", age: 30 },
  { id: 2, name: "Jane", age: 25 },
  { id: 3, name: "Doe", age: 35 },
];
//1. Get All - persons
app.get("/api/persons", (req: Request, res: Response) => {
  //later paginated
  return res.json(dataset);
});

//2.Get by ID - person
app.get("/api/persons/:id", (req: Request, res: Response) => {
  const { id } = req.params; //route parameter
  const person = dataset.find((p) => p.id === parseInt(id as string)); //find person by id, parseInt to convert string to number
  return res.json(person);
});

//3. Create - person
app.post("/api/persons", (req: Request, res: Response) => {
  const { name, age } = req.body; //destructuring body
  const newPerson: person = {
    id: dataset.length + 1, //generate new id
    name,
    age,
  };
  dataset.push(newPerson); //add to dataset
  return res.status(201).json(newPerson); //return created person with status 201
});

// 4. Update One Person
//4.1 put -> full update/most update
//4.2 patch -> partial update/least update
app.put("/api/persons/:id", (req: Request, res: Response) => {
  const { id } = req.params;
  const { name, age } = req.body;
  const personIndex = dataset.findIndex((p) => p.id === parseInt(id as string));
  if (personIndex === -1) {
    return res.status(404).json({ message: "Person not found" });
  }

  dataset[personIndex] = { id: parseInt(id as string), name, age }; // full update
  return res.json(dataset[personIndex]); // return updated person
});

// 5 Delete One Person
app.delete("/api/persons/:id", (req: Request, res: Response) => {
  const { id } = req.params; // route parameter
  const personIndex = dataset.findIndex((p) => p.id === parseInt(id as string));
  dataset.splice(personIndex, 1); // delete person
  return res.json({ message: "Deleted" });
});

app.get(
  "/", //path
  (req: Request, res: Response) => {
    //callback function
    return res.send("Hello Typescript with Express!");
  },
);

app.get("/hello/world", (req: Request, res: Response) => {
  return res.send("Hello, World!");
});

app.get("/hello/world/:name", (req: Request, res: Response) => {
  //const name = req.params.name; //without destructuring
  const { name } = req.params; //destructuring
  const { title, age } = req.query; //destructuring query parameters
  //query params -> /hello/world/John?title=Mr&age=30
  return res.status(200).json({
    message: `Hello, ${name}!`,
    title,
    age,
  });
});
// app.listen(
//   PORT, //start backend in this port
//   () => {
//     //callback function
//     console.log(`Server is running on port ${PORT}`); //backtick
//   },
// );

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

// app.get("/api/products/:id/:category", (req: Request, res: Response) => {
//   const { id, category } = req.params;
//   const { sort, limit } = req.query;
//   if (category !== "electronics") {
//     return res.status(400).json({
//       message: "Invalid category",
//     });
//   }
//   return res.status(200).json({
//     productId: id,
//     category,
//     sort,
//     limit,
//   });
// });

app.get("/exceptions", (req: Request, res: Response) => {
  try {
    const logic: any = {};
    logic.user.find(); //simulate error
    return res.status(200).json({ message: "No exception" });
  } catch (err: unknown) {
    console.error("Error:", err);
    return res.status(500).json({
      message: "Internal Server Error",
    });
  }
});


//global api handler (at the end of all routes)
app.use((req: Request, res: Response) => {
  return res.status(404).json({
    message: "API not found",
  });
});

//global error handler
app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  console.error(err.stack);
  return res.status(500).json({
    message: "Internal Server Error",
  });
});

app.listen(
  PORT, // start backend in this PORT
  () => {
    console.log(`Server: http://localhost:${PORT}`); // backtick
  },
);
// execute: npx tsx --watch app.ts
// http://localhost:8089
