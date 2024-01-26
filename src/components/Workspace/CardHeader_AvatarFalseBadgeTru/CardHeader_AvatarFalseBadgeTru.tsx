import { memo } from 'react';
import type { FC, ReactNode } from 'react';

import resets from '../../_resets.module.css';
import { Badge_SizeSmIconFalseColorPrim } from '../Badge_SizeSmIconFalseColorPrim/Badge_SizeSmIconFalseColorPrim.js';
import { Button_SizeMdHierarchyPrimaryI } from '../Button_SizeMdHierarchyPrimaryI/Button_SizeMdHierarchyPrimaryI.js';
import { Button_SizeMdHierarchySecondar } from '../Button_SizeMdHierarchySecondar/Button_SizeMdHierarchySecondar.js';
import { ButtonOLD_SizeMdHierarchySecon } from '../ButtonOLD_SizeMdHierarchySecon/ButtonOLD_SizeMdHierarchySecon.js';
import { ButtonOLD_SizeMdHierarchyTerti } from '../ButtonOLD_SizeMdHierarchyTerti/ButtonOLD_SizeMdHierarchyTerti.js';
import { Dropdown_TypeIconOpenFalse } from '../Dropdown_TypeIconOpenFalse/Dropdown_TypeIconOpenFalse.js';
import classes from './CardHeader_AvatarFalseBadgeTru.module.css';
import { DividerIcon } from './DividerIcon.js';

interface Props {
  className?: string;
  classes?: {
    textAndSupportingText?: string;
    root?: string;
  };
  hide?: {
    placeholder?: boolean;
    placeholder2?: boolean;
    placeholder3?: boolean;
    placeholder4?: boolean;
    supportingText?: boolean;
    actions?: boolean;
  };
  text?: {
    text?: ReactNode;
  };
}
/* @figmaId 1211:221 */
export const CardHeader_AvatarFalseBadgeTru: FC<Props> = memo(function CardHeader_AvatarFalseBadgeTru(props = {}) {
  return (
    <div className={`${resets.clapyResets} ${props.classes?.root || ''} ${props.className || ''} ${classes.root}`}>
      <div className={classes.content}>
        <div className={`${props.classes?.textAndSupportingText || ''} ${classes.textAndSupportingText}`}>
          <div className={classes.textAndBadge}>
            <div className={classes.text4}>Team members </div>
            <Badge_SizeSmIconFalseColorPrim
              text={{
                text: props.text?.text || <div className={classes.text}>10/20 seats</div>,
              }}
            />
          </div>
          {!props.hide?.supportingText && (
            <div className={classes.supportingText}>Manage your team members and their account permissions here.</div>
          )}
        </div>
        {!props.hide?.actions && (
          <div className={classes.actions}>
            <Button_SizeMdHierarchySecondar
              hide={{
                placeholder: true,
                placeholder2: true,
              }}
              text={{
                text: <div className={classes.text2}>Secondary</div>,
              }}
            />
            <Button_SizeMdHierarchyPrimaryI
              hide={{
                placeholder: true,
                placeholder2: true,
              }}
              text={{
                text: <div className={classes.text3}>Primary</div>,
              }}
            />
          </div>
        )}
        <Dropdown_TypeIconOpenFalse className={classes.dropdown} />
      </div>
      <div className={classes.divider}>
        <DividerIcon className={classes.icon} />
      </div>
    </div>
  );
});
