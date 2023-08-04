import "./App.css";
import RootRouter from "./pages";

declare global {
    interface Window {
        google: any;
        initMap: () => void;
    }
}

window.initMap = () => {};

function App() {
    return <RootRouter />;
}

export default App;
