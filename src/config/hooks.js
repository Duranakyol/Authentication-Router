import { useEffect, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./firebase";

export const useCurrentUser = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    return onAuthStateChanged(auth, (user) => {
      setUser(user);
    });
  }, []);

  return user;
};

export const useIsLoggedIn = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(null);

  useEffect(() => {
    return onAuthStateChanged(auth, (user) => {
      setIsLoggedIn(!!user);
    });
  }, []);

  return isLoggedIn;
};

// import { useEffect, useState } from "react";
// import { onAuthStateChanged, signOut } from "firebase/auth";
// import { auth } from "./firebase";

// export const useIsLoggedIn = () => {
//   const [isLoggedIn, setIsLoggedIn] = useState(null);

//   useEffect(() => {
//     signOut(auth);

//     onAuthStateChanged(auth, (user) => {
//       console.log(user);
//       setIsLoggedIn(!!user);
//     });
//   }, []);

//   return isLoggedIn;
// };
