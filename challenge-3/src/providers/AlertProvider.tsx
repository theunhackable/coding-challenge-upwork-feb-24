import { ReactNode, useState } from "react";
import AlertContext, { Alert } from "../context/AlertContext";

const AlertProvider = ({ children }: { children: ReactNode }) => {
  const [alert, setAlert] = useState<Alert>({message: null, type: null});
  return (
    <AlertContext.Provider value={{ alert, setAlert }}>
      {children}
    </AlertContext.Provider>
  );
};

export default AlertProvider