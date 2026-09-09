'use client';

import React, { useState } from 'react';

type ProductDetailsProps = {
  specifications: [string, string][];
  features: string[];
};

export default function ProductDetails({
  specifications,
  features,
}: ProductDetailsProps) {
  const [openSection, setOpenSection] = useState<string | null>(null);

  const toggleSection = (section: string) => {
    setOpenSection(openSection === section ? null : section);
  };

  return (
    <div className="mt-10 border-t border-neutral-800">
      <button
        onClick={() => toggleSection('specifications')}
        className="w-full py-5 flex justify-between items-center text-sm tracking-widest uppercase"
      >
        <span>Specifications</span>
        <span className="text-xl font-light">
          {openSection === 'specifications' ? '−' : '+'}
        </span>
      </button>

      <div
  className={`grid transition-all duration-300 ease-in-out ${
    openSection === 'specifications'
      ? 'grid-rows-[1fr]'
      : 'grid-rows-[0fr]'
  }`}
>
  <div className="overflow-hidden">
    <div className="pb-6 border-b border-neutral-800">
      <div className="grid grid-cols-2 gap-y-4 text-sm">
        {specifications.map(([label, value]) => (
  <React.Fragment key={label}>
    <span className="text-neutral-600 uppercase tracking-wider">
      {label}
    </span>

    <span className="text-neutral-300">
      {value}
    </span>
  </React.Fragment>
))}
      </div>
    </div>
  </div>
</div>

      <button
        onClick={() => toggleSection('features')}
        className="w-full py-5 border-t border-neutral-800 flex justify-between items-center text-sm tracking-widest uppercase"
      >
        <span>Features</span>
        <span className="text-xl font-light">
          {openSection === 'features' ? '−' : '+'}
        </span>
      </button>

      {openSection === 'features' && (
        <div className="pb-6">
      
          <ul className="space-y-3 text-sm text-neutral-300">
            {features.map((feature) => (
              <li key={feature}>• {feature}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}