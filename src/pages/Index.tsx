
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Index = () => {
  const navigate = useNavigate();
  
  useEffect(() => {
    // Redirect to portfolio page
    navigate("/portfolio");
  }, [navigate]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-space-dark">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4 gradient-text animate-glow">Adamya</h1>
        <p className="text-xl text-gray-400">Redirecting to portfolio...</p>
      </div>
    </div>
  );
};

export default Index;
