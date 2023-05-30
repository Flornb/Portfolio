import { motion } from 'framer-motion';
import { styles } from '../styles';
import { ComputersCanvas } from './canvas';


const Hero = () => {
  return (
    <section className='relative w-full h-screen mx-auto'>
      <div className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7x1 mx-auto flex flex-row items-start gap-5`}>
        <div className='flex flex-col justify-center items-center mt-5'>
          <div className='w-5 h-5 rounded-full bg-[#f3f3f3]'/>
          <div className='w-1 sm:h-80 h-40 bg-gradient-to-b from-white-100 to-white-0'/>
        </div>
        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>Hi, I'm <span className='text-[#FFCDB2]'>Florencia</span></h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
          Argentinian Full Stack Web Developer, <br className='sm:block hidden' />passionate about innovation and technology
          </p>
        </div>
      </div>

      <ComputersCanvas />

      <div className='absolute xs:bottom-1 bottom-32 w-full flex justify-center items-center'>
        <a href="#about">
          <div className='w-[35px] h-[64px] rounded-full border-4 border-secondary flex justify-center items-start p-2'>
            <motion.dev
            animate={{
              y: [0, 24, 0]
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              repeatType: 'loop'
            }}
            className='w-3 h-3 mb-1 rounded-full bg-secondary'
            />
          </div>
        </a>

      </div>

    </section>
  )
}

export default Hero