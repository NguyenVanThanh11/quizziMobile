import { memo, SVGProps } from 'react';

const SocialIconIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <g clipPath='url(#clip0_5664_196385)'>
      <g clipPath='url(#clip1_5664_196385)'>
        <path d='M-1 24H10.496V12.504H-1V24Z' fill='#219ADA' />
        <path d='M10.496 0H-1V11.496H10.496V0Z' fill='#F32601' />
        <path d='M4.748 12.504H-1V24H4.748V12.504Z' fill='#1D86BE' />
        <path d='M4.748 0H-1V11.496H4.748V0Z' fill='#D42101' />
        <path d='M11.504 24H23V12.504H11.504V24Z' fill='#F5B200' />
        <path d='M23 0H11.504V11.496H23V0Z' fill='#62BC2B' />
        <path d='M17 12.504H11.504V24H17V12.504Z' fill='#D59B00' />
        <path d='M17 0H11.504V11.496H17V0Z' fill='#55A425' />
      </g>
    </g>
    <defs>
      <clipPath id='clip0_5664_196385'>
        <rect width={24} height={24} fill='white' />
      </clipPath>
      <clipPath id='clip1_5664_196385'>
        <rect width={24} height={24} fill='white' transform='translate(-1)' />
      </clipPath>
    </defs>
  </svg>
);

const Memo = memo(SocialIconIcon);
export { Memo as SocialIconIcon };
