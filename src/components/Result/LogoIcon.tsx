import { memo, SVGProps } from 'react';

const LogoIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 160 159' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <circle cx={80} cy={79.5} r={79.5} fill='url(#paint0_linear_5672_639262)' />
    <path
      fillRule='evenodd'
      clipRule='evenodd'
      d='M112.615 44.1384C107.359 38.0461 100.175 35 91.0641 35H38.5V49.6915C43.3747 47.4641 48.9953 46.3503 55.3618 46.3503C64.2561 46.3503 70.6722 48.2321 74.6101 51.9956C78.6159 55.6907 80.6188 60.378 80.6188 66.0575C80.6188 69.4104 79.9059 72.1475 78.4801 74.2688C77.0543 76.39 74.5083 79.1271 70.8419 82.4801C69.484 83.7118 68.3637 84.8066 67.4811 85.7646C66.6663 86.6542 65.7837 88.0227 64.8332 89.8703C63.9505 91.7178 63.5092 93.6338 63.5092 95.6182H47.2144C47.2144 88.9123 48.9796 83.7118 52.5102 80.0167C53.257 79.264 54.2755 78.2718 55.5655 77.0401C56.8555 75.8084 57.7381 74.9531 58.2134 74.4741C58.6887 73.9266 59.13 73.2766 59.5373 72.5239C60.0126 71.7027 60.2502 70.9158 60.2502 70.1631C60.2502 65.989 57.2289 63.902 51.1862 63.902C45.9278 63.902 41.6991 65.3975 38.5 68.3886V124H72.141V98.5714H91.0641C100.088 98.5714 107.228 95.5253 112.484 89.433C117.828 83.3408 120.5 75.7917 120.5 66.7857C120.5 57.7798 117.872 50.2307 112.615 44.1384ZM55.3618 98.9027C52.646 98.9027 50.3375 99.8607 48.4365 101.777C46.5354 103.693 45.5849 106.019 45.5849 108.756C45.5849 111.493 46.5354 113.82 48.4365 115.736C50.3375 117.652 52.646 118.61 55.3618 118.61C58.0776 118.61 60.386 117.652 62.2871 115.736C64.1882 113.82 65.1387 111.493 65.1387 108.756C65.1387 106.019 64.1882 103.693 62.2871 101.777C60.386 99.8607 58.0776 98.9027 55.3618 98.9027Z'
      fill='url(#paint1_linear_5672_639262)'
    />
    <path
      d='M79.5 19C46.3628 19 19.5 45.8629 19.5 79C19.5 112.137 46.3628 139 79.5 139C109.23 139 133.91 117.377 138.67 89H138.24C133.799 106.252 118.138 119 99.5 119C77.4087 119 59.5 101.091 59.5 79C59.5 56.9086 77.4087 39 99.5 39C118.138 39 133.799 51.7477 138.24 69H138.67C133.91 40.6229 109.23 19 79.5 19Z'
      fill='url(#paint2_linear_5672_639262)'
    />
    <path
      d='M19.5 79C19.5 45.8629 46.3628 19 79.5 19C109.23 19 133.91 40.6229 138.67 69H98.2398C93.7994 51.7477 78.1384 39 59.5 39C37.4086 39 19.5 56.9086 19.5 79Z'
      fill='url(#paint3_linear_5672_639262)'
    />
    <path
      d='M19.5 79C19.5 112.137 46.3628 139 79.5 139C109.23 139 133.91 117.377 138.67 89H98.2398C93.7994 106.252 78.1384 119 59.5 119C37.4086 119 19.5 101.091 19.5 79Z'
      fill='url(#paint4_linear_5672_639262)'
    />
    <defs>
      <linearGradient id='paint0_linear_5672_639262' x1={80} y1={0} x2={80} y2={159} gradientUnits='userSpaceOnUse'>
        <stop stopColor='#00EFFF' />
        <stop offset={1} stopColor='#26106F' stopOpacity={0} />
      </linearGradient>
      <linearGradient
        id='paint1_linear_5672_639262'
        x1={79.5}
        y1={35}
        x2={79.5}
        y2={124}
        gradientUnits='userSpaceOnUse'
      >
        <stop stopColor='white' />
        <stop offset={1} stopColor='white' />
      </linearGradient>
      <linearGradient
        id='paint2_linear_5672_639262'
        x1={79.5}
        y1={35}
        x2={79.5}
        y2={124}
        gradientUnits='userSpaceOnUse'
      >
        <stop stopColor='white' />
        <stop offset={1} stopColor='white' />
      </linearGradient>
      <linearGradient
        id='paint3_linear_5672_639262'
        x1={79.5}
        y1={35}
        x2={79.5}
        y2={124}
        gradientUnits='userSpaceOnUse'
      >
        <stop stopColor='white' />
        <stop offset={1} stopColor='white' />
      </linearGradient>
      <linearGradient
        id='paint4_linear_5672_639262'
        x1={79.5}
        y1={35}
        x2={79.5}
        y2={124}
        gradientUnits='userSpaceOnUse'
      >
        <stop stopColor='white' />
        <stop offset={1} stopColor='white' />
      </linearGradient>
    </defs>
  </svg>
);

const Memo = memo(LogoIcon);
export { Memo as LogoIcon };
