"use client"
import { useState } from "react"
//import { toast } from "react-hot-toast";
import axios from "axios";
import Section from "./section";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {

    const [isLoading, setIsLoading] = useState(false);

    const [formData, setFormData] = useState({
      name: "",
      email:"",
      country: "",
      phone: "",
      message: "",
    });
  
    const handleOnChange = (e) => {
      e.preventDefault();
      setFormData({ ...formData, [e.target.id]: e.target.value });
    };
  
    const handleOnSubmit = async () => {
      try {
        setIsLoading(true);
        if (formData?.name && formData?.phone && formData?.email) {
          const response = await axios.post("/api/user",formData)
         // toast.success(response?.data?.message);
        } else {
         // toast.error("Missing Required Field");
        }
      } catch (error) {
       // toast.error(error.message);
      } finally {
        setIsLoading(false);
      }
    };


  return (
    <footer>
       <Section className="w-full bg-gray-700 text-gray-200" head="GET IN TOUCH" subHead="Fill out the form below to send us a message directly. Look forward to hearing from you!">
        <form action="" method="post" className="max-w-xl mx-auto">
            <div className="grid grid-cols-2 gap-2 mb-2">
        <input
            type="text"
            id="name"
            name="name"
            required
            placeholder="Name"
            className="bg-transparent border-0 ring-1 ring-inset ring-gray-500 text-base placeholder:text-gray-300 focus:placeholder:text-gray-200 focus:ring-cyan-400 text-gray-100 rounded-lg p-2 w-full"
            value={formData?.firstName}
            onChange={handleOnChange}
          />
          <input
            type="text"
            id="email"
            name="email"
            required
            placeholder="Email"
            className="bg-transparent border-0 ring-1 ring-inset ring-gray-500 text-base placeholder:text-gray-300 focus:placeholder:text-gray-200 focus:ring-cyan-400 text-gray-100 rounded-lg p-2 w-full"
            value={formData?.email}
            onChange={handleOnChange}
          />
          <input
            type="text"
            id="country"
            name="country"
            required
            placeholder="Country"
            className="bg-transparent border-0 ring-1 ring-inset ring-gray-500 text-base placeholder:text-gray-300 focus:placeholder:text-gray-200 focus:ring-cyan-400 text-gray-100 rounded-lg p-2 w-full"
            value={formData?.country}
            onChange={handleOnChange}
          />
          <input
            type="number"
            name="phone"
            id="phone"
            required
            placeholder="Phone No."
            className="bg-transparent border-0 ring-1 ring-inset ring-gray-500 text-base placeholder:text-gray-300 focus:placeholder:text-gray-200 focus:ring-cyan-400 text-gray-100 rounded-lg p-2 w-full"
            value={formData?.phone}
            onChange={handleOnChange}
          />
          </div>
          <textarea
            name="message"
            placeholder="Message (Optional)"
            id="message"
            rows="5"
            className="bg-transparent border-0 ring-1 ring-inset ring-gray-500 text-base placeholder:text-gray-300 focus:placeholder:text-gray-200 focus:ring-cyan-400 text-gray-100 rounded-lg p-2 w-full mb-4"
            value={formData?.project}
            onChange={handleOnChange}
          />
          <button
            disabled={isLoading}
            className={`w-fit mx-auto ${
              isLoading ? "bg-gray-400" : "bg-cyan-400 hover:bg-transparent hover:text-cyan-400"
            } w-fit mx-auto border rounded border-cyan-400 py-2.5 px-6 font-semibold md:text-base text-sm flex justify-center items-center gap-2 text-white delay-50 duration-300`}
            onClick={handleOnSubmit}
          >
            {isLoading ? "PLEASE WAIT.." : "SEND MESSAGE"}
          </button>
        </form>
        </Section> 
        <div className="w-full bg-gray-900 text-gray-400 text-sm px-2 py-8 flex flex-col justify-center items-center">
            <Link href='/' className="">
                <h1 className="text-white">Logo</h1>
            </Link>
            <p className="">Copyright © 2024. Designed & Developed with ❤️</p>
            <div className="flex mt-4 justify-center items-center w-full gap-2">
                <a href="/" target="_blank" rel="noopener noreferrer" className="border border-gray-400 p-1.5 rounded-full hover:border-white hover:scale-105 duration-300 delay-50">
                    <Image
                        src={"/assets/icons/linkedin.png"}
                        alt="instagram icon"
                        width={25}
                        height={25}
                    />
                </a>
                <a href="/" target="_blank" rel="noopener noreferrer" className="border border-gray-400 p-1.5 rounded-full hover:border-white hover:scale-105 duration-300 delay-50">
                    <Image
                        src={"/assets/icons/twitter.png"}
                        alt="twitter icon"
                        width={25}
                        height={25}
                    />
                </a>
                <a href="/" target="_blank" rel="noopener noreferrer" className="border border-gray-400 hover:border-white p-1.5 rounded-full hover:scale-105 duration-300 delay-50">
                    <Image
                        src={"/assets/icons/email.png"}
                        alt="email icon"
                        width={25}
                        height={25}
                    />
                </a>
            </div>
        </div>
    </footer>
  )
}