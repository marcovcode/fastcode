import { BrowserRouter, Route, Routes } from "react-router-dom";

const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route index element={<h1>Fastcode</h1>} />
            </Routes>
        </BrowserRouter>
    );
};

export default App;
