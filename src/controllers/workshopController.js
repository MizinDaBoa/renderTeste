import Workshop from "../models/workshopModel.js"


export const store = async(req,res)=>{
    try{
        const respWorkshop = await Workshop.create(req.body) 
        return res.status(201).json(respWorkshop);
    }catch(error){
        res.status(400).json({message:error.message})
    }
}

export const index = async (req,res)=>{
    try{
        const respWorkshop = await Workshop.find().exec()
        return res.status(200).json(respWorkshop)
    }catch(error){
        res.status(400).json({message:error.message})
    }
}

export const update = async (req, res) => {
    try {
        const respWorkshop = await Workshop.findByIdAndUpdate(req.params.id, req.body).exec()
        return res.status(200).json(respWorkshop)
    } catch (error) {
        return res.status(400).json({ message: error.message })
    }
};

export const destroy = async (req, res) => {
    try {
        const respWorkshop = await Workshop.findByIdAndDelete(req.params.id).exec()
        return res.status(200).json(respWorkshop)
    } catch (error) {
        return res.status(400).json({ message: error.message })
    }
}