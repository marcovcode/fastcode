import { SyntheticEvent, useEffect, useRef } from "react";
import { useSearchParams } from "react-router-dom";

const SearchInput = () => {
    const searchRef = useRef<HTMLInputElement>(null);
    const [_, setSearchParams] = useSearchParams();

    const handleChange = (e: SyntheticEvent<HTMLInputElement>) => {
        const search = e.currentTarget.value;
        setSearchParams({ search: search });
    };

    useEffect(() => {
        const focusSearch = () => searchRef.current?.focus();
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
                ref={searchRef}
                onChange={handleChange}
            />
        </label>
    );
};

export default SearchInput;
