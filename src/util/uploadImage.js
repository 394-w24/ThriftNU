import { storage } from "../firebase";
import { ref, uploadBytes } from "firebase/storage";

const uploadImage = (file) => {

  // Create a reference to image
  let storagePath = 'test.jpg'
  const imageRef = ref(storage, storagePath);

  uploadBytes(imageRef, file).then((snapshot) => {
    console.log('Uploaded!');
    const imageURL = 'gs://thriftnu-59202.appspot.com/'+storagePath;
    return imageURL;
  });
  return null;
}

export default uploadImage;