import Image from "next/image";
import Navbar from "@/components/navbar";
import WhatsappBtn from "@/components/whatsappBtn";
import Footer from "@/components/footer";
import ContactBtn from "@/components/contactBtn";
import Section from "@/components/section";
import Card from "@/components/card";
import Testimonial from "@/components/testimonial";

const features = [{
                    title:"Fully Customizable",
                    desc:"Unleash the full potential of your digital presence with our fully customizable solutions. From layout to functionality, our platform empowers you to shape every detail according to your unique vision.",
                    icon:"/assets/icons/custom.png"
                  },
                  {
                    title:"Responsive Design",
                    desc:"Reach your audience anytime, anywhere with our responsive design expertise. Seamlessly adapt to various screen sizes and devices, ensuring a flawless user experience across desktops, tablets, and smartphones.",
                    icon:"/assets/icons/responsive.png"
                  },
                  {
                    title:"SEO Ready Code",
                    desc:"Climb the search engine ranks with our SEO ready code. Our crafted websites and apps are built with search engine optimization in mind, giving you a foundation to boost visibility and attract organic traffic.",
                    icon:"/assets/icons/seo.png"
                  },]


const achivements = [{
                    title:"100+",
                    desc:"Projects Completed",
                    icon:"/assets/icons/projects.png"
                  },
                  {
                    title:"999+",
                    desc:"Happy Clients",
                    icon:"/assets/icons/happy.png"
                  },
                  {
                    title:"9999+",
                    desc:"Unique Designs",
                    icon:"/assets/icons/design.png"
                  },
                  {
                    title:"24/7",
                    desc:"Fast Support",
                    icon:"/assets/icons/support.png"
                  },]

const services = [{
                    title:"Mobile Apps",
                    desc:"Crafting user-centric applications that captivate audiences and drive engagement. Our team of seasoned developers leverages the latest technologies to bring your app ideas to life, ensuring seamless functionality across various platforms.",
                    img:"/assets/images/app-development2.png",
                    link:"/mobile-apps"
                  },
                  {
                    title:"Website Development",
                    desc:"Whether you're launching a new venture or revamping an existing site, our expert team combines creativity with technical expertise to build websites that not only look great but also perform flawlessly. From responsive design to intuitive navigation.",
                    img:"/assets/images/web-development2.png",
                    link:"website"
                  },
                  {
                    title:"Digital Marketing",
                    desc:"From search engine optimization (SEO) and pay-per-click (PPC) advertising to social media management and content marketing, we utilize the latest techniques to maximize your online visibility, generate leads, and accelerate growth.",
                    img:"/assets/images/digital-marketing2.png",
                    link:"digital-marketing"
                  },]

export const metadata = {
  title: "[Company Name] | Homepage | Web & App Development Solutions | Digital Marketing Services",
  description: "Elevate your online presence with our innovative web and app development solutions and strategic digital marketing services. At [Company Name], we specialize in crafting custom websites and mobile apps that engage users and drive business growth. Explore our services and unleash the full potential of your digital presence today.",
};


