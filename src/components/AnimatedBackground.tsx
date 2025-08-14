export default function AnimatedBackground() {
  return (
    <div className="animated-bg">
      {/* Liquid glass bubbles with random positions */}
      <div 
        className="absolute w-32 h-32 opacity-20"
        style={{
          top: '15%',
          left: '8%',
          background: 'radial-gradient(circle at 30% 30%, rgba(251, 191, 36, 0.3) 0%, rgba(251, 191, 36, 0.1) 40%, rgba(251, 191, 36, 0.05) 70%, transparent 100%)',
          borderRadius: '50%',
          filter: 'blur(1px)',
          animation: 'float 15s ease-in-out infinite',
          animationDelay: '0s'
        }}
      ></div>
      
      <div 
        className="absolute w-24 h-24 opacity-25"
        style={{
          top: '45%',
          right: '12%',
          background: 'radial-gradient(circle at 40% 40%, rgba(245, 158, 11, 0.4) 0%, rgba(245, 158, 11, 0.15) 50%, rgba(245, 158, 11, 0.05) 80%, transparent 100%)',
          borderRadius: '50%',
          filter: 'blur(1px)',
          animation: 'float 18s ease-in-out infinite',
          animationDelay: '-3s'
        }}
      ></div>
      
      <div 
        className="absolute w-40 h-40 opacity-15"
        style={{
          bottom: '25%',
          left: '15%',
          background: 'radial-gradient(circle at 35% 35%, rgba(251, 191, 36, 0.25) 0%, rgba(251, 191, 36, 0.1) 45%, rgba(251, 191, 36, 0.03) 75%, transparent 100%)',
          borderRadius: '50%',
          filter: 'blur(1px)',
          animation: 'float 20s ease-in-out infinite',
          animationDelay: '-7s'
        }}
      ></div>
      
      <div 
        className="absolute w-28 h-28 opacity-20"
        style={{
          top: '70%',
          right: '35%',
          background: 'radial-gradient(circle at 45% 45%, rgba(245, 158, 11, 0.3) 0%, rgba(245, 158, 11, 0.12) 55%, rgba(245, 158, 11, 0.04) 85%, transparent 100%)',
          borderRadius: '50%',
          filter: 'blur(1px)',
          animation: 'float 16s ease-in-out infinite',
          animationDelay: '-5s'
        }}
      ></div>
      
      <div 
        className="absolute w-36 h-36 opacity-18"
        style={{
          top: '25%',
          left: '60%',
          background: 'radial-gradient(circle at 25% 25%, rgba(251, 191, 36, 0.28) 0%, rgba(251, 191, 36, 0.11) 42%, rgba(251, 191, 36, 0.04) 78%, transparent 100%)',
          borderRadius: '50%',
          filter: 'blur(1px)',
          animation: 'float 22s ease-in-out infinite',
          animationDelay: '-10s'
        }}
      ></div>
      
      <div 
        className="absolute w-20 h-20 opacity-22"
        style={{
          bottom: '15%',
          right: '20%',
          background: 'radial-gradient(circle at 50% 50%, rgba(245, 158, 11, 0.35) 0%, rgba(245, 158, 11, 0.13) 48%, rgba(245, 158, 11, 0.05) 82%, transparent 100%)',
          borderRadius: '50%',
          filter: 'blur(1px)',
          animation: 'float 14s ease-in-out infinite',
          animationDelay: '-2s'
        }}
      ></div>
    </div>
  );
}
