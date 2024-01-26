import { memo } from 'react';
import type { FC, ReactNode } from 'react';

import resets from '../../_resets.module.css';
import { Avatar_SizeMdPlaceholderFalseT } from '../Avatar_SizeMdPlaceholderFalseT/Avatar_SizeMdPlaceholderFalseT.js';
import { Checkbox_CheckedFalseIndetermi } from '../Checkbox_CheckedFalseIndetermi/Checkbox_CheckedFalseIndetermi.js';
import classes from './TableCell_StyleLeadAvatarCheck.module.css';

interface Props {
  className?: string;
  classes?: {
    avatar?: string;
    root?: string;
  };
  swap?: {
    avatar?: ReactNode;
  };
  hide?: {
    checkbox?: boolean;
    supportingText?: boolean;
  };
  text?: {
    supportingText?: ReactNode;
    text?: ReactNode;
  };
}
/* @figmaId 1224:5904 */
export const TableCell_StyleLeadAvatarCheck: FC<Props> = memo(function TableCell_StyleLeadAvatarCheck(props = {}) {
  return (
    <div className={`${resets.clapyResets} ${props.classes?.root || ''} ${props.className || ''} ${classes.root}`}>
      {!props.hide?.checkbox && <Checkbox_CheckedFalseIndetermi />}
      {props.swap?.avatar || (
        <Avatar_SizeMdPlaceholderFalseT className={`${props.classes?.avatar || ''} ${classes.avatar}`} />
      )}
      <div className={classes.textAndSupportingText}>
        {props.text?.text != null ? props.text?.text : <div className={classes.text}>Olivia Rhye</div>}
        {!props.hide?.supportingText &&
          (props.text?.supportingText != null ? (
            props.text?.supportingText
          ) : (
            <div className={classes.supportingText}>olivia@untitledui.com</div>
          ))}
      </div>
    </div>
  );
});
