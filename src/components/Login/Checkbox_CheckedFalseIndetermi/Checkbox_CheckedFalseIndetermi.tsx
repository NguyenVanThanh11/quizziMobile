import { memo } from 'react';
import type { FC, ReactNode } from 'react';

import resets from '../../_resets.module.css';
import { _CheckboxBase_CheckedFalseInde } from '../_CheckboxBase_CheckedFalseInde/_CheckboxBase_CheckedFalseInde.js';
import classes from './Checkbox_CheckedFalseIndetermi.module.css';

interface Props {
  className?: string;
  classes?: {
    textAndSupportingText?: string;
    root?: string;
  };
  hide?: {
    supportingText?: boolean;
  };
  text?: {
    text?: ReactNode;
  };
}
/* @figmaId 1097:63683 */
export const Checkbox_CheckedFalseIndetermi: FC<Props> = memo(function Checkbox_CheckedFalseIndetermi(props = {}) {
  return (
    <div className={`${resets.clapyResets} ${props.classes?.root || ''} ${props.className || ''} ${classes.root}`}>
      <div className={classes.input}>
        <_CheckboxBase_CheckedFalseInde />
      </div>
      <div className={`${props.classes?.textAndSupportingText || ''} ${classes.textAndSupportingText}`}>
        {props.text?.text != null ? props.text?.text : <div className={classes.text}>Remember me</div>}
        {!props.hide?.supportingText && (
          <div className={classes.supportingText}>Save my login details for next time.</div>
        )}
      </div>
    </div>
  );
});
