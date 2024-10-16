import Vehicle from "../models/vehicleModel.js"


export const store = async(req,res)=>{
    try{
        const respVehicle = await Vehicle.create(req.body) 
        return res.status(201).json(respVehicle);
    }catch(error){
        res.status(400).json({message:error.message})
    }
}

export const index = async (req,res)=>{
    try{
        const respVehicle = await Vehicle.find().exec()
        return res.status(200).json(respVehicle)
    }catch(error){
        res.status(400).json({message:error.message})
    }
}

export const update = async (req, res) => {
    try {
        const respVehicle = await Vehicle.findByIdAndUpdate(req.params.id, req.body).exec()
        return res.status(200).json(respVehicle)
    } catch (error) {
        return res.status(400).json({ message: error.message })
    }
};

export const destroy = async (req, res) => {
    try {
        const respVehicle = await Vehicle.findByIdAndDelete(req.params.id).exec()
        return res.status(200).json(respVehicle)
    } catch (error) {
        return res.status(400).json({ message: error.message })
    }
}