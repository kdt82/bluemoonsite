'use client';

import { useState } from 'react';
import SupportModal from '../components/SupportModal';

interface FAQItem {
  id: number;
  question: string;
  answer: string;
  category?: string;
}

// Comprehensive IT troubleshooting FAQ data
const faqData: FAQItem[] = [
  // Service Information
  {
    id: 1,
    question: "What areas do you service?",
    answer: "We provide IT support services throughout the Illawarra, Shoalhaven, Eurobodalla, and Southern Highlands regions. This includes Wollongong, Port Kembla, Shellharbour, Kiama, Nowra, Ulladulla, Batemans Bay, Bowral, and surrounding areas.",
    category: "Service Information"
  },
  {
    id: 2,
    question: "What are your operating hours?",
    answer: "Our regular business hours are 8:30am to 5:00pm, Monday to Friday. We also offer emergency support outside these hours for urgent IT issues that can't wait.",
    category: "Service Information"
  },
  {
    id: 3,
    question: "Do you offer remote support?",
    answer: "Yes, we provide secure remote support services. Many computer issues can be diagnosed and resolved remotely, which is often faster and more convenient than an on-site visit.",
    category: "Service Information"
  },
  {
    id: 4,
    question: "How much do your services cost?",
    answer: "Our pricing varies depending on the service required. We offer competitive rates and will provide a quote before beginning any work. Contact us for a free consultation and estimate.",
    category: "Service Information"
  },
  
  // Computer Performance Issues
  {
    id: 5,
    question: "My computer is running slowly - what can I do?",
    answer: "Common causes include too many startup programmes, insufficient storage space, malware, or outdated hardware drivers.\n\nSolutions:\n• Press Ctrl + Shift + Esc to open Task Manager, click 'Startup' tab and disable unnecessary programmes\n• Free up disk space by running Disk Cleanup (type 'disk cleanup' in Start menu search)\n• Restart your computer regularly (at least once a week)\n• Keep at least 15% of your hard disk free for optimal performance\n• Run Windows antivirus scan: Settings > Update & Security > Windows Security > Virus & threat protection > Quick scan",
    category: "Computer Performance"
  },
  {
    id: 6,
    question: "My computer keeps freezing or programmes become unresponsive - how do I fix this?",
    answer: "This is usually caused by insufficient memory, software bugs, system overload, or corrupted programme files.\n\nSolutions:\n• Wait 2-3 minutes as the programme may recover on its own\n• Press Ctrl + Alt + Delete and select Task Manager\n• Find the unresponsive programme and click 'End task'\n• Save work in other programmes before ending tasks to prevent data loss\n• Restart the programme after closing it\n• If the problem persists, restart your computer\n• Update the problematic software to the latest version\n• Consider uninstalling and reinstalling the programme if freezing continues",
    category: "Computer Performance"
  },
  {
    id: 7,
    question: "My computer is overheating - what should I do?",
    answer: "Overheating is often caused by dust buildup, blocked vents, failing fans, or intensive software usage.\n\nSolutions:\n• Shut down computer immediately if extremely hot to prevent damage\n• Clean air vents with compressed air (computer must be off and unplugged)\n• Ensure adequate airflow around computer - don't block vents with objects\n• Close unnecessary programmes to reduce system load\n• Use laptop cooling pad for laptops used intensively\n• Check Task Manager for programmes using high CPU - close if unnecessary\n• Professional cleaning may be needed for severe dust buildup inside the computer",
    category: "Computer Performance"
  },
  
  // Network and Connectivity
  {
    id: 8,
    question: "I'm having WiFi connection problems - how do I troubleshoot this?",
    answer: "WiFi issues can stem from router problems, network adapter issues, interference, or incorrect passwords.\n\nSolutions:\n• Turn WiFi off and on in your system tray\n• Restart your router by unplugging it for 30 seconds, then plugging back in (wait 2-3 minutes for full startup)\n• Forget and reconnect to your network: Settings > Network & Internet > WiFi > Manage known networks, click your network and select 'Forget', then reconnect\n• Run Windows Network Troubleshooter: Right-click the WiFi icon in system tray and select 'Troubleshoot problems'\n• Check if other devices can connect to rule out router issues",
    category: "Network & Connectivity"
  },
  {
    id: 9,
    question: "I can't connect to network drives - what's wrong?",
    answer: "Network drive issues often involve network credentials, firewall settings, network discovery being disabled, or server unavailability.\n\nSolutions:\n• Ensure all computers are on the same network and network discovery is enabled\n• Try accessing by IP address instead of computer name: \\\\192.168.1.100 (replace with actual IP)\n• Check Windows credentials: Control Panel > Credential Manager > Windows Credentials\n• Enable network discovery: Control Panel > Network and Sharing Centre > Change advanced sharing settings\n• Restart network services: Run Command Prompt as administrator, type 'net stop workstation' then 'net start workstation'\n• Verify shared folder permissions on host computer",
    category: "Network & Connectivity"
  },
  {
    id: 10,
    question: "My external monitor isn't being detected - how do I fix this?",
    answer: "Monitor detection issues can be caused by cable problems, display settings, driver problems, or hardware compatibility.\n\nSolutions:\n• Check cable connections on both computer and monitor ends\n• Try different cable (HDMI, VGA, DisplayPort) if available\n• Press Windows key + P to open projection settings, select 'Extend' or 'Duplicate'\n• Right-click desktop > Display settings > click 'Detect' button\n• Update graphics drivers: Device Manager > Display adapters > right-click graphics card > Update driver\n• Test monitor with different computer to verify monitor functionality\n• For laptops: Try function key combination (usually Fn + F4, F5, or F8) to toggle external display",
    category: "Network & Connectivity"
  },
  
  // Hardware Issues
  {
    id: 11,
    question: "My printer isn't working - what should I check?",
    answer: "Printer problems often involve connection issues, outdated drivers, paper jams, or empty cartridges.\n\nSolutions:\n• Check physical connections: Ensure USB cable is secure or WiFi printer is connected to the same network\n• Turn printer off and on again, clear any paper jams by gently removing stuck paper\n• Set as default printer: Settings > Devices > Printers & scanners, click your printer, and select 'Manage' > 'Set as default'\n• Update printer drivers: In the same menu, click 'Remove device', then 'Add a printer or scanner' to reinstall\n• Check ink/toner levels and replace if necessary",
    category: "Hardware Issues"
  },
  {
    id: 12,
    question: "My keyboard or mouse isn't working - how do I troubleshoot?",
    answer: "Input device problems can be connection issues, driver problems, battery depletion (wireless), or hardware failure.\n\nSolutions:\n• Check physical connections for wired devices\n• For wireless devices: Replace batteries, ensure receiver is plugged in and close to device\n• Try device on another computer to test functionality\n• Restart computer with device connected\n• Update drivers: Device Manager > Keyboards or Mice and other pointing devices > right-click device > Update driver\n• For PS/2 devices (older connections), computer must be powered off when connecting/disconnecting\n• Use on-screen keyboard as temporary solution: Settings > Ease of Access > Keyboard > Use the On-Screen Keyboard",
    category: "Hardware Issues"
  },
  {
    id: 13,
    question: "My USB devices aren't being recognised - what's the problem?",
    answer: "USB recognition issues involve driver problems, faulty USB ports, power management settings, or hardware problems.\n\nSolutions:\n• Try different USB ports, including both front and back ports on desktop computers\n• Test the USB device on another computer to confirm it's working\n• Restart computer with USB device connected\n• Update USB drivers: Device Manager > Universal Serial Bus controllers > right-click USB Root Hub > Update driver\n• Disable USB power management: Device Manager > Universal Serial Bus controllers > right-click USB Root Hub > Properties > Power Management > uncheck 'Allow computer to turn off this device'\n• For external hard drives, ensure adequate power supply or try powered USB hub",
    category: "Hardware Issues"
  },
  {
    id: 14,
    question: "I have no audio - how do I restore sound?",
    answer: "Audio problems can be muted audio, wrong output device, driver issues, or hardware problems.\n\nSolutions:\n• Check volume levels: Click speaker icon in system tray and ensure volume is up and not muted\n• Right-click speaker icon and select 'Open Sound settings' - ensure correct output device is selected\n• Test with different audio source (different video, music file, or website)\n• Update audio drivers: Right-click Start button > Device Manager > Sound, video and game controllers > right-click audio device > Update driver\n• Run Windows Audio Troubleshooter: Right-click speaker icon > Troubleshoot sound problems\n• Check physical connections if using external speakers or headphones",
    category: "Hardware Issues"
  },
  {
    id: 15,
    question: "My computer won't turn on at all - what could be wrong?",
    answer: "Power issues can involve power supply problems, loose connections, hardware failure, or drained battery (laptops).\n\nSolutions:\n• Check power connections: Ensure power cable is firmly plugged into both computer and wall outlet\n• Try different power outlet and power cable if available\n• For laptops: Remove battery, hold power button for 30 seconds, reinstall battery and try again\n• For desktops: Check that power supply switch (if present) is in ON position\n• Remove all external devices except keyboard and mouse, then try powering on\n• If no lights or sounds occur, this typically indicates hardware failure requiring professional repair",
    category: "Hardware Issues"
  },
  
  // Software Issues
  {
    id: 16,
    question: "I'm getting the Blue Screen of Death (BSOD) - what should I do?",
    answer: "BSOD indicates hardware failures, driver conflicts, memory issues, or overheating.\n\nSolutions:\n• Note the error code displayed on the blue screen for future reference\n• Restart your computer - if it happens once, it might be a temporary glitch\n• Boot in Safe Mode: Hold Shift whilst clicking Restart, then go to Troubleshoot > Advanced options > Startup Settings > Restart > Press F4\n• In Safe Mode, uninstall recently installed software or drivers\n• Run System File Checker: Open Command Prompt as administrator and type 'sfc /scannow'\n• If BSODs persist, contact technical support as this often indicates hardware issues",
    category: "Software Issues"
  },
  {
    id: 17,
    question: "Software won't install or update - how do I fix this?",
    answer: "Installation issues involve insufficient permissions, corrupted downloads, antivirus interference, or insufficient disk space.\n\nSolutions:\n• Run installer as administrator: Right-click installer file and select 'Run as administrator'\n• Check available disk space - ensure you have at least 2GB free for most installations\n• Temporarily disable antivirus during installation (remember to re-enable it)\n• Download installer again as the file may have been corrupted\n• Check Windows Update: Go to Settings > Update & Security > Windows Update and install pending updates\n• Clear Windows Update cache: Stop Windows Update service, delete contents of C:\\Windows\\SoftwareDistribution\\Download, restart service",
    category: "Software Issues"
  },
  {
    id: 18,
    question: "I'm having software licensing and activation issues - what can I do?",
    answer: "Activation problems involve internet connectivity, expired licences, hardware changes, or incorrect product keys.\n\nSolutions:\n• Ensure stable internet connection for online activation\n• Verify product key accuracy - check for similar characters (0 vs O, 1 vs I)\n• For Windows activation issues: Settings > Update & Security > Activation > Troubleshoot\n• Contact software vendor directly for licensing issues - they often have phone activation options\n• For Office products: Sign in with Microsoft account associated with licence\n• Keep purchase receipts and product key documentation in safe place\n• Hardware changes may require reactivation - this is normal",
    category: "Software Issues"
  },
  
  // Browser and Internet
  {
    id: 19,
    question: "My browser is running slowly or crashing - how do I fix it?",
    answer: "Browser issues can be caused by too many extensions, corrupted cache, outdated browser, or malware.\n\nSolutions:\n• Clear browser cache and cookies: Press Ctrl + Shift + Delete and select all time ranges\n• Disable extensions: Go to browser menu > Extensions and disable all, then re-enable one by one to identify problematic ones\n• Update browser to latest version through browser settings\n• Reset browser settings: Look for 'Reset' or 'Restore' option in browser settings\n• Try browsing in incognito/private mode to test if issue persists\n• Scan for malware using Windows Defender or reputable antivirus software",
    category: "Browser & Internet"
  },
  {
    id: 20,
    question: "I'm getting pop-ups and unwanted ads - how do I remove them?",
    answer: "Pop-ups indicate adware, malicious browser extensions, infected websites, or compromised system.\n\nSolutions:\n• Run full system antivirus scan using Windows Defender or your installed antivirus\n• Remove suspicious browser extensions: Browser menu > Extensions > remove unknown or suspicious extensions\n• Reset browser settings to default (this will remove saved passwords, so note them first)\n• Use Windows built-in 'Reset this PC' option for severe infections: Settings > Update & Security > Recovery\n• Install reputable ad-blocker extension like uBlock Origin\n• Avoid clicking on suspicious links or downloading software from untrusted sources",
    category: "Browser & Internet"
  },
  
  // Email Issues
  {
    id: 21,
    question: "My email isn't sending or receiving - what's wrong?",
    answer: "Email problems can involve incorrect server settings, authentication problems, firewall blocking, or account issues.\n\nSolutions:\n• Check internet connection by browsing to a website\n• Verify email account settings with your email provider's documentation\n• Try accessing email through web browser to confirm account is working\n• Disable antivirus email scanning temporarily to test if it's causing interference\n• For Outlook: Go to File > Account Settings > Account Settings > select account > Test Account Settings\n• Check if email account is full - delete old emails to free up space",
    category: "Email Issues"
  },
  
  // Security and Passwords
  {
    id: 22,
    question: "I can't reset my password - what should I try?",
    answer: "Password reset issues involve forgotten passwords, account lockouts, or security question problems.\n\nSolutions:\n• Use 'Forgot Password' link on login page and check all email folders including spam\n• For Windows login: If you have a Microsoft account, reset at account.microsoft.com. For local accounts, use password reset disk if created previously\n• Clear browser cache and cookies for the specific website: Press Ctrl + Shift + Delete\n• Try a different browser or incognito/private browsing mode\n• Contact the service provider directly if automated reset doesn't work\n• Ensure caps lock is off and try typing password in a text editor first to verify accuracy",
    category: "Security & Passwords"
  },
  
  // Data Recovery
  {
    id: 23,
    question: "I accidentally deleted important files - can I recover them?",
    answer: "File recovery depends on how recently deleted and system usage since. Recovery success varies based on user error, software glitches, or malware.\n\nSolutions:\n• Check Recycle Bin first - deleted files are usually stored there temporarily\n• If emptied from Recycle Bin, try File History: Go to Settings > Update & Security > Backup > More options > Restore files from a current backup\n• Use Previous Versions: Right-click the folder that contained the file > Properties > Previous Versions\n• Check cloud storage (OneDrive, Google Drive, etc.) for automatic backups\n• Stop using the computer immediately if files are critically important, as continued use may overwrite recoverable data\n• For critical data recovery, consider professional data recovery services",
    category: "Data Recovery"
  },
  {
    id: 24,
    question: "How should I backup my data to prevent loss?",
    answer: "Regular backups prevent data loss from hardware failure or accidents. Proper backup strategy is essential for data protection.\n\nSolutions:\n• Enable Windows File History: Settings > Update & Security > Backup > Add a drive\n• Use cloud storage (OneDrive, Google Drive) for automatic backup of important files\n• Create system restore point before major changes: Control Panel > System > System Protection > Create\n• For complete system backup: Settings > Update & Security > Backup > Go to Backup and Restore (Windows 7)\n• Regularly copy important files to external drive manually\n• Test backup restoration periodically to ensure backups are working",
    category: "Data Recovery"
  }
];

