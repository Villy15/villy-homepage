'use client';

import Card from '@/components/Card';
import { motion } from 'framer-motion';

const Works = () => {
  return (
    <motion.div
      className="mx-auto flex max-w-xl  flex-col justify-center p-4"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 50 }}
      transition={{ duration: 0.5 }}
    >
      <div className="mb-4 text-lg">Works</div>

      <div className="grid grid-cols-2 gap-4">
        <Card
          title="Lakbay"
          description="A cooperative platform for Tourism Cooperatives"
          image="/songtube.jpg"
        />
        <Card
          title="Songtube"
          description="A website used to gather YouTube videos customed for music practice 
          like loops or jump from a section of a song"
          image="/songtube.jpg"
        />
      </div>
    </motion.div>
  );
};

export default Works;
