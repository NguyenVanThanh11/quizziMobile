import { memo, SVGProps } from 'react';

const ArrowRightIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 12 12' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      d='M0.166667 6H11.8333M11.8333 6L6 0.166667M11.8333 6L6 11.8333'
      stroke='#344054'
      strokeWidth={1.66667}
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
);

const Memo = memo(ArrowRightIcon);
export { Memo as ArrowRightIcon };
