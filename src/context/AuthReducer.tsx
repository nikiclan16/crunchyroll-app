export type AuthState = {
  status: 'checking' | 'not-authenticated' | 'authenticated';
  email: null | string;
  displayName: null | string;
  photoURL: null | string;
  avatarSelected: string | 'not-selected';
};

type AuthAction =
  | {
      type: 'login';
      payload: {
        displayName: string;
        email: string;
        photoURL: string;
      };
    }
  | {type: 'logout'}
  | {type: 'ErrorMessage'; payload: string | null}
  | {type: 'checkingCredentials'}
  | {
      type: 'changeAvatar';
      payload: {
        photoURL: string;
      };
    }
  | {
      type: 'changeAvatarSelected';
      payload: {
        avatarSelected: 'not-selected' | string;
      };
    }
  | {type: 'changeDisplayName'; payload: {displayName: string}};

export const AuthReducer = (
  state: AuthState,
  action: AuthAction,
): AuthState => {
  switch (action.type) {
    case 'login':
      const {displayName, email, photoURL} = action.payload;
      return {
        ...state,
        status: 'authenticated',
        displayName,
        email: email.toLowerCase(),
        photoURL,
      };
    case 'logout':
      return {
        ...state,
        status: 'not-authenticated',
        email: null,
        displayName: null,
        photoURL: null,
      };
    case 'checkingCredentials':
      return {
        ...state,
        status: 'checking',
      };
    case 'changeAvatar':
      return {
        ...state,
        photoURL: action.payload.photoURL,
        status: 'authenticated',
      };
    case 'changeAvatarSelected':
      return {
        ...state,
        avatarSelected: action.payload.avatarSelected,
      };
    case 'changeDisplayName':
      return {
        ...state,
        displayName: action.payload.displayName,
        status: 'authenticated',
      };

    default:
      return state;
  }
};
