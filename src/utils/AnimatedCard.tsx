import { useInView, motion } from 'framer-motion';
import React, { useRef } from 'react'

const AnimatedCard = ({children}: {children: React.ReactNode}) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: false });

  return (
    <motion.div
    ref={ref}
    initial={{ opacity: 0, y: 100 }}
    animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 50 }}
    transition={{ duration: 0.8 }}
    style={{display: 'flex', justifyContent: 'center'}}
    >
        {children}
    </motion.div>
  )
}

export default AnimatedCard