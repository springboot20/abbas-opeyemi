// import { Link } from "react-router-dom";
// import { useTypeWriter } from "../../hooks/useTypeWriter";
// import { motion } from "framer-motion";
// import { SlideIn } from "../slide-in";

// export default function About() {
//   const { textToDisplay } = useTypeWriter();

//   const parentText = {
//     hidden: {
//       opacity: 0,
//     },
//     visible: {
//       opacity: 1,
//       transition: {
//         staggerChildren: 0.35,
//         delayChildren: 0.35,
//       },
//     },
//   };

//   const childText = {
//     hidden: {
//       opacity: 0,
//       y: 130,
//     },
//     visible: {
//       opacity: 1,
//       y: 0,
//       transition: {
//         duration: 0.2,
//       },
//     },
//   };

//   return (
//     <SlideIn direction="top">
//       <section id="about" className="h-screen">
//         <div className="mx-auto max-w-3xl h-full grid place-content-center px-2 xl:px-0">
//           <header className="space-y-5 lg:space-y-4">
//             <h1 className="text-3xl sm:text-5xl gap-4 capitalize text-center font-semibold tracking-wide text-white">
//               <span className="bg-gradient-to-l from-indigo-700 to-red-500 bg-clip-text text-transparent">
//                 yunus abbas
//               </span>{" "}
//               opeyemi
//             </h1>
//             <h2 className="text-2xl sm:text-4xl gap-4 text-center font-semibold tracking-wide text-white ">
//               <span className="text-white capitalize">front-end</span>{" "}
//               <motion.span
//                 variants={parentText}
//                 initial="hidden"
//                 animate="visible"
//                 className="border-indigo-500 border-r-4 bg-gradient-to-l from-indigo-700 to-red-500 bg-clip-text text-transparent"
//               >
//                 {textToDisplay
//                   .toLowerCase()
//                   .split("")
//                   .map((t, i) => (
//                     <motion.small
//                       key={i}
//                       variants={childText}
//                       initial="hidden"
//                       animate="visible"
//                       className="capitalize text-2xl sm:text-4xl"
//                     >
//                       {t}
//                     </motion.small>
//                   ))}
//               </motion.span>
//             </h2>
//           </header>
//           <div className="mt-2 sm:mt-4">
//             <p className="text-lg font-normal text-gray-500 text-center">
//               I'm a <span className="text-white">Front-end developer</span> with a zeal for{" "}
//               <span className="text-white">crafting intuitive</span> and{" "}
//               <span className="text-white">responsive digital experience.</span> Specializing on
//               using my experience to implement{" "}
//               <span className="text-white"> aesthetically pleasing </span> UI designs and building{" "}
//               <span className="text-white"> scalable applications </span> that perform efficiently.
//             </p>
//           </div>
//           <div className="flex items-center justify-center mt-2 sm:mt-4">
//             <a href="/resume.pdf" download="Yunus_Abbas_Resume.pdf">
//               <button
//                 type="button"
//                 className="rounded-full bg-white/10 px-8 py-2.5 flex items-center space-x-3 active:bg-white/10 hover:ring-2 hover:ring-red-500 hover:bg-transparent transition-all"
//               >
//                 <span className="bg-gradient-to-l from-indigo-700 to-red-500 bg-clip-text text-transparent">
//                   Download Resume
//                 </span>
//                 <svg
//                   aria-hidden="true"
//                   focusable="false"
//                   data-prefix="fas"
//                   data-icon="download"
//                   className="h-5 stroke-[20px] fill-none stroke-red-600"
//                   role="img"
//                   xmlns="http://www.w3.org/2000/svg"
//                   viewBox="0 0 512 512"
//                 >
//                   <path d="M288 32c0-17.7-14.3-32-32-32s-32 14.3-32 32V274.7l-73.4-73.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l128 128c12.5 12.5 32.8 12.5 45.3 0l128-128c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L288 274.7V32zM64 352c-35.3 0-64 28.7-64 64v32c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V416c0-35.3-28.7-64-64-64H346.5l-45.3 45.3c-25 25-65.5 25-90.5 0L165.5 352H64zm368 56a24 24 0 1 1 0 48 24 24 0 1 1 0-48z"></path>
//                 </svg>
//               </button>
//             </a>
//           </div>
//           <div className="flex items-center gap-3 flex-1 justify-center mt-9">
//             <Link to="/">
//               <motion.svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 viewBox="0 0 320 512"
//                 className="w-8 h-8 fill-none stroke-[1.2rem] stroke-indigo-600"
//               >
//                 <motion.path
//                   initial={{
//                     strokeDasharray: "0 1",
//                   }}
//                   animate={{
//                     strokeDasharray: "501 0",
//                     transition: {
//                       duration: 4,
//                     },
//                   }}
//                   d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"
//                 />
//               </motion.svg>
//             </Link>

//             <Link to="https://github.com/springboot20">
//               <motion.svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 viewBox="0 0 496 512"
//                 className="w-8 h-8 fill-none stroke-[1.2rem] stroke-white"
//               >
//                 <motion.path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z" />
//               </motion.svg>
//             </Link>

