import React, { useState, useMemo } from 'react';
import products from '../data/products.json';
import ProductCard from './ProductCard';
import ProductModal from './ProductModal';
import config from '../data/config.json';

export default function ProductGrid() {
  const { theme } = config;
  
  const [selectedProduct, setSelectedProduct] = useState(null);
  
  // Mặc định chọn tab 'Tất Cả'
  const [activeTab, setActiveTab] = useState('Tất Cả');

  // 1. TỰ ĐỘNG TẠO DANH SÁCH TAB TỪ JSON
  const categories = useMemo(() => {
    // Quét toàn bộ JSON, lấy ra các 'category' và loại bỏ trùng lặp
    const uniqueCategories = [...new Set(products.map(p => p.category).filter(Boolean))];
    return ['Tất Cả', ...uniqueCategories];
  }, []);

  // 2. TỰ ĐỘNG LỌC SẢN PHẨM THEO TAB ĐANG CHỌN (ĐÂY CHÍNH LÀ BỘ NÃO)
  const filteredProducts = useMemo(() => {
    if (activeTab === 'Tất Cả') return products;
    // Bắt buộc sản phẩm phải có trường 'category' khớp với tên Tab
    return products.filter((product) => product.category === activeTab);
  }, [activeTab]);

  return (
    <section id="product-grid" className="py-16 sm:py-24 bg-white scroll-mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Phần Tiêu đề */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-tight mb-4">
            Danh Mục Sản Phẩm
          </h2>
          <div 
            className="w-16 h-1.5 mx-auto rounded-full mb-6"
            style={{ backgroundColor: theme.primaryColor }}
          ></div>
          <p className="text-base sm:text-lg text-gray-500">
            Tổng hợp các dòng sản phẩm chất lượng cao, đa dạng kích thước và mẫu mã, đáp ứng mọi nhu cầu sử dụng của bạn.
          </p>
        </div>

        {/* BỘ LỌC DANH MỤC ĐƯỢC TẠO TỰ ĐỘNG (ĐÃ TỐI ƯU CUỘN NGANG) */}
        <div className="flex overflow-x-auto gap-3 sm:gap-4 mb-10 sm:mb-14 pb-2 md:flex-wrap md:justify-center [&::-webkit-scrollbar]:hidden [-ms-overflow-style:'none'] [scrollbar-width:'none']">
          {categories.map((categoryName, index) => (
            <button
              key={index}
              onClick={() => setActiveTab(categoryName)}
              style={activeTab === categoryName ? { backgroundColor: theme.primaryColor, color: 'white', borderColor: theme.primaryColor } : { color: '#4B5563', borderColor: '#E5E7EB' }}
              className={`whitespace-nowrap flex-shrink-0 px-5 py-2.5 rounded-full font-bold text-sm sm:text-base border-2 transition-all duration-300 ${activeTab === categoryName ? 'shadow-md scale-105' : 'hover:border-gray-300 hover:bg-gray-50'}`}
            >
              {categoryName}
            </button>
          ))}
        </div>

        {/* LƯỚI SẢN PHẨM ĐÃ ĐƯỢC LỌC */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 xl:gap-10 min-h-[400px]">
          {filteredProducts.map((product) => (
            <div key={product.id} className="animate-[fadeIn_0.4s_ease-out]">
              <ProductCard 
                product={product} 
                onViewDetail={() => setSelectedProduct(product)} 
              />
            </div>
          ))}

          {/* Cảnh báo nếu không có sản phẩm nào trong Tab */}
          {filteredProducts.length === 0 && (
            <div className="col-span-full text-center py-20 text-gray-500 font-medium">
              Hiện chưa có sản phẩm nào trong danh mục này.
            </div>
          )}
        </div>

      </div>

      {/* Gọi Component Modal */}
      <ProductModal 
        product={selectedProduct} 
        onClose={() => setSelectedProduct(null)} 
      />
    </section>
  );
}