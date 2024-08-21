import { useQuery } from "@tanstack/react-query";
import { getSnippets as apiGetSnippets } from "../../services/apiSnippets";

export function useSnippets() {
    const { data: snippets, isLoading } = useQuery({
        queryFn: apiGetSnippets,
        queryKey: ["snippets"],
    });

    return { snippets, isLoading };
}
