
import { useSelector } from 'react-redux'
import { Navigate, Outlet } from 'react-router'

export default function PrivateRoute() {
    const user = useSelector((state) => state.user)
    const currentUser = user ? user.currentUser : null;
  return (
   <>
   {
    currentUser ? <Outlet/>: <Navigate to={'/signin'}/>
   }
   </>
  )
}
