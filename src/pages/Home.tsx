import CreateSnippetButton from "../features/snippets/CreateSnippetForm";
import ProtectedRoute from "../utils/ProtectedRoute";

const Home = () => {
    return (
        <ProtectedRoute>
            <CreateSnippetButton />
        </ProtectedRoute>
    );
};

export default Home;
