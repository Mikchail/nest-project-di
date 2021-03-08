import { Box, Button, Card, Grid } from "@material-ui/core";
import { connect } from "react-redux";
import { TrackListType } from "../components/TrackList";
import { RootState } from "../reducers";
import { ITrack } from "../types/track";
import Layout, { ILayoutProps } from "./Layout";


interface ITracksPageProps extends ILayoutProps {
  tracks: ITrack[];
}
interface TracksPageState { }

const trackMapStateToProps = (state: RootState) => ({
  tracks: state.trackReducer.tracks
});

class TracksPage<
  P extends ITracksPageProps = ITracksPageProps,
  S extends TracksPageState = TracksPageState,
  > extends Layout<P, S> {

  protected trackList: TrackListType = this.injector.get("components", "TrackList");

  public renderPage() {
    return (
      <Grid container justifyContent='center'>
        <Card style={{ width: 900 }}>
          <Box p={3}>
            <Grid container justifyContent='space-between'>
              <h1>Список треков</h1>
              <Button onClick={() => this.router.push('/tracks/create')}>
                Загрузить
              </Button>
            </Grid>
          </Box>
          <this.trackList tracks={this.props.tracks} />
        </Card>
      </Grid>
    )
  }
}

export type TracksPageType = typeof TracksPage
export default TracksPage;
export const ConnectedTrackPage = (connect(trackMapStateToProps) as any)(TracksPage);