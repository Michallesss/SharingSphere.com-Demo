import Logo from '@/components/Logo';
import Opinions from '@/components/Opinions';
// import Preview from '@/components/Preview';
import Features from '@/components/Features';
import Authors from '@/components/Authors';
import Waitlist from '@/components/Waitlist';

export default function Landing() {
  return (
    <>
      <Logo />
      <Opinions />
      {/*<Preview />*/}
      <Features />
      <Authors />
      <Waitlist />
    </>
  );
}
