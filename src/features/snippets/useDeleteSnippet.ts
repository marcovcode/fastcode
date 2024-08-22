import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteSnippet as apiDeleteSnippet } from "../../services/apiSnippets";

export function useDeleteSnippet() {
    const queryClient = useQueryClient();

    const { mutate: deleteSnippet, isPending } = useMutation({
        mutationFn: (id: number) => apiDeleteSnippet(id),
        onSuccess: async () => {
            await queryClient.invalidateQueries({ queryKey: ["snippets"] });
        },
    });

    return { deleteSnippet, isPending };
}
