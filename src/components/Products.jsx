import React, { useState } from 'react';

const ProductCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const products = [
    {
      id: 1,
      name: "ظروف ۷۵ میلی‌متری",
      description: "مناسب برای نوشیدنی‌های گرم و سرد",
      image: "/images/7506-2.png",
      size: "75mm"
    },
    {
      id: 2,
      name: "ظروف ۹۵ میلی‌متری", 
      description: "ایده‌آل برای قهوه و چای",
      image: "/images/7506-2.png",
      size: "95mm"
    },
    {
      id: 3,
      name: "ظروف ۱۲۵ میلی‌متری",
      description: "مناسب برای نوشیدنی‌های خانوادگی",
      image: "/images/7506-2.png",
      size: "125mm"
    },
    {
      id: 4,
      name: "ظروف ۱۵۵ میلی‌متری",
      description: "حجم بزرگ برای رستوران‌ها",
      image: "/images/7506-2.png",
      size: "155mm"
    },
    {
      id: 5,
      name: "ظروف سفارشی",
      description: "طراحی اختصاصی بر اساس نیاز شما",
      image: "/images/7506-2.png",
      size: "Custom"
    },
    {
      id: 6,
      name: "قالب ژله‌ای",
      description: "مناسب برای دسرها و ژله",
      image:"/images/7506-2.png",
      size: "Multi-size"
    },
    {
      id: 7,
      name: "درپوش محصولات",
      description: "انواع درپوش برای همه محصولات",
      image: "/images/7506-2.png",
      size: "Various"
    }
  ];

  const nextSlide = () => {
  setCurrentIndex((prevIndex) => (prevIndex + 1) % products.length);
};

const prevSlide = () => {
  setCurrentIndex((prevIndex) => 
    prevIndex === 0 ? products.length - 1 : prevIndex - 1
  );
};

// This ensures you always see exactly 3 products in a loop
const getVisibleProducts = () => {
  const visibleProducts = [];
  for (let i = 0; i < 3; i++) {
    const index = (currentIndex + i) % products.length;
    visibleProducts.push(products[index]);
  }
  return visibleProducts;
};

const visibleProducts = getVisibleProducts();

  return (
    <section className="py-16 bg-[#EEF7FE]">
      <div className="max-w-6xl mx-auto px-4">
        {/* Section Title */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            انواع محصولات گل‌ظرف
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            مجموعه کاملی از ظروف یکبار مصرف با کیفیت برای تمام نیازهای کسب‌وکار شما
          </p>
        </div>

        {/* Carousel Container */}
        <div className="relative">
          {/* Previous Button */}
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-4 z-10 bg-white hover:bg-blue-600 hover:text-white text-blue-600 rounded-full p-3 shadow-lg transition-all duration-300 disabled:opacity-50"
            disabled={currentIndex === 0}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          {/* Product Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {visibleProducts.map((product) => (
              <div key={product.id} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <div className="relative overflow-hidden h-48 bg-gray-50 flex items-center justify-center">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-[200px] h-[200px] object-cover hover:scale-105 transition-transform duration-300 rounded"
                  />
                  <div className="absolute top-4 right-4 bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                    {product.size}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-2">
                    {product.name}
                  </h3>
                  <p className="text-gray-600 mb-4">
                    {product.description}
                  </p>
                  <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg transition-colors duration-300">
                    مشاهده جزئیات
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Next Button */}
          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-4 z-10 bg-white hover:bg-blue-600 hover:text-white text-blue-600 rounded-full p-3 shadow-lg transition-all duration-300"
          >
          <div>
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </div>
          </button>
          {/* Carousel Indicators */}
          <div className="flex justify-center mt-8 space-x-2">
            {Array.from({ length: Math.ceil(products.length / 3) }).map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index * 3)}
                className={`w-3 h-3 rounded-full transition-colors duration-300 mx-2 ${
                  Math.floor(currentIndex / 3) === index 
                    ? 'bg-blue-600' 
                    : 'bg-gray-300 hover:bg-gray-400'
                }`}
              />
            ))}
          </div>
        </div>

        {/* View All Products Button */}
        <div className="text-center mt-12">
          <button className="bg-blue-600/90 hover:bg-blue-700 hover:-translate-y-1 hover:shadow-xl text-white font-bold py-4 px-8 mt-5 rounded-lg text-lg transition-all duration-300 ">
            مشاهده همه محصولات
          </button>
        </div>
      </div>
    </section>
  );
};

export default ProductCarousel;