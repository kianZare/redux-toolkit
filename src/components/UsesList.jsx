import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAsyncUsers } from "../features/user/userSlice";

function UsersList() {
  const dispatch = useDispatch();
  const state = useSelector((state) => state.users);

  useEffect(() => {
    dispatch(getAsyncUsers());
  }, [dispatch]);

  return (
    <div>
      <h2>UsersList</h2>
      {state.loading ? (
        <p>Loading...</p>
      ) : state.error ? (
        <p>{state.error}</p>
      ) : (
        <div>
          {state.data &&
            state.data.map((user) => <li key={user.id}>{user.name}</li>)}
        </div>
      )}
    </div>
  );
}

export default UsersList;
