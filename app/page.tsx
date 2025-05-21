import Header from './components/Header';
import Hero from './components/Hero';
import ServiceHighlights from './components/ServiceHighlights';
import EmergencyHelp from './components/EmergencyHelp';
import Partners from './components/Partners';
import ServicedAreas from './components/ServicedAreas';
import Footer from './components/Footer';
import SupportModal from './components/SupportModal';

export default function Home() {
  return (
    <>
      <Header />
      <main className="bg-white">
        <Hero />
        <ServiceHighlights />
        <EmergencyHelp />
        <Partners />
        <ServicedAreas />
      </main>
      <Footer />
      <SupportModal />
    </>
  );
}
