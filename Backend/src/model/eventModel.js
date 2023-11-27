import mongoose from "mongoose";

const eventSchema = new mongoose.Schema({
    title: String,
    start: Date,
    allDay: Boolean,
  });

//create collection in DB
//collection name is Event
const EventModel = mongoose.model("Events",eventSchema)

export default EventModel;