import Welcome from "./Welcome";
import Code from "./Code";
const ConditionalComponents = () => {
  const display = false;
  if (display) {
    return <Welcome />;
  } else {
    return <Code />;
  }
};

export default ConditionalComponents;
