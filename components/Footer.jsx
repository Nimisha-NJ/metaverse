'use client';

import { motion } from 'framer-motion';
import styles from '../styles';
import { footerVariants } from '../utils/motion';

const Footer = () => (
  <motion.footer
    variants={footerVariants}
    initial="hidden"
    whileInView="show"
    className={`${styles.xPaddings} py-8 relative`}
  >
    <div className="flex flex-col">
      <div className="mb-[50px] h-[2px] bg-white opacity-10">
        <div className="flex items-center justify-between flex-wrap gap-4" />
      </div>
    </div>
  </motion.footer>
);

export default Footer;
