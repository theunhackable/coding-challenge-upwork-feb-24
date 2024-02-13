import React, { createContext } from "react";

export type Alert = {
  message: null | string;
  type: null | string;
}

export type AlertContextType = {
  alert: Alert
  setAlert: React.Dispatch<React.SetStateAction<Alert>>
}
const AlertContext = createContext<AlertContextType | null>(null);

export default AlertContext;
