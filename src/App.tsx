import AbsoluteCenter from "./ui/AbsoluteCenter";
import Spinner from "./ui/Spinner";
import AppLayout from "./ui/AppLayout";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import { lazy, Suspense } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "react-hot-toast";

const queryClient = new QueryClient();

const Home = lazy(() => import("./pages/Home"));
const Join = lazy(() => import("./pages/Join"));

const App = () => {
    return (
        <>
            <Toaster
                toastOptions={{ className: "bg-base-200 text-base-content" }}
            />

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
                            <Route element={<AppLayout />}>
                                <Route index element={<Home />} />
                                <Route path="/join" element={<Join />} />
                            </Route>
                        </Routes>
                    </BrowserRouter>
                </Suspense>
            </QueryClientProvider>
        </>
    );
};

export default App;
