import { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export default function AdminRoute({ children }) {
  const { currentUser } = useAuth();
  const [isAdmin, setIsAdmin] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const checkAdminStatus = async () => {
      try {
        if (currentUser) {
          const token = await currentUser.getIdTokenResult(true);
          setIsAdmin(!!token.claims.admin);
        } else {
          setIsAdmin(false);
        }
      } catch (error) {
        console.error("Error verifying admin status:", error);
        setIsAdmin(false);
      } finally {
        setLoading(false);
      }
    };

    checkAdminStatus();
  }, [currentUser]);

  if (loading) {
    return <div>Checking permissions...</div>;
  }

  if (!currentUser || !isAdmin) {
    return <Navigate to="/" replace />;
  }

  return children;
}
