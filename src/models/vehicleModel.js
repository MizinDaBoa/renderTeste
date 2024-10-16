import {Schema,model} from "mongoose"

const vehicleSchema = new Schema({
    plate:{type:String,reqiued:true},
    model:{type:String,required:true},
    year:{type:Number,required:true},
    owner:{type:String,required:true},
    maintences:
        {
            type:[Schema.Types.ObjectId],
            ref:'Maintence',
            required:false
        }
    
})

export default model('Vehicle', vehicleSchema);





