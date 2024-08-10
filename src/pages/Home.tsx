import ProtectedRoute from "../utils/ProtectedRoute";

const Home = () => {
    return (
        <ProtectedRoute>
            <h1>Fastcode</h1>
        </ProtectedRoute>
    );
};

export default Home;
