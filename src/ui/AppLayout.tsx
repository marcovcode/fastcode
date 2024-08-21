import { Outlet } from "react-router-dom";

const AppLayout = () => {
    return (
        <div className="p-4">
            <Outlet />
        </div>
    );
};

export default AppLayout;
