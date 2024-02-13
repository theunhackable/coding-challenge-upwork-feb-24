import { useContext, useState } from "react";
import { validateEmail, validatePassword } from "../lib/validation";
import Alert from "./Alert";
import AlertContext, { AlertContextType } from "../context/AlertContext";

const SignInForm = () => {
  const defaultErrors = { emailError: null, passwordError: null }
  const [errors, setErrors] = useState<{
    emailError: null | string;
    passwordError: null | string;
  }>(defaultErrors);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const {setAlert} = useContext(AlertContext) as AlertContextType

  const handleEmailInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(() => e.target.value);
  };

  const handlePasswordInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(() => e.target.value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const emailError: string | null = validateEmail(email);
    setErrors((prev) => ({ ...prev, emailError }));

    const passwordError = validatePassword(password);
    setErrors((prev) => ({ ...prev, passwordError }));

    if(passwordError || emailError) {
      
      setAlert({message: 'Error occured', type: 'error'})
    } else {
      // reset the input
      setEmail('')
      setPassword('')
      setAlert({message: 'Login successful', type: 'success'})
    }

  };

  return (
    <section className="px-2">
      <Alert />
      <h2 className="text-center text-xl font-bold my-5">Sign in here</h2>
      <form
        noValidate={true}
        onSubmit={handleSubmit}
        className="border-2 p-5 mx-auto rounded-md max-w-lg"
      >
        <div className="flex flex-col gap-4">
          
          <div>
            <label htmlFor="email">Email:</label>
            <input
              onChange={handleEmailInput}
              value={email}
              className="w-full px-2 py-1 my-2  border rounded-sm"
              type="email"
              id="email"
              name="email"
              placeholder="jhonwick@gmail.com"
              autoCorrect="sd"
            />
            {errors.emailError && (
              <p className="text-red-400">{errors.emailError}</p>
            )}
          </div>

          <div>
            <label htmlFor="password">Password:</label>

            <input
              onChange={handlePasswordInput}
              value={password}
              className=" w-full px-2 py-1 my-2 rounded-sm border"
              type="password"
              id="password"
              name="password"
              placeholder="enter your password ..."
            />
            {errors.passwordError && (
              <p className="text-red-400">{errors.passwordError}</p>
            )}
          </div>
        </div>

        <input
          disabled={email.length === 0 || password.length === 0}
          type="submit"
          className="px-5 py-2 mt-5 hover:bg-gray-900/80 hover:cursor-pointer disabled:cursor-not-allowed disabled:bg-gray-500 bg-gray-900 text-white font-semibold text-sm rounded-sm"
        />
      </form>
    </section>
  );
};

export default SignInForm;
