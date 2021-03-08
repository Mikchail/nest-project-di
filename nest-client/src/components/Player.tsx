


import React from "react"
import { Pause, PlayArrow, VolumeUp } from "@material-ui/icons";
import { Grid, IconButton } from "@material-ui/core";
import { AppComponent } from "../base";
import { RootState } from "../reducers";
import { connect } from "react-redux";
import { PlayerActions } from "../reducers";

interface IPlayerProps {
  pause: boolean;
  play: () => void;
  volume: number;
  active: any;
  duration: number;
  currentTime: number;
  // pauseTrack, playTrack, setVolume, setCurrentTime, setDuration, setActiveTrack
}
interface IPlayerState { }

const playerMapStateToProps = (state: RootState) => ({
  pause: state.playerReducer.pause,
  volume: state.playerReducer.volume,
  active: state.playerReducer.active,
  duration: state.playerReducer.duration,
  currentTime: state.playerReducer.currentTime
})

class Player<
  P extends IPlayerProps = IPlayerProps,
  S extends IPlayerState = IPlayerState,
  > extends AppComponent<P, S> {

  private audio: HTMLAudioElement = new Audio();
  protected appStore = this.injector.get("global", "ReduxStore")
  // const {pause, volume, active, duration, currentTime} = useTypedSelector(state => state.player)
  // const {pauseTrack, playTrack, setVolume, setCurrentTime, setDuration, setActiveTrack} = useActions()

  public componentDidUpdate(prevProps: P, prevState: S) {
    if (!this.audio) {
      this.audio = new Audio()
    } else {
      this.setAudio()
      this.play()
    }
  }

  protected play() {
    if (this.props.pause) {
      this.appStore.dispatch(PlayerActions.play());
      this.audio.play()
    } else {
      this.appStore.dispatch(PlayerActions.pause());
      this.audio.pause()
    }
  }

  protected setAudio() {
    if (this.props.active) {
      this.audio.src = 'http://localhost:5000/' + this.props.active.audio
      this.audio.volume = this.props.volume / 100
      this.audio.onloadedmetadata = () => {
        this.appStore.dispatch(PlayerActions.setDuration(Math.ceil(this.audio.duration)));
      }
      this.audio.ontimeupdate = () => {
        this.appStore.dispatch(PlayerActions.setCurrentTime(Math.ceil(this.audio.currentTime)));
      }
    }
  }

  render() {
    return (
      <div className={"styles.player"}>
        <IconButton onClick={this.props.play}>
          {this.props.pause
            ? <PlayArrow />
            : <Pause />
          }
        </IconButton>
        <Grid container direction="column" style={{ width: 200, margin: '0 20px' }}>
          <div>{this.props.active?.name}</div>
          <div style={{ fontSize: 12, color: 'gray' }}>{this.props.active?.artist}</div>
        </Grid>
        {/* <TrackProgress left={currentTime} right={duration} onChange={changeCurrentTime} /> */}
        <VolumeUp style={{ marginLeft: 'auto' }} />
        {/* <TrackProgress left={volume} right={100} onChange={changeVolume} /> */}
      </div>
    )
  }
}

export type PlayerType = typeof Player;
export default Player;
export const ConnectedPlayer = (connect(playerMapStateToProps) as any)(Player);