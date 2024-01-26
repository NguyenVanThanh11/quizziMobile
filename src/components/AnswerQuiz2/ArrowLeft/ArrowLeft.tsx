import { memo } from 'react';
import type { FC, ReactNode } from 'react';
import { useNavigate } from 'react-router-dom';

import resets from '../../_resets.module.css';
import classes from './ArrowLeft.module.css';
import { ArrowLeftIcon } from './ArrowLeftIcon.js';

interface Props {
  className?: string;
  classes?: {
    root?: string;
  };
  swap?: {
    icon?: ReactNode;
  };
}
/* @figmaId 5425:4231 */
export const ArrowLeft: FC<Props> = memo(function ArrowLeft(props = {}) {
  const navigate = useNavigate();
  return (
    <div onClick={() => {navigate('/answer-quiz');}} className={`${resets.clapyResets} ${props.classes?.root || ''} ${props.className || ''} ${classes.root}`}>
      <div className={classes.icon}>{props.swap?.icon || <ArrowLeftIcon className={classes.icon2} />}</div>
    </div>
  );
});
