import { Outlet } from 'react-router-dom';
import { Navigation } from '../components/navigation/navigation';

export default function Layout() {
  return (
    <div className='relative min-h-screen bg-[#04040a]'>
      {/* Noise texture overlay */}
      <div className='noise-overlay' />

      {/* Ambient glow blobs */}
      <div className='glow-blob glow-blob-1' />
      <div className='glow-blob glow-blob-2' />
      <div className='glow-blob glow-blob-3' />

      {/* Navigation */}
      <Navigation />

      {/* Page content */}
      <main className='relative z-10'>
        <Outlet />
      </main>
    </div>
  );
}
