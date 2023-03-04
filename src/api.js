// const express=require('express')
// const mongoose=require('mongoose')
// const bodyParser=require('body-parser')
// const path=require('path')
// const app=express()
// app.use(bodyParser.urlencoded({extended:true}));
// app.use(bodyParser.json());
// app.use(express.static("public"));
// mongoose.connect('mongodb://127.0.0.1:27017/Mess-Menu-Predictor').then(()=>console.log("Connected!"));
// const myDataSchema = new mongoose.Schema({
//     item: Number,
//     day: String,
//     hostel: String,
//     meal:String,
//     complementary1:String,
//     complementary2:String,
//     food:String,
//   },{collection:'menuDatabase'});
//   const MyData = mongoose.model('MyData', myDataSchema);
//   app.get("/",(req,res)=>{
//     res.sendFile(path.join(__dirname,"public","menu.html"));
//   })
//   app.post('/getMenu', (req, res) => {
//     console.log(req.body);
//     const hostel_ = req.body.hostel;
//     const day_ = req.body.day;
//     const meal_ = req.body.meal;
//     MyData.find({hostel:hostel_,day:day_,meal:meal_},(err,result)=>
//     {
//       console.log(result);
//       console.log(result.length);
//       console.log(result[0].food);
//       if(err)
//       {
//       console.log(err);
//       res.status(500).send('Error retrieving data');
//       }
//       else
//       {
//         res.send(`Menu is ${result[0].food}, ${result[0].complementary1}, ${result[0].complementary2}`);
//       }
//     }); 
//    });
   
//   app.listen(3000,()=>{
//     console.log("Server is running");
//   })
