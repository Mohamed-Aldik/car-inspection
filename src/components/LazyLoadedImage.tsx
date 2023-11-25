import { useRef, useEffect } from 'react';
import { Image, ImageProps } from '@chakra-ui/react';

interface LazyLoadedImageProps extends ImageProps {
  src: string;
  alt: string;
}

export const LazyLoadedImage = ({ src, alt, ...props }: LazyLoadedImageProps) => {
  const imgRef = useRef<HTMLImageElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          if (imgRef.current) {
            // Load the image when it comes into the viewport
            imgRef.current.src = src;
            observer.unobserve(imgRef.current);
          }
        }
      });
    });

    if (imgRef.current) {
      observer.observe(imgRef.current);
    }

    return () => {
      // Cleanup the observer when the component unmounts
      if (imgRef.current) {
        observer.unobserve(imgRef.current);
      }
    };
  }, [src]);

  return <Image ref={imgRef} src='' data-src={src} alt={alt} loading='lazy' {...props} />;
};
