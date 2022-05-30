import React from "react";
import Panner from '../images/banner.jpg'
import './News.css';

export function News() {
    return (


        <div className="w-full relative pt-12">

            <div id="top" className="text-center bg-red-600 p-1 ">
                <a className="">Xem thêm tin tức</a>
            </div>

            <div id="mid" className="relative">
                <section className="bg-black py-24 px-4 ">
                    <div className="z-20 relative text-white container mx-auto">
                        <div class="flex justify-around pl-24 pr-24">
                            <div class="rounded-lg shadow-lg bg-white max-w-sm h-96 w-72">
                                <a href="#!">
                                    <img class="rounded-t-lg" src="https://soict.hust.edu.vn/wp-content/uploads/Khai-Truong-EdTech.jpg" alt="" />
                                </a>
                                <div class="p-6">
                                    <h5 class="text-gray-900 text-xl font-medium mb-2">Card title</h5>
                                    <p class="text-gray-700 text-base mb-4">
                                        Some quick example text to build on the card title and make up the bulk of the card's
                                        content.
                                    </p>
                                    <button type="button" class=" inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">Button</button>
                                </div>
                            </div>
                            <div class="rounded-lg shadow-lg bg-white max-w-sm h-96 w-72 ">
                                <a href="#!">
                                    <img class="rounded-t-lg" src="https://soict.hust.edu.vn/wp-content/uploads/STUDENT-CREATIVE-IDEAS-CHALLENGE-2022.jpg" alt="" />
                                </a>
                                <div class="p-6">
                                    <h5 class="text-gray-900 text-xl font-medium mb-2">Card title</h5>
                                    <p class="text-gray-700 text-base mb-4">
                                        Some quick example text to build on the card title and make up the bulk of the card's
                                        content.
                                    </p>
                                    <button type="button" class=" inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">Button</button>
                                </div>
                            </div>
                            <div class="rounded-lg shadow-lg bg-white max-w-sm h-96 w-72">
                                <a href="#!">
                                    <img class="rounded-t-lg" src="https://soict.hust.edu.vn/wp-content/uploads/STUDENT-CREATIVE-IDEAS-CHALLENGE-2022.jpg" alt="" />
                                </a>
                                <div class="p-6">
                                    <h5 class="text-gray-900 text-xl font-medium mb-2">Card title</h5>
                                    <p class="text-gray-700 text-base mb-4">
                                        Some quick example text to build on the card title and make up the bulk of the card's
                                        content.
                                    </p>
                                    <button type="button" class=" inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">Button</button>
                                </div>
                            </div>
                            <div class="rounded-lg shadow-lg bg-white max-w-sm h-96 w-72">
                                <a href="#!">
                                    <img class="rounded-t-lg" src="https://soict.hust.edu.vn/wp-content/uploads/IMG_1651507570048_1651507626090-5.jpg" alt="" />
                                </a>
                                <div class="p-6">
                                    <h5 class="text-gray-900 text-xl font-medium mb-2">Card title</h5>
                                    <p class="text-gray-700 text-base mb-4">
                                        Some quick example text to build on the card title and make up the bulk of the card's
                                        content.
                                    </p>
                                    <button type="button" class=" inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">Button</button>
                                </div>
                            </div>
                        </div>
                        
                         
                    </div>
                    <div className="absolute inset-0 h-auto z-10">
                        <img src={Panner} alt="" className="h-full w-full object-fit-cover" />
                    </div>
                </section>

            </div>

            <div id="top" className="text-center bg-red-600 p-1">
                <a className="">Xem thêm sự kiện</a>
            </div>



        </div>

    )
}