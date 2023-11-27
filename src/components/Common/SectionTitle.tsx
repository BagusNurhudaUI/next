const SectionTitle = ({
  title,
  paragraph,
  divClass = "wow fadeInUp w-full max-w-[570px] mb-[100px] mt-[0px] ",
  h2Class = "mb-4 text-3xl font-bold !leading-tight text-black dark:text-white sm:text-4xl md:text-[45px]",
  pClass = "text-base !leading-relaxed text-body-color md:text-lg",
}: {
  title: string;
  paragraph: string;
  divClass?: string;
  h2Class?: string;
  pClass?: string;
}) => {
  return (
    <>
      {/* mx-auto text-center */}
      <div className={`${divClass}`} data-wow-delay=".1s">
        <h2 className={`${h2Class}`}>{title}</h2>
        <p
          className={`${pClass}`}
          dangerouslySetInnerHTML={{ __html: paragraph }}
        ></p>
      </div>
    </>
  );
};

export default SectionTitle;
