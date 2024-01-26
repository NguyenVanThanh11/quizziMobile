import { memo } from 'react';
import type { FC } from 'react';

import resets from '../../_resets.module.css';
import { OLD_ButtonBase_SizeMdIconFalse } from '../OLD_ButtonBase_SizeMdIconFalse/OLD_ButtonBase_SizeMdIconFalse.js';
import classes from './ButtonOLD_SizeMdHierarchySecon.module.css';

interface Props {
  className?: string;
}
/* @figmaId 1041:35246 */
export const ButtonOLD_SizeMdHierarchySecon: FC<Props> = memo(function ButtonOLD_SizeMdHierarchySecon(props = {}) {
  return (
    <button className={`${resets.clapyResets} ${classes.root}`}>
      <OLD_ButtonBase_SizeMdIconFalse
        className={classes.oLD_ButtonBase}
        text={{
          text: <div className={classes.text}>Button CTA</div>,
        }}
      />
    </button>
  );
});
