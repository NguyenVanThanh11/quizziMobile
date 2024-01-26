import { memo, SVGProps } from 'react';

const Group2Icon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 364 241' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path d='M72.8001 234.166V156.11H145.6L72.8001 234.166Z' fill='#2ED3B7' stroke='#2ED3B7' strokeWidth={2} />
    <path d='M145.6 156.111V78.0553H218.4L145.6 156.111Z' fill='#2ED3B7' stroke='#2ED3B7' strokeWidth={2} />
    <path d='M291.2 156.11H218.4V78.0552L291.2 156.11Z' fill='#2ED3B7' stroke='#2ED3B7' strokeWidth={2} />
    <ellipse cx={109.2} cy={40.0033} rx={36.4} ry={39.0276} fill='#2ED3B7' stroke='#2ED3B7' strokeWidth={2} />
    <ellipse cx={9.1} cy={165.867} rx={9.1} ry={9.75691} fill='#2ED3B7' stroke='#2ED3B7' strokeWidth={2} />
    <ellipse cx={354.9} cy={69.274} rx={9.1} ry={9.75691} fill='#2ED3B7' stroke='#2ED3B7' strokeWidth={2} />
    <ellipse cx={193.375} cy={201.968} rx={36.4} ry={39.0276} fill='#2ED3B7' stroke='#2ED3B7' strokeWidth={2} />
    <rect x={218.4} width={72.8} height={78.0553} fill='#2ED3B7' stroke='#2ED3B7' strokeWidth={2} />
  </svg>
);

const Memo = memo(Group2Icon);
export { Memo as Group2Icon };
