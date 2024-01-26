import { memo } from 'react';
import type { FC } from 'react';
import { useNavigate } from 'react-router-dom';

import resets from '../_resets.module.css';
import { BatteryIcon } from './BatteryIcon.js';
import { Button_SizeLgHierarchyPrimaryI } from './Button_SizeLgHierarchyPrimaryI/Button_SizeLgHierarchyPrimaryI.js';
import { Button_SizeMdHierarchyLinkColo } from './Button_SizeMdHierarchyLinkColo/Button_SizeMdHierarchyLinkColo.js';
import { CellularConnectionIcon } from './CellularConnectionIcon.js';
import { Checkbox_CheckedFalseIndetermi } from './Checkbox_CheckedFalseIndetermi/Checkbox_CheckedFalseIndetermi.js';
import { InputField_SizeMdTypeDefaultDe } from './InputField_SizeMdTypeDefaultDe/InputField_SizeMdTypeDefaultDe.js';
import classes from './Login.module.css';
import { SocialButtonGroups_StyleButton } from './SocialButtonGroups_StyleButton/SocialButtonGroups_StyleButton.js';
import { SocialIconIcon } from './SocialIconIcon.js';
import { WifiIcon } from './WifiIcon.js';

interface Props {
  className?: string;
  hide?: {
    helpIcon?: boolean;
    hintText?: boolean;
    helpIcon2?: boolean;
    hintText2?: boolean;
    supportingText?: boolean;
    placeholder?: boolean;
    placeholder2?: boolean;
    placeholder3?: boolean;
    placeholder4?: boolean;
    socialButton?: boolean;
    socialButton2?: boolean;
  };
}
/* @figmaId 5581:22568 */
export const Login: FC<Props> = memo(function Login(props = {}) {
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
      <div className={classes.content}>
        <div className={classes.header}>
          <div className={classes.responsly}>Responsly</div>
          <div className={classes.textAndSupportingText2}>
            <div className={classes.text6}>Welcome back</div>
            <div className={classes.supportingText}>Welcome back! Please enter your details.</div>
          </div>
        </div>
        <div className={classes.content2}>
          <div className={classes.form}>
            <InputField_SizeMdTypeDefaultDe
              className={classes.inputField}
              hide={{
                helpIcon: true,
                hintText: true,
              }}
              text={{
                text: <div className={classes.text}>Enter your email</div>,
              }}
            />
            <InputField_SizeMdTypeDefaultDe
              className={classes.inputField2}
              hide={{
                helpIcon: true,
                hintText: true,
              }}
              text={{
                label: <div className={classes.label}>Password</div>,
                text: <div className={classes.text2}>••••••••</div>,
              }}
            />
          </div>
          <div className={classes.row}>
            <Checkbox_CheckedFalseIndetermi
              className={classes.checkbox}
              classes={{ textAndSupportingText: classes.textAndSupportingText }}
              hide={{
                supportingText: true,
              }}
              text={{
                text: <div className={classes.text3}>Remember for 30 days</div>,
              }}
            />
            <Button_SizeMdHierarchyLinkColo
              className={classes.button}
              hide={{
                placeholder: true,
                placeholder2: true,
              }}
              text={{
                text: <div className={classes.text4}>Forgot password</div>,
              }}
            />
          </div>
          <div onClick={() => {navigate('/dashboard');}} className={classes.actions}>
            <Button_SizeLgHierarchyPrimaryI
              className={classes.button2}
              hide={{
                placeholder: true,
                placeholder2: true,
              }}
              text={{
                text: <div className={classes.text5}>Sign in</div>,
              }}
            />
            <SocialButtonGroups_StyleButton
              hide={{
                socialButton: true,
                socialButton2: true,
              }}
            />
          </div>
          <button onClick={() => {navigate('/dashboard');}} className={classes.socialButton}>
            <div className={classes.socialIcon}>
              <SocialIconIcon className={classes.icon4} />
            </div>
            <div className={classes.text7}>Continue with Micosoft</div>
          </button>
        </div>
      </div>
      <div className={classes.barsHomeIndicatorIPhoneLightPo}>
        <div className={classes.rectangle30}></div>
        <div className={classes.homeIndicator}></div>
      </div>
    </div>
  );
});
