import toast from "react-hot-toast";

import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createSnippet as apiCreateSnippet } from "../../services/apiSnippets";
import { Tables } from "../../types";

export function useCreateSnippet() {
    const queryClient = useQueryClient();

    const { mutate: createSnippet, isPending } = useMutation({
        mutationFn: (snippet: Tables<"snippets">) => apiCreateSnippet(snippet),
        onSuccess: async () => {
            await queryClient.invalidateQueries({ queryKey: ["snippets"] });
            toast.success("Snippet created successfully");
        },
        onError: () =>
            toast.error("An error has occurred while creating your snippet"),
    });

    return { createSnippet, isPending };
}
