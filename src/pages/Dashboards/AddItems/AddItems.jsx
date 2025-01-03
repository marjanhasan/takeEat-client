import { useForm } from "react-hook-form";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import Swal from "sweetalert2";

const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;
const AddItems = () => {
  const { register, handleSubmit, reset } = useForm();
  const axiosPublic = useAxiosPublic();
  const axiosSecure = useAxiosSecure();

  const onSubmit = async (data) => {
    const imageFile = { image: data?.image[0] };
    const res = await axiosPublic.post(image_hosting_api, imageFile, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    if (res.data.success) {
      const menuItem = {
        name: data.name,
        recipe: data.recipe,
        image: res.data.data.display_url,
        category: data.category,
        price: parseFloat(data.price),
      };
      const menuRes = await axiosSecure.post("/menu", menuItem);
      if (menuRes.data.insertedId) {
        reset();
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: `${data.name} is added to the menu!`,
          showConfirmButton: false,
          timer: 1500,
        });
      }
    }
  };

  const categories = ["offered", "salad", "pizza", "soup", "dessert", "drink"];
  return (
    <div>
      <SectionTitle title={"what's new?"} subtitle={"Add items here"} />
      <>
        <form onSubmit={handleSubmit(onSubmit)} className="px-8">
          <label className="form-control w-full mb-3">
            <div className="label">
              <span className="label-text">Recipe Name *</span>
            </div>
            <input
              {...register("name", { required: true })}
              type="text"
              placeholder="Recipe Name"
              className="input input-bordered w-full"
            />
          </label>

          <div className="lg:flex gap-6">
            <label className="form-control w-full mb-3">
              <div className="label">
                <span className="label-text">Select Category *</span>
              </div>
              <select
                {...register("category", { required: true })}
                className="select select-bordered w-full uppercase"
              >
                {categories.map((category, idx) => (
                  <option key={idx} value={category}>
                    {category}
                  </option>
                ))}
              </select>
            </label>

            <label className="form-control w-full mb-3">
              <div className="label">
                <span className="label-text">Price *</span>
              </div>
              <input
                {...register("price", { required: true })}
                type="number"
                className="input input-bordered w-full"
              />
            </label>
          </div>

          <label className="form-control w-full mb-3">
            <div className="label">
              <span className="label-text">Recipe Details *</span>
            </div>
            <textarea
              {...register("recipe", { required: true })}
              className="textarea textarea-bordered"
              placeholder="Recipe Details"
            ></textarea>
          </label>

          <input
            {...register("image", { required: true })}
            type="file"
            className="file-input file-input-bordered w-full max-w-xs mb-3"
          />
          <br />
          <input className="btn" type="submit" />
        </form>
      </>
    </div>
  );
};

export default AddItems;
