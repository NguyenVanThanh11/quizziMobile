import { memo } from 'react';
import type { FC } from 'react';

import resets from '../_resets.module.css';
import { Button_PrimaryTrue } from './Button_PrimaryTrue/Button_PrimaryTrue.js';
import { LogoIcon } from './LogoIcon.js';
import classes from './Result.module.css';
import { useNavigate } from 'react-router-dom';

interface Props {
  className?: string;
}
/* @figmaId 5650:8411 */
export const Result: FC<Props> = memo(function Result(props = {}) {
  const navigate = useNavigate();
  return (
    <div className={`${resets.clapyResets} ${classes.root}`}>
      <div className={classes.frame1}>
        <div className={classes.logo}>
          <LogoIcon className={classes.icon} />
        </div>
        <div className={classes.interestInventoryTest}>Interest Inventory Test</div>
      </div>
      <button onClick={() => {navigate('/answer-quiz');}} className={classes.button}>
        <div className={classes.next}>Next</div>
      </button>
      <Button_PrimaryTrue
        className={classes.primary}
        text={{
          confirm: <div className={classes.confirm}>5 OUT OF 5 - (100%)</div>,
        }}
      />
      <div className={classes.rESULT}>RESULT</div>
    </div>
  );
});
