import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from 'firebase/auth';
import {FirebaseAuth} from './firebaseConfig';

export const registerUserWithEmailAndPassword = async (email, password) => {
  try {
    const resp = await createUserWithEmailAndPassword(
      FirebaseAuth,
      email,
      password,
    );

    await updateProfile(FirebaseAuth.currentUser, {
      displayName: email.slice(0, 4),
      photoURL:
        'https://static.crunchyroll.com/assets/avatar/170x170/0001-cr-white-orange.png',
    });

    const {uid, photoURL} = resp.user;

    return {
      ok: true,
      uid,
      photoURL,
      email,
    };
  } catch (error) {
    return {ok: false, errorMessage: error.message};
  }
};

export const loginWithEmailPassword = async (email, password) => {
  try {
    const resp = await signInWithEmailAndPassword(
      FirebaseAuth,
      email,
      password,
    );

    const {uid, displayName, photoURL} = resp.user;

    return {
      ok: true,
      uid,
      email,
      displayName,
      photoURL,
    };
  } catch (error) {
    return {ok: false, errorMessage: error.message};
  }
  // singInWithEmailAndPassword
};

export const UpdatePhotoURL = async photoURL => {
  try {
    await updateProfile(FirebaseAuth.currentUser, {photoURL});
    return {
      ok: true,
      photoURL,
    };
  } catch (error) {
    return {ok: false, errorMessage: error.message};
  }
};
export const UpdateDisplayName = async displayName => {
  try {
    await updateProfile(FirebaseAuth.currentUser, {displayName});
    return {
      ok: true,
      displayName,
    };
  } catch (error) {
    return {ok: false, errorMessage: error.message};
  }
};

export const logoutFirebase = async () => {
  return await FirebaseAuth.signOut();
};
