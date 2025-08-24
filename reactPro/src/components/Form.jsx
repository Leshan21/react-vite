import { useState } from "react";

const Form = () => {
  const [name, setName] = useState("");

  return (
    <>
      <form action="">
        <input onChange={(e) => setName(e.target.value)} type="text" value={name} />
        <h1>{name}</h1>
      </form>
    </>
  );
};

export default Form;
