import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import Firebase from "./pages/Firebase/Firebase";

function App() {
    return (
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/firebase" element={<Firebase />} />
        </Routes>
    );
}

export default App;
