import Maintence from "../models/maintenceModel.js"


export const store = async(req,res)=>{
    try{
        const respMaintence = await Maintence.create(req.body) 
        return res.status(201).json(respMaintence);
    }catch(error){
        res.status(400).json({message:error.message})
    }
}

export const index = async (req,res)=>{
    try{
        const respMaintence = await Maintence.find().exec()
        return res.status(200).json(respMaintence)
    }catch(error){
        res.status(400).json({message:error.message})
    }
}

export const update = async (req, res) => {
    try {
        const respMaintence = await Maintence.findByIdAndUpdate(req.params.id, req.body).exec()
        return res.status(200).json(respMaintence)
    } catch (error) {
        return res.status(400).json({ message: error.message })
    }
};

export const destroy = async (req, res) => {
    try {
        const respMaintence = await Maintence.findByIdAndDelete(req.params.id).exec()
        return res.status(200).json(respMaintence)
    } catch (error) {
        return res.status(400).json({ message: error.message })
    }
}