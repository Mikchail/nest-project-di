import React from "react"
import { Card, Container, Grid, Step, StepLabel, Stepper } from "@material-ui/core";
import { AppComponent } from "../base";

interface IStepWrapperProps {
  activeStep: number;
  children: React.ReactNode;
}
interface IStepWrapperState { }

const steps = ['Информация о треке', 'Загрузите обложку', 'Загрузите сам трек']

class StepWrapper<
  P extends IStepWrapperProps = IStepWrapperProps,
  S extends IStepWrapperState = IStepWrapperState,
  > extends AppComponent<P, S> {


  render() {
    return (
      <Container>
        <Stepper activeStep={this.props.activeStep}>
          {steps.map((step, index) =>
            <Step
              key={index}
              completed={this.props.activeStep > index}
            >
              <StepLabel>{step}</StepLabel>
            </Step>
          )}
        </Stepper>
        <Grid container justifyContent="center" style={{ margin: '70px 0 ', height: 270 }}>
          <Card style={{ width: 600 }}>
            {this.props.children}
          </Card>
        </Grid>
      </Container>
    )
  }
}


export type StepWrapperType = typeof StepWrapper;
export default StepWrapper;