import { memo } from 'react';
import type { FC, ReactNode } from 'react';

import resets from '../../_resets.module.css';
import { _CheckboxBase_CheckedFalseInde } from '../_CheckboxBase_CheckedFalseInde/_CheckboxBase_CheckedFalseInde.js';
import classes from './CheckboxGroupItem_SelectedFals.module.css';

interface Props {
  className?: string;
  classes?: {
    root?: string;
  };
  hide?: {
    textAndSubtext?: boolean;
  };
  text?: {
    includesUpTo10Users20GBIndivid?: ReactNode;
  };
}
/* @figmaId 5650:14928 */
export const CheckboxGroupItem_SelectedFals: FC<Props> = memo(function CheckboxGroupItem_SelectedFals(props = {}) {
  return (
    <div className={`${resets.clapyResets} ${props.classes?.root || ''} ${props.className || ''} ${classes.root}`}>
      <div className={classes.content}>
        <div className={classes.input}>
          <_CheckboxBase_CheckedFalseInde />
        </div>
        <div className={classes.textAndSupportingText}>
          {!props.hide?.textAndSubtext && (
            <div className={classes.textAndSubtext}>
              <div className={classes.text}>Basic plan</div>
              <div className={classes.subtext}>$10/month</div>
            </div>
          )}
          {props.text?.includesUpTo10Users20GBIndivid != null ? (
            props.text?.includesUpTo10Users20GBIndivid
          ) : (
            <div className={classes.includesUpTo10Users20GBIndivid}>
              Includes up to 10 users, 20GB individual data and access to all features.
            </div>
          )}
        </div>
      </div>
    </div>
  );
});
