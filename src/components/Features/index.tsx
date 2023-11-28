import SectionTitle from "../Common/SectionTitle";
import SingleFeature from "./SingleFeature";
import featuresData from "./featuresData";

const Features = () => {
  return (
    <>
      <section id="features" className="pt-16 md:pt-20 lg:pt-28">
        <div className="container">
          <SectionTitle
            title="My Skills"
            paragraph="As a devoted professional, my proficiency extends across a spectrum of skills and encompasses diverse experiences, enabling me to excel in both skillful execution and project management."
            divClass="wow fadeInUp w-full max-w-[570px] mb-[50px] mt-[0px] mx-auto text-center"
            h2Class="mb-4 text-3xl font-bold !leading-tight text-black dark:text-white sm:text-4xl md:text-[45px]"
            pClass="text-base !leading-relaxed text-body-color md:text-lg"
          />

          <div className="grid grid-cols-1 gap-x-8 gap-y-8 md:gap-y-14 md:grid-cols-2 lg:grid-cols-3">
            {featuresData.map((feature) => (
              <SingleFeature key={feature.id} feature={feature} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Features;
