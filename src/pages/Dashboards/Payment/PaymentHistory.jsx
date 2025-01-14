import { useQuery } from "@tanstack/react-query";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import useAuth from "../../../hooks/useAuth";
import useAxiosSecure from "../../../hooks/useAxiosSecure";

const PaymentHistory = () => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();

  const { data: payments = [] } = useQuery({
    queryKey: ["payments", user.email],
    queryFn: async () => {
      const res = await axiosSecure.get(`/payments/${user.email}`);
      return res.data;
    },
  });

  return (
    <div>
      <SectionTitle
        title={"payment history"}
        subtitle={"lists of payment history"}
      />
      <div className="overflow-x-auto">
        <div className="flex justify-evenly py-3 uppercase font-bold text-xl text-slate-900">
          <div>Hello, {user?.displayName?.split(" ")[0]}</div>
          <div>total transaction: {payments?.length}</div>
        </div>
        <table className="table">
          <thead>
            <tr className="text-lg uppercase bg-orange-300 border-none">
              <th className="rounded-tl-2xl">#</th>
              <th>email</th>
              <th>price</th>
              <th>date</th>
            </tr>
          </thead>
          <tbody>
            {payments?.map((singlePayment, idx) => {
              const dateObject = new Date(singlePayment?.date);
              const formattedDate = dateObject.toLocaleString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
                hour: "numeric",
                minute: "numeric",
                second: "numeric",
                timeZoneName: "short",
              });
              return (
                <tr key={singlePayment._id} className="text-lg">
                  <td>{idx + 1}</td>
                  <td>{singlePayment?.email}</td>
                  <td>{singlePayment?.price}</td>
                  <td>{formattedDate}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PaymentHistory;
