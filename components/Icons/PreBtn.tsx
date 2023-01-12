import { forwardRef } from 'react';
import { ISvgProps } from './Icon.type';

export const PreBtnIcon = forwardRef<SVGSVGElement, ISvgProps>(
  function CopyContentIcon(props, ref) {
    return (
      <svg
        ref={ref}
        width="48"
        height="48"
        viewBox="0 0 48 48"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
      >
        <rect width="48" height="48" rx="24" fill="#B8B8C2" fillOpacity="0.1" />
        <path
          d="M17.6085 24.8911L25.3482 32.6306C25.8406 33.1231 26.6388 33.1231 27.1309 32.6306C27.623 32.1384 27.623 31.3402 27.1309 30.8481L20.2824 23.9999L27.1307 17.1519C27.6228 16.6595 27.6228 15.8614 27.1307 15.3693C26.6386 14.8769 25.8404 14.8769 25.348 15.3693L17.6083 23.1088C17.3622 23.355 17.2393 23.6774 17.2393 23.9998C17.2393 24.3225 17.3625 24.645 17.6085 24.8911Z"
          fill="#8D91A5"
        />
      </svg>
    );
  },
);
