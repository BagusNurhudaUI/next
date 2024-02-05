"use client";
import { NextPage, GetStaticPaths } from "next";
import Image from "next/image";
import SectionTitle from "../Common/SectionTitle";

import { useState } from "react";
import TagButton from "../Blog/TagButton";
import SharePost from "../Blog/SharePost";
import { Carousel } from "react-responsive-carousel";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "./styles.css";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { faArrowAltCircleRight } from "@fortawesome/free-regular-svg-icons";
import { faCircleArrowRight } from "@fortawesome/free-solid-svg-icons/faCircleArrowRight";
import { faCaretRight } from "@fortawesome/free-solid-svg-icons/faCaretRight";
import { faCaretLeft } from "@fortawesome/free-solid-svg-icons/faCaretLeft";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 4,
    slidesToSlide: 4, // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1024, min: 768 },
    items: 3,
    slidesToSlide: 3, // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 767, min: 464 },
    items: 2,
    slidesToSlide: 1, // optional, default to 1.
  },
};
const sliderImageUrl = [
  //First image url
  {
    url: "https://i2.wp.com/www.geeksaresexy.net/wp-content/uploads/2020/04/movie1.jpg?resize=600%2C892&ssl=1",
  },
  {
    url: "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/best-kids-movies-2020-call-of-the-wild-1579042974.jpg?crop=0.9760858955588091xw:1xh;center,top&resize=480:*",
  },
  //Second image url
  {
    url: "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/best-movies-for-kids-2020-sonic-the-hedgehog-1571173983.jpg?crop=0.9871668311944719xw:1xh;center,top&resize=480:*",
  },
  //Third image url
  {
    url: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQS82ET2bq9oTNwPOL8gqyoLoLfeqJJJWJmKQ&usqp=CAU",
  },

  //Fourth image url

  {
    url: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTdvuww0JDC7nFRxiFL6yFiAxRJgM-1tvJTxA&usqp=CAU",
  },
];
interface Props {}

const checkIcon = (
  <svg width="16" height="13" viewBox="0 0 16 13" className="fill-current">
    <path d="M5.8535 12.6631C5.65824 12.8584 5.34166 12.8584 5.1464 12.6631L0.678505 8.1952C0.483242 7.99994 0.483242 7.68336 0.678505 7.4881L2.32921 5.83739C2.52467 5.64193 2.84166 5.64216 3.03684 5.83791L5.14622 7.95354C5.34147 8.14936 5.65859 8.14952 5.85403 7.95388L13.3797 0.420561C13.575 0.22513 13.8917 0.225051 14.087 0.420383L15.7381 2.07143C15.9333 2.26669 15.9333 2.58327 15.7381 2.77854L5.8535 12.6631Z" />
  </svg>
);

const dataEducation = [
  {
    image: "https://taplink.st/a/e/b/0/7/a7f3e6.png?1",
    title: "Bangkit Academy",
    role: "Could Computing",
    time: "2022",
    caption:
      "Selected as 16th best capstone project colaborated with Kitabisa.com and labeled distinctions graduate",
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
    image: "https://www.dbl.id/uploads/school/64178/102-SMAN_2_KOTA_DEPOK.png",
    title: "SMAN 2 Kota Depok",
    role: "Natural Science",
    time: "2016-2019",
    caption:
      "Actively in organization such OSIS and MPK, Paskibra, Robotic, and Traditions dance",
  },
];

const contentData = [
  {
    title: "Kakak Asuh",
    description:
      "One of the non-governmental organizations dedicated to empowering children's education in rural areas. The branch I joined is the Depok branch, and I officiate as Vice Headmaster.",
  },
  {
    title: "Kakak Asuh",
    description:
      "One of the non-governmental organizations dedicated to empowering children's education in rural areas. The branch I joined is the Depok branch, and I officiate as Vice Headmaster.",
  },
  {
    title: "OSIS",
    description:
      "One of the non-governmental organizations dedicated to empowering children's education in rural areas. The branch I joined is the Depok branch, and I officiate as Vice Headmaster.",
  },
  {
    title: "OSIS",
    description:
      "One of the non-governmental organizations dedicated to empowering children's education in rural areas. The branch I joined is the Depok branch, and I officiate as Vice Headmaster.",
  },
  // Add more content objects for additional indices if needed
];

