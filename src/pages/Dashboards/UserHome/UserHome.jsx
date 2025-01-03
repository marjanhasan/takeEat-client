import useAuth from "../../../hooks/useAuth";

const UserHome = () => {
  const { user } = useAuth();
  return (
    <div>
      <h1 className="text-4xl font-semibold uppercase">
        Welcome back! {user?.displayName ? user?.displayName : "user"}
      </h1>
    </div>
  );
};

export default UserHome;
