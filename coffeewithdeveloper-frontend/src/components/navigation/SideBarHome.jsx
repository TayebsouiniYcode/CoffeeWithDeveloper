import React from "react";


const SideBarHome = () => {
    return (
        <>
            <button data-drawer-target="separator-sidebar" data-drawer-toggle="separator-sidebar" aria-controls="separator-sidebar" type="button" class="inline-flex items-center p-2 mt-2 ms-3 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600">
                <span class="sr-only">Open sidebar</span>
                <svg class="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path clip-rule="evenodd" fill-rule="evenodd" d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"></path>
                </svg>
            </button>

            <aside id="separator-sidebar" class="fixed top-0 left-0 z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0" aria-label="Sidebar">
                <div class="h-full px-3 py-4 overflow-y-auto bg-gray-800">
                    <ul class="space-y-2 font-medium">
                        <li>
                            <a href="/dashboard" class="flex items-center p-2 rounded-lg text-white hover:bg-gray-100 hover:text-black dark:hover:bg-gray-700 group">
                                <span class="ms-3">Home</span>
                            </a>
                        </li>
                        <li>
                            <a href="/" class="flex items-center p-2 rounded-lg text-white hover:bg-gray-100 hover:text-black dark:hover:bg-gray-700 group">
                                <span class="flex-1 ms-3 whitespace-nowrap">Trending</span>
                            </a>
                        </li>
                        <li>
                            <a href="/" class="flex items-center p-2 rounded-lg text-white hover:bg-gray-100 hover:text-black dark:hover:bg-gray-700 group">
                                <span class="flex-1 ms-3 whitespace-nowrap">Category</span>
                            </a>
                        </li>
                        <li>
                            <a href="/" class="flex items-center p-2 rounded-lg text-white hover:bg-gray-100 hover:text-black dark:hover:bg-gray-700 group">
                                <span class="flex-1 ms-3 whitespace-nowrap">History</span>
                            </a>
                        </li>

                    </ul>
                    <ul class="space-y-2 font-medium mt-7 mb-7">
                        <span className="text-white">WATCHLIST</span>
                        <li>
                            <a href="/dashboard" class="flex items-center p-2 rounded-lg text-white hover:bg-gray-100 hover:text-black dark:hover:bg-gray-700 group">
                                <span class="ms-3">Add Watchlist</span>
                            </a>
                        </li>
                        <li>
                            <a href="/" class="flex items-center p-2 rounded-lg text-white hover:bg-gray-100 hover:text-black dark:hover:bg-gray-700 group">
                                <span class="flex-1 ms-3 whitespace-nowrap">Java</span>
                            </a>
                        </li>
                        <li>
                            <a href="/" class="flex items-center p-2 rounded-lg text-white hover:bg-gray-100 hover:text-black dark:hover:bg-gray-700 group">
                                <span class="flex-1 ms-3 whitespace-nowrap">Laravel</span>
                            </a>
                        </li>
                        <li>
                            <a href="/" class="flex items-center p-2 rounded-lg text-white hover:bg-gray-100 hover:text-black dark:hover:bg-gray-700 group">
                                <span class="flex-1 ms-3 whitespace-nowrap">PHP</span>
                            </a>
                        </li>

                    </ul>
                </div>
            </aside>
        </>
    );
}

export default SideBarHome;