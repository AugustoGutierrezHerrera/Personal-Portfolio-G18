import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
  onAuthStateChanged,
} from "firebase/auth";

import { auth } from "./firebase";

/*Crea un usuario en firebase */
export async function createUser(email, password) {
  try {
    const authentication = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );

    return authentication.user;
  } catch (error) {
    console.log(error.code);
    console.log(error.message);
    return null;
  }
}
/*Inicia Sesion en firebase*/
export async function signIn(email, password) {
  try {
    const authentication = await signInWithEmailAndPassword(
      auth,
      email,
      password
    );
    return authentication.user;
    ss;
  } catch (error) {
    console.log(error.code);
    console.log(error.message);
    return null;
  }
}

export async function signOut (){
  try {
    await auth.signOut()
    return true
  } catch (error) {
    console.error("Error al cerrar sesión:", error);
    return false;
  }
}

//Consulta si hay un usuario con sesion
export function getCurrentUser() {
  return new Promise((resolve, reject) => {
    const observer = onAuthStateChanged(auth, (user) => {
      if (user) {
        resolve(user);
      } else {
        reject("User not found");
      }
    });
    return observer;
  });
  
}

// Actualiza el nombre y foto de perfil
export async function updateUser(name, photoURL) {
  const currentUser = auth.currentUser;

  const user = await updateProfile(currentUser, {
    displayName: name,
    photoURL: photoURL,
  });

  return user;
}
