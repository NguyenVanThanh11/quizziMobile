import { memo } from 'react';
import type { FC } from 'react';

import resets from '../../_resets.module.css';
import { SocialIcon_PlatformGoogleColor } from '../SocialIcon_PlatformGoogleColor/SocialIcon_PlatformGoogleColor.js';
import classes from './SocialButton_SocialGoogleSuppo.module.css';

interface Props {
  className?: string;
  classes?: {
    root?: string;
  };
}
/* @figmaId 1256:131974 */
export const SocialButton_SocialGoogleSuppo: FC<Props> = memo(function SocialButton_SocialGoogleSuppo(props = {}) {
  return (
    <button className={`${resets.clapyResets} ${props.classes?.root || ''} ${props.className || ''} ${classes.root}`}>
      <SocialIcon_PlatformGoogleColor />
      <div className={classes.text}>Sign in with Google</div>
    </button>
  );
});
