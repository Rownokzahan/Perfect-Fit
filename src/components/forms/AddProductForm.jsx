import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { AiOutlineExclamationCircle } from "react-icons/ai";
import { LuImagePlus } from "react-icons/lu";

const AddProductForm = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  // Function to handle form submission
  const onSubmit = (data) => {
    console.log(data);
  };

  const [previewImageUrl, setPreviewImageUrl] = useState(null);
  const watchImage = watch("image");

  // Effect to update preview image URL when the image changes
  useEffect(() => {
    if (watchImage && watchImage.length > 0) {
      const objectURL = URL.createObjectURL(watchImage[0]);
      setPreviewImageUrl((prevUrl) => {
        if (prevUrl !== objectURL) {
          URL.revokeObjectURL(prevUrl);
          return objectURL;
        }
        return prevUrl;
      });
    } else {
      setPreviewImageUrl(null);
    }
  }, [watchImage]);

  return (
    <form
      className="space-y-8 max-w-xl bg-white p-8 rounded mx-auto"
      onSubmit={handleSubmit(onSubmit)}
    >
      <div className="space-y-2 relative">
        <input
          type="text"
          id="name"
          name="name"
          autoComplete="off"
          placeholder="Product Name"
          className="peer floating-input"
          {...register("name", { required: true })}
        />
        {errors.name && (
          <p className="text-red-600 text-xs ps-px flex items-center gap-2">
            <AiOutlineExclamationCircle />
            Product Name is required
          </p>
        )}
        <label htmlFor="name" className="floating-label bg-white">
          Product Name
        </label>
      </div>

      <div className="space-y-2 relative">
        <input
          type="number"
          id="price"
          name="price"
          autoComplete="off"
          placeholder="Price"
          className="peer floating-input"
          {...register("price", { required: true, min: 0 })}
        />
        {errors.price && (
          <p className="text-red-600 text-xs ps-px flex items-center gap-2">
            <AiOutlineExclamationCircle />
            Price is required and must be a positive number
          </p>
        )}
        <label htmlFor="price" className="floating-label bg-white">
          Price
        </label>
      </div>

      <div className="grid sm:grid-cols-2 gap-8">
        <div className="space-y-2 relative">
          <select
            id="status"
            name="status"
            className="peer floating-input"
            {...register("status", { required: true })}
          >
            <option value="none">None</option>
            <option value="new">New</option>
            <option value="popular">Popular</option>
          </select>
          {errors.status && (
            <p className="text-red-600 text-xs ps-px flex items-center gap-2">
              <AiOutlineExclamationCircle />
              Status is required
            </p>
          )}
          <label htmlFor="status" className="floating-label bg-white">
            Status
          </label>
        </div>

        <div className="space-y-2 relative">
          <select
            id="category"
            name="category"
            className="peer floating-input"
            {...register("category", { required: true })}
          >
            <option value="seasonal-dress">Seasonal Dress</option>
            <option value="formal-gown">Formal Gown</option>
            <option value="maxi-dress">Maxi Dress</option>
            <option value="cocktail-dress">Cocktail Dress</option>
          </select>
          {errors.category && (
            <p className="text-red-600 text-xs ps-px flex items-center gap-2">
              <AiOutlineExclamationCircle />
              Category is required
            </p>
          )}
          <label htmlFor="category" className="floating-label bg-white">
            Category
          </label>
        </div>
      </div>

      <div className="h-52 w-full flex gap-4">
        <div className="h-full w-full flex flex-col">
          <label className="h-full border border-dashed rounded cursor-pointer flex justify-center items-center">
            <div className="text-center text-sm underline underline-offset-4">
              <LuImagePlus className="text-3xl mx-auto w-max mb-1" />
              Click to {previewImageUrl ? "change" : "upload"} image
            </div>
            <input
              accept="image/*"
              type="file"
              id="image"
              name="image"
              className="hidden"
              {...register("image", { required: true })}
            />
          </label>
          {errors.image && (
            <p className="text-red-600 text-xs mt-2 ps-px flex items-center gap-2">
              <AiOutlineExclamationCircle />
              Image is required
            </p>
          )}
        </div>

        {previewImageUrl && (
          <div className="h-full w-[40%]">
            <img
              src={previewImageUrl}
              className="h-full w-full object-cover rounded"
              alt=""
            />
          </div>
        )}
      </div>

      <button type="submit" className="button-black-solid w-full">
        Add Product
      </button>
    </form>
  );
};

export default AddProductForm;
