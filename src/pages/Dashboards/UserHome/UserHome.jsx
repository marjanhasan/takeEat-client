import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import useAuth from "../../../hooks/useAuth";

const UserHome = () => {
  const { user } = useAuth();
  return (
    <div>
      <SectionTitle
        title={"user's home"}
        subtitle={`welcome back, ${
          user?.displayName ? user?.displayName?.split(" ")[0] : "user"
        }`}
      />
    </div>
  );
};

export default UserHome;
