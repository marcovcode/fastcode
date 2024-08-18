import toast from "react-hot-toast";

import { useMutation } from "@tanstack/react-query";
import { join as apiJoin } from "../../services/apiAuth";

export function useJoin() {
    const { mutate: join, isPending } = useMutation({
        mutationFn: (email: string) => apiJoin(email),
        onSuccess: () => toast.success("A verification email was sent to you"),
        onError: () => toast.error("An error has occurred while joining"),
    });

    return { join, isPending };
}
