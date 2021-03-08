import { AppComponent } from "../base";




interface ITrackProgressProps {

}
interface ITrackProgressState { }

class TrackProgress<
  P extends ITrackProgressProps = ITrackProgressProps,
  S extends ITrackProgressState = ITrackProgressState,
  > extends AppComponent<P, S> {

  render() {
    return (
      <div>
        TrackProgress
      </div>
    )
  }
}

export type TrackProgressType = typeof TrackProgress;
export default TrackProgress;
