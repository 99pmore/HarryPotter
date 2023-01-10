import { Routes, Route } from "react-router-dom";
import Menu from "./components/Menu";
import Home from "./pages/Home";
import {GryffindorPage} from "./pages/GryffindorPage";
import {SlytherinPage} from "./pages/SlytherinPage";
import {HufflepuffPage} from "./pages/HufflepuffPage";
import {RavenclawPage} from "./pages/RavenclawPage";

const NoMatch = () => <h1>Not Found</h1>;

function App() {
    return (
        <div className="App">
            <Routes>
                <Route path="/" element={<Menu />}>
                    <Route index element={<Home />} />
                    <Route path="Gryffindor" element={<GryffindorPage />} />
                    <Route path="Slytherin" element={<SlytherinPage />} />
                    <Route path="Hufflepuff" element={<HufflepuffPage />} />
                    <Route path="Ravenclaw" element={<RavenclawPage />} />
                    <Route path="*" element={<NoMatch />} />
                </Route>
            </Routes>
        </div>
    );
}

export default App;
