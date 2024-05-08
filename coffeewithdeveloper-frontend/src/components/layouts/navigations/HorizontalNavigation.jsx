import React from "react";


const HorizontalNavigationBar = () => {
    return (
        <>
            <nav class="bg-withe p-4 flex justify-between items-center">

                <div class="flex-grow mx-4">
                    <input type="text" placeholder="Rechercher" class="w-full px-4 py-2 rounded-md border-none bg-gray-200 text-black focus:outline-none" />
                </div>

                <div class="text-white mr-4">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 cursor-pointer" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                    </svg>
                </div>
                <div class="relative">
                    <img src="../../../assets/images/profil.jpg" alt="Profile" class="w-10 h-10 rounded-full cursor-pointer" />
                        <div class="absolute top-full right-0 mt-2 w-48 bg-white border rounded-md shadow-lg hidden">
                            <a href="#" class="block px-4 py-2 text-gray-800 hover:bg-gray-200">Profile</a>
                            <a href="#" class="block px-4 py-2 text-gray-800 hover:bg-gray-200">Settings</a>
                            <a href="#" class="block px-4 py-2 text-gray-800 hover:bg-gray-200">Logout</a>
                        </div>
                </div>      
            </nav>


        </>
    );
}

export default HorizontalNavigationBar;