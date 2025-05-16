import Image from "next/image";
import { assets } from "@/assets/assets";

const About = () => {
  return (
    <div id="about" className="w-full p-[12%] py-10 scroll-mt-20">
      <h4 className="text-center mb-2 text-lg font-Ovo">Introduction</h4>
      <h2 className="text-center text-5xl font-Ovo">About Me</h2>

      <div className="flex w-full flex-col lg:flex-row items-center gap-20 my-20">
        <div className="w-64 sm:w-80 rounded-3xl max-w-none">
          <Image
            src={assets.user_image}
            alt="user-image"
            className="w-full rounded-3xl"
          />
        </div>

        <div className="flex-1">
          <p className="mb-10 max-w-2xl font-Ovo">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Est
            pariatur commodi soluta. Culpa earum officiis atque consectetur.
            Nobis doloremque minus officia dolorum sit iure alias ab velit ea,
            consectetur dolore! Veniam distinctio, officia eius eaque minus
            maiores labore velit cum nihil quam molestiae consequuntur repellat!
            

            <ul>
                
            </ul>
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
