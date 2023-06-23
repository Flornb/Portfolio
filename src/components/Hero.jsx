import { motion } from 'framer-motion';
import { styles } from '../styles';
import { ComputersCanvas } from './canvas';


const Hero = () => {
  return (
    <section className='relative w-full h-screen mx-auto'>
      <div className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7x1 mx-auto flex flex-row items-start gap-5`}>
        <div className='flex flex-col justify-center items-center mt-5'>
          <div className='w-5 h-5 rounded-full bg-[#FFC8AF]'/>
          <div className='w-1 sm:h-80 h-40 bg-gradient-to-b from-pink-200 to-pink-0'/>
        </div>
        <div>
          <h1 className={`${styles.heroHeadText} text-[#FFC8AF]`}>Hi, I'm <span className='text-white'>Florencia</span></h1>
          <p className={`${styles.heroSubText} mt-2 text-[#]`}>
          Argentinian Full Stack Web Developer, <br className='sm:block hidden' />passionate about innovation and technology
          </p>
        </div>
      </div>

      <ComputersCanvas />

      <div className='absolute xs:bottom-1 bottom-32 w-full flex justify-center items-center'>
        <a href="#about">
          <div className='w-[32px] h-[54px] rounded-full border-4 border-[#6D6875] flex justify-center items-start p-2'>
            <motion.dev
            animate={{
              y: [0, 24, 0]
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              repeatType: 'loop'
            }}
            className='w-2 h-2 mb-1 rounded-full bg-[#6D6875]'
            />
          </div>
        </a>

      </div>

    </section>
  )
}

export default Hero