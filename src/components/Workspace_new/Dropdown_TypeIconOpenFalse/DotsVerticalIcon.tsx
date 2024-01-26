import { memo, SVGProps } from 'react';

const DotsVerticalIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 2 14' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      d='M1 7.83333C1.46024 7.83333 1.83333 7.46024 1.83333 7C1.83333 6.53976 1.46024 6.16667 1 6.16667C0.539763 6.16667 0.166667 6.53976 0.166667 7C0.166667 7.46024 0.539763 7.83333 1 7.83333Z'
      stroke='#98A2B3'
      strokeWidth={1.66667}
      strokeLinecap='round'
      strokeLinejoin='round'
    />
    <path
      d='M1 2C1.46024 2 1.83333 1.6269 1.83333 1.16667C1.83333 0.706429 1.46024 0.333333 1 0.333333C0.539763 0.333333 0.166667 0.706429 0.166667 1.16667C0.166667 1.6269 0.539763 2 1 2Z'
      stroke='#98A2B3'
      strokeWidth={1.66667}
      strokeLinecap='round'
      strokeLinejoin='round'
    />
    <path
      d='M1 13.6667C1.46024 13.6667 1.83333 13.2936 1.83333 12.8333C1.83333 12.3731 1.46024 12 1 12C0.539763 12 0.166667 12.3731 0.166667 12.8333C0.166667 13.2936 0.539763 13.6667 1 13.6667Z'
      stroke='#98A2B3'
      strokeWidth={1.66667}
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
);

const Memo = memo(DotsVerticalIcon);
export { Memo as DotsVerticalIcon };
