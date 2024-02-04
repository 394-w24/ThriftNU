import { storage } from "../firebase";
import { ref, uploadBytes } from "firebase/storage";

const uploadImage = async (file) => {
  // Create a reference to image
  let storagePath = 'test.jpg'
  const imageRef = ref(storage, storagePath);

  try {
    const snapshot = await uploadBytes(imageRef, file);
    console.log('Uploaded!');
    const imageURL = `gs://thriftnu-59202.appspot.com/${storagePath}`;
    console.log('About to be returned from uploadImage: ' + imageURL);
    return imageURL;
  } catch (error) {
    console.error('Upload failed.', error);
    return null;
  }
}

export default uploadImage;
