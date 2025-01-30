import React, { useEffect, useState } from "react";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { UserGuestScreen } from "./UserGuestScreen/UserGuestScreen";
import { UserLoggedScreen } from "./UserLoogedScreen/UserLoggedScreen";
import { LoadingModal } from "../../components";
export function AccountScreen() {
  const [hasLogged, sethasLogged] = useState(null);

  useEffect(() => {
    const auth = getAuth();
    onAuthStateChanged(auth, (user) => {
      sethasLogged(user ? true : false);
    });
  }, []);
  if (hasLogged === null) {
    return <LoadingModal show text="Cargando" />;
  }
  return hasLogged ? <UserLoggedScreen /> : <UserGuestScreen />;
}
