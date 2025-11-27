'use client';

import SupportModal from '../../components/SupportModal';
import Link from 'next/link';

export default function WiFiBandsGuideArticle() {
  const openModal = () => {
    window.dispatchEvent(new CustomEvent('openModal'));
  };

  return (
    <>
      <main className="bg-white">
        {/* Article Header */}
        <section className="bg-[var(--primary)] py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <div className="flex items-center justify-center mb-4">
                <span className="inline-block bg-[var(--accent)] text-white text-sm px-3 py-1 rounded-full mr-4">
                  Technology Guide
                </span>
                <span className="text-white text-sm">
                  12 min read • 28 November 2025
                </span>
              </div>
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
                2.4 GHz vs 5 GHz Wi-Fi: Which Network Should You Use at Home or Work?
              </h1>
              <p className="text-xl text-white max-w-3xl mx-auto">
                Reliable Wi-Fi is now essential for both residential and commercial spaces. Learn how to choose the right wireless setup to dramatically improve speed, stability, and security.
              </p>
            </div>
          </div>
        </section>

        {/* Article Content */}
        <article className="py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="prose prose-lg max-w-none">
              <p className="text-xl text-gray-700 mb-8 leading-relaxed">
                With more devices connecting than ever before, choosing the right wireless setup—2.4 GHz, 5 GHz, and properly configured guest networks—can dramatically improve speed, stability, and security. This guide explains the differences between Wi-Fi bands, which devices should use each network, and how businesses and households can build secure, scalable wireless environments that perform consistently.
              </p>

              {/* WiFi Networks Image */}
              <div className="my-12 text-center">
                <img 
                  src="/assets/wifinetworks.jpg" 
                  alt="2.4 GHz vs 5 GHz Wi-Fi networks comparison showing different wireless frequencies" 
                  className="mx-auto max-w-full h-auto rounded-lg shadow-lg"
                  style={{ maxHeight: '400px' }}
                />
              </div>

              <h2 className="text-3xl font-bold text-[var(--primary)] mt-12 mb-6">Understanding the Difference Between 2.4 GHz and 5 GHz Wi-Fi</h2>

              <h3 className="text-2xl font-bold text-[var(--primary)] mt-8 mb-4">2.4 GHz Wi-Fi</h3>
              <p className="text-gray-700 mb-6 leading-relaxed">
                This band is widely supported and preferred by many IoT devices. It provides:
              </p>
              <ul className="list-disc list-inside text-gray-700 mb-6 space-y-2">
                <li><strong>Wider coverage</strong> and better wall penetration</li>
                <li><strong>Suitable range</strong> for outdoor or distant devices</li>
                <li><strong>Lower speeds</strong> due to congestion and interference</li>
              </ul>
              <p className="text-gray-700 mb-6 leading-relaxed">
                Common household and commercial devices still rely on 2.4 GHz because it offers superior range despite slower throughput.
              </p>

              <h3 className="text-2xl font-bold text-[var(--primary)] mt-8 mb-4">5 GHz Wi-Fi</h3>
              <p className="text-gray-700 mb-6 leading-relaxed">
                The 5 GHz band provides:
              </p>
              <ul className="list-disc list-inside text-gray-700 mb-6 space-y-2">
                <li><strong>Higher speeds</strong> and lower latency</li>
                <li><strong>Better performance</strong> in high-density areas</li>
                <li><strong>Reduced interference</strong> from household electronics</li>
              </ul>
              <p className="text-gray-700 mb-6 leading-relaxed">
                This band is ideal for modern devices that require fast, responsive connectivity.
              </p>

              <div className="bg-blue-50 border-l-4 border-blue-500 p-4 my-8">
                <h4 className="font-bold text-blue-800 mb-2">Quick Tip</h4>
                <p className="text-blue-700">
                  Think of 2.4 GHz as a country road—slower but reaches farther. 5 GHz is like a motorway—faster but has a shorter range.
                </p>
              </div>

              <h2 className="text-3xl font-bold text-[var(--primary)] mt-12 mb-6">Residential Wi-Fi: Which Devices Should Use 2.4 GHz or 5 GHz?</h2>
              
              <p className="text-gray-700 mb-6 leading-relaxed">
                Homes now average between 25 and 50 connected devices, many of which communicate in the background. Using the correct Wi-Fi band for each device prevents congestion and improves performance.
              </p>

              <h3 className="text-2xl font-bold text-[var(--primary)] mt-8 mb-4">Devices That Should Use 2.4 GHz at Home</h3>
              <p className="text-gray-700 mb-4 leading-relaxed">
                Many consumer smart home devices require 2.4 GHz. These include:
              </p>
              <div className="bg-orange-50 border-l-4 border-orange-500 p-4 mb-6">
                <ul className="list-disc list-inside text-orange-800 space-y-2">
                  <li>Solar inverters (Fronius, Sungrow, GoodWe, etc.)</li>
                  <li>Pool monitoring systems</li>
                  <li>Smart lights, switches, and smart plugs</li>
                  <li>Robot vacuums</li>
                  <li>Smart locks and home sensors</li>
                  <li>Older laptops and phones</li>
                </ul>
              </div>
              <p className="text-gray-700 mb-6 leading-relaxed">
                These devices do not need high speed—they need range and consistent connectivity.
              </p>

              <h3 className="text-2xl font-bold text-[var(--primary)] mt-8 mb-4">Devices That Should Use 5 GHz at Home</h3>
              <p className="text-gray-700 mb-4 leading-relaxed">
                High-speed devices are best on 5 GHz:
              </p>
              <div className="bg-green-50 border-l-4 border-green-500 p-4 mb-6">
                <ul className="list-disc list-inside text-green-800 space-y-2">
                  <li>4K/8K TVs (Netflix, YouTube, streaming services)</li>
                  <li>Gaming consoles (PS5, Xbox Series, Nintendo Switch)</li>
                  <li>Modern smartphones and tablets</li>
                  <li>Laptops for work-from-home</li>
                  <li>Video conferencing hardware</li>
                  <li>Wi-Fi cameras located near access points</li>
                </ul>
              </div>
              <p className="text-gray-700 mb-6 leading-relaxed">
                Switching these devices to 5 GHz reduces congestion on the 2.4 GHz band.
              </p>

              <h2 className="text-3xl font-bold text-[var(--primary)] mt-12 mb-6">Do You Need Additional Access Points or a Dedicated Switch?</h2>
              
              <p className="text-gray-700 mb-6 leading-relaxed">
                As the number of connected devices grows, a single modem/router may no longer be enough. You may require:
              </p>
              <ul className="list-disc list-inside text-gray-700 mb-6 space-y-2">
                <li>Additional access points</li>
                <li>A mesh Wi-Fi system</li>
                <li>A PoE switch for wired stability</li>
                <li>A router that can handle high device density</li>
              </ul>

              <div className="bg-red-50 border-l-4 border-red-500 p-4 my-8">
                <h4 className="font-bold text-red-800 mb-2">Important</h4>
                <p className="text-red-700">
                  Most ISP-provided routers cannot sustain dozens of simultaneous devices without dropouts. Blue Moon IT commonly upgrades homes with UniFi, TP-Link Omada, or Eero systems to improve coverage and reliability.
                </p>
              </div>

              <h2 className="text-3xl font-bold text-[var(--primary)] mt-12 mb-6">Why Use a Guest Network in Your Home?</h2>
              
              <p className="text-gray-700 mb-6 leading-relaxed">
                A guest network is more than a convenience—it&apos;s an important security layer.
              </p>

              <h3 className="text-2xl font-bold text-[var(--primary)] mt-8 mb-4">Benefits of a Residential Guest Network</h3>
              <div className="bg-purple-50 border-l-4 border-purple-500 p-4 mb-6">
                <ul className="list-disc list-inside text-purple-800 space-y-2">
                  <li>Keeps visitors off your personal devices and data</li>
                  <li>Protects IoT devices from potential intrusions</li>
                  <li>Prevents accidental access to smart home controls</li>
                  <li>Keeps family and guests on a separate bandwidth pool</li>
                </ul>
              </div>
              <p className="text-gray-700 mb-6 leading-relaxed">
                Even smart devices that only need cloud access (smart plugs, some appliances, IoT sensors) can safely be placed on a guest network.
              </p>

              <h2 className="text-3xl font-bold text-[var(--primary)] mt-12 mb-6">Commercial Wi-Fi: Choosing the Right Network Setup</h2>
              
              <p className="text-gray-700 mb-6 leading-relaxed">
                Business environments have very different requirements from residential spaces. Workplaces often support:
              </p>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 my-6">
                <div className="bg-gray-100 p-3 rounded text-center text-gray-700">Employees</div>
                <div className="bg-gray-100 p-3 rounded text-center text-gray-700">Guests</div>
                <div className="bg-gray-100 p-3 rounded text-center text-gray-700">Contractors</div>
                <div className="bg-gray-100 p-3 rounded text-center text-gray-700">POS Systems</div>
                <div className="bg-gray-100 p-3 rounded text-center text-gray-700">Security Cameras</div>
                <div className="bg-gray-100 p-3 rounded text-center text-gray-700">IoT Devices</div>
                <div className="bg-gray-100 p-3 rounded text-center text-gray-700">Staff Mobiles</div>
                <div className="bg-gray-100 p-3 rounded text-center text-gray-700">VoIP Phones</div>
                <div className="bg-gray-100 p-3 rounded text-center text-gray-700">Cloud Software</div>
              </div>
              <p className="text-gray-700 mb-6 leading-relaxed">
                This makes proper network separation and wireless planning critical.
              </p>

              <h3 className="text-2xl font-bold text-[var(--primary)] mt-8 mb-4">When Businesses Should Use 2.4 GHz</h3>
              <p className="text-gray-700 mb-4 leading-relaxed">
                Certain business devices rely on long-range, stable signals:
              </p>
              <ul className="list-disc list-inside text-gray-700 mb-6 space-y-2">
                <li>EFTPOS terminals</li>
                <li>Barcode scanners</li>
                <li>Building sensors (temperature, humidity, occupancy)</li>
                <li>Industrial equipment</li>
                <li>Wireless printers (in larger spaces)</li>
              </ul>
              <p className="text-gray-700 mb-6 leading-relaxed">
                These systems typically use low-power radios compatible with 2.4 GHz.
              </p>

              <h3 className="text-2xl font-bold text-[var(--primary)] mt-8 mb-4">When Businesses Should Use 5 GHz</h3>
              <p className="text-gray-700 mb-4 leading-relaxed">
                Fast, interference-resistant Wi-Fi is essential for:
              </p>
              <ul className="list-disc list-inside text-gray-700 mb-6 space-y-2">
                <li>Staff laptops and desktops</li>
                <li>Video conferencing systems</li>
                <li>VoIP phones and softphones</li>
                <li>Digital signage</li>
                <li>POS systems close to access points</li>
                <li>Staff smartphones and tablets</li>
              </ul>
              <p className="text-gray-700 mb-6 leading-relaxed">
                Businesses benefit greatly from multiple 5 GHz access points placed strategically around the site.
              </p>

              <h2 className="text-3xl font-bold text-[var(--primary)] mt-12 mb-6">Why Guest Networks and VLANs Are Essential for Businesses</h2>
              
              <p className="text-gray-700 mb-6 leading-relaxed">
                A commercial Wi-Fi deployment is incomplete without network segmentation.
              </p>

              <h3 className="text-2xl font-bold text-[var(--primary)] mt-8 mb-4">Guest Network in a Business</h3>
              <p className="text-gray-700 mb-4 leading-relaxed">
                A dedicated guest network:
              </p>
              <div className="bg-teal-50 border-l-4 border-teal-500 p-4 mb-6">
                <ul className="list-disc list-inside text-teal-800 space-y-2">
                  <li>Keeps customers away from internal systems</li>
                  <li>Protects company data</li>
                  <li>Prevents malware spreading from guest devices</li>
                  <li>Allows bandwidth limits and usage tracking</li>
                  <li>Helps meet cybersecurity insurance requirements</li>
                </ul>
              </div>

              <h3 className="text-2xl font-bold text-[var(--primary)] mt-8 mb-4">Using VLANs for Additional Segmentation</h3>
              <p className="text-gray-700 mb-4 leading-relaxed">
                Modern Wi-Fi systems allow the network to be divided into virtual LANs, such as:
              </p>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 my-6">
                <div className="bg-blue-100 p-3 rounded text-center text-blue-800 font-semibold">Staff Network</div>
                <div className="bg-blue-100 p-3 rounded text-center text-blue-800 font-semibold">Management/Admin</div>
                <div className="bg-blue-100 p-3 rounded text-center text-blue-800 font-semibold">EFTPOS Terminals</div>
                <div className="bg-blue-100 p-3 rounded text-center text-blue-800 font-semibold">IoT Devices</div>
                <div className="bg-blue-100 p-3 rounded text-center text-blue-800 font-semibold">Security Cameras</div>
                <div className="bg-blue-100 p-3 rounded text-center text-blue-800 font-semibold">Guest Wi-Fi</div>
              </div>
              <p className="text-gray-700 mb-6 leading-relaxed">
                This ensures each device type gets the access, speed, and protection it needs.
              </p>

              <h2 className="text-3xl font-bold text-[var(--primary)] mt-12 mb-6">Final Thoughts</h2>
              <p className="text-gray-700 mb-6 leading-relaxed">
                Choosing the right Wi-Fi band and network structure dramatically improves performance, coverage, and security. Whether you&apos;re managing a family home full of smart devices or a business with hundreds of connections, using the correct mix of 2.4 GHz, 5 GHz, and guest networks creates a reliable and future-proof setup.
              </p>

              <hr className="my-12 border-gray-300" />

              <div className="bg-gray-50 p-8 rounded-lg">
                <h3 className="text-2xl font-bold text-[var(--primary)] mb-4">Key Takeaways:</h3>
                <ul className="list-disc list-inside text-gray-700 space-y-2">
                  <li>Use 2.4 GHz for IoT devices, smart home gadgets, and devices needing range over speed</li>
                  <li>Use 5 GHz for high-bandwidth activities: streaming, gaming, video calls, and work devices</li>
                  <li>Guest networks add essential security for both homes and businesses</li>
                  <li>Most ISP routers cannot handle 25+ devices—consider mesh systems or additional access points</li>
                  <li>Businesses should use VLANs to segment staff, guest, IoT, and payment networks</li>
                  <li>Strategic access point placement is critical for commercial environments</li>
                  <li>Network segmentation helps meet cybersecurity insurance requirements</li>
                </ul>
              </div>
            </div>
          </div>
        </article>

        {/* Call to Action */}
        <section className="py-16 bg-[var(--primary)]">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">
              Get Professional Wi-Fi Setup with Blue Moon IT
            </h2>
            <p className="text-xl text-white mb-8 max-w-2xl mx-auto">
              If your Wi-Fi is slow, unreliable, or overloaded, Blue Moon IT can design and install a network that&apos;s fast, secure, and built for the future.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
              <div className="bg-slate-800 bg-opacity-80 rounded-lg p-6 border border-slate-600">
                <div className="mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 mx-auto text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8.111 16.404a5.5 5.5 0 017.778 0M12 20h.01m-7.08-7.071c3.904-3.905 10.236-3.905 14.141 0M1.394 9.393c5.857-5.857 15.355-5.857 21.213 0" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold mb-2 text-white">Residential & Commercial Wi-Fi</h3>
                <p className="text-sm text-gray-200">Professional Wi-Fi upgrades with mesh systems and multi-AP installations for complete coverage.</p>
              </div>
              
              <div className="bg-slate-800 bg-opacity-80 rounded-lg p-6 border border-slate-600">
                <div className="mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 mx-auto text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold mb-2 text-white">VLANs & Network Segmentation</h3>
                <p className="text-sm text-gray-200">Security-focused Wi-Fi deployment with proper network separation for business environments.</p>
              </div>
              
              <div className="bg-slate-800 bg-opacity-80 rounded-lg p-6 border border-slate-600">
                <div className="mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 mx-auto text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold mb-2 text-white">Smart Home & IoT Integration</h3>
                <p className="text-sm text-gray-200">Commercial-grade network hardware configured for smart homes and IoT device management.</p>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link 
                href="/services/wifi"
                className="bg-white hover:bg-gray-100 text-[var(--primary)] px-8 py-3 rounded-md shadow-md hover:shadow-lg transition-all duration-300 font-semibold"
              >
                Wi-Fi Services
              </Link>
              <button 
                onClick={openModal}
                className="accent-gradient text-white px-8 py-3 rounded-md shadow-md hover:shadow-lg transition-all duration-300 font-semibold"
              >
                Get Expert Help
              </button>
            </div>
            
            <p className="text-white mt-8 opacity-80">
              Serving the Illawarra, Wollongong, Shoalhaven, Eurobodalla and Southern Highlands regions.
            </p>
          </div>
        </section>
      </main>
      <SupportModal />
    </>
  );
}