import React from "react";

const Services = () => {
  const Services = [
    {
      title: "Web Development",
      description:
        "I will help you to create your professional landing page, ecommerce, portofolio ",
    },
    {
      title: "Web Design",
      description: "I will help you to design your your dream website",
    },

    ,
  ];

  return (
    <div className="container text-text py-20">
      <h2 className="title">Services</h2>
      <div className="flex flex-wrap  gap-4">
        {Services.map((service, index) => (
          <div className="border-text cursor-pointer title-stroke group min-w-[270px] flex-1 border rounded-lg py-5 px-4">
            <h3 className=" text-5xl font-bold mb-2 text-[transparent]">
              0{index + 1}
            </h3>
            <h4 className="text-2xl mb-3  font-bold">{service.title}</h4>
            <p className="text-[17.5]px">{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
