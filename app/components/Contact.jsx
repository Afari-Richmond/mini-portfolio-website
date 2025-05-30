import { assets } from "@/assets/assets";
import Image from "next/image";

const Contact = () => {
  return (
    <div id="contact" className="w-full p-[12%] py-10 scroll-mt-20 ">
      <h4 className="text-center mb-2 text-lg font-Ovo">Connect With Me</h4>
      <h2 className="text-center text-5xl font-Ovo">Get in Touch</h2>

      <p className="text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo">
        I'd love to hear from you! Whether you have a question, want to discuss
        a project, or just want to say hello, feel free to reach out.
      </p>

      <form className="max-w-2xl mx-auto">
        <div className="grid grid-cols-2 gap-6 mt-10 mb-8">
          <input
            type="text"
            placeholder="Enter your Name"
            required
            className="flex-1 p-3 outline-none border-[0.5px]
          border-gray-400 rounded-md bg-white
          "
          />
          <input
            type="email"
            placeholder="Enter your Email"
            required
            className="flex-1 p-3 outline-none border-[0.5px]
          border-gray-400 rounded-md bg-white"
          />
        </div>
        <textarea
          rows="6"
          placeholder="Enter Your Message"
          required
          className="w-full p-4 outline-none border-[0.5px]  border-gray-400 rounded-md bg-white mb-6"
        ></textarea>
        <button
          type="submit"
          className="py-3 px-8 w-max flex items-center justify-between gap-2
           bg-black/80 text-white rounded-full mx-auto hover:bg-black duration-500 cursor-pointer"
        >
          Submit Now <Image src={assets.right_arrow_white} alt="" className="w-4" />
        </button>
      </form>
    </div>
  );
};

export default Contact;
