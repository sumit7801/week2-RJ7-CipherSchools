import React from "react";
import RenderPropsComponent from "./RenderPropsComponents";

class SampleRenderProps extends React.Component {
    render() {
        return (
            <RenderPropsComponent
              render={() => {
                return (
                    <div>
                        <h2> This is from render props</h2>
                    </div>
                );
              }}
             />
        );
    }
}

export default SampleRenderProps;