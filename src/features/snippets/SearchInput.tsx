import { SyntheticEvent, useEffect, useRef, useState } from "react";
import { useSearchParams } from "react-router-dom";

const SearchInput = () => {
    const searchRef = useRef<HTMLInputElement>(null);
    const [searchParams, setSearchParams] = useSearchParams();
    const [search, setSearch] = useState(searchParams.get("search") || "");

    const handleChange = (e: SyntheticEvent<HTMLInputElement>) => {
        const newSearch = e.currentTarget.value;
        setSearch(newSearch);
        setSearchParams({ search: newSearch });
    };

    const focusSearch = (e: KeyboardEvent) => {
        if (e.key.length === 1) searchRef.current?.focus();
    };

    useEffect(() => {
        const currentSearch = searchParams.get("search") || "";
        if (search !== currentSearch) {
            setSearch(currentSearch);
        }
    }, [searchParams, search]);

    useEffect(() => {
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
                value={search}
                onChange={handleChange}
            />
        </label>
    );
};

export default SearchInput;
