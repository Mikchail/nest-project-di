import { AppComponent } from "../base";
import { ITrack } from "../types/track";
import { Box, Grid } from "@material-ui/core";
import { Book } from "@material-ui/icons";
import { TrackItemType } from "./TrackItem";



interface ITrackListProps {
  tracks: ITrack[]
}

interface ITrackListState { }

class TrackList<
  P extends ITrackListProps = ITrackListProps,
  S extends ITrackListState = ITrackListState,
  > extends AppComponent<P, S> {


  protected trackItem: TrackItemType = this.injector.get("components", "TrackItem");
  render() {
    return (
      <Grid container direction="column">
        <Box p={2}>
          {this.props.tracks.map(track =>
            <this.trackItem
              key={track._id}
              track={track}
            />
          )}
        </Box>
      </Grid>
    )
  }
}

export type TrackListType = typeof TrackList;
export default TrackList;
