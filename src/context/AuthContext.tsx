import React, {createContext, useReducer} from 'react';
import {AuthReducer, AuthState} from './AuthReducer';
import {
  UpdateDisplayName,
  UpdatePhotoURL,
  loginWithEmailPassword,
  logoutFirebase,
  registerUserWithEmailAndPassword,
} from '../auth/provider';

interface AuthContextProps {
  state: AuthState;
  login: (email: string, password: string) => Promise<boolean>;
  register: (email: string, password: string) => Promise<boolean>;
  logout: () => Promise<void>;
  changeAvatar: (photoURL: string) => Promise<void>;
  changeAvatarSelected: (avatarSelected: 'not-selected' | string) => void;
  changeDisplayName: (displayName: string) => void;
}

export const AuthContext = createContext({} as AuthContextProps);

const initialState: AuthState = {
  status: 'not-authenticated',
  email: null,
  displayName: null,
  photoURL: null,
  avatarSelected: 'not-selected',
};

export const AuthProvider = ({children}: any) => {
  const [state, dispatch] = useReducer(AuthReducer, initialState);

  const login = async (email: string, password: string) => {
    dispatch({type: 'checkingCredentials'});
    const {displayName, photoURL, ok} = await loginWithEmailPassword(
      email,
      password,
    );

    if (!ok) {
      dispatch({type: 'logout'});
    }
    dispatch({
      type: 'login',
      payload: {displayName: displayName!, email, photoURL: photoURL!},
    });

    return ok;
  };

  const register = async (email: string, password: string) => {
    dispatch({type: 'checkingCredentials'});
    const {ok} = await registerUserWithEmailAndPassword(email, password);
    if (!ok) {
      dispatch({type: 'logout'});
    }
    const {photoURL} = await loginWithEmailPassword(email, password);
    console.log(photoURL);
    dispatch({
      type: 'login',
      payload: {
        displayName: email.slice(0, 4),
        email,
        photoURL: photoURL!,
      },
    });

    return ok;
  };

  const logout = async () => {
    dispatch({type: 'checkingCredentials'});
    await logoutFirebase();
    dispatch({type: 'logout'});
  };

  const changeAvatar = async (photoURL: string) => {
    dispatch({type: 'checkingCredentials'});
    await UpdatePhotoURL(photoURL);
    dispatch({type: 'changeAvatar', payload: {photoURL}});
  };

  const changeAvatarSelected = async (
    avatarSelected: 'not-selected' | string,
  ) => {
    dispatch({type: 'changeAvatarSelected', payload: {avatarSelected}});
  };

  const changeDisplayName = async (displayName: string) => {
    dispatch({type: 'checkingCredentials'});
    await UpdateDisplayName(displayName);
    dispatch({type: 'changeDisplayName', payload: {displayName}});
  };
  return (
    <AuthContext.Provider
      value={{
        state,
        login,
        register,
        logout,
        changeAvatar,
        changeAvatarSelected,
        changeDisplayName,
      }}>
      {children}
    </AuthContext.Provider>
  );
};
