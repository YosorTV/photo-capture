import React, { useState } from 'react'
import { motion, AnimateSharedLayout } from 'framer-motion';

const FaqQuestion = ({ title, description }) => {

  const [faqToggle, setFaqToggle] = useState(false);
  const faqAction = () => setFaqToggle(!faqToggle);

  return (
    <AnimateSharedLayout>
    <motion.div layout className="qusetion" onClick={faqAction}>
      <motion.h4 layout>{title}</motion.h4>
        {faqToggle ? <p className="description">{description}</p> : ""}
        <div className="faq-line"></div>
      </motion.div>
    </AnimateSharedLayout>
  )
}

export default FaqQuestion