const AboutMe: NextPage<Props> = ({}) => {
  const [index, setIndex] = useState(0);
  const List = ({ text }: any) => (
    <p className="mb-5 flex items-center text-lg font-medium text-body-color">
      <span className="mr-4 flex h-[30px] w-[30px] items-center justify-center rounded-md bg-primary bg-opacity-10 text-primary">
        {checkIcon}
      </span>
      {text}
    </p>
  );

  return (
    <section id="about" className="pt-6 md:pt-4">
      <div className="container">
        <div className=" md:pb-10 lg:pb-16">
          <div className="-mx-4 flex flex-wrap items-center gap-6 md:gap-0">
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
              <div
                className="wow fadeInUp w-full mb-[44px] mt-[0px] "
                data-wow-delay=".1s"
              >
                <h2 className="mb-4 text-3xl font-bold !leading-tight text-black dark:text-white sm:text-4xl md:text-[45px] text-center md:text-start">
                  Bagus Nurhuda
                </h2>
                <p className="text-base leading-relaxed text-body-color md:text-lg ">
                  A recent graduate from the
                  <span className="text-primary dark:text-white">
                    {" "}
                    University of Indonesia{" "}
                  </span>
                  with a specialization in computer engineering. My academic
                  journey has equipped me with a strong foundation in
                  <span className="text-primary dark:text-white">
                    {" "}
                    both frontend and backend software development
                  </span>
                  , and I'm particularly enthusiastic about exploring the realms
                  of cloud architecture.
                  <br />
                  <br />
                  I'm interested in software development, including frontend and
                  backend. Sometimes I also learn about cloud computing, and I'm
                  ready to be part of several companies. Feel free to contact me
                  here.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-wrap justify-center mb-20 gap-20 lg:gap-0">
          <div className="w-full md:px-6 lg:w-1/2 ">
            <div className="max-w-4/5">
              <h2 className="mb-4 md:mb-8 text-3xl font-bold leading-tight text-black dark:text-white sm:text-4xl sm:leading-tight text-center md:text-start">
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
              <h2 className="mb-4 md:mb-8 text-3xl font-bold leading-tight text-black dark:text-white sm:text-4xl sm:leading-tight text-center md:text-start">
                Organization
              </h2>

              <div className="flex flex-col space-y-6">
                <p className="text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed lg:text-base lg:leading-relaxed xl:text-lg xl:leading-relaxed">
                  Connecting with people is something I truly enjoy. To foster
                  meaningful connections and personal growth, I actively engage
                  with various communities. Here&apos;s a glimpse of some
                  organizations I&apos;ve been a part of:
                </p>
                {/* carousel */}
                <Carousel
                  showArrows={true}
                  autoFocus={true}
                  showStatus={false}
                  showThumbs={false}
                  showIndicators={false}
                  infiniteLoop={true}
                  className="md:mx-20"
                  renderArrowPrev={(onClickHandler, hasPrev, label) =>
                    hasPrev && (
                      <button
                        type="button"
                        onClick={onClickHandler}
                        title={label}
                        style={{
                          left: 15,
                          position: "absolute",
                          zIndex: 2,
                          top: "calc(50% - 15px)",
                          width: 30,
                          height: 30,
                          cursor: "pointer",
                        }}
                      >
                        <FontAwesomeIcon
                          icon={faCaretLeft}
                          style={{
                            width: "30px",
                            height: "30px",
                            color: "white",
                          }}
                        />
                      </button>
                    )
                  }
                  renderArrowNext={(onClickHandler, hasNext, label) =>
                    hasNext && (
                      <button
                        type="button"
                        onClick={onClickHandler}
                        title={label}
                        style={{
                          right: 15,
                          position: "absolute",
                          zIndex: 999,
                          top: "calc(50% - 15px)",
                          width: 30,
                          height: 30,
                          cursor: "pointer",
                        }}
                      >
                        <FontAwesomeIcon
                          icon={faCaretRight}
                          style={{
                            width: "30px",
                            height: "30px",
                            color: "white",
                          }}
                        />
                      </button>
                    )
                  }
                  onChange={(e) => {
                    console.log(e);
                    setIndex(e);
                  }}
                >
                  <div>
                    <img src="/images/about/carousel/kakak-asuh-2.jpg" />
                  </div>
                  <div>
                    <img src="/images/about/carousel/kakak-asuh-1.jpg" />
                  </div>
                  <div>
                    <img src="/images/about/carousel/kakak-asuh-2.jpg" />
                  </div>
                  <div>
                    <img src="/images/about/carousel/kakak-asuh-1.jpg" />
                  </div>
                  <div className="flex justify-center items-center">
                    <video
                      controls
                      width="100%"
                      style={{ alignSelf: "center" }}
                    >
                      <source
                        src="/images/about/carousel/video-kakak-asuh.mp4"
                        type="video/mp4"
                      />
                      Your browser does not support the video tag.
                    </video>
                  </div>
                </Carousel>
                {contentData[index] && (
                  <div>
                    <h2 className="text-base text-xl font-semibold text-center">
                      {contentData[index].title}
                    </h2>
                    {contentData[index].description && (
                      <p className="text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed lg:text-base lg:leading-relaxed xl:text-lg xl:leading-relaxed">
                        {contentData[index].description}
                      </p>
                    )}
                  </div>
                )}
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
