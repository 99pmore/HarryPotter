import { useRoutes } from "react-router-dom";
import { routes } from "./routes";
import Menu from "./components/Menu";

function App() {

    return (
        <div className="App">
            <Menu />
            { useRoutes(routes) }
        </div>
    );
}

export default App;
