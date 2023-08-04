import { Route, Routes } from "react-router-dom";
import MapPage from "./map";

const RootRouter = () => {
    return (
        <Routes>
            <Route path="/" />
            <Route path="/map" element={<MapPage />} />
        </Routes>
    );
};

export default RootRouter;
