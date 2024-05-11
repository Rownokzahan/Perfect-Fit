import { useState } from "react";
import {
  getStorage,
  ref,
  uploadBytesResumable,
  getDownloadURL,
} from "firebase/storage";

const useFirebaseImageURLProvider = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  // Function to upload an image to Firebase Storage and get display image url
  const getImageUrl = async (image) => {
    let imageURL = null;
    try {
      setIsLoading(true);
      setError(null);

      // Get Firebase Storage reference and upload image
      const storage = getStorage();
      const storageRef = ref(storage, `images/dresses/${image.name}`);
      const uploadTaskSnapshot = await uploadBytesResumable(storageRef, image);

      // Get the download URL of the uploaded image
      imageURL = await getDownloadURL(uploadTaskSnapshot.ref);
    } catch (error) {
      console.error("image upload error:", error);
      setError("Something went wrong while uploading image");
    } finally {
      setIsLoading(false);
    }

    return imageURL;
  };

  return { getImageUrl, isLoading, error };
};

export default useFirebaseImageURLProvider;
