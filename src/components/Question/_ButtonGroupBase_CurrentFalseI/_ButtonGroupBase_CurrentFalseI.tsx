import { memo } from 'react';
import type { FC, ReactNode } from 'react';

import resets from '../../_resets.module.css';
import { Placeholder } from '../Placeholder/Placeholder.js';
import classes from './_ButtonGroupBase_CurrentFalseI.module.css';
import { PlaceholderIcon } from './PlaceholderIcon.js';
import { useNavigate } from 'react-router-dom';

interface Props {
  className?: string;
  classes?: {
    root?: string;
  };
  swap?: {
    placeholder?: ReactNode;
  };
}
/* @figmaId 5635:4376 */
export const _ButtonGroupBase_CurrentFalseI: FC<Props> = memo(function _ButtonGroupBase_CurrentFalseI(props = {}) {
  const navigate = useNavigate();
  return (
    <div onClick={() => {navigate('/dashboard');}} className={`${resets.clapyResets} ${props.classes?.root || ''} ${props.className || ''} ${classes.root}`}>
      {props.swap?.placeholder || (
        <Placeholder
          className={classes.placeholder}
          swap={{
            icon: <PlaceholderIcon className={classes.icon} />,
          }}
        />
      )}
    </div>
  );
});
