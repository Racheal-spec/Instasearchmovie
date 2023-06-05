import { Navigate } from "react-router-dom";
import { useUserDataQuery } from "../features/Reducers/UserSplice/UserSplice";
import UseAuth from "../services/Hooks/UseAuth";

type ChildProp = {
  children: JSX.Element;
};
const ProtectedRoute = ({ children }: ChildProp) => {
  const { data: userdata } = useUserDataQuery();
  const { newsession } = UseAuth(userdata);

  if (newsession?.user !== undefined) {
    console.log(newsession?.user);
    // <Navigate to="/watchlist"></Navigate>;
    return children;
  } else {
    console.log(newsession?.user);
    return <Navigate to="/login"></Navigate>;
  }
};

export default ProtectedRoute;
