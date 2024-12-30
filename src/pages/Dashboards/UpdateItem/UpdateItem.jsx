import { useLoaderData, useNavigate } from "react-router-dom";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import { useForm } from "react-hook-form";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import Swal from "sweetalert2";

const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;

const UpdateItem = () => {
  const item = useLoaderData();
  console.log(item);
  const { register, handleSubmit, reset } = useForm();
  const axiosPublic = useAxiosPublic();
  const axiosSecure = useAxiosSecure();
  const navigate = useNavigate();

  const onSubmit = async (data) => {
    const menuItem = {
      name: data.name,
      recipe: data.recipe,
      category: data.category,
      price: parseFloat(data.price),
      image: item.image,
    };

    const imageFile = { image: data?.image[0] };
    if (data?.image[0]) {
      const res = await axiosPublic.post(image_hosting_api, imageFile, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      if (res.data.success) {
        menuItem["image"] = res.data.data.display_url;
      }
    }
    const menuRes = await axiosSecure.patch(`/menu/${item._id}`, menuItem);
    if (menuRes.data.modifiedCount) {
      reset();
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: `${data.name} is updated to the menu!`,
        showConfirmButton: false,
        timer: 1500,
      });
      navigate("/dashboard/manage-items");
    }
  };

  const categories = ["offered", "salad", "pizza", "soup", "dessert", "drink"];
  return (
    <div>
      <SectionTitle title={"update item"} subtitle={"update and see"} />
      <form onSubmit={handleSubmit(onSubmit)} className="px-8">
        <label className="form-control w-full mb-3">
          <div className="label">
            <span className="label-text">Recipe Name *</span>
          </div>
          <input
            {...register("name")}
            defaultValue={item.name}
            type="text"
            placeholder="Recipe Name"
            className="input input-bordered w-full"
          />
        </label>

        <div className="flex gap-6">
          <label className="form-control w-full mb-3">
            <div className="label">
              <span className="label-text">Select Category *</span>
            </div>
            <select
              {...register("category")}
              className="select select-bordered w-full uppercase"
              defaultValue={item.category}
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
              {...register("price")}
              type="number"
              defaultValue={item.price}
              className="input input-bordered w-full"
            />
          </label>
        </div>

        <label className="form-control w-full mb-3">
          <div className="label">
            <span className="label-text">Recipe Details *</span>
          </div>
          <textarea
            {...register("recipe")}
            defaultValue={item.recipe}
            className="textarea textarea-bordered"
            placeholder="Recipe Details"
          ></textarea>
        </label>

        <input
          {...register("image")}
          type="file"
          className="file-input file-input-bordered w-full max-w-xs mb-3"
        />
        <br />
        <input className="btn" type="submit" />
      </form>
    </div>
  );
};

export default UpdateItem;
