
import {ref, getDownloadURL, uploadBytes } from "firebase/storage";
import { storage } from "./firebase";

export async function storeFile(file) {
    try {
      const storageRef = ref(storage, `User_Profile_Photo/${file.name}`);
      const snapshop = await uploadBytes(storageRef, file);
      const url = await getDownloadURL(snapshop.ref);
  
      return url;
    } catch (error) {
      console.log(error.code);
      console.log(error.message);
      return null;
    }
  }
  