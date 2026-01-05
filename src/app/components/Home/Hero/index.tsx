"use client";

import Image from "next/image";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Link from "next/link";
import { Icon } from "@iconify/react";
import { useTranslation } from "react-i18next";
import { HeroData } from "@/data";

const Hero = () => {
  const { t } = useTranslation();

  const settings = {
    dots: true,
    arrows: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 500,
    cssEase: "linear",
  };

  return (
    <section>
      <div className="overflow-hidden">
        <div className="container relative z-0 pt-0 sm:pt-24">
          <div className="relative z-20 grid lg:grid-cols-12 grid-cols-1 items-center gap-15 lg:gap-30 pb-0 lg:pb-10">
            <div className="lg:col-span-7">
              <div className="flex flex-col lg:items-start items-center gap-12">
                <div className="text-center mb-5 sm:mb-12">
                  <div className="flex justify-center items-center gap-4 mb-8 mt-20">
                    <div className="w-[100px] h-[100px] rounded-full overflow-hidden flex-shrink-0">
                      <Image
                        src="/images/self/me.jpeg"
                        alt="me"
                        width={100}
                        height={100}
                        className="object-cover"
                      />
                    </div>
                    <div className="flex items-center relative">
                      <h3 className="transform rotate-12 font-semibold text-gray-500 inline-block leading-none">
                        {t("hero.who")} <strong>{t("hero.am_i")}</strong>{" "}
                        <span className="transform rotate-90 text-red-500 font-semibold inline-block leading-none ml-2">
                          ?
                        </span>
                      </h3>
                    </div>
                  </div>

                  <Link
                    href="https://www.google.com/maps/place/Armenia"
                    target="_blank"
                  >
                    <p className="text-lg font-semibold underline">
                      📍
                      {t("hero.location")} 🇦🇲
                    </p>
                  </Link>

                  <div className="space-y-2">
                    <p>{t("hero.subtitle1")}</p>
                    <p>{t("hero.subtitle2")}</p>
                    <h3 className="flex justify-center gap-4">
                      <span className="text-blue-500 flex items-center gap-1">
                        <Icon icon="mdi:monitor" width={40} />
                        <strong>{t("hero.web")}</strong>
                      </span>
                      <span className="text-green-500 flex items-center gap-1">
                        <Icon icon="mdi:cellphone" width={40} />
                        <strong>{t("hero.mobile")}</strong>
                      </span>
                    </h3>
                    <p>{t("hero.subtitle3")}</p>
                  </div>
                </div>

                <div className="flex gap-5">
                  <Link href="/#project">
                    <button className="px-8 py-3 bg-primary text-white rounded-lg flex items-center gap-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-5 h-5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M21 21l-4.35-4.35m0 0A7.5 7.5 0 1110.5 3a7.5 7.5 0 016.15 13.65z"
                        />
                      </svg>
                      {t("hero.explore")}
                    </button>
                  </Link>

                  <Link href="/#contact">
                    <button className="px-8 py-3 bg-primary text-white rounded-lg flex items-center gap-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-5 h-5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M2 8.5v7a2 2 0 002 2h16a2 2 0 002-2v-7a2 2 0 00-2-2H4a2 2 0 00-2 2z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M7 12h10M7 16h6"
                        />
                      </svg>
                      {t("hero.contact")}
                    </button>
                  </Link>
                </div>

                <div className="flex gap-4">
                  <Link href="https://t.me/@Ishxan_K" target="_blank">
                    <Icon
                      icon="tabler:brand-telegram"
                      width={45}
                      height={45}
                      className="text-darkblue dark:text-white bg-darkmode/5 dark:bg-white/10 rounded-lg p-2 hover:text-primary dark:hover:text-primary duration-300"
                    />
                  </Link>
                  <Link href="https://github.com/ishxo" target="_blank">
                    <Icon
                      icon="tabler:brand-github"
                      width={45}
                      height={45}
                      className="text-darkblue dark:text-white bg-darkmode/5 dark:bg-white/10 rounded-lg p-2 hover:text-primary dark:hover:text-primary duration-300"
                    />
                  </Link>
                  <Link
                    href="https://www.linkedin.com/in/ishkhan-kostanyan-962b67182/"
                    target="_blank"
                  >
                    <Icon
                      icon="tabler:brand-linkedin-filled"
                      width={45}
                      height={45}
                      className="text-darkblue dark:text-white bg-darkmode/5 dark:bg-white/10 rounded-lg p-2 hover:text-primary dark:hover:text-primary duration-300"
                    />
                  </Link>
                </div>
              </div>
            </div>
            <div className="lg:col-span-5 w-full">
              <div className="relative w-full aspect-[3/2] rounded-lg overflow-hidden">
                <Slider {...settings}>
                  {HeroData.map((item, i) => (
                    <div key={i} className="relative w-full aspect-[16/9]">
                      <Image
                        src={item.imgSrc}
                        alt={`Hero image ${i}`}
                        fill
                        className="object-cover rounded-lg"
                      />
                    </div>
                  ))}
                </Slider>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
