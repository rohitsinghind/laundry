import Image from "next/image";
import Navbar from "@/components/navbar";
import WhatsappBtn from "@/components/whatsappBtn";
import Footer from "@/components/footer";
import PageHeader from "@/components/pageHeader";
import Testimonial from "@/components/testimonial";
import Section from "@/components/section";
import Section2 from "@/components/section2";

const values = [
  {
    icon: "/assets/icons/commitment.png",
    title: "Commitment",
    desc: "We are dedicated to delivering results that exceed expectations and drive success for our clients. From the initial consultation to project completion and beyond, we are committed to providing exceptional service, unparalleled support, and unwavering dedication to achieving your goals. Your success is our priority, and we will stop at nothing to ensure we deliver on our promises.",
  },
  {
    icon: "/assets/icons/quality.png",
    title: "Quality",
    desc: "We take pride in our work and strive for excellence in everything we do. From the smallest detail to the big picture, we maintain the highest standards of quality craftsmanship, innovation, and creativity. We believe that quality is not just a goal to be achieved but a mindset that permeates every aspect of our business. When you choose [Company Name], you can trust that you're getting the best of the best",
  },
  {
    icon: "/assets/icons/integrity.png",
    title: "Integrity",
    desc: "We believe in doing what's right, even when no one is watching. We are transparent, honest, and ethical in all our dealings, and we hold ourselves to the highest standards of integrity and professionalism. Trust is earned through integrity, and we work tirelessly to earn and maintain the trust of our clients, partners, and community. With [Company Name], you can rest assured that you're working with a company that operates with integrity in everything we do.",
  },
];

export const metadata = {
  title: "About Us | [Company Name]",
  description: "Learn more about [Company Name] and our mission to provide innovative web and app development solutions. Discover our team's expertise, values, and commitment to delivering exceptional results that drive your business forward.",
};


export default function Page() {
  return (
    <>
    <Navbar/>
    <WhatsappBtn/>
    <main>
      <PageHeader title={"ABOUT US"} className="about-banner" />
      <Section2
        className="w-full bg-white"
        head="Who We Are???"
        subHead="At [Company Name], we are more than just a team of professionals – we are a community of passionate individuals driven by a shared vision. Founded on the principles of innovation, creativity, and integrity, we strive to make a meaningful impact in the digital world. Our journey began with a simple idea: to empower businesses and individuals with cutting-edge digital solutions. Since then, we've grown and evolved, but our core values have remained the same. We believe in the power of technology to transform lives, and we're committed to leveraging our expertise to drive positive change."
      />
        
    <Section
    className="w-full bg-gray-200"
    head="Our Core Values"
    subHead="our values serve as the foundation of everything we do. They guide our decisions, actions, and interactions with clients, partners, and each other. We believe that by staying true to our values, we can achieve excellence and build long-lasting relationships based on trust and mutual respect.">
        <div className="grid sm:grid-cols-3 grid-cols-1 gap-x-4 gap-y-12 justify-between">
            {
                values?.map((item,i)=>(
                    <div key={i} className="flex flex-col items-center reveal">
            <div className="rounded-full  border-4 border-cyan-400 md:p-6 p-2 w-fit mb-4">
              <Image
                src={item?.icon}
                alt={item?.title}
                width={150}
                height={150}
                className="w-fit rounded"
              />
            </div>
            <h3 className="font-semibold md:text-base text-sm text-center">
              {item?.title}
            </h3>
            <p className="text-center text-sm">
              {item?.desc}
            </p>
          </div>
                ))
            }
        </div>
    </Section> 
      
      
      <Testimonial
        name="Komal Sinha"
        img="/assets/images/clients/komal.jpg"
        designation="Freelancer"
        review="From concept to execution, [Your Company Name] exceeded our expectations every step of the way. Their attention to detail and creativity were evident in every aspect of the project, and the end result speaks for itself. We've received countless compliments on our new website, and it's all thanks to the talented team at [Your Company Name]."
      />
    </main>
    <Footer/>
    </>
  );
}