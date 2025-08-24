import { useState } from "react";

const Form = () => {
  const [name, setName] = useState({
    firstName: "",
    lastName: ""
  });
 
  function handleSubmit(e){
    e.preventDefault();
    console.log(name);
  }

  return (
    <>
      <form action="">
        <input onChange={(e) => setName({...name,firstName:e.target.value})} type="text" value={name.firstName} />
        <input onChange={(e) => setName({...name, lastName: e.target.value})} type="text" /> {/* ...name spreads the existing name object */}
        <button onClick={(e) => handleSubmit(e)}>add</button>
      </form>
      <h1>{name.firstName} {name.lastName}</h1>
    </>
  );
};

export default Form;
