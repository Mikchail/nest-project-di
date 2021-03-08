import Layout from "./Layout";

interface MainPorps { }
interface MainState { }
class MainPage<
    P extends MainPorps,
    S extends MainState,
    > extends Layout<P, S> {

    public renderPage(): JSX.Element {
        
        return (
            <div>
                <h1>MainPage</h1>
            </div>
        )
    }
}
export type MainPageType = typeof MainPage;
export default MainPage;