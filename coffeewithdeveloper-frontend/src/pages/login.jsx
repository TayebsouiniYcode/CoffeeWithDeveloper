import React from "react";

export default function Login () {
    return <div className="">
        <div className="flex h-screen items-center justify-center bg-gray-100">
        <div className="content w-6/12 p-20">
            <h2 className="text-4xl text-slate-950 font-bold mb-5">Coffee With Developer</h2>
            <p className="text-justify mb-4">
                Join Coffee With Developer for dynamic developer streams with interactive participant engagement. Elevate your coding experience with our platform's vibrant community interaction.
            </p>
            <div className="search">
                <form action="" className="flex">
                    <input 
                        type="text" 
                        name="search-developer" 
                        id="search-developer" 
                        placeholder="Search Developer" 
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 mr-3"
                        />
                    <input type="submit" value="Search" 
                        className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"/>
                </form>
            </div>
        </div>
        <div className="form-login w-6/12 p-20 flex items-center flex-col gap-10">
            <h2 className="text-center font-bold text-4xl">Login</h2>
            <form action="" className="flex flex-col w-full items-center">
                <div className="mb-7 w-1/2">
                    <input className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" type="text" name="username" id="username" placeholder="username or email"/>
                </div>
                <div className="mb-2 w-1/2">
                    <input className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" type="password" name="password" id="password" placeholder="password" />  
                </div>
                <div>
                    <input type="checkbox" name="remember" id="remamber" className="mr-4 " /> 
                    <label htmlFor="remamber">Remember me</label>
                    <a href="/forgot-password">Forgot password !</a>
                </div>
                <div className="mt-10 w-1/2">
                    <div className="w-full">
                        <input type="submit" value="Login" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800 w-full"/>   
                    </div>
                    <div>
                        <span>New User? <a href="/register">Sign up</a></span>
                    </div>
                </div>
            </form>
        </div>
        </div>
    </div>
}