//             <Link to="/">
//               <motion.svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 viewBox="0 0 448 512"
//                 className="w-8 h-8 fill-none stroke-[1.2rem] stroke-blue-600"
//               >
//                 <motion.path d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z" />
//               </motion.svg>
//             </Link>
//           </div>
//         </div>
//       </section>
//     </SlideIn>
//   );
// }

import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useTypeWriter } from '../../hooks/useTypeWriter';

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.65, delay, ease: [0.22, 1, 0.36, 1] },
});

const stats = [
  { value: '3+', label: 'Years of experience' },
  { value: '15+', label: 'Projects shipped' },
  { value: '10+', label: 'Technologies' },
];

const socials = [
  {
    label: 'GitHub',
    href: 'https://github.com/springboot20',
    icon: (
      <svg viewBox='0 0 24 24' className='w-4 h-4 fill-current'>
        <path d='M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z' />
      </svg>
    ),
  },
  {
    label: 'LinkedIn',
    href: 'https://linkedin.com/in/abbas-yunus-70b65533a',
    icon: (
      <svg viewBox='0 0 24 24' className='w-4 h-4 fill-current'>
        <path d='M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z' />
      </svg>
    ),
  },
];

export default function Hero() {
  const { textToDisplay } = useTypeWriter();

  return (
    <section
      id='hero'
      className='relative min-h-screen flex flex-col justify-center pt-28 pb-16 px-4 overflow-hidden'>
      {/* Grid decoration bg */}
      <div className='absolute inset-0 grid-decoration opacity-100' />

      {/* Radial center glow */}
      <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] rounded-full bg-violet-600/5 blur-[100px] pointer-events-none' />

      <div className='relative z-10 max-w-6xl mx-auto w-full text-center flex flex-col items-center'>
        {/* Availability badge */}
        <motion.div {...fadeUp(0.1)} className='mb-6 flex items-center justify-center gap-3'>
          <span className='section-label'>
            <span className='pulse-dot' />
            Available for work
          </span>
          <span className='text-xs text-white/30 font-mono'>— Frontend Developer</span>
        </motion.div>

        {/* Main heading */}
        <motion.div {...fadeUp(0.2)} className='mb-6'>
          <h1 className='text-5xl sm:text-6xl lg:text-8xl font-semibold tracking-tight text-balance'>
            <span className='text-white/90'>Yunus Abbas</span>{' '}
            <span className='text-white/25'>Opeyemi</span>
          </h1>
        </motion.div>

        {/* Role typewriter */}
        <motion.div
          {...fadeUp(0.3)}
          className='mb-6 flex flex-wrap items-center justify-center gap-3'>
          <span className='text-2xl sm:text-3xl font-light text-white/40'>I build</span>

          <span className='text-2xl sm:text-3xl font-semibold grad-text'>
            {textToDisplay}
            <span className='animate-pulse text-violet-400'>|</span>
          </span>
        </motion.div>

        {/* Bio */}
        <motion.p
          {...fadeUp(0.4)}
          className='text-base sm:text-lg text-white/40 max-w-2xl leading-relaxed mb-12 font-light mx-auto'>
          Frontend developer specializing in{' '}
          <span className='text-white/65 font-medium'>crafting intuitive</span>,{' '}
          <span className='text-white/65 font-medium'>responsive digital experiences</span> with
          clean code and aesthetic precision.
        </motion.p>

        {/* CTAs */}
        <motion.div
          {...fadeUp(0.5)}
          className='flex flex-wrap justify-center items-center gap-4 mb-10'>
          <Link to='mailto:abbasopeyemi148@gmail.com'>
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className='btn-primary px-7 py-3.5 rounded-full text-sm font-semibold text-white flex items-center gap-2.5'>
              Get in touch
            </motion.button>
          </Link>

          <a href='/resume.pdf' download='Yunus_Abbas_Resume.pdf'>
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className='btn-ghost px-7 py-3.5 rounded-full text-sm font-semibold text-white/70 flex items-center gap-2.5'>
              <svg
                className='w-4 h-4'
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'
                strokeWidth={1.5}>
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  d='M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3'
                />
              </svg>
              Download CV
            </motion.button>
          </a>
        </motion.div>

        {/* Stats row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className='flex flex-wrap justify-center items-center gap-12 mb-10'>
          {stats.map((s, i) => (
            <div key={i} className='flex flex-col items-center gap-1'>
              <span className='text-3xl font-semibold text-white'>{s.value}</span>

              <span className='text-xs text-white/35 font-mono uppercase tracking-wider'>
                {s.label}
              </span>
            </div>
          ))}
        </motion.div>

        {/* Social links */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className='flex flex-wrap justify-center items-center gap-3'>
          {socials.map((s) => (
            <Link key={s.label} to={s.href} target='_blank' rel='noopener noreferrer'>
              <motion.button
                whileHover={{ y: -2 }}
                className='flex items-center gap-2 px-4 py-2.5 rounded-xl glass-card text-white/40 hover:text-white/80 text-xs font-medium transition-colors'>
                {s.icon}
                {s.label}
              </motion.button>
            </Link>
          ))}

          <div className='h-4 w-px bg-white/10 mx-1' />

          <span className='text-xs text-white/20 font-mono'>Oyo, NG</span>
        </motion.div>
      </div>

      {/* Bottom fade */}
      <div className='absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#04040a] to-transparent pointer-events-none' />
    </section>
  );
}
