import { useNavigate } from "react-router-dom";
import { useUser } from "../features/auth/useUser";
import { PropsWithChildren, useEffect } from "react";

import Spinner from "../ui/Spinner";
import AbsoluteCenter from "../ui/AbsoluteCenter";

function ProtectedRoute({ children }: PropsWithChildren) {
    const navigate = useNavigate();

    const { isLoading, isAuthenticated } = useUser();

    useEffect(() => {
        if (!isAuthenticated && !isLoading) navigate("/join");
    }, [isAuthenticated, isLoading, navigate]);

    if (isLoading)
        return (
            <AbsoluteCenter>
                <Spinner />
            </AbsoluteCenter>
        );
    if (isAuthenticated) return children;
}

export default ProtectedRoute;
