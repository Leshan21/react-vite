const Message = () => {
  function handleClick() {
    console.log("Button clicked!");
    alert("Button was clicked!");
  }

  return (
    <>
      <button onClick={handleClick}>Clicked Me!</button>{" "}
      {/*we not use "()" for function called */}
    </>
  );
};

export default Message;
