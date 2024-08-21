import CreateSnippetButton from "../features/snippets/CreateSnippetForm";
import SnippetsGrid from "../features/snippets/SnippetsGrid";
import ProtectedRoute from "../utils/ProtectedRoute";
import AbsoluteCenter from "../ui/AbsoluteCenter";
import Spinner from "../ui/Spinner";

import { useSnippets } from "../features/snippets/useSnippets";

const Home = () => {
    const { isLoading } = useSnippets();

    if (isLoading)
        return (
            <AbsoluteCenter>
                <Spinner />
            </AbsoluteCenter>
        );

    return (
        <ProtectedRoute>
            <SnippetsGrid />
            <CreateSnippetButton />
        </ProtectedRoute>
    );
};

export default Home;
