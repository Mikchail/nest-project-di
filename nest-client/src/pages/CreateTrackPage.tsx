import React from "react";
import Layout from "./Layout";
import { Button, Grid, TextField } from "@material-ui/core";
import axios from "axios";
import { FileUploadType, StepWrapperType } from "../components";

interface ICreateTrackPageProps { }
interface ICreateTrackPageState {
  activeStep: number;
  name: string;
  text: string;
  artist: string;
  picture: FileList | null;
  audio: FileList | null;
}


class CreateTrackPage<
  P extends ICreateTrackPageProps = ICreateTrackPageProps,
  S extends ICreateTrackPageState = ICreateTrackPageState
  > extends Layout<P, S> {

  protected stepWrapper: StepWrapperType = this.injector.get("components", "StepWrapper")
  protected fileUpload: FileUploadType = this.injector.get("components", "FileUpload")

  public state: S = {
    ...this.state,
    activeStep: 0,
    name: "",
    text: "",
    artist: "",
    picture: null,
    audio: null,
  }

  protected handleActiveStep() {
    this.setState((prevState) => ({ activeStep: prevState.activeStep + 1 }))
  }

  constructor(props: P) {
    super(props);

    this.next = this.next.bind(this)
    this.back = this.back.bind(this)
  }

  protected next(): void {
    const {
      name,
      text,
      artist,
      picture,
      audio,
      activeStep
    } = this.state;

    if (activeStep !== 2) {
      this.setState((prevState) => ({ activeStep: prevState.activeStep + 1 }))
    } else {
      const formData = new FormData()
      formData.append('name', name)
      formData.append('text', text)
      formData.append('artist', artist)
      if (picture?.length && audio?.length) {

        formData.append('picture', picture[0])
        formData.append('audio', audio[0])
      }

      axios.post('http://localhost:5000/tracks', formData)
        .then(resp => {
          this.router.push("/tracks")
        })
        .catch(e => console.log(e))
    }
  }

  protected back(): void {
    this.setState((prevState) => ({ activeStep: prevState.activeStep - 1 }))
  }

  renderPage() {
    
    const { activeStep } = this.state;
    return (
      <>
        <this.stepWrapper activeStep={activeStep}>
          {activeStep === 0 &&
            <Grid container direction={"column"} style={{ padding: 20 }}>
              <TextField
                value={this.state.name}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => this.setState({ name: e.target.value })}
                style={{ marginTop: 10 }}
                label={"Название трека"}
              />
              <TextField
                value={this.state.artist}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => this.setState({ artist: e.target.value })}
                style={{ marginTop: 10 }}
                label={"Имя исполнителя"}
              />
              <TextField
                value={this.state.text}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => this.setState({ text: e.target.value })}
                style={{ marginTop: 10 }}
                label={"Слова к треку"}
                multiline
                rows={3}
              />
            </Grid>
          }
          {activeStep === 1 &&
            <this.fileUpload onChange={(e: React.ChangeEvent<HTMLInputElement>) => this.setState({ picture: e.target.files })} accept="image/*">
              <Button>Загрузить изображение</Button>
            </this.fileUpload>
          }
          {activeStep === 2 &&
            <this.fileUpload onChange={(e: React.ChangeEvent<HTMLInputElement>) => this.setState({ audio: e.target.files })} accept="audio/*">
              <Button>Загрузить аудио</Button>
            </this.fileUpload>
          }
        </this.stepWrapper>
        <Grid container justifyContent='space-between'>
          <Button disabled={activeStep === 0} onClick={this.back}>Назад</Button>
          <Button onClick={this.next}>Далее</Button>
        </Grid>
      </>
    )
  }
}


export type CreateTrackPageType = typeof CreateTrackPage;
export default CreateTrackPage;