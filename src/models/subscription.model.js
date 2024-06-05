import mongoose,{Schema} from "mongoose";

const subscriptionSchema = new Schema({
subscriber:{
    type: Schema.Types.ObjectId, //one whois subscribing
    ref: "User"
},
channel:{
    type: Schema.Types.ObjectId, //to whom is subscribing
    ref: "User"
}

},{timestamps:true})

export const Subscription= mongoose.model("Subscrption, subscriptionSchema")