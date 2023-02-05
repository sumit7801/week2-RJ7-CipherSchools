import React, {component} from "react";

class Name extends React.Component {
    state = { name: "Sahla Ambrein "};

setName = (name) => {
    this.setState({ ...this.state, name });
};

testHandler = () => {
    console.log("testHandler");
};

render () {
    return (
        <>
        <h1> The name is: {this.state.name}</h1>
            <button onClick={() => { this.setName("Varsha Gupta")}}>Click Me!</button>
            </>
    );
}
}

export default Name;