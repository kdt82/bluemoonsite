'use client';

import SupportModal from '../../components/SupportModal';
import Link from 'next/link';

export default function WiFiGuideArticle() {
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
                  15 min read • 24 June 2025
                </span>
              </div>
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
                The Ultimate Guide to Home WiFi for Australian Homes
              </h1>
              <p className="text-xl text-white max-w-3xl mx-auto">
                A reliable, high-speed WiFi connection is now as essential as electricity or running water in the modern Australian home. Master your home network for seamless streaming, gaming, and smart home connectivity.
              </p>
            </div>
          </div>
        </section>

        {/* Article Content */}
        <article className="py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="prose prose-lg max-w-none">
              <p className="text-xl text-gray-700 mb-8 leading-relaxed">
                Whether you&apos;re streaming movies, working from home, gaming online, or running a smart home filled with connected devices, understanding your WiFi setup is crucial to getting the best performance. This guide breaks down everything you need to know about WiFi standards, frequency bands, interference, and optimisation—helping you make informed decisions for a seamless online experience.
              </p>

              {/* WiFi Router Image */}
              <div className="my-12 text-center">
                <img 
                  src="/assets/wifi.png" 
                  alt="Modern WiFi router with multiple antennas showing wireless connectivity" 
                  className="mx-auto max-w-full h-auto rounded-lg shadow-lg"
                  style={{ maxHeight: '400px' }}
                />
              </div>

              <h2 className="text-3xl font-bold text-[var(--primary)] mt-12 mb-6">Understanding WiFi Frequency Bands</h2>
              
              <p className="text-gray-700 mb-6 leading-relaxed">
                Think of WiFi frequency bands as different highways for your data. Each has unique strengths and limitations:
              </p>

              <h3 className="text-2xl font-bold text-[var(--primary)] mt-8 mb-4">2.4 GHz Band: The Long-Range Workhorse</h3>
              <ul className="list-disc list-inside text-gray-700 mb-6 space-y-2">
                <li><strong>Range:</strong> Best for covering large areas and penetrating walls and floors.</li>
                <li><strong>Speed:</strong> Lower maximum speeds compared to newer bands.</li>
                <li><strong>Interference:</strong> Highly susceptible to congestion from microwaves, Bluetooth, cordless phones, baby monitors, and neighbouring networks due to limited non-overlapping channels.</li>
                <li><strong>Best Use:</strong> Ideal for devices far from the router or for basic tasks like browsing and smart home gadgets.</li>
              </ul>

              <h3 className="text-2xl font-bold text-[var(--primary)] mt-8 mb-4">5 GHz Band: The High-Speed Expressway</h3>
              <ul className="list-disc list-inside text-gray-700 mb-6 space-y-2">
                <li><strong>Range:</strong> Shorter than 2.4 GHz, with reduced wall penetration.</li>
                <li><strong>Speed:</strong> Supports much higher data rates, making it perfect for 4K streaming, gaming, and video calls.</li>
                <li><strong>Interference:</strong> Less crowded, with more channels and less overlap from household devices.</li>
                <li><strong>Best Use:</strong> Great for high-bandwidth activities on devices close to the router.</li>
              </ul>

              <h3 className="text-2xl font-bold text-[var(--primary)] mt-8 mb-4">6 GHz Band: The Next-Gen Superhighway (WiFi 6E and WiFi 7)</h3>
              <ul className="list-disc list-inside text-gray-700 mb-6 space-y-2">
                <li><strong>Range:</strong> Shortest of the three, with the weakest penetration through obstacles.</li>
                <li><strong>Speed:</strong> Offers the highest speeds and lowest latency, with minimal interference as only the latest devices support it.</li>
                <li><strong>Best Use:</strong> Suited for cutting-edge applications like VR/AR, 8K streaming, and professional tasks in the same room as the router.</li>
              </ul>

              <h2 className="text-3xl font-bold text-[var(--primary)] mt-12 mb-6">WiFi Standards: What Do the Numbers Mean?</h2>
              
              <p className="text-gray-700 mb-6 leading-relaxed">
                WiFi technology evolves in generations, each bringing new features and improvements:
              </p>

              <h3 className="text-2xl font-bold text-[var(--primary)] mt-8 mb-4">WiFi 5 (802.11ac)</h3>
              <ul className="list-disc list-inside text-gray-700 mb-6 space-y-2">
                <li><strong>Released:</strong> 2013</li>
                <li><strong>Bands:</strong> Primarily 5 GHz (some dual-band models also use 2.4 GHz)</li>
                <li><strong>Speed:</strong> Up to 3.5 Gbps (theoretical)</li>
                <li><strong>Features:</strong> MU-MIMO for simultaneous device connections, beamforming for targeted signals.</li>
                <li><strong>Best For:</strong> Most homes with moderate device counts and 4K streaming.</li>
              </ul>

              <h3 className="text-2xl font-bold text-[var(--primary)] mt-8 mb-4">WiFi 6 (802.11ax)</h3>
              <ul className="list-disc list-inside text-gray-700 mb-6 space-y-2">
                <li><strong>Released:</strong> 2019</li>
                <li><strong>Bands:</strong> 2.4 GHz and 5 GHz</li>
                <li><strong>Speed:</strong> Up to 9.6 Gbps (theoretical)</li>
                <li><strong>Features:</strong> OFDMA for efficient data delivery, improved MU-MIMO, Target Wake Time for better battery life, and BSS Coloring to reduce interference.</li>
                <li><strong>Best For:</strong> Smart homes with many devices, gaming, and video conferencing.</li>
              </ul>

              <h3 className="text-2xl font-bold text-[var(--primary)] mt-8 mb-4">WiFi 6E</h3>
              <ul className="list-disc list-inside text-gray-700 mb-6 space-y-2">
                <li><strong>Enhancement:</strong> Adds access to the 6 GHz band, providing more spectrum and less interference.</li>
                <li><strong>Best For:</strong> High-performance homes and future-proofing.</li>
              </ul>

              <h3 className="text-2xl font-bold text-[var(--primary)] mt-8 mb-4">WiFi 7 (802.11be)</h3>
              <ul className="list-disc list-inside text-gray-700 mb-6 space-y-2">
                <li><strong>Emerging Standard:</strong> Devices are starting to appear in 2024-2025.</li>
                <li><strong>Bands:</strong> 2.4 GHz, 5 GHz, and 6 GHz.</li>
                <li><strong>Speed:</strong> Up to 46 Gbps (theoretical)</li>
                <li><strong>Features:</strong> Multi-Link Operation (using multiple bands at once), wider channels, and ultra-low latency.</li>
                <li><strong>Best For:</strong> Future-proofing, VR/AR, 8K streaming, and very high-density environments.</li>
              </ul>

              <h2 className="text-3xl font-bold text-[var(--primary)] mt-12 mb-6">Common Sources of WiFi Interference</h2>
              
              <p className="text-gray-700 mb-6 leading-relaxed">
                Interference is a major cause of slow or unreliable WiFi. Here&apos;s what to watch for:
              </p>

              <div className="space-y-6">
                <div className="bg-red-50 border-l-4 border-red-500 p-4">
                  <h4 className="font-bold text-red-800 mb-2">2.4 GHz Band Interference</h4>
                  <p className="text-red-700">
                    Microwaves, Bluetooth devices, baby monitors, cordless phones, USB 3.0 devices, LED lights, and neighbouring networks.
                  </p>
                </div>

                <div className="bg-orange-50 border-l-4 border-orange-500 p-4">
                  <h4 className="font-bold text-orange-800 mb-2">5 GHz Band Interference</h4>
                  <p className="text-orange-700">
                    Weather radar, satellite communications, and high-density WiFi environments.
                  </p>
                </div>

                <div className="bg-green-50 border-l-4 border-green-500 p-4">
                  <h4 className="font-bold text-green-800 mb-2">6 GHz Band Interference</h4>
                  <p className="text-green-700">
                    Minimal interference for now, as it&apos;s a new spectrum with limited device support.
                  </p>
                </div>
              </div>

              <div className="bg-blue-50 border-l-4 border-blue-500 p-4 mt-6">
                <h4 className="font-bold text-blue-800 mb-2">Building Materials Matter</h4>
                <p className="text-blue-700">
                  WiFi signals weaken as they pass through walls and floors. Materials like concrete, brick, and metal cause significant signal loss, especially at higher frequencies (5 GHz and 6 GHz). Glass and drywall have less impact, but water (like fish tanks) can also absorb signals.
                </p>
              </div>

              <h2 className="text-3xl font-bold text-[var(--primary)] mt-12 mb-6">Optimising Your Home WiFi</h2>

              <h3 className="text-2xl font-bold text-[var(--primary)] mt-8 mb-4">Router Placement</h3>
              <ul className="list-disc list-inside text-gray-700 mb-6 space-y-2">
                <li>Place your router in a central, elevated location—ideally 3–6 feet off the ground.</li>
                <li>Avoid placing it in cupboards, near large metal objects, or next to other electronics.</li>
                <li>For multi-storey homes, position the router on the middle floor for balanced coverage.</li>
              </ul>

              <h3 className="text-2xl font-bold text-[var(--primary)] mt-8 mb-4">Choosing the Right Band</h3>
              <ul className="list-disc list-inside text-gray-700 mb-6 space-y-2">
                <li>Use 5 GHz or 6 GHz for high-speed devices close to the router (streaming, gaming, video calls).</li>
                <li>Reserve 2.4 GHz for IoT devices, smart home gadgets, and devices far from the router.</li>
              </ul>

              <h3 className="text-2xl font-bold text-[var(--primary)] mt-8 mb-4">Mesh Systems and Range Extenders</h3>
              <ul className="list-disc list-inside text-gray-700 mb-6 space-y-2">
                <li>For homes larger than 1,500 sq ft or with multiple floors, consider a mesh WiFi system. Mesh nodes extend coverage without sacrificing speed.</li>
                <li>Use wired connections (Ethernet) for mesh backhaul where possible for best performance.</li>
              </ul>

              <h3 className="text-2xl font-bold text-[var(--primary)] mt-8 mb-4">Channel Selection</h3>
              <ul className="list-disc list-inside text-gray-700 mb-6 space-y-2">
                <li>Use a WiFi analyser app to find the least congested channel, especially on the 2.4 GHz band (stick to channels 1, 6, or 11).</li>
                <li>On 5 GHz and 6 GHz, use wider channels for higher speeds, but be aware of potential interference from radar or other networks.</li>
              </ul>

              <h3 className="text-2xl font-bold text-[var(--primary)] mt-8 mb-4">Quality of Service (QoS)</h3>
              <p className="text-gray-700 mb-6 leading-relaxed">
                Prioritise video calls, gaming, and streaming in your router&apos;s settings to ensure smooth performance during peak times.
              </p>

              <h2 className="text-3xl font-bold text-[var(--primary)] mt-12 mb-6">Future-Proofing Your Home Network</h2>

              <div className="space-y-6">
                <div className="bg-purple-50 border-l-4 border-purple-500 p-4">
                  <h4 className="font-bold text-purple-800 mb-2">Device Upgrades</h4>
                  <p className="text-purple-700">
                    When buying new devices, look for WiFi 6E or WiFi 7 compatibility to ensure longevity.
                  </p>
                </div>

                <div className="bg-indigo-50 border-l-4 border-indigo-500 p-4">
                  <h4 className="font-bold text-indigo-800 mb-2">Router Replacement</h4>
                  <p className="text-indigo-700">
                    Plan to upgrade your router every 3–5 years to keep up with new standards and security updates.
                  </p>
                </div>

                <div className="bg-teal-50 border-l-4 border-teal-500 p-4">
                  <h4 className="font-bold text-teal-800 mb-2">Smart Home Growth</h4>
                  <p className="text-teal-700">
                    With the rise of smart devices, expect to have 50+ connected gadgets in the next few years. Ensure your network can handle the load by segmenting IoT devices onto a separate network for security and reliability.
                  </p>
                </div>
              </div>

              <h2 className="text-3xl font-bold text-[var(--primary)] mt-12 mb-6">Troubleshooting Common WiFi Issues</h2>

              <h3 className="text-2xl font-bold text-[var(--primary)] mt-8 mb-4">Slow Speeds</h3>
              <ul className="list-disc list-inside text-gray-700 mb-6 space-y-2">
                <li>Compare your internet plan with actual speeds.</li>
                <li>Test both wired and wireless connections.</li>
                <li>Check for channel congestion and interference.</li>
                <li>Update your router&apos;s firmware regularly.</li>
              </ul>

              <h3 className="text-2xl font-bold text-[var(--primary)] mt-8 mb-4">Poor Coverage</h3>
              <ul className="list-disc list-inside text-gray-700 mb-6 space-y-2">
                <li>Optimise router placement.</li>
                <li>Add mesh nodes or extenders if needed.</li>
                <li>Use higher-gain antennas if supported.</li>
              </ul>

              <h3 className="text-2xl font-bold text-[var(--primary)] mt-8 mb-4">Connection Drops</h3>
              <ul className="list-disc list-inside text-gray-700 mb-6 space-y-2">
                <li>Update device drivers.</li>
                <li>Check for interference and overheating.</li>
                <li>Ensure your router has proper ventilation.</li>
              </ul>

              <h2 className="text-3xl font-bold text-[var(--primary)] mt-12 mb-6">Conclusion</h2>
              <p className="text-gray-700 mb-6 leading-relaxed">
                A well-optimised WiFi network can transform your home internet experience, eliminating dead zones, lag, and frustration. By understanding the basics of WiFi bands, standards, and interference, and following these practical tips, you can build a robust, future-ready home network that keeps up with your digital lifestyle.
              </p>

              <hr className="my-12 border-gray-300" />

              <div className="bg-gray-50 p-8 rounded-lg">
                <h3 className="text-2xl font-bold text-[var(--primary)] mb-4">Key Takeaways:</h3>
                <ul className="list-disc list-inside text-gray-700 space-y-2">
                  <li>Choose the right frequency band for each device: 2.4 GHz for range, 5 GHz for speed, 6 GHz for cutting-edge performance</li>
                  <li>Consider WiFi 6E or WiFi 7 for future-proofing your home network</li>
                  <li>Optimise router placement for central, elevated coverage</li>
                  <li>Use mesh systems for larger homes and multiple floors</li>
                  <li>Understand common interference sources and how to avoid them</li>
                  <li>Segment IoT devices for better security and performance</li>
                  <li>Regularly update firmware and troubleshoot performance issues</li>
                </ul>
              </div>
            </div>
          </div>
        </article>

        {/* Call to Action */}
        <section className="py-16 bg-[var(--primary)]">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">
              Need WiFi Installation or Troubleshooting?
            </h2>
            <p className="text-xl text-white mb-8 max-w-2xl mx-auto">
              Our IT experts can help you set up, optimise, or troubleshoot your home WiFi network for peak performance.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
              <div className="bg-slate-800 bg-opacity-80 rounded-lg p-6 border border-slate-600">
                <div className="mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 mx-auto text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8.111 16.404a5.5 5.5 0 017.778 0M12 20h.01m-7.08-7.071c3.904-3.905 10.236-3.905 14.141 0M1.394 9.393c5.857-5.857 15.355-5.857 21.213 0" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold mb-2 text-white">WiFi Setup</h3>
                <p className="text-sm text-gray-200">Professional router installation and network configuration for optimal coverage and speed.</p>
              </div>
              
              <div className="bg-slate-800 bg-opacity-80 rounded-lg p-6 border border-slate-600">
                <div className="mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 mx-auto text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold mb-2 text-white">Speed Optimisation</h3>
                <p className="text-sm text-gray-200">Maximise your internet speeds with channel optimisation and interference reduction.</p>
              </div>
              
              <div className="bg-slate-800 bg-opacity-80 rounded-lg p-6 border border-slate-600">
                <div className="mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 mx-auto text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold mb-2 text-white">Mesh Networks</h3>
                <p className="text-sm text-gray-200">Eliminate dead zones with professional mesh system installation and configuration.</p>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link 
                href="/services/wifi"
                className="bg-white hover:bg-gray-100 text-[var(--primary)] px-8 py-3 rounded-md shadow-md hover:shadow-lg transition-all duration-300 font-semibold"
              >
                WiFi Services
              </Link>
              <button 
                onClick={openModal}
                className="accent-gradient text-white px-8 py-3 rounded-md shadow-md hover:shadow-lg transition-all duration-300 font-semibold"
              >
                Get Expert Help
              </button>
            </div>
          </div>
        </section>
      </main>
      <SupportModal />
    </>
  );
} 