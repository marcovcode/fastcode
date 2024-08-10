import FullPageSpinner from "./ui/FullPageSpinner";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import { lazy, Suspense } from "react";

const Home = lazy(() => import("./pages/Home"));

const App = () => {
    return (
        <Suspense fallback={<FullPageSpinner />}>
            <BrowserRouter>
                <Routes>
                    <Route index element={<Home />} />
                </Routes>
            </BrowserRouter>
        </Suspense>
    );
};

export default App;
