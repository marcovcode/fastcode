import { PropsWithChildren } from "react";

const AbsoluteCenter = ({ children }: PropsWithChildren) => {
    return (
        <div className="h-screen flex justify-center items-center">
            {children}
        </div>
    );
};

export default AbsoluteCenter;
