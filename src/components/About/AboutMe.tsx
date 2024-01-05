import { NextPage, GetStaticPaths } from "next";
import Image from "next/image";
import SectionTitle from "../Common/SectionTitle";
import { FaUser } from "react-icons/fa6";
import TagButton from "../Blog/TagButton";
import SharePost from "../Blog/SharePost";
interface Props {}

const checkIcon = (
  <svg width="16" height="13" viewBox="0 0 16 13" className="fill-current">
    <path d="M5.8535 12.6631C5.65824 12.8584 5.34166 12.8584 5.1464 12.6631L0.678505 8.1952C0.483242 7.99994 0.483242 7.68336 0.678505 7.4881L2.32921 5.83739C2.52467 5.64193 2.84166 5.64216 3.03684 5.83791L5.14622 7.95354C5.34147 8.14936 5.65859 8.14952 5.85403 7.95388L13.3797 0.420561C13.575 0.22513 13.8917 0.225051 14.087 0.420383L15.7381 2.07143C15.9333 2.26669 15.9333 2.58327 15.7381 2.77854L5.8535 12.6631Z" />
  </svg>
);

const dataEducation = [
  {
    image: "https://www.dbl.id/uploads/school/64178/102-SMAN_2_KOTA_DEPOK.png",
    title: "SMAN 2 Kota Depok",
    role: "Natural Science",
    time: "2016-2019",
    caption:
      "Actively in organization such OSIS and MPK, Paskibra, Robotic, and Traditions dance",
  },
  {
    image:
      "https://upload.wikimedia.org/wikipedia/id/thumb/0/0f/Makara_of_Universitas_Indonesia.svg/1200px-Makara_of_Universitas_Indonesia.svg.png",
    title: "Universitas Indonesia",
    role: "Computer Engineering",
    time: "2019-2023",
    caption: "Actively in Electical Council, Private projects",
  },
  {
    image: "https://taplink.st/a/e/b/0/7/a7f3e6.png?1",
    title: "Bangkit Academy",
    role: "Could Computing",
    time: "2022",
    caption:
      "Selected as 16th best capstone project colaborated with Kitabisa.com and distinction graduates",
  },
];

