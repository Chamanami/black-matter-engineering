'use client';

import { useState } from 'react';


type ProductGalleryProps = {
  images: string[];
};

export default function ProductGallery({ images }: ProductGalleryProps) {
  const [selectedImage, setSelectedImage] = useState(0);
  const [isChanging, setIsChanging] = useState(false);
  return (
    <div>
      <div className="aspect-[4/3] bg-[#0a0a0a] border border-neutral-800 overflow-hidden">
        <img
          src={images[selectedImage]}
          alt="Toro GT3 steering wheel"
          className={`w-full h-full object-cover transition-opacity duration-100 ${
  isChanging ? 'opacity-95' : 'opacity-100'
}`}
        />
      </div>

      <div className="grid grid-cols-6 gap-3 mt-4">
        {images.map((image, index) => (
          <button
            key={image}
            onClick={() => {
                        setIsChanging(true);

                        setTimeout(() => {
                          setSelectedImage(index);
                          setIsChanging(false);
                        }, 150);
                      }}
            className={`aspect-square overflow-hidden border transition-colors ${
              selectedImage === index
                ? "border-white"
                : "border-neutral-800 hover:border-neutral-500"
            }`}
          >
            <img
              src={image}
              alt={`Toro GT3 view ${index + 1}`}
              className="w-full h-full object-cover"
            />
          </button>
        ))}
      </div>
    </div>
  );
}