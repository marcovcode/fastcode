import { useEffect, useRef } from "react";

const SearchInput = () => {
    const search = useRef<HTMLInputElement>(null);

    useEffect(() => {
        const focusSearch = () => search.current?.focus();
        document.addEventListener("keydown", focusSearch);
        return () => document.removeEventListener("keydown", focusSearch);
    }, []);

    return (
        <label className="input input-bordered flex items-center gap-2 grow">
            <span>🔍</span>
            <input
                type="text"
                className="grow"
                placeholder="Search"
                ref={search}
            />
        </label>
    );
};

export default SearchInput;
