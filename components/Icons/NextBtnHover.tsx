


import { forwardRef } from 'react';
import { ISvgProps } from './Icon.type';

export const NextBtnHoverIcon = forwardRef<SVGSVGElement, ISvgProps>(
  function CopyContentIcon(props, ref) {
    return (
        <svg ref= {ref} width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<rect width="48" height="48" rx="24" fill="#B8B8C2" fillOpacity="0.1"/>
<path d="M28.3915 24.8911L20.6518 32.6306C20.1594 33.1231 19.3612 33.1231 18.8691 32.6306C18.377 32.1384 18.377 31.3402 18.8691 30.8481L25.7176 23.9999L18.8693 17.1519C18.3772 16.6595 18.3772 15.8614 18.8693 15.3693C19.3614 14.8769 20.1596 14.8769 20.652 15.3693L28.3917 23.1088C28.6378 23.355 28.7607 23.6774 28.7607 23.9998C28.7607 24.3225 28.6375 24.645 28.3915 24.8911Z" fill="#fff"/>
</svg>
    );
  },
);
