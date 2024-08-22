import { useMutation, useQueryClient } from "@tanstack/react-query";
import { logOut as apiLogOut } from "../../services/apiAuth";

export function useLogOut() {
    const queryClient = useQueryClient();

    const { mutate: logOut, isPending } = useMutation({
        mutationFn: apiLogOut,
        onSuccess: async () => {
            await queryClient.invalidateQueries({ queryKey: ["user"] });
        },
    });

    return { logOut, isPending };
}
