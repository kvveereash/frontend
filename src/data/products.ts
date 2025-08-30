import { Product } from '../types/Product';

export const products: Product[] = [
  {
    id: '1',
    name: 'Premium Wireless Headphones',
    price: 299.99,
    originalPrice: 399.99,
    description: 'High-quality wireless headphones with noise cancellation and premium sound quality.',
    category: 'Electronics',
    image: 'https://images.pexels.com/photos/3945667/pexels-photo-3945667.jpeg?auto=compress&cs=tinysrgb&w=500',
    images: [
      'https://images.pexels.com/photos/3945667/pexels-photo-3945667.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/3394650/pexels-photo-3394650.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    rating: 4.8,
    reviewCount: 127,
    inStock: true,
    features: ['Active Noise Cancellation', '30-hour Battery Life', 'Premium Materials', 'Wireless Charging'],
    specifications: {
      'Driver Size': '40mm',
      'Frequency Response': '20Hz - 20kHz',
      'Battery Life': '30 hours',
      'Weight': '250g'
    }
  },
  {
    id: '2',
    name: 'Smart Watch Pro',
    price: 399.99,
    description: 'Advanced smartwatch with health monitoring, GPS, and premium build quality.',
    category: 'Electronics',
    image: 'https://images.pexels.com/photos/393047/pexels-photo-393047.jpeg?auto=compress&cs=tinysrgb&w=500',
    images: [
      'https://images.pexels.com/photos/393047/pexels-photo-393047.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    rating: 4.6,
    reviewCount: 89,
    inStock: true,
    features: ['Heart Rate Monitor', 'GPS Tracking', 'Water Resistant', '7-day Battery'],
    specifications: {
      'Display': '1.4" AMOLED',
      'Battery Life': '7 days',
      'Water Rating': '5ATM',
      'Connectivity': 'Bluetooth 5.0'
    }
  },
  {
    id: '3',
    name: 'Minimalist Backpack',
    price: 89.99,
    description: 'Sleek and functional backpack perfect for work, travel, and everyday use.',
    category: 'Fashion',
    image: 'https://images.pexels.com/photos/2905238/pexels-photo-2905238.jpeg?auto=compress&cs=tinysrgb&w=500',
    images: [
      'https://images.pexels.com/photos/2905238/pexels-photo-2905238.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    rating: 4.4,
    reviewCount: 156,
    inStock: true,
    features: ['Water Resistant', 'Laptop Compartment', 'USB Charging Port', 'Ergonomic Design'],
    specifications: {
      'Capacity': '25L',
      'Material': 'Canvas & Leather',
      'Laptop Size': 'Up to 15"',
      'Dimensions': '45 x 30 x 15 cm'
    }
  },
  {
    id: '4',
    name: 'Organic Coffee Beans',
    price: 24.99,
    description: 'Premium organic coffee beans sourced from sustainable farms.',
    category: 'Food',
    image: 'https://images.pexels.com/photos/894695/pexels-photo-894695.jpeg?auto=compress&cs=tinysrgb&w=500',
    images: [
      'https://images.pexels.com/photos/894695/pexels-photo-894695.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    rating: 4.9,
    reviewCount: 234,
    inStock: true,
    features: ['Organic Certified', 'Fair Trade', 'Single Origin', 'Medium Roast'],
    specifications: {
      'Origin': 'Colombia',
      'Roast Level': 'Medium',
      'Weight': '1lb (454g)',
      'Grind': 'Whole Bean'
    }
  },
  {
    id: '5',
    name: 'Yoga Mat Premium',
    price: 49.99,
    description: 'High-quality yoga mat with superior grip and cushioning.',
    category: 'Sports',
    image: 'https://images.pexels.com/photos/4056723/pexels-photo-4056723.jpeg?auto=compress&cs=tinysrgb&w=500',
    images: [
      'https://images.pexels.com/photos/4056723/pexels-photo-4056723.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    rating: 4.5,
    reviewCount: 178,
    inStock: true,
    features: ['Non-Slip Surface', 'Eco-Friendly', 'Extra Thick', 'Carrying Strap'],
    specifications: {
      'Thickness': '6mm',
      'Dimensions': '183 x 61 cm',
      'Material': 'TPE',
      'Weight': '1.2kg'
    }
  },
  {
    id: '6',
    name: 'Ceramic Plant Pot Set',
    price: 34.99,
    description: 'Beautiful ceramic plant pots perfect for indoor gardening.',
    category: 'Home',
    image: 'https://images.pexels.com/photos/1084199/pexels-photo-1084199.jpeg?auto=compress&cs=tinysrgb&w=500',
    images: [
      'https://images.pexels.com/photos/1084199/pexels-photo-1084199.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    rating: 4.3,
    reviewCount: 92,
    inStock: true,
    features: ['Drainage Holes', 'Saucer Included', 'Hand-glazed', 'Set of 3'],
    specifications: {
      'Sizes': 'Small, Medium, Large',
      'Material': 'Ceramic',
      'Colors': 'White, Grey, Terracotta',
      'Drainage': 'Yes'
    }
  }
];

export const categories = [
  'All',
  'Electronics',
  'Fashion',
  'Food',
  'Sports',
  'Home'
];