const AboutMe: NextPage<Props> = ({}) => {
  const List = ({ text }: any) => (
    <p className="mb-5 flex items-center text-lg font-medium text-body-color">
      <span className="mr-4 flex h-[30px] w-[30px] items-center justify-center rounded-md bg-primary bg-opacity-10 text-primary">
        {checkIcon}
      </span>
      {text}
    </p>
  );

  return (
    <section id="about" className="pt-4">
      <div className="container">
        <div className=" md:pb-10 lg:pb-16">
          <div className="-mx-4 flex flex-wrap items-center gap-4 md:gap-0">
            <div className="w-full px-4 md:w-2/5">
              <div
                className="wow fadeInUp relative mx-auto aspect-[25/24] flex items-center justify-center w-[200px] lg:w-[300px] m-auto "
                data-wow-delay=".2s"
              >
                <Image
                  src="/images/about/about.jpg"
                  alt="about-image"
                  className="drop-shadow-three dark:drop-shadow-none rounded-full "
                  fill
                />
              </div>
            </div>
            <div className="w-full px-4 md:w-3/5">
              <SectionTitle
                title="Bagus Nurhuda"
                paragraph={`A recent graduate from the 
                <span class="text-primary dark:text-white">University of Indonesia</span> 
                with a specialization in computer engineering. My academic journey has equipped me with a strong foundation in 
                <span class="text-primary dark:text-white">both frontend and backend software development</span>
                , and I'm particularly enthusiastic about exploring the realms of cloud architecture.
                <br><br> 
                
                I'm interested in software development, including frontend and backend. Sometimes I also learn about cloud computing, and I'm ready to be part of several companies. Feel free to contact me here.`}
                divClass="wow fadeInUp w-full mb-[44px] mt-[0px] "
                h2Class="mb-4 text-3xl font-bold !leading-tight text-black dark:text-white sm:text-4xl md:text-[45px]"
                pClass="text-base !leading-relaxed text-body-color md:text-lg"
              />

              {/* <div className="wow fadeInUp mb-12 lg:mb-0" data-wow-delay=".15s">
                <div className="mx-[-12px] flex flex-wrap">
                  <div className="w-full px-3 sm:w-1/2 lg:w-full xl:w-1/2">
                    <List text="Premium quality" />
                    <List text="Tailwind CSS" />
                    <List text="Use for lifetime" />
                  </div>

                  <div className="w-full px-3 sm:w-1/2 lg:w-full xl:w-1/2">
                    <List text="Next.js" />
                    <List text="Rich documentation" />
                    <List text="Developer friendly" />
                  </div>
                </div>
              </div> */}
            </div>
          </div>
        </div>

        <div className="flex flex-wrap justify-center mb-20 gap-20 lg:gap-0">
          <div className="w-full md:px-6 lg:w-1/2 ">
            <div className="max-w-4/5">
              <h2 className="mb-8 text-3xl font-bold leading-tight text-black dark:text-white sm:text-4xl sm:leading-tight">
                Education
              </h2>
              <div className="flex flex-col space-y-6">
                <p className="text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed lg:text-base lg:leading-relaxed xl:text-lg xl:leading-relaxed">
                  See all my education journey
                </p>
                <div className="flex flex-col gap-10">
                  {dataEducation.map((data, index) => (
                    <div className="article flex " key={index}>
                      <div className="relative mr-6">
                        <div
                          className="relative w-[80px] h-[80px] rounded-full z-10
                      "
                        >
                          <Image
                            alt=""
                            src={data.image}
                            fill
                            className="object-cover w-full h-full rounded-full drop-shadow-three dark:drop-shadow-none"
                          />
                        </div>
                        <div
                          style={{
                            // zIndex: 1,
                            width: "1px",
                            height: "100%",
                            backgroundColor: "white",
                            position: "absolute",
                            top: "20%",
                            bottom: "0%",
                            left: "50%",
                            right: "0%",
                          }}
                        ></div>
                      </div>
                      <div className="riwayat-element">
                        <div className="max-width-250">
                          <h2 className="text-xl font-bold">{data.title}</h2>
                          <div className="text-lg   ">{data.role}</div>
                          <div className="text-base mb-1 font-thin">
                            {data.time}
                          </div>
                          <p className="text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed lg:text-base lg:leading-relaxed xl:text-lg xl:leading-relaxed">
                            {data.caption}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* <div className="flex flex-col space-y-6">
                <p className="text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed lg:text-base lg:leading-relaxed xl:text-lg xl:leading-relaxed">
                  I started my Journey
                </p>
                <p className="mb-8 text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed lg:text-base lg:leading-relaxed xl:text-lg xl:leading-relaxed">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Quis enim lobortis scelerisque fermentum. Neque sodales ut
                  etiam sit amet. Ligula ullamcorper
                  <strong className="text-primary dark:text-white">
                    malesuada
                  </strong>
                  proin libero nunc consequat interdum varius. Quam pellentesque
                  nec nam aliquam sem et tortor consequat. Pellentesque
                  adipiscing commodo elit at imperdiet.
                </p>
                <p className="mb-10 text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed lg:text-base lg:leading-relaxed xl:text-lg xl:leading-relaxed">
                  Semper auctor neque vitae tempus quam pellentesque nec.
                  <span className="text-primary underline dark:text-white">
                    Amet dictum sit amet justo
                  </span>
                  donec enim diam. Varius sit amet mattis vulputate enim nulla
                  aliquet porttitor. Odio pellentesque diam volutpat commodo
                  sed.
                </p>
                <h4 className="font-xl mt-20 font-bold leading-tight text-black dark:text-white sm:text-2xl sm:leading-tight lg:text-xl lg:leading-tight xl:text-2xl xl:leading-tight">
                  Digital marketplace for Ui/Ux designers.
                </h4>
                <p className="mb-10 text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed lg:text-base lg:leading-relaxed xl:text-lg xl:leading-relaxed">
                  consectetur adipiscing elit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  mattis vulputate cupidatat.
                </p>
                <ul className="mb-10 list-inside list-disc text-body-color">
                  <li className="mb-2 text-base font-medium text-body-color sm:text-lg lg:text-base xl:text-lg">
                    Consectetur adipiscing elit in voluptate velit.
                  </li>
                  <li className="mb-2 text-base font-medium text-body-color sm:text-lg lg:text-base xl:text-lg">
                    Mattis vulputate cupidatat.
                  </li>
                  <li className="mb-2 text-base font-medium text-body-color sm:text-lg lg:text-base xl:text-lg">
                    Vulputate enim nulla aliquet porttitor odio pellentesque
                  </li>
                  <li className="mb-2 text-base font-medium text-body-color sm:text-lg lg:text-base xl:text-lg">
                    Ligula ullamcorper malesuada proin
                  </li>
                </ul>

                <p className="mb-10 text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed lg:text-base lg:leading-relaxed xl:text-lg xl:leading-relaxed">
                  consectetur adipiscing elit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  mattis vulputate cupidatat.
                </p>
              </div> */}
            </div>
          </div>

          <div className="w-full md:px-6 lg:w-1/2 ">
            <div className="max-w-4/5">
              <h2 className="mb-8 text-3xl font-bold leading-tight text-black dark:text-white sm:text-4xl sm:leading-tight">
                Organization
              </h2>

              <div className="flex flex-col space-y-6">
                <p className="text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed lg:text-base lg:leading-relaxed xl:text-lg xl:leading-relaxed">
                  Connecting with people is something I truly enjoy. To foster
                  meaningful connections and personal growth, I actively engage
                  with various communities. Here&apos;s a glimpse of some
                  organizations I&apos;ve been a part of:
                </p>
                <ul className="mb-10 list-inside list-disc text-body-color">
                  <li className="mb-2 text-base font-medium text-body-color sm:text-lg lg:text-base xl:text-lg">
                    Student Council (OSIS)
                  </li>
                  <li className="mb-2 text-base font-medium text-body-color sm:text-lg lg:text-base xl:text-lg">
                    Kakak Asuh
                  </li>
                  <li className="mb-2 text-base font-medium text-body-color sm:text-lg lg:text-base xl:text-lg">
                    Electrical Engineering Student Association (Ikatan Mahasiswa
                    Elektro)
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [],
    fallback: false,
  };
};

export default AboutMe;
