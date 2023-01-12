import { forwardRef } from 'react';
import { ISvgProps } from './Icon.type';

export const TimelineIcon = forwardRef<SVGSVGElement, ISvgProps>(
  function CopyContentIcon(props, ref) {
    return (
      <svg
        ref={ref}
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
      >
        <circle
          cx="12"
          cy="12"
          r="10"
          fill="url(#paint0_linear_2221_9019)"
          stroke="white"
          strokeWidth="4"
        />
        <defs>
          <linearGradient
            id="paint0_linear_2221_9019"
            x1="18.4954"
            y1="-7.65982e-06"
            x2="3.54216"
            y2="0.300445"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#226CFF" />
            <stop offset="1" stopColor="#1084FF" />
          </linearGradient>
        </defs>
      </svg>
    );
  },
);
