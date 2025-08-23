import Welcome from "./Welcome";
import Code from "./Code";
const ConditionalComponents = () => {

const display = true;

return(
    display ? <Welcome/> : <Code/>
)
};

export default ConditionalComponents;
