import { useContext, useEffect } from "react";
import AlertContext from "../context/AlertContext";

const Alert = () => {
  const context = useContext(AlertContext)

  useEffect(() => {
    if (context?.alert.message !== null) {
      setTimeout(() => context?.setAlert({message: null, type: null}), 5000);
    }
  }, [context?.alert]);
  if (!context?.alert.message) return null;
  return (
    <div
      className={`z-[999] absolute right-4 border-2 px-5 py-2 rounded-md max-w-lg ${
        context.alert.type === "error"
          ? "bg-red-200 text-red-600 border-red-700"
          : "bg-green-200 text-green-600 border-green-700"
      }`}
    >
      {context.alert.message}
    </div>
  );
};

export default Alert;
