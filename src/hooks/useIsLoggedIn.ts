import { useMemo, useState } from 'react';
import { LocalStorageKeys } from '../utils/constants';

export const useIsLoggedIn = (): boolean => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
	const loggedInUserEmail = localStorage.getItem(LocalStorageKeys.logged_in_user);

  useMemo(() => {
    if (loggedInUserEmail) return setIsLoggedIn(true);
    return setIsLoggedIn(false);
  }, [loggedInUserEmail]);

  return isLoggedIn;
};
