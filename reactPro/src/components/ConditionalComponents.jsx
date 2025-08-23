import Welcome from "./Welcome";
import Code from "./Code";
const ConditionalComponents = () => {

let message;
const display = false;

if(display) {
    message = <h1>This is message One</h1>
}else {
    message = <h1>This is message Two</h1>
}

return(
    message
)
};

export default ConditionalComponents;
