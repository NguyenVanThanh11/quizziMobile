import { memo } from 'react';
import type { FC, ReactNode } from 'react';

import resets from '../../_resets.module.css';
import { Badge_SizeSmIconFalseColorSucc } from '../Badge_SizeSmIconFalseColorSucc/Badge_SizeSmIconFalseColorSucc.js';
import classes from './TableCell_StyleBadgeSupporting.module.css';

interface Props {
  className?: string;
  classes?: {
    root?: string;
  };
  swap?: {
    badge?: ReactNode;
  };
}
/* @figmaId 1224:169 */
export const TableCell_StyleBadgeSupporting: FC<Props> = memo(function TableCell_StyleBadgeSupporting(props = {}) {
  return (
    <div className={`${resets.clapyResets} ${props.classes?.root || ''} ${props.className || ''} ${classes.root}`}>
      {props.swap?.badge || (
        <Badge_SizeSmIconFalseColorSucc
          text={{
            text: <div className={classes.text}>Active</div>,
          }}
        />
      )}
    </div>
  );
});
