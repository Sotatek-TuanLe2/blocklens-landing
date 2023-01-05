import { forwardRef } from 'react';
import { ISvgProps } from './Icon.type';

export const CloseMenuIcon = forwardRef<SVGSVGElement, ISvgProps>(
  function CopyContentIcon(props, ref) {
    return (
      <svg
        ref={ref}
        width="20"
        height="20"
        viewBox="0 0 20 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
      >
        <path
          d="M2.53317 19.3333L0.666504 17.4667L8.13317 9.99999L0.666504 2.53332L2.53317 0.666656L9.99984 8.13332L17.4665 0.666656L19.3332 2.53332L11.8665 9.99999L19.3332 17.4667L17.4665 19.3333L9.99984 11.8667L2.53317 19.3333Z"
          fill="white"
        />
      </svg>
    );
  },
);
