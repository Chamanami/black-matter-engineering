'use client';

import React, { useState, useEffect } from 'react';
import { 
  Cpu, 
  Layers, 
  Compass, 
  Wrench, 
  CircuitBoard, 
  ArrowUpRight, 
  ChevronDown,
  Download,
  FileText,
  Menu,
  X
} from 'lucide-react';

type Tab = 'home' | 'projects' | 'products' | 'support';

export default function App() {
  const [activeTab, setActiveTab] = useState<Tab>('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [activeTab]);

  const navItems: { id: Tab; label: string }[] = [
    { id: 'home', label: 'Home' },
    { id: 'projects', label: 'Projects' },
    { id: 'products', label: 'Ready-made Products' },
    { id: 'support', label: 'Support' },
  ];

  return (
    <div className="bg-[#050505] text-[#E5E5E5] min-h-screen font-sans selection:bg-white selection:text-black antialiased flex flex-col justify-between">
      
      {/* NAVIGATION */}
      <nav className="fixed top-0 left-0 w-full z-50 bg-[#050505]/90 backdrop-blur-md border-b border-[#1A1A1A]">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <button 
            onClick={() => setActiveTab('home')} 
            className="text-xl font-bold tracking-tighter text-white hover:opacity-80 transition-opacity text-left"
          >
            BLACK MATTER<span className="text-neutral-600">.</span>
          </button>
          
          {/* Desktop Navigation Tabs - CLEAN, MODERN FONT */}
          <div className="hidden md:flex items-center space-x-8 text-sm font-medium tracking-wide text-neutral-400">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => setActiveTab(item.id)}
                className={`transition-colors py-2 ${
                  activeTab === item.id ? 'text-white' : 'hover:text-white'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>

          <button 
            onClick={() => setActiveTab('support')} 
            className="hidden md:inline-block text-sm font-medium tracking-wide border border-neutral-700 px-6 py-2 hover:bg-white hover:text-black transition-all rounded-none text-white"
          >
            Inquire
          </button>

          {/* Mobile Menu Button */}
          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)} 
            className="md:hidden text-white p-2"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-[#0A0A0A] border-b border-neutral-800 px-6 py-6 flex flex-col gap-4 text-base font-medium tracking-wide">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => {
                  setActiveTab(item.id);
                  setMobileMenuOpen(false);
                }}
                className={`text-left py-3 border-b border-neutral-900 ${
                  activeTab === item.id ? 'text-white' : 'text-neutral-400'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>
        )}
      </nav>

      {/* MAIN CONTENT AREA */}
      <main className="pt-20 flex-grow">

        {/* HOME TAB */}
        {activeTab === 'home' && (
          <div>
            {/* HERO SECTION */}
            <section className="relative min-h-[calc(100vh-80px)] flex flex-col justify-between pt-20 pb-12 px-6 max-w-7xl mx-auto">
              <div className="absolute inset-0 bg-[radial-gradient(#1A1A1A_1px,transparent_1px)] [background-size:32px_32px] opacity-30 -z-10 pointer-events-none" />
              
              <div className="my-auto pt-8">
                {/* PLACEHOLDER LOGO */}
                <div className="mb-12 inline-block">
                  <div className="w-24 h-24 border-2 border-white flex items-center justify-center text-4xl font-black tracking-tighter text-white">
                    BM
                  </div>
                </div>
                
                <h1 className="text-4xl md:text-7xl lg:text-8xl font-medium tracking-tight text-white max-w-5xl leading-none">
                  Black Matter Engineering
                </h1>
                
                <p className="mt-8 text-xl md:text-2xl text-neutral-400 font-light tracking-wide max-w-2xl">
                  Precision engineering. Driven by motorsport.
                </p>

                <div className="mt-12 flex flex-wrap gap-4 text-sm font-medium text-neutral-400 uppercase tracking-wider">
                  <span className="border border-neutral-800 px-4 py-1.5 bg-neutral-950/50">LOCATION: NOVI SAD / RS</span>
                  <span className="border border-neutral-800 px-4 py-1.5 bg-neutral-950/50">SPEC: MOTORSPORT GRADE</span>
                  <span className="border border-neutral-800 px-4 py-1.5 bg-neutral-950/50">STATUS: ACTIVE DEVELOPMENT</span>
                </div>
              </div>

              <div className="flex justify-between items-end border-t border-neutral-900 pt-6 text-sm font-semibold tracking-wide text-neutral-500 uppercase">
                <div>BESPOKE SIM RACING HARDWARE</div>
                <button 
                  onClick={() => setActiveTab('projects')} 
                  className="flex items-center gap-2 hover:text-white transition-colors"
                >
                  EXPLORE PROJECTS <ChevronDown size={16} />
                </button>
              </div>
            </section>

            {/* ABOUT / PHILOSOPHY */}
            <section className="py-32 border-t border-neutral-900 bg-[#080808]">
              <div className="max-w-7xl mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
                  <div className="md:col-span-4">
                    <span className="text-sm font-semibold text-neutral-500 uppercase tracking-widest">01. PHILOSOPHY</span>
                    <h2 className="text-2xl md:text-3xl font-medium tracking-tight text-white mt-4">
                      No gimmicks. No shortcuts.<br />Pure mechanical intent.
                    </h2>
                  </div>
                  <div className="md:col-span-8 text-neutral-400 font-light text-lg tracking-wide space-y-6 leading-relaxed">
                    <p>
                      Black Matter Engineering exists at the intersection of real-world motorsport and ultra-precise sim racing hardware. We do not mass produce peripherals; we engineer dedicated equipment for drivers who demand zero compromise - on track and off the track.
                    </p>
                    <p className="text-neutral-500">
                      Every component—from custom micro-controller PCBs to structural autoclaved carbon fiber layouts—is designed, tested, and assembled with zero tolerance for flex or signal latency.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* QUICK PREVIEW TILES */}
            <section className="py-24 border-t border-neutral-900">
              <div className="max-w-7xl mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  <div 
                    onClick={() => setActiveTab('projects')}
                    className="group border border-neutral-800 p-8 bg-[#080808] cursor-pointer hover:border-neutral-600 transition-all flex flex-col justify-between h-72"
                  >
                    <div>
                      <span className="text-sm font-semibold text-neutral-500 block mb-4 uppercase tracking-widest">01.</span>
                      <h3 className="text-xl text-white font-medium tracking-tight mb-2">Projects & R&D</h3>
                      <p className="text-sm text-neutral-400 font-light tracking-wide">Motorsport inspired wheels, Custom wheel projects, firmware stack support.</p>
                    </div>
                    <div className="flex items-center gap-2 text-sm font-semibold text-white tracking-widest uppercase group-hover:translate-x-1 transition-transform">
                      VIEW PROJECTS <ArrowUpRight size={16} />
                    </div>
                  </div>

                  <div 
                    onClick={() => setActiveTab('products')}
                    className="group border border-neutral-800 p-8 bg-[#080808] cursor-pointer hover:border-neutral-600 transition-all flex flex-col justify-between h-72"
                  >
                    <div>
                      <span className="text-sm font-semibold text-neutral-500 block mb-4 uppercase tracking-widest">02.</span>
                      <h3 className="text-xl text-white font-medium tracking-tight mb-2">Ready-Made Products</h3>
                      <p className="text-sm text-neutral-400 font-light tracking-wide">Ready-Made wheels, Accessories and other.</p>
                    </div>
                    <div className="flex items-center gap-2 text-sm font-semibold text-white tracking-widest uppercase group-hover:translate-x-1 transition-transform">
                      VIEW HARDWARE <ArrowUpRight size={16} />
                    </div>
                  </div>

                  <div 
                    onClick={() => setActiveTab('support')}
                    className="group border border-neutral-800 p-8 bg-[#080808] cursor-pointer hover:border-neutral-600 transition-all flex flex-col justify-between h-72"
                  >
                    <div>
                      <span className="text-sm font-semibold text-neutral-500 block mb-4 uppercase tracking-widest">03.</span>
                      <h3 className="text-xl text-white font-medium tracking-tight mb-2">Technical Support</h3>
                      <p className="text-sm text-neutral-400 font-light tracking-wide">Manuals, pinouts, mounting specs, and custom project inquiries.</p>
                    </div>
                    <div className="flex items-center gap-2 text-sm font-semibold text-white tracking-widest uppercase group-hover:translate-x-1 transition-transform">
                      ACCESS SUPPORT <ArrowUpRight size={16} />
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        )}

        {/* PROJECTS TAB */}
        {activeTab === 'projects' && (
          <div className="py-16 max-w-7xl mx-auto px-6">
            <div className="mb-16 border-b border-neutral-900 pb-12">
              <span className="text-sm font-semibold text-neutral-500 uppercase tracking-widest">01. ENGINEERING ARCHIVE</span>
              <h1 className="text-4xl md:text-6xl font-medium tracking-tight text-white mt-4">Engineering Projects</h1>
              <p className="mt-4 text-neutral-400 font-light tracking-wide max-w-2xl text-lg">
                High-precision motorsport inspired builds, R&D, and bespoke custom commissions.
              </p>
            </div>

            <div className="mb-24">
              <div className="flex flex-col md:flex-row md:items-end justify-between mb-8">
                <div>
                  <span className="text-sm font-semibold text-neutral-500 uppercase tracking-widest">FLAGSHIP PROTOTYPE</span>
                  <h2 className="text-3xl font-medium tracking-tight text-white mt-2">BM-P500 Sim Racing Wheel</h2>
                </div>
                <span className="text-sm font-medium tracking-wide border border-neutral-800 text-neutral-400 px-4 py-1.5 mt-4 md:mt-0 self-start">
                  PROTOTYPE V1.0
                </span>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                <div className="lg:col-span-7 bg-[#0A0A0A] border border-neutral-800 min-h-[450px] flex flex-col justify-between p-8 relative">
                  <div className="flex justify-between items-start text-sm font-medium text-neutral-500 uppercase tracking-wide">
                    <span>CAD REF: P500-STEER</span>
                    <span>IN-PROGRESS</span>
                  </div>
                  
                  <div className="text-center py-24">
                    <span className="text-sm font-semibold tracking-widest text-neutral-600 block mb-2 uppercase">[ PRODUCT IMAGE PLACEHOLDER ]</span>
                    <span className="text-neutral-400 font-light text-base tracking-wide">BM-P500 Endurance Wheel Silhouette</span>
                  </div>

                  <div className="flex justify-between items-end text-sm font-medium text-neutral-500 uppercase tracking-wide">
                    <span>MASS: ~1450g</span>
                    <span>DIAMETER: 286mm</span>
                  </div>
                </div>

                <div className="lg:col-span-5 bg-[#080808] border border-neutral-800 p-8 flex flex-col justify-between">
                  <div>
                    <h3 className="text-xl font-medium tracking-tight text-white mb-6">Technical Architecture</h3>
                    <ul className="space-y-4 text-sm text-neutral-400 divide-y divide-neutral-900 tracking-wide">
                      <li className="pt-4 flex justify-between">
                        <span className="font-semibold text-neutral-600 uppercase">STRUCTURE</span>
                        <span className="text-right text-neutral-200">5mm Alu Front Plate</span>
                      </li>
                      <li className="pt-4 flex justify-between">
                        <span className="font-semibold text-neutral-600 uppercase">MCU</span>
                        <span className="text-right text-neutral-200">STM32 HID Firmware</span>
                      </li>
                      <li className="pt-4 flex justify-between">
                        <span className="font-semibold text-neutral-600 uppercase">SHIFTERS</span>
                        <span className="text-right text-neutral-200">Magnetic Contact Switch</span>
                      </li>
                      <li className="pt-4 flex justify-between">
                        <span className="font-semibold text-neutral-600 uppercase">ENCODERS</span>
                        <span className="text-right text-neutral-200">CTS Industrial Rotary</span>
                      </li>
                      <li className="pt-4 flex justify-between">
                        <span className="font-semibold text-neutral-600 uppercase">GRIPS</span>
                        <span className="text-right text-neutral-200">Custom Molded 60A Shore</span>
                      </li>
                    </ul>
                  </div>

                  <button 
                    onClick={() => setActiveTab('support')}
                    className="mt-8 w-full border border-neutral-700 py-3 text-sm font-semibold uppercase tracking-widest text-white hover:bg-white hover:text-black transition-all"
                  >
                    Inquire About BM-P500
                  </button>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-24">
              <div className="border border-neutral-800 bg-[#080808] p-8 flex flex-col justify-between">
                <div>
                  <span className="text-sm font-semibold text-neutral-500 block mb-2 uppercase tracking-widest">PROJECT / 02</span>
                  <h3 className="text-2xl font-medium tracking-tight text-white mb-4">Lamborghini Huracan GT3 Wheel Rim</h3>
                  <p className="text-base text-neutral-400 font-light tracking-wide mb-6 leading-relaxed">
                    Compact 300mm GT3-style framework focused on minimal moment of inertia and maximum structural stiffness under direct-drive torque.
                  </p>
                </div>
                <div className="text-sm font-medium text-neutral-500 uppercase tracking-wide border-t border-neutral-900 pt-4 flex justify-between">
                  <span>STAGE: CAD & FEA</span>
                  <span>EST: Q4 2026</span>
                </div>
              </div>

              <div className="border border-neutral-800 bg-[#080808] p-8 flex flex-col justify-between">
                <div>
                  <span className="text-sm font-semibold text-neutral-500 block mb-2 uppercase tracking-widest">PROJECT / 03</span>
                  <h3 className="text-2xl font-medium tracking-tight text-white mb-4">Custom Bespoke Commissions</h3>
                  <p className="text-base text-neutral-400 font-light tracking-wide mb-6 leading-relaxed">
                    One-off hardware commissions tailored to exact driver telemetry specifications, custom mounting brackets, and unique steering wheel layouts.
                  </p>
                </div>
                <div className="text-sm font-medium text-neutral-500 uppercase tracking-wide border-t border-neutral-900 pt-4 flex justify-between">
                  <span>STATUS: OPEN</span>
                  <span>1-ON-1 CONSULTATION</span>
                </div>
              </div>
            </div>

            <div className="border-t border-neutral-900 pt-16">
              <h2 className="text-2xl font-medium tracking-tight text-white mb-8">Engineering Capabilities</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-[#0A0A0A] border border-neutral-800 p-6">
                  <CircuitBoard className="text-neutral-400 mb-4" size={28} />
                  <h4 className="text-white font-medium text-lg tracking-tight mb-2">Custom PCB Design</h4>
                  <p className="text-sm text-neutral-400 font-light leading-relaxed">Multi-layer boards designed for low-latency inputs and EMI protection.</p>
                </div>
                <div className="bg-[#0A0A0A] border border-neutral-800 p-6">
                  <Cpu className="text-neutral-400 mb-4" size={28} />
                  <h4 className="text-white font-medium text-lg tracking-tight mb-2">STM32 Firmware Stack</h4>
                  <p className="text-sm text-neutral-400 font-light leading-relaxed">Optimized C++ firmware running custom USB HID protocols for instant input response.</p>
                </div>
                <div className="bg-[#0A0A0A] border border-neutral-800 p-6">
                  <Layers className="text-neutral-400 mb-4" size={28} />
                  <h4 className="text-white font-medium text-lg tracking-tight mb-2">1-to-1 Replica CAD design</h4>
                  <p className="text-sm text-neutral-400 font-light leading-relaxed">True to real life steering wheels from your favorite motorsport series.</p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* READY-MADE PRODUCTS TAB */}
        {activeTab === 'products' && (
          <div className="py-16 max-w-7xl mx-auto px-6">
            <div className="mb-16 border-b border-neutral-900 pb-12">
              <span className="text-sm font-semibold text-neutral-500 uppercase tracking-widest">02. HARDWARE CATALOG</span>
              <h1 className="text-4xl md:text-6xl font-medium tracking-tight text-white mt-4">Ready-Made Products</h1>
              <p className="mt-4 text-neutral-400 font-light tracking-wide max-w-2xl text-lg">
                Modular hardware and precision components ready for integration into your sim racing rig.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="border border-neutral-800 bg-[#080808] p-6 flex flex-col justify-between">
                <div>
                  <div className="w-full h-52 bg-neutral-950 border border-neutral-900 mb-6 flex flex-col items-center justify-center text-sm font-semibold text-neutral-600 uppercase tracking-widest">
                    <span>[ PADDLE MODULE ]</span>
                  </div>
                  
                  <div className="flex justify-between items-start mb-3">
                    <h3 className="text-xl font-medium tracking-tight text-white pr-2">BM Magnetic Paddle Module</h3>
                    <span className="text-xs font-semibold tracking-widest border border-neutral-700 text-neutral-300 px-2 py-1 mt-1">STOCK</span>
                  </div>
                  
                  <p className="text-sm text-neutral-400 font-light tracking-wide leading-relaxed mt-2 mb-6">
                    CNC-machined aluminum housing with neodymium magnets and industrial microswitches for tactile, definitive gear shifts.
                  </p>

                  <ul className="text-sm text-neutral-300 space-y-2 mb-8 font-light tracking-wide">
                    <li><span className="font-semibold text-neutral-600 mr-2">WEIGHT</span> 140g per pair</li>
                    <li><span className="font-semibold text-neutral-600 mr-2">ADJUST</span> Angle & reach</li>
                    <li><span className="font-semibold text-neutral-600 mr-2">MOUNT</span> 2x M4 threaded</li>
                  </ul>
                </div>

                <div className="pt-6 border-t border-neutral-900 flex justify-between items-center">
                  <span className="text-xl font-medium text-white">€145.00</span>
                  <button 
                    onClick={() => setActiveTab('support')}
                    className="text-sm font-semibold border border-neutral-700 px-4 py-2 text-white hover:bg-white hover:text-black transition-all uppercase tracking-wider"
                  >
                    Order
                  </button>
                </div>
              </div>

              <div className="border border-neutral-800 bg-[#080808] p-6 flex flex-col justify-between">
                <div>
                  <div className="w-full h-52 bg-neutral-950 border border-neutral-900 mb-6 flex flex-col items-center justify-center text-sm font-semibold text-neutral-600 uppercase tracking-widest">
                    <span>[ QR ADAPTER ]</span>
                  </div>
                  
                  <div className="flex justify-between items-start mb-3">
                    <h3 className="text-xl font-medium tracking-tight text-white pr-2">BM Universal QR Adapter</h3>
                    <span className="text-xs font-semibold tracking-widest border border-neutral-700 text-neutral-300 px-2 py-1 mt-1">STOCK</span>
                  </div>
                  
                  <p className="text-sm text-neutral-400 font-light tracking-wide leading-relaxed mt-2 mb-6">
                    Ultra-rigid 70mm PCD Quick Release adapter designed for zero axial play under high Direct Drive torque.
                  </p>

                  <ul className="text-sm text-neutral-300 space-y-2 mb-8 font-light tracking-wide">
                    <li><span className="font-semibold text-neutral-600 mr-2">MAT</span> 6061-T6 Aluminum</li>
                    <li><span className="font-semibold text-neutral-600 mr-2">PCD</span> Standard 6x70mm</li>
                    <li><span className="font-semibold text-neutral-600 mr-2">WEIGHT</span> 210g</li>
                  </ul>
                </div>

                <div className="pt-6 border-t border-neutral-900 flex justify-between items-center">
                  <span className="text-xl font-medium text-white">€89.00</span>
                  <button 
                    onClick={() => setActiveTab('support')}
                    className="text-sm font-semibold border border-neutral-700 px-4 py-2 text-white hover:bg-white hover:text-black transition-all uppercase tracking-wider"
                  >
                    Order
                  </button>
                </div>
              </div>

              <div className="border border-neutral-800 bg-[#080808] p-6 flex flex-col justify-between">
                <div>
                  <div className="w-full h-52 bg-neutral-950 border border-neutral-900 mb-6 flex flex-col items-center justify-center text-sm font-semibold text-neutral-600 uppercase tracking-widest">
                    <span>[ USB-C CABLE ]</span>
                  </div>
                  
                  <div className="flex justify-between items-start mb-3">
                    <h3 className="text-xl font-medium tracking-tight text-white pr-2">Coiled Industrial USB-C</h3>
                    <span className="text-xs font-semibold tracking-widest border border-neutral-700 text-neutral-300 px-2 py-1 mt-1">STOCK</span>
                  </div>
                  
                  <p className="text-sm text-neutral-400 font-light tracking-wide leading-relaxed mt-2 mb-6">
                    High-flex coiled USB cable with double EMI shielding and binder connector strain relief for direct-drive setups.
                  </p>

                  <ul className="text-sm text-neutral-300 space-y-2 mb-8 font-light tracking-wide">
                    <li><span className="font-semibold text-neutral-600 mr-2">LENGTH</span> 0.5m (2.0m max)</li>
                    <li><span className="font-semibold text-neutral-600 mr-2">PLUGS</span> Aviator 4-Pin / USB-A</li>
                    <li><span className="font-semibold text-neutral-600 mr-2">SHIELD</span> Dual Braid + Foil</li>
                  </ul>
                </div>

                <div className="pt-6 border-t border-neutral-900 flex justify-between items-center">
                  <span className="text-xl font-medium text-white">€42.00</span>
                  <button 
                    onClick={() => setActiveTab('support')}
                    className="text-sm font-semibold border border-neutral-700 px-4 py-2 text-white hover:bg-white hover:text-black transition-all uppercase tracking-wider"
                  >
                    Order
                  </button>
                </div>
              </div>
            </div>

            <div className="mt-16 bg-[#0A0A0A] border border-neutral-800 p-8 flex flex-col md:flex-row justify-between items-center gap-6">
              <div>
                <h4 className="text-xl text-white font-medium tracking-tight mb-2">Looking for a custom modification?</h4>
                <p className="text-sm text-neutral-400 font-light tracking-wide">We offer bespoke mounting plates, special anodizing colors, and custom wiring looms upon request.</p>
              </div>
              <button 
                onClick={() => setActiveTab('support')}
                className="whitespace-nowrap text-sm font-semibold border border-white px-8 py-3 text-white hover:bg-white hover:text-black transition-all uppercase tracking-widest"
              >
                Inquire Bespoke Order
              </button>
            </div>
          </div>
        )}

        {/* SUPPORT TAB */}
        {activeTab === 'support' && (
          <div className="py-16 max-w-7xl mx-auto px-6">
            <div className="mb-16 border-b border-neutral-900 pb-12">
              <span className="text-sm font-semibold text-neutral-500 uppercase tracking-widest">03. DOCUMENTATION & CONTACT</span>
              <h1 className="text-4xl md:text-6xl font-medium tracking-tight text-white mt-4">Support & Inquiries</h1>
              <p className="mt-4 text-neutral-400 font-light tracking-wide max-w-2xl text-lg">
                Access technical resources, download firmware files, or start an engineering commission.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
              <div className="lg:col-span-5 space-y-8">
                <div className="border border-neutral-800 bg-[#080808] p-6">
                  <div className="flex items-center gap-3 mb-6">
                    <Download className="text-neutral-400" size={20} />
                    <h3 className="text-xl font-medium tracking-tight text-white">Firmware & Software</h3>
                  </div>
                  <ul className="space-y-4 text-sm text-neutral-400 tracking-wide font-light">
                    <li className="flex justify-between items-center p-4 bg-[#050505] border border-neutral-900">
                      <div>
                        <div className="text-neutral-200 font-medium mb-1">BM-499P Firmware v1.2.4</div>
                        <div className="text-xs text-neutral-500 uppercase tracking-widest">STM32 Flasher Hex</div>
                      </div>
                      <button className="text-white hover:text-neutral-400 transition-colors">
                        <Download size={20} />
                      </button>
                    </li>
                    <li className="flex justify-between items-center p-4 bg-[#050505] border border-neutral-900">
                      <div>
                        <div className="text-neutral-200 font-medium mb-1">BM USB Utility Driver</div>
                        <div className="text-xs text-neutral-500 uppercase tracking-widest">Windows HID Configurator</div>
                      </div>
                      <button className="text-white hover:text-neutral-400 transition-colors">
                        <Download size={20} />
                      </button>
                    </li>
                  </ul>
                </div>

                <div className="border border-neutral-800 bg-[#080808] p-6">
                  <div className="flex items-center gap-3 mb-6">
                    <FileText className="text-neutral-400" size={20} />
                    <h3 className="text-xl font-medium tracking-tight text-white">Mounting Schematics</h3>
                  </div>
                  <ul className="space-y-4 text-sm text-neutral-400 tracking-wide font-light">
                    <li className="flex justify-between items-center p-4 bg-[#050505] border border-neutral-900">
                      <div>
                        <div className="text-neutral-200 font-medium mb-1">BM-499P Mount Pattern</div>
                        <div className="text-xs text-neutral-500 uppercase tracking-widest">PDF 1:1 Scale</div>
                      </div>
                      <button className="text-white hover:text-neutral-400 transition-colors">
                        <Download size={20} />
                      </button>
                    </li>
                    <li className="flex justify-between items-center p-4 bg-[#050505] border border-neutral-900">
                      <div>
                        <div className="text-neutral-200 font-medium mb-1">70mm QR PCD Dimension</div>
                        <div className="text-xs text-neutral-500 uppercase tracking-widest">DXF CAD File</div>
                      </div>
                      <button className="text-white hover:text-neutral-400 transition-colors">
                        <Download size={20} />
                      </button>
                    </li>
                  </ul>
                </div>

                <div className="text-sm text-neutral-400 font-medium space-y-3 pt-4 tracking-wide">
                  <p><span className="text-neutral-600 uppercase mr-2">LOCATION</span> Novi Sad, Serbia</p>
                  <p><span className="text-neutral-600 uppercase mr-2">EMAIL</span> info@blackmatterengineering</p>
                  <p><span className="text-neutral-600 uppercase mr-2">RESPONSE TIME</span> &lt; 24 Hours</p>
                </div>
              </div>

              <div className="lg:col-span-7 bg-[#080808] border border-neutral-800 p-8">
                <h3 className="text-2xl font-medium tracking-tight text-white mb-2">Initiate Transmission</h3>
                <p className="text-sm text-neutral-400 font-light tracking-wide mb-8">Fill in your specifications or technical question below.</p>

                <form className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-semibold text-neutral-500 mb-2 uppercase tracking-wide">Name / Organization</label>
                      <input 
                        type="text" 
                        className="w-full bg-[#050505] border border-neutral-800 px-4 py-3 text-base text-white focus:outline-none focus:border-white transition-colors"
                        placeholder="e.g. Marko Marković"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-neutral-500 mb-2 uppercase tracking-wide">Email Address</label>
                      <input 
                        type="email" 
                        className="w-full bg-[#050505] border border-neutral-800 px-4 py-3 text-base text-white focus:outline-none focus:border-white transition-colors"
                        placeholder="name@domain.com"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-neutral-500 mb-2 uppercase tracking-wide">Category</label>
                    <select className="w-full bg-[#050505] border border-neutral-800 px-4 py-3 text-base text-white focus:outline-none focus:border-white transition-colors">
                      <option>Ready-made Product Order Inquiry</option>
                      <option>BM-499P Technical Inquiry</option>
                      <option>Custom Bespoke Commission</option>
                      <option>Technical Support & Firmware Issue</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-neutral-500 mb-2 uppercase tracking-wide">Message / Technical Notes</label>
                    <textarea 
                      rows={6} 
                      className="w-full bg-[#050505] border border-neutral-800 px-4 py-3 text-base text-white focus:outline-none focus:border-white transition-colors resize-none"
                      placeholder="Specify hardware model, setup details, or custom request..."
                    />
                  </div>

                  <button 
                    type="submit" 
                    className="w-full bg-white text-black py-4 text-sm font-bold uppercase tracking-widest hover:bg-neutral-200 transition-colors mt-4"
                  >
                    Send Inquiry
                  </button>
                </form>
              </div>
            </div>
          </div>
        )}

      </main>

      {/* FOOTER */}
      <footer className="py-12 border-t border-neutral-900 bg-[#050505] text-sm font-medium tracking-wide text-neutral-500 uppercase">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-center md:text-left">
            © {new Date().getFullYear()} BLACK MATTER ENGINEERING. ALL RIGHTS RESERVED.
          </div>
          <div className="flex gap-8">
            <button onClick={() => setActiveTab('home')} className="hover:text-white transition-colors">HOME</button>
            <button onClick={() => setActiveTab('projects')} className="hover:text-white transition-colors">PROJECTS</button>
            <button onClick={() => setActiveTab('products')} className="hover:text-white transition-colors">PRODUCTS</button>
            <button onClick={() => setActiveTab('support')} className="hover:text-white transition-colors">SUPPORT</button>
          </div>
        </div>
      </footer>

    </div>
  );
}