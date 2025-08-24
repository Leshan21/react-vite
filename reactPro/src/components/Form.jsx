import { useState } from "react";

const Form = () => {
  const [name, setName] = useState({
    firstName: "",
    lastName: ""
  });
  

  return (
    <>
      <form action="">
        <input onChange={(e) => setName({...name,firstName:e.target.value})} type="text" value={name.firstName} />
        <input onChange={(e) => setName({...name, lastName: e.target.value})} type="text" /> {/* ...name spreads the existing name object */}
      </form>
      <h1>{name.firstName} {name.lastName}</h1>
    </>
  );
};

export default Form;
