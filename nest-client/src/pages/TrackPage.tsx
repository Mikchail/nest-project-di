import { Button, Grid, TextField } from "@material-ui/core";
import axios from "axios";
import { ITrack } from "../types/track";
import Layout, { ILayoutProps } from "./Layout";


interface ITrackPageProps extends ILayoutProps {
  serverTrack: ITrack;
}

interface ITrackPageState {
  username: string;
  text: string;
  track: ITrack;
}


class TrackPage<
  P extends ITrackPageProps = ITrackPageProps,
  S extends ITrackPageState = ITrackPageState,
  > extends Layout<P, S> {
    
  public state: S = {
    ...this.state,
    username: "",
    text: "",
    track: this.props.serverTrack
  }

  constructor(props: P) {
    super(props);

    this.addComment = this.addComment.bind(this)
  }

  protected async addComment() {
    try {
      const response = await axios.post('http://localhost:5000/tracks/comment', {
        username: this.state.username,
        text: this.state.text,
        trackId: this.state.track._id
      })
      this.setState({ track: { ...this.state.track, comments: [...this.state.track.comments, response.data] } })
    } catch (e) {
      console.log(e)
    }
  }

  public renderPage() {
    return (
      <>
        <Button
          variant={"outlined"}
          style={{ fontSize: 32 }}
          onClick={() => this.router.push('/tracks')}
        >
          К списку
            </Button>
        <Grid container style={{ margin: '20px 0' }}>
          <img src={'http://localhost:5000/' + this.state.track.picture} width={200} height={200} />
          <div style={{ marginLeft: 30 }}>
            <h1>Название трека - {this.state.track.name}</h1>
            <h1>Исполнитель - {this.state.track.artist}</h1>
            <h1>Прослушиваний - {this.state.track.listens}</h1>
          </div>
        </Grid>
        <h1>Слова в треке</h1>
        <p>{this.state.track.text}</p>
        <h1>Комментарии</h1>
        <Grid container>

          <TextField
            label="Ваше имя"
            fullWidth
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => this.setState({ username: e.target.value })}
            value={this.state.username}
          />
          <TextField
            label="Комментарий"
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => this.setState({ text: e.target.value })}
            value={this.state.text}
            fullWidth
            multiline
            rows={4}
          />
          <Button onClick={this.addComment}>Отправить</Button>
        </Grid>
        <div>
          {this.state.track.comments.map(comment =>
            <div>
              <div>Автор - {comment.username}</div>
              <div>Комментарий - {comment.text}</div>
            </div>
          )}
        </div>
      </>
    )
  }
}

export type TrackPageType = typeof TrackPage
export default TrackPage;