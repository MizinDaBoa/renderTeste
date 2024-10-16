import {Schema,model} from "mongoose"

const maintenceSchema = new Schema({
    workshop:{
        type:Schema.Types.ObjectId,
        ref:'Workshop',
        required:true
     },
    vehicle:{
        type:Schema.Types.ObjectId,
        ref:'Vehicle',
        required:true
    },
     services:[
      {   
        name:{type:String,required:true},
        price:{type:Number,required:true}
      }
     ],
    date:{
        type:Number,
        required:true
    },
    totalCost:{
        type:Number,
        required:true
    }
})

export default model('Maintence', maintenceSchema);








/*workshop - referenciando a oficina onde a manutenção foi realizada
(ObjectId em referência ao Workshop)
vehicle - referenciando o veículo que foi submetido à manutenção
(ObjectId em referência ao Vehicle)
services - os serviços prestados, cada um contendo o nome do serviço
e o preço (Array de Objects com name (String) e price (Number)
date - a data em que a manutenção foi realizada (Date)
totalCost - valor total da manutenção (Number)*/