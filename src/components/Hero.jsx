import React from 'react';
import config from '../data/config.json';

export default function Hero() {
  const { brand, contact, theme } = config;

  // Hàm cuộn mượt xuống khu vực danh sách sản phẩm
  const scrollToProducts = (e) => {
    e.preventDefault();
    const element = document.getElementById('product-grid');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative overflow-hidden bg-gray-50 py-16 sm:py-24 lg:py-32">
      {/* Các khối màu mờ (Blur Glow) tạo chiều sâu cho phần nền */}
      <div 
        className="absolute top-0 right-0 -translate-y-12 translate-x-12 w-80 sm:w-96 h-80 sm:h-96 rounded-full blur-3xl opacity-10" 
        style={{ backgroundColor: theme.primaryColor }}
      ></div>
      <div 
        className="absolute bottom-0 left-0 translate-y-12 -translate-x-12 w-80 sm:w-96 h-80 sm:h-96 rounded-full blur-3xl opacity-10" 
        style={{ backgroundColor: theme.primaryColor }}
      ></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Cột bên trái: Tiêu đề & Lời kêu gọi */}
          <div className="lg:col-span-7 text-center lg:text-left space-y-6 sm:space-y-8">
            <span 
              style={{ color: theme.primaryColor, backgroundColor: `${theme.primaryColor}15` }}
              className="inline-flex items-center px-4 py-1.5 rounded-full text-xs sm:text-sm font-bold tracking-wide uppercase"
            >
              Danh Mục Sản Phẩm Chính Hãng
            </span>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-gray-900 tracking-tight leading-tight">
              {brand.name} <br />
              <span className="block mt-3 text-2xl sm:text-3xl lg:text-4xl font-normal text-gray-500">
                {brand.slogan}
              </span>
            </h1>

            <p className="max-w-2xl mx-auto lg:mx-0 text-base sm:text-lg text-gray-500 leading-relaxed">
            Dosel là thương hiệu ổ điện đến từ Hàn Quốc, được đánh giá cao nhờ chất lượng hoàn thiện, độ bền và tính an toàn trong quá trình sử dụng. Sản phẩm được thiết kế để đáp ứng nhu cầu sử dụng liên tục, phù hợp cho nhà máy, văn phòng, công trình và các ứng dụng công nghiệp.
            </p>

            {/* Các nút hành động chính */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
              <a
                href="#product-grid"
                onClick={scrollToProducts}
                style={{ backgroundColor: theme.primaryColor }}
                className="w-full sm:w-auto text-center px-8 py-4 text-white font-bold rounded-xl shadow-lg hover:shadow-xl hover:brightness-110 active:scale-98 transition-all"
              >
                Khám Phá Catalog
              </a>

              <a
                href={`tel:${contact.phone.replace(/\s+/g, '')}`}
                className="w-full sm:w-auto text-center px-8 py-4 bg-white border border-gray-200 text-gray-700 font-bold rounded-xl shadow-sm hover:bg-gray-50 hover:border-gray-300 transition-all"
              >
                Hotline: {contact.phone}
              </a>
            </div>
          </div>

                    {/* Cột bên phải: Ảnh minh họa (Banner chính) */}
          <div className="lg:col-span-5 flex justify-center items-center">
            {/* TUI ĐÃ XÓA aspect-[4/3] và sm:aspect-square ĐỂ KHUNG TỰ DO CO GIÃN */}
            <div className="relative w-full max-w-md sm:max-w-lg rounded-3xl overflow-hidden bg-white shadow-xl border border-gray-100 p-4 flex">
              <img
                src="/images/products/banner.jpg"
                alt="KhangNam Vina Banner"
                // TUI ĐÃ ĐỔI h-full THÀNH h-auto ĐỂ CHIỀU CAO ẢNH TỰ ĐỘNG CHẠY THEO TỶ LỆ GỐC
                className="w-full h-auto object-contain rounded-2xl"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}