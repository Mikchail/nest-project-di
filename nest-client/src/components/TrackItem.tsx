import { AppComponent } from "../base";
import { Card, Grid, IconButton } from "@material-ui/core";
import { Delete, Pause, PlayArrow } from "@material-ui/icons";
import { PlayerActions } from "../reducers";
import { ITrack } from "../types/track";
import AppStore from "../store";


interface ITrackItemProps {
  track: ITrack;
  active?: boolean;
}
interface ITrackItemState { }

class TrackItem<
  P extends ITrackItemProps = ITrackItemProps,
  S extends ITrackItemState = ITrackItemState,
  > extends AppComponent<P, S> {


  protected appStore: AppStore = this.injector.get("global", "ReduxStore");

  constructor(props: P) {
    super(props);
    this.play = this.play.bind(this);
  }

  protected play(e: any) {
    e.stopPropagation()
    this.appStore.dispatch(PlayerActions.setActive(this.props.track));
    this.appStore.dispatch(PlayerActions.play());

  }

  render() {
    return (
      <Card className={"styles.this.props.track"} onClick={() => this.router.push('/tracks/' + this.props.track._id)}>
        <IconButton onClick={this.play}>
          {!this.props.active
            ? <PlayArrow />
            : <Pause />
          }
        </IconButton>
        <img width={70} height={70} src={'http://localhost:5000/' + this.props.track.picture} />
        <Grid container direction="column" style={{ width: 200, margin: '0 20px' }}>
          <div>{this.props.track.name}</div>
          <div style={{ fontSize: 12, color: 'gray' }}>{this.props.track.artist}</div>
        </Grid>
        {this.props.active && <div>02:42 / 03:22</div>}
        <IconButton onClick={e => e.stopPropagation()} style={{ marginLeft: 'auto' }}>
          <Delete />
        </IconButton>
      </Card>
    )
  }
}

export type TrackItemType = typeof TrackItem;
export default TrackItem;
