import './Button.css';

const TextButton = ({title,textColor,bgColor,action})=> {
  return (
    <div className='TextInput'>    
    <button onClick={action} style={{
         marginTop: 10,
         width:330,
         height:40,
         textAlign:"center",
          borderRadius:5,
          borderColor:"whitesmoke",
          backgroundColor:`${bgColor}`}} >
            <span style={{color:`${textColor}`}}>
           {title}
           </span>
           </button>
    </div>
  );
}

export default TextButton;
