import Hero from './components/Hero';
import ServiceHighlights from './components/ServiceHighlights';
import EmergencyHelp from './components/EmergencyHelp';
import Partners from './components/Partners';
import ServicedAreas from './components/ServicedAreas';
import SupportModal from './components/SupportModal';

export default function Home() {
  return (
    <>
      <Hero />
      <ServicedAreas />
      <ServiceHighlights />
      <EmergencyHelp />
      <Partners />
      <SupportModal />
    </>
  );
}
