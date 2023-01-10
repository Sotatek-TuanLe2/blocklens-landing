import { forwardRef } from 'react';
import { ISvgProps } from './Icon.type';
export const PlayVideoIcon = forwardRef<SVGSVGElement, ISvgProps>(
  function CopyContentIcon(props, ref) {
    return (
      <svg
        ref={ref}
        width="42"
        height="42"
        viewBox="0 0 42 42"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
      >
        <path
          d="M21 0C9.40218 0 0 9.40201 0 21C0 32.598 9.40218 42 21 42C32.5978 42 42 32.598 42 21C42 9.40201 32.5978 0 21 0ZM28.2581 22.1132L17.7581 28.6757C17.5457 28.8083 17.3041 28.875 17.0625 28.875C16.8436 28.875 16.6245 28.8205 16.4261 28.7103C16.0089 28.479 15.75 28.0399 15.75 27.5625V14.4375C15.75 13.9601 16.0089 13.521 16.4261 13.2897C16.8433 13.0571 17.3535 13.0712 17.7581 13.3243L28.2581 19.8868C28.6417 20.1272 28.875 20.5476 28.875 21C28.875 21.4524 28.6417 21.8729 28.2581 22.1132Z"
          fill="white"
        />
      </svg>
    );
  },
);
