import { BrowserRouter, Route, Routes } from "react-router-dom";
import { lazy, Suspense } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import AbsoluteCenter from "./ui/AbsoluteCenter";
import Spinner from "./ui/Spinner";

const queryClient = new QueryClient();

const Home = lazy(() => import("./pages/Home"));
const Join = lazy(() => import("./pages/Join"));

const App = () => {
    return (
        <QueryClientProvider client={queryClient}>
            <Suspense
                fallback={
                    <AbsoluteCenter>
                        <Spinner />
                    </AbsoluteCenter>
                }
            >
                <BrowserRouter>
                    <Routes>
                        <Route index element={<Home />} />
                        <Route path="/join" element={<Join />} />
                    </Routes>
                </BrowserRouter>
            </Suspense>
        </QueryClientProvider>
    );
};

export default App;