const FAQAccordion = ({ item, isOpen, onToggle }: { 
  item: FAQItem; 
  isOpen: boolean; 
  onToggle: () => void; 
}) => {
  return (
    <div className="border border-gray-200 rounded-lg mb-4 overflow-hidden shadow-sm hover:shadow-md transition-shadow">
      <button
        className="w-full px-6 py-4 text-left bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-[var(--accent)] focus:ring-opacity-50 transition-colors"
        onClick={onToggle}
        aria-expanded={isOpen}
      >
        <div className="flex justify-between items-center">
          <h3 className="text-lg font-semibold text-[var(--primary)] pr-4">
            {item.question}
          </h3>
          <div className={`flex-shrink-0 transform transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[var(--accent)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </div>
        </div>
      </button>
      <div className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'}`}>
        <div className="px-6 pb-4 bg-gray-50">
          <div className="text-gray-700 leading-relaxed whitespace-pre-line">
            {item.answer}
          </div>
        </div>
      </div>
    </div>
  );
};

export default function FAQPage() {
  const [openItem, setOpenItem] = useState<number | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const categories = ['All', ...Array.from(new Set(faqData.map(item => item.category || 'General')))];
  
  const filteredFAQs = selectedCategory === 'All' 
    ? faqData 
    : faqData.filter(item => item.category === selectedCategory);

  const handleToggle = (id: number) => {
    setOpenItem(openItem === id ? null : id);
  };

  const openModal = () => {
    window.dispatchEvent(new CustomEvent('openModal'));
  };

  return (
    <>
      <main className="bg-white">
        {/* Hero Section */}
        <section className="bg-[var(--primary)] py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
                Frequently Asked Questions
              </h1>
              <p className="text-xl text-white max-w-3xl mx-auto">
                Find answers to common questions about our IT services and support.
              </p>
            </div>
          </div>
        </section>

        {/* FAQ Content */}
        <section className="py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            
            {/* Category Filter */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-[var(--secondary)] mb-4">Browse by Category</h2>
              <div className="flex flex-wrap gap-2">
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => {
                      setSelectedCategory(category);
                      setOpenItem(null); // Close any open items when switching categories
                    }}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                      selectedCategory === category
                        ? 'bg-[var(--accent)] text-white'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>

            {/* FAQ Accordion */}
            <div className="space-y-0">
              {filteredFAQs.map((item) => (
                <FAQAccordion
                  key={item.id}
                  item={item}
                  isOpen={openItem === item.id}
                  onToggle={() => handleToggle(item.id)}
                />
              ))}
            </div>

            {/* Call to Action */}
            <div className="mt-12 bg-gray-50 rounded-lg p-8 text-center">
              <h3 className="text-2xl font-bold text-[var(--primary)] mb-4">
                Still Have Questions?
              </h3>
              <p className="text-gray-600 mb-6">
                Can&apos;t find the answer you&apos;re looking for? Our team is here to help with any IT questions or concerns.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <button
                  onClick={openModal}
                  className="primary-gradient text-white px-6 py-3 rounded-md shadow-md hover:shadow-lg transition-all duration-300"
                >
                  Contact Us Now
                </button>
                <a
                  href="tel:0283130444"
                  className="bg-white border border-[var(--primary)] text-[var(--primary)] px-6 py-3 rounded-md hover:bg-gray-50 transition-all duration-300"
                >
                  Call 02 8313 0444
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Emergency Support Section */}
        <section className="py-12 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-white rounded-lg shadow-md p-8">
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold text-[var(--primary)]">
                  Need Emergency Support?
                </h2>
                <p className="text-lg text-gray-600 mt-2">
                  For urgent IT issues that can&apos;t wait, our emergency support is available outside business hours.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <a
                  href="/emergency"
                  className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-md shadow-md hover:shadow-lg transition-all duration-300 text-center"
                >
                  Emergency Support
                </a>
                <button
                  onClick={openModal}
                  className="primary-gradient text-white px-6 py-3 rounded-md shadow-md hover:shadow-lg transition-all duration-300"
                >
                  Contact Us Now
                </button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <SupportModal />
    </>
  );
} 