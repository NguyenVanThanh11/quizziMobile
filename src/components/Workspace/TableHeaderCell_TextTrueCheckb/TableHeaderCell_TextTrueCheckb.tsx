import { memo } from 'react';
import type { FC, ReactNode } from 'react';

import resets from '../../_resets.module.css';
import { Checkbox_CheckedFalseIndetermi } from '../Checkbox_CheckedFalseIndetermi/Checkbox_CheckedFalseIndetermi.js';
import { TableHeader_HelpIconFalseArrow } from '../TableHeader_HelpIconFalseArrow/TableHeader_HelpIconFalseArrow.js';
import classes from './TableHeaderCell_TextTrueCheckb.module.css';

interface Props {
  className?: string;
  classes?: {
    root?: string;
  };
  swap?: {
    tableHeader?: ReactNode;
  };
  hide?: {
    checkbox?: boolean;
  };
}
/* @figmaId 1221:107934 */
export const TableHeaderCell_TextTrueCheckb: FC<Props> = memo(function TableHeaderCell_TextTrueCheckb(props = {}) {
  return (
    <div className={`${resets.clapyResets} ${props.classes?.root || ''} ${props.className || ''} ${classes.root}`}>
      {!props.hide?.checkbox && <Checkbox_CheckedFalseIndetermi />}
      {props.swap?.tableHeader || <TableHeader_HelpIconFalseArrow />}
    </div>
  );
});
