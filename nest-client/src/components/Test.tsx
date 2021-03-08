import { Button } from "@material-ui/core";
import React from "react";
import { connect } from "react-redux";
import { AppComponent } from "../base";
import { RootState } from "../reducers";



interface TestProps {
    count?: number;
}

interface TestState {}

class Test extends AppComponent<TestProps, TestState> {

    render() {
        return (
            <div>
                <Button>-</Button>
                <span>{this.props.count}</span>
                <button>+</button>
            </div>
        )
    }
}


const mapStateToProps = (state: RootState) => ({
    count: state.testCounter.value
})

export const ConnectedTest = (connect(mapStateToProps) as any)(Test);
export type TestType = typeof Test
export default Test;
