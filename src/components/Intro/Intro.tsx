import { memo } from 'react';
import type { FC } from 'react';

import resets from '../_resets.module.css';
import { BatteryIcon } from './BatteryIcon.js';
import { Button_SizeLgHierarchyPrimaryI } from './Button_SizeLgHierarchyPrimaryI/Button_SizeLgHierarchyPrimaryI.js';
import { Button_SizeMdHierarchyLinkColo } from './Button_SizeMdHierarchyLinkColo/Button_SizeMdHierarchyLinkColo.js';
import { CellularConnectionIcon } from './CellularConnectionIcon.js';
import { Group2Icon } from './Group2Icon.js';
import { Group3Icon } from './Group3Icon.js';
import classes from './Intro.module.css';
import { WifiIcon } from './WifiIcon.js';
import { useNavigate } from 'react-router-dom';

interface Props {
  className?: string;
  hide?: {
    placeholder?: boolean;
    placeholder2?: boolean;
    placeholder3?: boolean;
    placeholder4?: boolean;
  };
}
/* @figmaId 5650:8468 */
export const Intro: FC<Props> = memo(function Intro(props = {}) {
  const navigate = useNavigate();
  return (
    <div className={`${resets.clapyResets} ${classes.root}`}>
      <div className={classes.frame1}>
        <div className={classes.frame2}>
          <div className={classes.title}>AI Survey Question Generator</div>
          <Button_SizeLgHierarchyPrimaryI
            className={classes.button}
            hide={{
              placeholder: true,
              placeholder2: true,
            }}
            text={{
              text: <div className={classes.text}>Sign In</div>,
            }}
          />
          <div className={classes.row}>
            <div className={classes.text3}>Don’t have an account?</div>
            <Button_SizeMdHierarchyLinkColo
              hide={{
                placeholder: true,
                placeholder2: true,
              }}
              text={{
                text: <div className={classes.text2}>Sign up</div>,
              }}
            />
          </div>
        </div>
      </div>
      <div className={classes.barsStatusBarIPhoneLight}>
        <div className={classes.rectangle29}></div>
        <div className={classes.battery}>
          <BatteryIcon className={classes.icon} />
        </div>
        <div className={classes.wifi}>
          <WifiIcon className={classes.icon2} />
        </div>
        <div className={classes.cellularConnection}>
          <CellularConnectionIcon className={classes.icon3} />
        </div>
        <div className={classes.timeStyle}>
          <div className={classes.time}>9:41</div>
        </div>
      </div>
      <div className={classes.group2}>
        <Group2Icon className={classes.icon4} />
      </div>
      <div className={classes.group3}>
        <Group3Icon className={classes.icon5} />
      </div>
      <div className={classes.responsly}>Responsly</div>
    </div>
  );
});
