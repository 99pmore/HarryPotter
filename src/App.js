import { useState, useEffect } from "react";
import { useRoutes } from "react-router-dom";
import { routes } from "./routes";
import { Menu } from "./components/Menu";
import { MobileMenu } from "./components/MobileMenu";

function App() {

    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const query = window.matchMedia('(max-width: 600px)')
        setIsMobile(query.matches)
        const handleMatch = (event) => setIsMobile(event.matches)
        query.addEventListener('change', handleMatch)

        return () => query.removeEventListener('change', handleMatch)

      }, [])

    return (
        <div className="App">
            { isMobile ? <MobileMenu /> : <Menu /> }
            { useRoutes(routes) }
        </div>
    );
}

export default App;
