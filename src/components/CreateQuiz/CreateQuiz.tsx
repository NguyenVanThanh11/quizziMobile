import { memo } from 'react';
import type { FC } from 'react';

import resets from '../_resets.module.css';
import { AntDesignSearchOutlinedIcon } from './AntDesignSearchOutlinedIcon.js';
import { BatteryIcon } from './BatteryIcon.js';
import { Button_SizeLgHierarchyPrimaryI } from './Button_SizeLgHierarchyPrimaryI/Button_SizeLgHierarchyPrimaryI.js';
import { CellularConnectionIcon } from './CellularConnectionIcon.js';
import { ClarityBookLineIcon } from './ClarityBookLineIcon.js';
import { ClarityNotificationSolidBadged } from './ClarityNotificationSolidBadged.js';
import classes from './CreateQuiz.module.css';
import { IcOutlineAccountCircleIcon } from './IcOutlineAccountCircleIcon.js';
import { InputDropdown_TypeDefaultState } from './InputDropdown_TypeDefaultState/InputDropdown_TypeDefaultState.js';
import { InputField_SizeSmTypeDefaultDe } from './InputField_SizeSmTypeDefaultDe/InputField_SizeSmTypeDefaultDe.js';
import { JamHomeFIcon } from './JamHomeFIcon.js';
import { WifiIcon } from './WifiIcon.js';
import { useNavigate } from 'react-router-dom';

interface Props {
  className?: string;
  hide?: {
    helpCircle?: boolean;
    placeholder?: boolean;
    placeholder2?: boolean;
    hintText?: boolean;
  };
}
/* @figmaId 5650:6979 */
export const CreateQuiz: FC<Props> = memo(function CreateQuiz(props = {}) {
  const navigate = useNavigate();
  return (
    <div className={`${resets.clapyResets} ${classes.root}`}>
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
      <div className={classes.rectangle33}></div>
      <div className={classes.antDesignSearchOutlined}>
        <AntDesignSearchOutlinedIcon className={classes.icon4} />
      </div>
      <div className={classes.search}>Search</div>
      <div className={classes.text3}>Welcome back, team 3</div>
      <div className={classes.clarityNotificationSolidBadged}>
        <ClarityNotificationSolidBadged className={classes.icon5} />
      </div>
      <InputField_SizeSmTypeDefaultDe
        className={classes.inputField}
        hide={{
          helpCircle: true,
        }}
        text={{
          label: <div className={classes.label}>Enter name</div>,
          text: <div className={classes.text}>Quiz name</div>,
        }}
      />
      <Button_SizeLgHierarchyPrimaryI
        className={classes.button}
        hide={{
          placeholder: true,
          placeholder2: true,
        }}
        text={{
          text: <div className={classes.text2}>Create</div>,
        }}
      />
      <InputDropdown_TypeDefaultState
        className={classes.inputDropdown}
        hide={{
          hintText: true,
        }}
        text={{
          label: <div className={classes.label2}>Workspace</div>,
        }}
      />
      <div className={classes.rectangle40}></div>
      <div className={classes.barsHomeIndicatorIPhoneLightPo}>
        <div className={classes.rectangle30}></div>
        <div className={classes.homeIndicator}></div>
      </div>
      <div className={classes.rectangle39}></div>
      <div className={classes.rectangle332}></div>
      <div className={classes.rectangle38}></div>
      <div className={classes.home}>Home</div>
      <div className={classes.jamHomeF}>
        <JamHomeFIcon className={classes.icon6} />
      </div>
      <div className={classes.rectangle34}></div>
      <div onClick={() => {navigate('/workspace');}} className={classes.clarityBookLine}>
        <ClarityBookLineIcon className={classes.icon7} />
      </div>
      <div className={classes.rectangle35}></div>
      <div className={classes.icOutlineAccountCircle}>
        <IcOutlineAccountCircleIcon className={classes.icon8} />
      </div>
    </div>
  );
});
