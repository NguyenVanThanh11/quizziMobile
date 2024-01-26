import { memo, SVGProps } from 'react';

const DividerIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 375 1' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path fillRule='evenodd' clipRule='evenodd' d='M375 1H0V0H375V1Z' fill='#EAECF0' />
  </svg>
);

const Memo = memo(DividerIcon);
export { Memo as DividerIcon };
