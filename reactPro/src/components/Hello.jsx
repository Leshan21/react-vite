const Hello = () => {
  const name = "leshan";

  const displayMessage = () => {
    return "wow!";
  };
  return (
    <>
      <h1>hello from componet {displayMessage()}</h1>
    </>
  );
};

export default Hello;
