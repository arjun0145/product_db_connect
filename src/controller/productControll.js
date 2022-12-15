import { Productmodels } from "../model/productModel.js";
import StatusCodes from "http-status-codes";
import { json } from "express";

export async function productControll(req, res) {
  try {
    const product = new Productmodels(req.body);
    const saveproduct = await product.save();
    res.status(StatusCodes.ACCEPTED).json(saveproduct);
  } catch (error) {
    res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .json({ massga: "beta tumse na ho paya try it" });
  }
}

export async function Fetchdata(req, res) {
  try {
    let product = await Productmodels.find();
    res.status(StatusCodes.ACCEPTED).json(product);
  } catch (error) {
    res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .json({ massage: "sahi se code likho mere bhai " });
  }
}
export async function FetchdatabyId(req, res) {
  try {
    let product = await Productmodels.findOne({ proid: req.params.pid });
    if (product != null) {
      res.status(StatusCodes.OK).json(product);
    } else {
      res
        .status(StatusCodes.BAD_REQUEST)
        .json({ massage: "Invalid Product Id " });
    }
  } catch (error) {
    res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .json({ massage: "apko data nahi mile id ke dwara , make your code valid " });
  }
}

export async function updateData(req, res) {
  try {

    // here filter and update are constand holding object id and valtu to be update 

    const filter = req.params.id;
    const update = req.body;

    // without using directly req.param.id and req.body i assigned value in 2 variables
    // and i passed both variable as like as directly 

    await Productmodels.findByIdAndUpdate(filter,update);
    res.status(StatusCodes.OK).send("ok")


  } catch (error) {
    console.log(error);
    res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .json({ massage: "tumse data update  nahi hua , try it again bro " });
  }
}

// Here is a function for delete 

export async function  Deletedatabyid (req,res){

  try {
    let filter = req.params.id; 
    await Productmodels.findByIdAndDelete(filter)
    res.status(StatusCodes.CREATED).send("ok")
    
  } catch (error) {
    console.log(error);
    res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .json({ massage: "beta apse data delete nahi hua , needs debuging " });
  }

}