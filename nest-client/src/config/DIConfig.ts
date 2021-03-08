import {
    ConnectedTest, FileUpload,
    NavBar, TrackItem,
    TrackProgress, StepWrapper, ConnectedPlayer
} from "../components";
import TrackList from "../components/TrackList";
import { AppObjectFactory, IInjectionConfigItem, ReactComponentFactory } from "../di";
import { ConnectedTrackPage, CreateTrackPage, MainPage, TrackPage } from "../pages";
import { MainRouters } from "../routers";
import AppStore from "../store";

const components: IInjectionConfigItem = {
    Test: { factory: ReactComponentFactory, use: ConnectedTest },
    NavBar: { factory: ReactComponentFactory, use: NavBar },
    StepWrapper: { factory: ReactComponentFactory, use: StepWrapper },
    FileUpload: { factory: ReactComponentFactory, use: FileUpload },
    Player: { factory: ReactComponentFactory, use: ConnectedPlayer },
    TrackProgress: { factory: ReactComponentFactory, use: TrackProgress },
    TrackItem: { factory: ReactComponentFactory, use: TrackItem },
    TrackList: { factory: ReactComponentFactory, use: TrackList },
}

const global: IInjectionConfigItem = {
    ReduxStore: { factory: AppObjectFactory, use: AppStore },
}

const reducers: IInjectionConfigItem = {
    PlayerReducer: { factory: AppObjectFactory, use: AppStore }
}

const pages: IInjectionConfigItem = {
    MainPage: { factory: ReactComponentFactory, use: MainPage },
    TracksPage: { factory: ReactComponentFactory, use: ConnectedTrackPage },
    TrackPage: { factory: ReactComponentFactory, use: TrackPage },
    CreateTrackPage: { factory: ReactComponentFactory, use: CreateTrackPage },
}

const routers: IInjectionConfigItem = {
    MainRouters: { factory: ReactComponentFactory, use: MainRouters }
}

export default {
    components,
    routers,
    pages,
    global,
    reducers
};
