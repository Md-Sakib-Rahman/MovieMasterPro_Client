import React, { useEffect, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import axiosInstance from "../Axios/Axios";
const SliderComp = () => {
  const [recent, setRecent] = useState([]);
  useEffect(() => {
    const fetchlatest = async () => {
      try {
        const response = await axiosInstance.get("/movies?sort=latest");
        console.log("from sliders; loaded data", response.data);
        setRecent(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchlatest();
  }, []);
  return (
    <Swiper
      spaceBetween={30}
      centeredSlides={true}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      pagination={{
        clickable: true,
      }}
      navigation={false}
      modules={[Autoplay, Pagination, Navigation]}
      className="mySwiper"
    >
      {recent.map((data) => {
        return (
          <>
            <SwiperSlide key={data._id} className="relative">
              <img
                src={data.posterUrl}
                className="w-full h-[90vh] object-center max-md:object-top object-contain "
                alt=""
              />
              <div className="
              absolute bottom-0  
              bg-linear-to-t from-base-100 to-transparent w-full h-1/2 max-md:h-2/3 
              flex flex-col justify-end items-start 
              px-20 pb-10 gap-5 max-md:px-10 
              max-md:text-md
              ">
                <h2 className="text-4xl font-bold ">{data.title}</h2>
                <h2 className="w-[400px] h-[100px] ">{data.plotSummary}</h2>
                <button className="btn bg-primary text-white border-white/0 shadow-xl hover:border-2  hover:border-orange-500 hover:bg-base-100 hover:text-orange-500 ">View Details</button>
              </div>
            </SwiperSlide>
          </>
        );
      })}
      {/* <SwiperSlide>Slide 1</SwiperSlide>
        <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
        <SwiperSlide>Slide 5</SwiperSlide>
        <SwiperSlide>Slide 6</SwiperSlide>
        <SwiperSlide>Slide 7</SwiperSlide>
        <SwiperSlide>Slide 8</SwiperSlide>
        <SwiperSlide>Slide 9</SwiperSlide> */}
    </Swiper>
  );
};

export default SliderComp;
