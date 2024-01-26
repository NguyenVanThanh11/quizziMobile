import { memo } from 'react';
import type { FC } from 'react';

import resets from '../_resets.module.css';
import { ButtonCloseX_SizeLgColorGrayTh } from './ButtonCloseX_SizeLgColorGrayTh/ButtonCloseX_SizeLgColorGrayTh.js';
import { LogoIcon } from './LogoIcon.js';
import classes from './Splash.module.css';
import { XCloseIcon } from './XCloseIcon.js';
import { useNavigate } from 'react-router-dom';

interface Props {
  className?: string;
}
/* @figmaId 5650:8409 */
export const Splash: FC<Props> = memo(function Splash(props = {}) {
  const navigate = useNavigate();
  return (
    <div className={`${resets.clapyResets} ${classes.root}`}>
      <div className={classes.frame1}>
        <div className={classes.logo}>
          <LogoIcon className={classes.icon2} />
        </div>
        <div className={classes.interestInventoryTest}>Interest Inventory Test</div>
      </div>
      <button onClick={() => {navigate('/question');}} className={classes.button}>
        <div className={classes.start}>Start</div>
      </button>
      <ButtonCloseX_SizeLgColorGrayTh
        className={classes.buttonCloseX}
        swap={{
          icon: <XCloseIcon className={classes.icon} />,
        }}
      />
    </div>
  );
});
