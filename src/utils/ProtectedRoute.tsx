import { useNavigate } from "react-router-dom";
import { useUser } from "../features/auth/useUser";
import { PropsWithChildren, useEffect } from "react";

import FullPageSpinner from "../ui/FullPageSpinner";

function ProtectedRoute({ children }: PropsWithChildren) {
    const navigate = useNavigate();

    const { isLoading, isAuthenticated } = useUser();

    useEffect(() => {
        if (!isAuthenticated && !isLoading) navigate("/join");
    }, [isAuthenticated, isLoading, navigate]);

    if (isLoading) return <FullPageSpinner />;
    if (isAuthenticated) return children;
}

export default ProtectedRoute;
