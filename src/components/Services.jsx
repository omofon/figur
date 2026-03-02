import React from "react";

const Services = () => {
  return (
    <section className="container-padding flex flex-col mb-16 md:mb-20">
      <h2 className="text-center text-2xl font-extrabold px-10 mb-14">
        Transforming the way people pay, work, play and live
      </h2>

      {/* SERVICES LAYOUT */}
      <div
        role="services-container"
        className="flex flex-wrap gap-6 items-stretch"
      >
        {/* Service 1: Virtual Dollar Card */}
        <div className="w-full relative overflow-hidden bg-[#F1E8FF] border border-[#EFE7FF] rounded-3xl flex flex-col lg:flex-row group">
          <div className="flex flex-col gap-3 px-8 lg:px-12 py-16">
            <div className="flex flex-col gap-3 transition-sleek">
              <span className="text-xs font-semibold text-primary-navy">
                Virtual Dollar Card
              </span>
              <h3 className="text-3xl md:text-4xl font-extrabold text-primary-navy leading-tight">
                Shop locally & Pay globally with Figur USD Card
              </h3>
            </div>
            <button className="service-button">Create a Card</button>
          </div>
          <div className="w-full h-full overflow-hidden self-center flex justify-center">
            <img
              src="/images/debit-cards.png"
              alt="Hand holding card"
              className="object-cover"
            />
          </div>
        </div>

        {/* Service 2A: Mobile Dashboard Image */}
        <div className="w-full lg:flex-1 rounded-3xl relative overflow-hidden bg-[#ff9012] border border-[#F28911] flex items-end justify-center min-h-75">
          <img
            src="/images/mobile-app-dashoard.png"
            alt="Mobile dashboard"
            className="w-full h-auto object-contain object-bottom"
          />
        </div>

        {/* Service 2B: Airtime to Cash */}
        <div className="w-full lg:flex-[2_2_0%] bg-[#FFF9ED] border border-[#DAEFF0] rounded-3xl flex flex-col justify-center gap-3 px-8 lg:px-12 py-16 group">
          <div className="flex flex-col gap-3 transition-sleek">
            <span className="text-xs font-semibold text-primary-navy">
              Airtime to Cash
            </span>
            <h3 className="text-3xl md:text-4xl font-extrabold text-primary-navy leading-tight">
              Convert your excess Airtime to Cash Instantly! 😊
            </h3>
          </div>
          <button className="service-button">Convert Airtime to Cash</button>
        </div>

        {/* Service 3: Gift Card */}
        <div className="w-full relative overflow-hidden bg-[#E4F4F5] border border-[#DAEFF0] rounded-3xl flex flex-col lg:flex-row group">
          <div className="flex flex-col gap-3 px-8 lg:px-12 py-16 lg:w-1/2">
            <div className="flex flex-col gap-3 transition-sleek">
              <span className="text-xs font-semibold text-primary-navy">
                Gift Card
              </span>
              <h3 className="text-3xl md:text-4xl font-extrabold text-primary-navy leading-tight">
                Purchase over 5,000+ gift cards at the best rates.
              </h3>
            </div>
            <button className="service-button">Purchase Gift Card</button>
          </div>
          <div className="w-full lg:w-1/2 flex justify-end items-end">
            <img
              src="/images/get-gift-card-on-figur.svg"
              alt="Gift cards"
              className="w-full h-auto object-bottom-right"
            />
          </div>
        </div>

        {/* Service 4A: Pay Bills */}
        <div className="w-full lg:flex-[2_2_0%] bg-[#E4F4F5] border border-[#DAEFF0] rounded-3xl flex flex-col justify-center gap-3 px-8 lg:px-12 py-16 group">
          <div className="flex flex-col gap-3 transition-sleek">
            <span className="text-xs font-semibold text-primary-navy">
              Pay Bills
            </span>
            <h3 className="text-3xl md:text-4xl font-extrabold text-primary-navy leading-tight">
              Buy Cheap Data, Electricity, TV, Airtime & more
            </h3>
          </div>
          <button className="service-button">Get Started</button>
        </div>

        {/* Service 4B: Woman with Phone Image */}
        <div className="w-full lg:flex-1 rounded-3xl relative overflow-hidden bg-[#41BBCC] border border-[#3EAFBF] flex items-end justify-center min-h-[300px]">
          <img
            src="/images/woman-with-phone.png"
            alt="Woman using phone"
            className="w-full h-auto object-contain object-bottom"
          />
        </div>
      </div>
    </section>
  );
};

export default Services;
