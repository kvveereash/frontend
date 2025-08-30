import React, { useState, useMemo } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { FeaturedProducts } from './components/FeaturedProducts';
import { ProductGrid } from './components/ProductGrid';
import { ProductDetails } from './components/ProductDetails';
import { Cart } from './components/Cart';
import { Footer } from './components/Footer';
import { CartProvider } from './contexts/CartContext';
import { products, categories } from './data/products';
import { Product } from './types/Product';

function App() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [isProductDetailsOpen, setIsProductDetailsOpen] = useState(false);

  const filteredProducts = useMemo(() => {
    let filtered = products;

    // Filter by category
    if (selectedCategory !== 'All') {
      filtered = filtered.filter(product => product.category === selectedCategory);
    }

    // Filter by search query
    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase();
      filtered = filtered.filter(product =>
        product.name.toLowerCase().includes(query) ||
        product.description.toLowerCase().includes(query) ||
        product.category.toLowerCase().includes(query)
      );
    }

    return filtered;
  }, [selectedCategory, searchQuery]);

  const handleProductClick = (product: Product) => {
    setSelectedProduct(product);
    setIsProductDetailsOpen(true);
  };

  const handleCloseProductDetails = () => {
    setIsProductDetailsOpen(false);
    setSelectedProduct(null);
  };

  const handleSearch = (query: string) => {
    setSearchQuery(query);
  };

  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category);
    setSearchQuery(''); // Clear search when changing categories
  };

  return (
    <CartProvider>
      <div className="min-h-screen bg-gray-50">
        <Header
          onSearch={handleSearch}
          onCategoryChange={handleCategoryChange}
          selectedCategory={selectedCategory}
          categories={categories}
        />
        
        <main>
          {/* Show hero and featured products only when viewing all products with no search */}
          {selectedCategory === 'All' && !searchQuery && (
            <>
              <Hero />
              <FeaturedProducts 
                products={products} 
                onProductClick={handleProductClick}
              />
            </>
          )}

          {/* Product Catalog */}
          <section className="py-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              {/* Results Header */}
              <div className="flex items-center justify-between mb-8">
                <div>
                  <h2 className="text-2xl font-bold text-gray-900">
                    {searchQuery ? `Search Results for "${searchQuery}"` : 
                     selectedCategory === 'All' ? 'All Products' : selectedCategory}
                  </h2>
                  <p className="text-gray-600 mt-1">
                    {filteredProducts.length} product{filteredProducts.length !== 1 ? 's' : ''} found
                  </p>
                </div>
              </div>

              <ProductGrid 
                products={filteredProducts} 
                onProductClick={handleProductClick}
              />
            </div>
          </section>
        </main>

        <Footer />
        
        <Cart />
        
        <ProductDetails
          product={selectedProduct}
          isOpen={isProductDetailsOpen}
          onClose={handleCloseProductDetails}
        />
      </div>
    </CartProvider>
  );
}

export default App;