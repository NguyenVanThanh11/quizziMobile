import { memo } from 'react';
import type { FC } from 'react';

import resets from '../../_resets.module.css';
import { SocialIcon_PlatformFacebookCol } from '../SocialIcon_PlatformFacebookCol/SocialIcon_PlatformFacebookCol.js';
import classes from './SocialButton_SocialFacebookSup.module.css';

interface Props {
  className?: string;
  classes?: {
    root?: string;
  };
}
/* @figmaId 1256:131981 */
export const SocialButton_SocialFacebookSup: FC<Props> = memo(function SocialButton_SocialFacebookSup(props = {}) {
  return (
    <button className={`${resets.clapyResets} ${props.classes?.root || ''} ${props.className || ''} ${classes.root}`}>
      <SocialIcon_PlatformFacebookCol />
      <div className={classes.text}>Sign in with Facebook</div>
    </button>
  );
});
