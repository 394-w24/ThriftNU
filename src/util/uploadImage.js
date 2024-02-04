import { storage } from "../firebase";
import { ref, uploadBytes } from "firebase/storage";

const uploadImage = async (file) => {

  // Create a reference to image
  let storagePath = 'test.jpg'
  const imageRef = ref(storage, storagePath);

  console.log('file');
  console.log(file);
  await uploadBytes(imageRef, file).then((snapshot) => {
    console.log('Uploaded!');
    const imageURL = 'gs://thriftnu-59202.appspot.com/'+storagePath;
    console.log('About to be returned from uploadImage: '+imageURL);
    return imageURL;
  }, (snapshot) => {
    console.log('Upload failed.');
    return null;
  });
}

export default uploadImage;