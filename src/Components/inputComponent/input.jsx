import './input.css';

const TextInput = ({placeholder,Action})=> {
  return (
    <div className='TextInput'>
    <input type="text" placeholder={placeholder} onChange={Action} style={{ marginTop: 10,width:320,height:30,textAlign:"center", borderRadius:5,borderColor:"whitesmoke"}}/>

    </div>
  );
}

export default TextInput ;
