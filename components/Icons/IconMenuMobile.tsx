import { forwardRef } from 'react';
import { ISvgProps } from './Icon.type';

export const IconMenuMobile = forwardRef<SVGSVGElement, ISvgProps>(
  function CopyContentIcon(props, ref) {
    return (
      <svg
        ref={ref}
        width="24"
        height="22"
        viewBox="0 0 24 22"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
      >
        <path
          d="M20 19V21.6667H4V19H20ZM24 9.66668V12.3333H0V9.66668H24ZM20 0.333344V3.00001H4V0.333344H20Z"
          fill="white"
        />
      </svg>
    );
  },
);
