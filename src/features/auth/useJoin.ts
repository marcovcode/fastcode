import { useMutation } from "@tanstack/react-query";
import { join as apiJoin } from "../../services/apiAuth";

export function useJoin() {
    const { mutate: join, isPending } = useMutation({
        mutationFn: (email: string) => apiJoin(email),
    });

    return { join, isPending };
}
