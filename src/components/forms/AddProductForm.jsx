import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { AiOutlineExclamationCircle } from "react-icons/ai";
import { LuImagePlus } from "react-icons/lu";
import { useAddDressMutation } from "../../redux/features/api/dressApi";
import { ImSpinner9 } from "react-icons/im";
import useFirebaseImageURLProvider from "../../hooks/useFirebaseImageURLProvider";
import toast from "react-hot-toast";

const AddProductForm = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
    reset,
  } = useForm();
  const {
    getImageUrl,
    isLoading: loadingImageUrl,
    error: imageUrlError,
  } = useFirebaseImageURLProvider();
  const [addDress, { isLoading }] = useAddDressMutation();

  // Function to handle form submission
  const onSubmit = async (data) => {
    // upload image on firebase and get image url
    const imageURL = await getImageUrl(data.image[0]);

    if (imageURL) {
      // Store dress to database
      const dress = { ...data, image: imageURL, status: "none" };
      addDress(dress)
        .unwrap()
        .then((result) => {
          if (result.insertedId) {
            reset();
            toast.success("Product added successfully!");
          }
        })
        .catch((error) => console.error("rejected", error));
    }
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
    <div className="max-w-xl p-8 rounded mx-auto bg-white">
      {/* Display error messages */}
      {imageUrlError ? (
        <p className="text-red-600 font-medium text-center text-sm mb-10">
          {imageUrlError}
        </p>
      ) : (
        <></>
      )}

      <form className="space-y-8" onSubmit={handleSubmit(onSubmit)}>
        <div className="space-y-2 relative">
          <input
            type="text"
            id="name"
            name="name"
            autoComplete="off"
            placeholder="Product Name"
            className={`peer floating-input ${
              errors.name ? "border-red-600" : ""
            }`}
            {...register("name", { required: "Product Name is required" })}
          />
          {errors.name && (
            <p className="text-red-600 text-xs ps-px flex items-center gap-2">
              <AiOutlineExclamationCircle />
              {errors.name.message}
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
            className={`peer floating-input ${
              errors.price ? "border-red-600" : ""
            }`}
            {...register("price", {
              required: "Price is required",
              min: { value: 0, message: "Price must be positive" },
            })}
          />
          {errors.price && (
            <p className="text-red-600 text-xs ps-px flex items-center gap-2">
              <AiOutlineExclamationCircle />
              {errors.price.message}
            </p>
          )}
          <label htmlFor="price" className="floating-label bg-white">
            Price
          </label>
        </div>

        <div className="space-y-2 relative">
          <select
            id="category"
            name="category"
            className={`peer floating-input ${
              errors.category ? "border-red-600" : ""
            }`}
            placeholder="Select Category"
            {...register("category", { required: "Category is required" })}
          >
            <option value="">Select Category</option>
            <option value="seasonal-dress">Seasonal Dress</option>
            <option value="formal-gown">Formal Gown</option>
            <option value="maxi-dress">Maxi Dress</option>
            <option value="cocktail-dress">Cocktail Dress</option>
          </select>
          {errors.category && (
            <p className="text-red-600 text-xs ps-px flex items-center gap-2">
              <AiOutlineExclamationCircle />
              {errors.category.message}
            </p>
          )}
          <label htmlFor="category" className="floating-label bg-white">
            Select Category
          </label>
        </div>

        <div className="h-52 w-full flex gap-4">
          <div className="h-full w-full flex flex-col">
            <label className="h-full border border-dashed rounded cursor-pointer flex justify-center items-center">
              <div
                className={`text-center text-sm underline underline-offset-4 ${
                  errors.image ? "text-red-600" : ""
                }`}
              >
                <LuImagePlus className="text-3xl mx-auto w-max mb-1" />
                Click to {previewImageUrl ? "change" : "add"} image
              </div>
              <input
                accept="image/*"
                type="file"
                id="image"
                name="image"
                className="hidden"
                {...register("image", { required: "Image is required" })}
              />
            </label>
            {errors.image && (
              <p className="text-red-600 text-xs mt-2 ps-px flex items-center gap-2">
                <AiOutlineExclamationCircle />
                {errors.image.message}
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

        {/* Add product button */}
        {isLoading || loadingImageUrl ? (
          <button
            type="button"
            className="button-black-solid w-full flex items-center justify-center gap-2"
            disabled
          >
            <ImSpinner9 className="animate-spin" />
          </button>
        ) : (
          <button type="submit" className="button-black-solid w-full">
            Add Product
          </button>
        )}
      </form>
    </div>
  );
};

export default AddProductForm;
