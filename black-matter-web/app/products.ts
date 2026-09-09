type Product = {
  name: string;
  category: string;
  price: string;
  images: string[];
  description: string;
  specifications: [string, string][];
  features: string[];
  availability: string;
};

export const products: Record<string, Product> = {
  'toro-gt3': {
    name: 'Toro GT3',
    category: 'GT3 Steering Wheel',
    price: '€500.00',

    images: [
      '/products/toro-gt3/1.jpg',
      '/products/toro-gt3/2.jpg',
      '/products/toro-gt3/3.jpg',
      '/products/toro-gt3/4.jpg',
      '/products/toro-gt3/5.jpg',
      '/products/toro-gt3/6.jpg',
    ],

    description:
      'A purpose-built GT3 steering wheel designed for sim racing, combining motorsport-inspired ergonomics with custom electronics and precision mechanical construction.',

    specifications: [
      ['Construction', 'Aluminum rim, suede grips, 3D printed enclosure'],
      ['Diameter', '300 mm'],
      ['Weight', '950 g (without QR)'],
      ['Connection', 'USB (GX12)'],
    ],

    features: [
      'Motorsport-inspired design and ergonomics',
      'Configurable Hall sensor clutches',
      '3 × +/- encoders',
      'Magnetic paddle shifters',
    ],

    availability: "Available",
  },

    'BM-P500': {
    name: 'BM-P500',
    category: 'Prototype Sim Racing Wheel',
    price: 'Custom',

    images: [
      '/products/BM-P500/1.png',
      '/products/BM-P500/2.png',
     
    ],

    description:
      'A flagship Black Matter Engineering prototype developed around motorsport-inspired ergonomics, rigid mechanical construction, and a custom electronics and firmware architecture.',

    specifications: [
      ['Construction', '5 mm aluminum front plate'],
      ['Diameter', '286 mm'],
      ['Weight', '~1450 g'],
      ['Status', 'Prototype V1.0'],
    ],

    features: [
      'Motorsport-inspired design and ergonomics',
      'Custom STM32-based electronics',
      'Custom USB HID firmware',
      'Magnetic paddle shifters',
      'Incremental and position encoders',
    ],

    availability: "In development",
  },


};