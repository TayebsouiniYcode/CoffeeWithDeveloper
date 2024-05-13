import React from "react";
import { useState, useContext } from "react";
import axios from "axios";


export default function Login() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const API = axios.create({
        baseURL: "http://localhost:8080",
      });

    const loginHandler = async (e) => {
        e.preventDefault();

        try {
            const res = await API.post("/auth/login", {
              email,
              password,
            }).then((res) => {
              if (res?.data.accessToken) {
                console.log("token is : " + res.data.accessToken);
                // const role = res?.data.role;
                // setAuth({ role: `${role}`, name: `${name}` });
                // setName("");
                // setPassword("");
                // navigate(from, { replace: true });
              } else {
                console.log("incorrect submission");
                //setError(res.message);
              }
            });
          } catch (err) {
            if (!err?.response) {
                console.log("error");
              //setError("no server response");
            } else {
                console.log("Error 1");
              //setError("registeration failed");
            }
          }
    }

    return (
        <div className="bg-gray-200 flex justify-center items-center h-screen">
            <div className="bg-white p-8 rounded-lg shadow-md w-80">
                <h2 className="text-2xl font-semibold mb-4">Login</h2>
                    <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-700">Email</label>
                        <input 
                            value={email} 
                            type="email" 
                            id="email" 
                            name="email" 
                            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                            onChange={(ev) => setEmail(ev.target.value)}
                            />
                    </div>
                    <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-700">Password</label>
                        <input 
                            value={password}
                            type="password" 
                            id="password"
                            name="password" 
                            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                            onChange={(ev) => setPassword(ev.target.value)}
                            />
                    </div>
                    <div className="flex items-center justify-between">
                        <button onClick={loginHandler} className="bg-indigo-500 text-white px-4 py-2 rounded-md hover:bg-indigo-600 focus:outline-none focus:bg-indigo-600">Login</button>
                    </div>
                    <div className="flex items-center justify-between">
                        <a href="/forgot" className="text-sm text-indigo-500 hover:text-indigo-600">Forgot Password?</a>
                    </div>
            </div>
        </div>
    );
}