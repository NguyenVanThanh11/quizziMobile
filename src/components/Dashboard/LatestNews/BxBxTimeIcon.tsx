import { memo, SVGProps } from 'react';

const BxBxTimeIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 16 16' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      d='M8 1.33333C4.324 1.33333 1.33333 4.324 1.33333 8C1.33333 11.676 4.324 14.6667 8 14.6667C11.676 14.6667 14.6667 11.676 14.6667 8C14.6667 4.324 11.676 1.33333 8 1.33333ZM8 13.3333C5.05933 13.3333 2.66667 10.9407 2.66667 8C2.66667 5.05933 5.05933 2.66667 8 2.66667C10.9407 2.66667 13.3333 5.05933 13.3333 8C13.3333 10.9407 10.9407 13.3333 8 13.3333Z'
      fill='#4F4F4F'
    />
    <path d='M8.66667 4.66667H7.33333V8.66667H11.3333V7.33333H8.66667V4.66667Z' fill='#4F4F4F' />
  </svg>
);

const Memo = memo(BxBxTimeIcon);
export { Memo as BxBxTimeIcon };
