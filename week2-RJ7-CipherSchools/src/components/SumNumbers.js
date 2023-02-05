import React from "react";
import { testAPI } from "../apis/testApi";


class SumNumbers extends Component {
    state = {
        firstNumber: 0,
        secondNumber: 0,
        sum: 0,
    };

    componentDidMount() {
        console.log("We are in Component Did Mount of SumNumbers");
        testAPI(5, 6).then((sum) => {
            this.setSum(sum);
        });
    }
    componentDidUpdate() {
        console.log("Component has updated!");
    }

    setSum = (sum) => {
        if (typeof sum !== "undefined") {
            this.setState({ ...this.state, sum});
        } else {
            this.setState({
                ...this.state,
                sum: this.state.firstNumber + this.state.secondNumber,
             });
        }
    };
}

export default SumNumbers;