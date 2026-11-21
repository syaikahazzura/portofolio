import { useState } from 'react';
import { Sparkles, Compass } from 'lucide-react';

interface ResilientImageProps {
  src: string;
  alt: string;
  fallbackGradient: string;
  fallbackLabel?: string;
  className?: string;
}

export function ResilientImage({
  src,
  alt,
  fallbackGradient,
  fallbackLabel,
  className = '',
}: ResilientImageProps) {
  const [hasError, setHasError] = useState(false);

  if (hasError) {
    return (
      <div
        role="img"
        aria-label={alt}
        className={`relative w-full h-full bg-gradient-to-br ${fallbackGradient} flex flex-col items-center justify-center p-5 text-white/90 ${className}`}
      >
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage:
              'radial-gradient(circle at 25% 25%, rgba(255,255,255,0.4) 1px, transparent 1px), radial-gradient(circle at 75% 75%, rgba(255,255,255,0.25) 1px, transparent 1px)',
            backgroundSize: '24px 24px',
          }}
        />
        <div className="relative z-10 flex flex-col items-center text-center gap-2">
          <div className="w-10 h-10 rounded-full bg-white/15 backdrop-blur-sm flex items-center justify-center">
            {fallbackLabel ? (
              <Compass className="w-5 h-5 text-white" />
            ) : (
              <Sparkles className="w-5 h-5 text-white" />
            )}
          </div>
          {fallbackLabel && (
            <span className="font-mono text-[11px] uppercase tracking-widest text-white/80">
              {fallbackLabel}
            </span>
          )}
        </div>
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      referrerPolicy="no-referrer"
      onError={() => setHasError(true)}
      className={`w-full h-full object-cover ${className}`}
    />
  );
}