export default function Home() {
  return (
  <>
  <Navbar/>
  <WhatsappBtn/>
  <main>
    <section className="home-banner min-h-screen flex items-center justify-center">
          <div className="pt-24 px-2">
            <h1 className="text-white font-bold md:text-4xl text-2xl text-center uppercase">
              Empowering Your Brand&apos;s Online Growth Journey
            </h1>
            <h2 className="text-white font-medium md:text-xl text-lg text-center mt-4 max-w-2xl mx-auto">
                We help businesses grow by creating awesome digital experiences that solve tough challenges with creativity and flexibility.
            </h2>
            <ContactBtn className="flex gap-4 justify-center items-center border-2 border-cyan-400 mt-8 md:px-8 px-4 md:py-4 py-2 rounded-lg bg-black/50 mx-auto max-w-fit shadow-lg delay-50 duration-300 hover:scale-105">
              <h3 className="text-white font-semibold md:text-xl text-base text-center">
                Schedule a Free Estimate
              </h3>
              <div className=" mx-auto bg-cyan-400 border-b-2 rounded-full border-cyan-400 md:p-2 p-1 font-semibold text-lg flex justify-center items-center md:h-12 md:w-12 h-8 w-8">
                <svg
                  fill="#000000"
                  width="30px"
                  height="30px"
                  viewBox="0 0 56 56"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                  <g
                    id="SVGRepo_tracerCarrier"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></g>
                  <g id="SVGRepo_iconCarrier">
                    <path d="M 27.9999 51.9063 C 41.0546 51.9063 51.9063 41.0781 51.9063 28 C 51.9063 14.9453 41.0312 4.0937 27.9765 4.0937 C 14.8983 4.0937 4.0937 14.9453 4.0937 28 C 4.0937 41.0781 14.9218 51.9063 27.9999 51.9063 Z M 23.7109 37.0469 C 22.6327 37.7031 21.4140 37.1875 21.4140 36.0625 L 21.4140 19.9375 C 21.4140 18.8594 22.7030 18.3906 23.7109 18.9766 L 36.8827 26.7812 C 37.8436 27.3437 37.8671 28.6797 36.8827 29.2656 Z"></path>
                  </g>
                </svg>
              </div>
            </ContactBtn>
          </div>
        </section>

        <Section className="w-full" head="Discover the Magic of Our Amazing Features" subHead="From seamless integration to cutting-edge technology, each feature is crafted to elevate your journey and exceed your expectations">
          <div className="grid md:grid-cols-3 sm:grid-cols-2 gap-4 w-full justify-center">
            {
              features?.map((item,i)=>(
                <div key={i} className="flex flex-col items-center p-2 reveal">
                    <div className="p-2 rounded-lg bg-cyan-400 mb-4">
                      <Image alt={item?.title} src={item?.icon} width={80} height={80} className=""/>
                    </div>
                    <h2 className="font-semibold text-center md:text-lg text-sm mb-2">{item?.title}</h2>
                    <p className="text-center text-sm mb-4">{item?.desc}</p>
                </div>
              ))
            }
          </div>
        </Section>

        <section className="banner2">
        <div className="max-w-5xl mx-auto py-12 text-gray-100 px-2 reveal">
          <div className="grid sm:grid-cols-4 grid-cols-2 gap-4">
          {
              achivements?.map((item,i)=>(
                <div key={i} className="flex flex-col items-center p-2 reveal">
                      <Image alt={item?.title} src={item?.icon} width={50} height={50} className="mb-6"/>
                    <h2 className="font-semibold text-center md:text-3xl text-sm mb-2">{item?.title}</h2>
                    <p className="text-center text-sm italic">{item?.desc}</p>
                </div>
              ))
            }
          </div>
        </div>
        </section>

        <Section className="w-full" head="AMAZING SERVICES" subHead="Take your online presence to new heights with our comprehensive suite of solutions.">
            <div className="w-full flex justify-center floating">
            <Image src='/assets/images/background3.png' alt="responsive devices" width={700} height={200} className=""/>
            </div>
        </Section>

        <Section className="w-full bg-gray-100 reveal" head="ONE-STOP SOLUTIONS FOR ALL YOUR NEEDS" subHead="At [Company Name], we're dedicated to providing you with top-notch solutions tailored to elevate your online presence.">
          <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4 w-full justify-center">
            {
              services?.map((item,i)=>(
                <Card key={i} title={item?.title} desc={item?.desc} link={item?.link} img={item?.img}/>
              ))
            }
          </div>
        </Section>

        <Testimonial name="Jay Pathak" img="/assets/images/clients/jay.jpeg" designation="Wify Technologies" review="I've had the pleasure of working with [Company Name] on multiple projects, and they never disappoint. Their professionalism, expertise, and commitment to customer satisfaction are unmatched. Whether it's web development, digital marketing, or content creation, I know I can always count on them to deliver exceptional results."/>

  </main>
  <Footer/>
  </>
  );
}