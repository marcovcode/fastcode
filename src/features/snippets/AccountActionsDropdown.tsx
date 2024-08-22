import Spinner from "../../ui/Spinner";

import { HiMenu } from "react-icons/hi";
import { useLogOut } from "../auth/useLogOut";

const AccountActionsDropdown = () => {
    const { logOut, isPending } = useLogOut();

    const handleClick = () => {
        logOut();
    };

    return (
        <div className="dropdown dropdown-end">
            <div
                tabIndex={0}
                role="button"
                className="btn btn-circle btn-neutral"
            >
                <HiMenu />
            </div>
            <ul
                tabIndex={0}
                className={`dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow ${
                    isPending && "disabled"
                }`}
            >
                <li>
                    <a onClick={handleClick}>
                        {isPending ? <Spinner /> : "🚪 Log out"}
                    </a>
                </li>
            </ul>
        </div>
    );
};

export default AccountActionsDropdown;
