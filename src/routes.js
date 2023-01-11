import Home from "./pages/Home";
import { GryffindorPage } from "./pages/GryffindorPage";
import { SlytherinPage } from "./pages/SlytherinPage";
import { HufflepuffPage } from "./pages/HufflepuffPage";
import { RavenclawPage } from "./pages/RavenclawPage";
import { CharacterInfo } from "./pages/CharacterInfo";

export const routes = [
    {
        path: '/',
        element: <Home />
    },
    {
        path: 'Gryffindor',
        element: <GryffindorPage />
    },
    {
        path: 'Slytherin',
        element: <SlytherinPage />
    },
    {
        path: 'Hufflepuff',
        element: <HufflepuffPage />
    },
    {
        path: 'Ravenclaw',
        element: <RavenclawPage />
    },
    {
        path: 'characters/:name',
        element: <CharacterInfo />
    }
]