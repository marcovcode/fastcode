import FullPageSpinner from "./ui/FullPageSpinner";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import { lazy, Suspense } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

const Home = lazy(() => import("./pages/Home"));

const App = () => {
    return (
        <QueryClientProvider client={queryClient}>
            <Suspense fallback={<FullPageSpinner />}>
                <BrowserRouter>
                    <Routes>
                        <Route index element={<Home />} />
                    </Routes>
                </BrowserRouter>
            </Suspense>
        </QueryClientProvider>
    );
};

export default App;
