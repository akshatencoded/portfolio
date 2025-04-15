import { useNavigate } from 'react-router-dom';
import { Howl } from 'howler';
import { motion, AnimatePresence } from 'framer-motion';
import React, { useState } from 'react';

const Intro = () => {
  const navigate = useNavigate();
  const [showOverlay, setShowOverlay] = useState(false);

  const handleClick = () => {
    const sound = new Howl({ src: ['/sounds/climbing-higher-happy-lofi-325848.mp3'] });
    sound.play();

    setShowOverlay(true);

    setTimeout(() => {
      navigate('/home');
    }, 2000);
  };

  return (
    <div className="h-screen bg-black flex flex-col items-center justify-center text-white relative overflow-hidden">
      <motion.h1
        className="text-4xl font-bold mb-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        Click to Access Site
      </motion.h1>

      <motion.button
        onClick={handleClick}
        whileHover={{ scale: 1.1 }}
        className="px-6 py-3 border border-white text-white text-lg hover:bg-white hover:text-black transition"
      >
        Enter
      </motion.button>

      <AnimatePresence>
        {showOverlay && (
          <motion.div
            className="absolute inset-0 bg-gradient-to-br from-violet-500 via-blue-500 to-black z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
          />
        )}
      </AnimatePresence>
    </div>
  );
};

export default Intro;
