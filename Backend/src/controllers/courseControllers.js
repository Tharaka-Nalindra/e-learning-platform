import Course from '../model/courseModel.js'
import StudentModel from '../model/studentModel.js';
import EventModel from '../model/eventModel.js';


//get post
const getCourse = async (req, res) => {
    try{
        const posts = await Course.find({}).select('-__v');
        console.log(posts)
        res.status(200).json(posts);
    } catch (error){
        console.log(error);
        res.status(500).json({message: message.error})
    }
}



// create post
const createCourse = async (req,res) =>{
    const {courseName} = req.body
    console.log(courseName);
    try{
        const post = await Course.create({courseName})
        res.status(201).json({message: "Post create successfully"})
    } catch (error){
        console.log(error.message);
        res.status(500).json({message:error.message})
    }
}

//create event
const postevent = async(req,res)=>{
    const { title, start, allDay } = req.body;
    try{
        const post = await EventModel.create({title, start, allDay})
        res.status(201).json({message: "event create successfully"})
    } catch(error){
        console.log(error.message);
        res.status(500).json({message:error.message})
    }
}

//get event to calender
const getevent = async(req,res)=>{
    try {
        const events = await EventModel.find();
        res.json(events);
      } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
      }
}

//update event
const updateevent = async (req, res) => {
    const eventId = req.params.id;
    const updatedEvent = req.body;
    try {
      const result = await EventModel.findByIdAndUpdate(eventId, updatedEvent, { new: true });
      if (result) {
        res.json(result);
      } else {
        res.status(404).json({ error: 'Event not found' });
      }
    } catch (error) {
      res.status(500).json({ error: 'Internal Server Error' });
    }
  };

//register user

const register = async (req,res) =>{
    const {name,email,password} = req.body
    console.log(name,email,password);
    try{
        const post = await StudentModel.create({name,email,password})
        res.status(201).json({message:"register successsfully"})
    } catch (error){
        console.log(error.message);
        res.status(500).json({message:error.message})
    }
}

//login user

const login = async(req,res) =>{
    const {email, password} = req.body;
    StudentModel.findOne({email:email})
    .then(user =>{
        if(user) {
            if(user.password === password){
                res.json("success")
            } else {
                res.json("password is incorrect")
            }
        } else {
            res.json("No record existed")
        }
    })
}


export {createCourse,getCourse,register,login,postevent,getevent,updateevent};