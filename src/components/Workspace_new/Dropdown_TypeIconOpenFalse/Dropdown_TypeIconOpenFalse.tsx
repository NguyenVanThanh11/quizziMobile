import { memo } from 'react';
import type { FC } from 'react';

import resets from '../../_resets.module.css';
import { DotsVertical } from '../DotsVertical/DotsVertical.js';
import { DotsVerticalIcon } from './DotsVerticalIcon.js';
import classes from './Dropdown_TypeIconOpenFalse.module.css';

interface Props {
  className?: string;
  classes?: {
    root?: string;
  };
}
/* @figmaId 3281:383087 */
export const Dropdown_TypeIconOpenFalse: FC<Props> = memo(function Dropdown_TypeIconOpenFalse(props = {}) {
  return (
    <div className={`${resets.clapyResets} ${props.classes?.root || ''} ${props.className || ''} ${classes.root}`}>
      <DotsVertical
        className={classes.dotsVertical}
        swap={{
          icon: <DotsVerticalIcon className={classes.icon} />,
        }}
      />
    </div>
  );
});
