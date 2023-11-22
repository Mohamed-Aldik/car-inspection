import { useMemo, useState } from 'react';

export const useIsLoggedIn = (): boolean => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
	const loggedInUserEmail = localStorage.getItem("loggedInUser");

  useMemo(() => {
    if (loggedInUserEmail) return setIsLoggedIn(true);
    return setIsLoggedIn(false);
  }, [loggedInUserEmail]);

  return isLoggedIn;
};
