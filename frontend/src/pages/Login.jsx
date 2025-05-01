import React, { useState } from "react";

const Login = () => {
  const [state, setState] = useState("sign Up");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");

  const onSubmitHandal = async (event) => {
    event.preventDefault();
    // Handle form submission here
  };

  return (
    <form className="min-h-[80vh] flex items-center" onSubmit={onSubmitHandal}>
      <div className="flex flex-col gap-3 m-auto items-start p-8 min-w-[340px] sm:min-w-96 border rounded-xl text-zinc-600 text-sm shadow-lg">
        <p className="text-2xl font-semibold">
          {state === "sign Up" ? "Create Account" : "Login"}
        </p>
        <p>
          Please {state === "sign Up" ? "sign Up" : "log in"} to Book
          appointment
        </p>
        {state === "sign Up" && (
          <div className="w-full">
            <p>Full Name</p>
            <input
              className="border border-zinc-300 rounded w-full p-2 mt-1"
              type="text"
              onChange={(e) => setName(e.target.value)} // Fixed this line
              value={name}
              required
            />
          </div>
        )}

        <div className="w-full">
          <p>Email</p>
          <input
            className="border border-zinc-300 rounded w-full p-2 mt-1"
            type="email" // Changed to type="email" for proper validation
            onChange={(e) => setEmail(e.target.value)} // Fixed this line
            value={email}
            required
          />
        </div>
        <div className="w-full">
          <p>Password</p>
          <input
            className="border border-zinc-300 rounded w-full p-2 mt-1"
            type="password" // Changed to type="password" for security
            onChange={(e) => setPassword(e.target.value)} // Fixed this line
            value={password}
            required
          />
        </div>
        <button
          className="bg-primary text-white w-full py-2 rounded-md text-base"
          type="submit" // Added type="submit" for form submission
        >
          {state === "sign Up" ? "Create Account" : "Login"}
        </button>
        {state === "sign Up" ? (
          <p>
            Already have an account?{" "}
            <span
              className="text-primary underline cursor-pointer"
              onClick={() => setState("Login")}
            >
              Login here
            </span>{" "}
          </p>
        ) : (
          <p>
            Don't have an account?{" "}
            <span
              className="text-primary underline cursor-pointer"
              onClick={() => setState("sign Up")}
            >
              Click here
            </span>
          </p>
        )}
      </div>
    </form>
  );
};

export default Login;
