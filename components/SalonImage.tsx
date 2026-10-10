'use client';

import { useState } from 'react';
import Image from 'next/image';
import { AlertCircle, RefreshCw, Copy, Check } from 'lucide-react';

interface SalonImageProps {
  src: string;
  alt: string;
  className?: string;
  imageClassName?: string;
  objectPosition?: string;
  priority?: boolean;
  aspectRatio?: string;
  fill?: boolean;
  sizes?: string;
  width?: number;
  height?: number;
}

export default function SalonImage({
  src,
  alt,
  className = '',
  imageClassName = '',
  objectPosition = 'center top',
  priority = false,
  fill = false,
  sizes = '(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw',
  width = 680,
  height = 510,
}: SalonImageProps) {
  const [hasError, setHasError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [copied, setCopied] = useState(false);
  const [retryKey, setRetryKey] = useState(0);

  const handleCopyUrl = () => {
    navigator.clipboard.writeText(src);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleRetry = () => {
    setHasError(false);
    setIsLoading(true);
    setRetryKey((prev) => prev + 1);
  };

  if (hasError) {
    return (
      <div className={`relative bg-neutral-900 border border-neutral-700/80 rounded-2xl p-6 text-neutral-200 flex flex-col items-center justify-center text-center ${className}`}>
        <div className="w-12 h-12 rounded-full bg-red-950/60 border border-red-500/40 text-red-400 flex items-center justify-center mb-3">
          <AlertCircle className="w-6 h-6" />
        </div>
        <h4 className="text-sm font-semibold tracking-wide uppercase text-red-300 mb-1">
          Image Failed to Load
        </h4>
        <p className="text-xs text-neutral-400 mb-3 max-w-sm">
          The requested salon photo could not be fetched from the remote server.
        </p>
        
        {/* Exact failed URL reported as requested */}
        <div className="w-full max-w-md bg-neutral-950/90 rounded-lg p-2.5 border border-neutral-800 text-left mb-4">
          <div className="text-[10px] font-mono text-neutral-500 mb-1">Failed URL:</div>
          <div className="text-[11px] font-mono text-neutral-300 break-all select-all line-clamp-3">
            {src}
          </div>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={handleCopyUrl}
            type="button"
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium bg-neutral-800 hover:bg-neutral-700 text-neutral-200 transition-colors"
          >
            {copied ? <Check className="w-3.5 h-3.5 text-green-400" /> : <Copy className="w-3.5 h-3.5" />}
            {copied ? 'Copied URL' : 'Copy URL'}
          </button>
          <button
            onClick={handleRetry}
            type="button"
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium bg-amber-600/20 border border-amber-600/40 hover:bg-amber-600/30 text-amber-200 transition-colors"
          >
            <RefreshCw className="w-3.5 h-3.5" />
            Retry
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className={`relative overflow-hidden ${className}`}>
      {isLoading && (
        <div className="absolute inset-0 bg-neutral-200/70 animate-pulse z-10" />
      )}
      {fill ? (
        <Image
          key={retryKey}
          src={src}
          alt={alt}
          fill
          priority={priority}
          sizes={sizes}
          referrerPolicy="no-referrer"
          unoptimized
          style={{ objectPosition }}
          className={`object-cover transition-opacity duration-500 ${imageClassName} ${
            isLoading ? 'opacity-0' : 'opacity-100'
          }`}
          onLoad={() => setIsLoading(false)}
          onError={() => {
            setIsLoading(false);
            setHasError(true);
          }}
        />
      ) : (
        <Image
          key={retryKey}
          src={src}
          alt={alt}
          width={width}
          height={height}
          priority={priority}
          referrerPolicy="no-referrer"
          unoptimized
          style={{ objectPosition }}
          className={`w-full h-auto object-cover transition-opacity duration-500 ${imageClassName} ${
            isLoading ? 'opacity-0' : 'opacity-100'
          }`}
          onLoad={() => setIsLoading(false)}
          onError={() => {
            setIsLoading(false);
            setHasError(true);
          }}
        />
      )}
    </div>
  );
}
