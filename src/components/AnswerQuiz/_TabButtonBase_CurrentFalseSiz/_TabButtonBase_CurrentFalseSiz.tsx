import { memo } from 'react';
import type { FC, ReactNode } from 'react';
import { useNavigate } from 'react-router-dom';

import resets from '../../_resets.module.css';
import classes from './_TabButtonBase_CurrentFalseSiz.module.css';

interface Props {
  className?: string;
  classes?: {
    root?: string;
  };
  text?: {
    text?: ReactNode;
  };
}
/* @figmaId 2640:401290 */
export const _TabButtonBase_CurrentFalseSiz: FC<Props> = memo(function _TabButtonBase_CurrentFalseSiz(props = {}) {
  const navigate = useNavigate();
  return (
    <button onClick={() => {navigate('/answer-quiz1');}} className={`${resets.clapyResets} ${props.classes?.root || ''} ${props.className || ''} ${classes.root}`}>
      {props.text?.text != null ? props.text?.text : <div className={classes.text}>My details</div>}
    </button>
  );
});
