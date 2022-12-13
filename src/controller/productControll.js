import { Productmodels } from "../model/productModel.js";
import StatusCodes from 'http-status-codes'

export async function productControll(req, res) {
  try {

    const product = new Productmodels(req.body);
    const saveproduct = await product.save();
    res.status(StatusCodes.ACCEPTED).json(saveproduct);
    
  } catch (error) {
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ massga: "beta tumse na ho paya try it" });
  }
}

export async function Fetchdata(req, res) {
  try {
    let product = await  Productmodels.find();
    res.status(StatusCodes.ACCEPTED).json(product);
  } catch (error) 
  {
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({massage:"sahi se code likho mere bhai "})
  }

}
export async function FetchdatabyId (req,res)
{
    try {
        
    } catch (error) {
        
    }
}