import { Outlet, Navigate} from "react-router-dom";

export const RecruiterRoute = ({currentUser}) => {
    if(!currentUser){
        return  <Navigate to="/login" replace />
    }
    if(currentUser.role_id !== 1){
        return  <Navigate to="/" replace />
    }

    return (
        <Outlet />
    );
}