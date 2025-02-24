import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import { useState } from 'react';

const services = [
  { title: 'Mobile App Development', icon: '📱', description: 'A Website is an extension of yourself and we can help you to express it properly. Your website is your number one marketing asset because we live in a digital age.' },
  { title: 'Mobile App Development', icon: '💻', description: 'A Website is an extension of yourself and we can help you to express it properly. Your website is your number one marketing asset because we live in a digital age.' },
  { title: 'Mobile App Development', icon: '🖥️', description: 'A Website is an extension of yourself and we can help you to express it properly. Your website is your number one marketing asset because we live in a digital age.' },
  { title: 'Mobile App Development', icon: '📱', description: 'A Website is an extension of yourself and we can help you to express it properly. Your website is your number one marketing asset because we live in a digital age.' },
  { title: 'Mobile App Development', icon: '💻', description: 'A Website is an extension of yourself and we can help you to express it properly. Your website is your number one marketing asset because we live in a digital age.' },
];

const ServiceSlider = () => {
  const [activeIndex, setActiveIndex] = useState(1);

  return (
    <div className="w-full flex flex-col items-center py-10 overflow-visible">
      <h2 className="text-3xl font-bold text-center mb-[150px]">Services we offer</h2>
      <Swiper
        spaceBetween={20}
        slidesPerView={6}
        centeredSlides={true}
        loop={false}
        pagination={{ clickable: true }}
        initialSlide={2} 
        modules={[Pagination]}
        onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
        className="w-full overflow-visible"
      >
        {services.map((service, index) => {
          const distance = Math.abs(activeIndex - index);
          let scale = 1;
          let shadow = 'shadow-lg';
          let translateY = 'translate-y-0';
          if (distance === 0) {
            scale = 1;
            shadow = 'border border-gray-300';
          } else if (distance === 1) {
            scale = 0.5;
            shadow = 'shadow-2xl';
            translateY = '-translate-y-[20px]';
          } else {
            scale = 0.9;
            shadow = 'shadow-2xl';
            translateY = '-translate-y-[50px]';
          }

          return (
            <SwiperSlide key={index}>
              <div
                className={`p-6 rounded-xl transition-all duration-300 text-center bg-white transform scale-${scale} ${shadow} ${translateY}`}
              >
                <div className="text-5xl mb-4">{service.icon}</div>
                <h3 className={`text-xl font-semibold ${activeIndex === index ? 'text-green-600' : 'text-gray-800'}`}>
                  {service.title}
                </h3>
                <p className="text-gray-600 mt-2">{service.description}</p>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default ServiceSlider;