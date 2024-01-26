import { memo } from 'react';
import type { FC } from 'react';

import resets from '../../_resets.module.css';
import { Minus } from '../Minus/Minus.js';
import classes from './_CheckboxBase_CheckedTrueIndet.module.css';
import { MinusIcon } from './MinusIcon.js';

interface Props {
  className?: string;
}
/* @figmaId 1224:6805 */
export const _CheckboxBase_CheckedTrueIndet: FC<Props> = memo(function _CheckboxBase_CheckedTrueIndet(props = {}) {
  return (
    <div className={`${resets.clapyResets} ${classes.root}`}>
      <Minus
        className={classes.minus}
        classes={{ icon: classes.icon }}
        swap={{
          icon: (
            <div className={classes.icon}>
              <MinusIcon className={classes.icon2} />
            </div>
          ),
        }}
      />
    </div>
  );
});
