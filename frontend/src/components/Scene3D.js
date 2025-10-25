import React from 'react';
import { motion } from 'framer-motion';

const Scene3D = () => {
  return (
    <div className="relative w-full h-full flex items-center justify-center" style={{ perspective: '1000px' }}>
      {/* Central Hub */}
      <motion.div
        animate={{
          rotateX: [0, 360],
          rotateY: [0, 360],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear"
        }}
        className="absolute"
        style={{
          width: '200px',
          height: '200px',
          transformStyle: 'preserve-3d'
        }}
      >
        <div
          className="absolute inset-0 coral-gradient rounded-3xl"
          style={{
            boxShadow: '0 0 60px rgba(255, 139, 123, 0.6), 0 0 100px rgba(255, 139, 123, 0.4)',
            transform: 'translateZ(0px)'
          }}
        />
      </motion.div>

      {/* Orbiting Cubes */}
      {[0, 1, 2, 3].map((index) => {
        const angle = (index * 90);
        const radius = 180;
        const x = Math.cos((angle * Math.PI) / 180) * radius;
        const y = Math.sin((angle * Math.PI) / 180) * radius;
        
        return (
          <motion.div
            key={index}
            animate={{
              rotateX: [0, 360],
              rotateY: [0, 360],
              y: [y - 20, y + 20, y - 20],
            }}
            transition={{
              rotateX: { duration: 8 + index * 2, repeat: Infinity, ease: "linear" },
              rotateY: { duration: 10 + index * 2, repeat: Infinity, ease: "linear" },
              y: { duration: 3 + index * 0.5, repeat: Infinity, ease: "easeInOut" }
            }}
            className="absolute"
            style={{
              width: '80px',
              height: '80px',
              left: `calc(50% + ${x}px)`,
              top: `calc(50% + ${y}px)`,
              transform: 'translate(-50%, -50%)',
              transformStyle: 'preserve-3d'
            }}
          >
            <div
              className="w-full h-full rounded-2xl"
              style={{
                background: `linear-gradient(135deg, ${
                  index === 0 ? '#FFB8A8' : 
                  index === 1 ? '#FFA996' : 
                  index === 2 ? '#FF9F8E' : '#FFD6CC'
                } 0%, ${
                  index === 0 ? '#FFA996' : 
                  index === 1 ? '#FF8B7B' : 
                  index === 2 ? '#FFB8A8' : '#FFA996'
                } 100%)`,
                boxShadow: '0 10px 40px rgba(255, 139, 123, 0.3)',
              }}
            />
          </motion.div>
        );
      })}

      {/* Connecting Lines */}
      <svg className="absolute inset-0 w-full h-full" style={{ pointerEvents: 'none' }}>
        <defs>
          <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FF8B7B" stopOpacity="0.6" />
            <stop offset="100%" stopColor="#FFA996" stopOpacity="0.2" />
          </linearGradient>
        </defs>
        {[0, 1, 2, 3].map((index) => {
          const angle = (index * 90);
          const radius = 180;
          const x = Math.cos((angle * Math.PI) / 180) * radius;
          const y = Math.sin((angle * Math.PI) / 180) * radius;
          
          return (
            <motion.line
              key={index}
              x1="50%"
              y1="50%"
              x2={`calc(50% + ${x}px)`}
              y2={`calc(50% + ${y}px)`}
              stroke="url(#lineGradient)"
              strokeWidth="2"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 1 }}
              transition={{ duration: 2, delay: index * 0.3 }}
            />
          );
        })}
      </svg>

      {/* Floating Particles */}
      {[...Array(8)].map((_, index) => (
        <motion.div
          key={`particle-${index}`}
          className="absolute w-2 h-2 rounded-full"
          style={{
            background: '#FFA996',
            left: `${20 + (index * 10)}%`,
            top: `${30 + ((index % 3) * 20)}%`,
            boxShadow: '0 0 10px rgba(255, 139, 123, 0.8)'
          }}
          animate={{
            y: [-20, 20, -20],
            opacity: [0.3, 1, 0.3],
            scale: [0.8, 1.2, 0.8]
          }}
          transition={{
            duration: 3 + (index * 0.5),
            repeat: Infinity,
            ease: "easeInOut",
            delay: index * 0.2
          }}
        />
      ))}
    </div>
  );
};

export default Scene3D;