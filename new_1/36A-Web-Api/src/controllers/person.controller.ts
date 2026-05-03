    import { Request, Response } from "express";
    import { dataset } from "../models/person.model";
    import { ApiResponseHelper } from "../utils/apihelper.util";
    import { HttpException } from "../exception/http-exception";
    import {z} from "zod";

    const personSchema = z.object({
        id: z.number(),
        name: z.string("should be a string").min(1, "Name is required"),
        age: z.number("should be a number").min(0, "Age must be a positive number")
    });

    //domain model - what is person in the application
    export type Person = z.infer<typeof personSchema>; //convert to type
    //DTO - data transfer object - what is person in the request/response
    export const CreatePersonDTO = personSchema.omit({id: true}); //omit id for create
    //export con CreatePersonDTO = personSchema.pick({name: true, age: true}); //pick only name and age for create
    //alternative
    //for create, id is not required
    export type CreatePersonDTO = z.infer<typeof CreatePersonDTO>;

    export class PersonController {
        async getAllPersons(req: Request, res: Response) {
            // path function
            // return res.json(dataset);
            try{
                const someVar: any ={};
                //without custom exception
                if(!someVar.ref){
                    //throw new Error("Reference not found"); //either
                    return ApiResponseHelper.error(res, "Reference not found", 404); //or
                    }


                someVar.ref.add("test") ; //error

                return ApiResponseHelper.success(res, dataset, "Persons fetched successfully", 200);
            }catch(err: Error | any | HttpException){
                return ApiResponseHelper.error(res, "Failed to fetch persons", err.status ?? 500);

            }
        }



    async createPerson(req: Request, res: Response) {
        //create person logic
        const {name, age} = req.body; 
            if(!name){
                throw new HttpException(400, "Name is required");
            }

            if(!age){
                throw new HttpException(400, "Age is required");
            }
            const newPerson = {
                id: dataset.length + 1,
                name,
                age
            }
            dataset.push(newPerson);
            return ApiResponseHelper.success(res, dataset, "Persons Created successfully", 201);
        }
            
        
        // API consistency

    }