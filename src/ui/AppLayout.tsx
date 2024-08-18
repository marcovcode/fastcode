import { Outlet } from "react-router-dom";

const AppLayout = () => {
    return (
        <div className="h-dvh p-4">
            <Outlet />
        </div>
    );
};

export default AppLayout;
