import Welcome from "./Welcome";
import Code from "./Code";
const ConditionalComponents = () => {

const display = false;

let message = display ? <h1>This is message One</h1> : <h1>This is message Two</h1>;

return(
    message
)
};

export default ConditionalComponents;
