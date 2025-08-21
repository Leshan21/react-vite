import Hello from "./components/Hello";
function App() {
  const person = {
    name: "Rob",
    message: "hi there",
    emoji: "😂",
    seatNumbers: [1, 4, 7],
  };

  return (
    <>
      <Hello person={person} />
    </>
  );
}

export default App;
