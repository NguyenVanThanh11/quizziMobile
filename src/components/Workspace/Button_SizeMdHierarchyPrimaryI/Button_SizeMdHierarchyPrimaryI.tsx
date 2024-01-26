import { memo } from 'react';
import type { FC, ReactNode } from 'react';

import resets from '../../_resets.module.css';
import { Placeholder2 } from '../Placeholder2/Placeholder2.js';
import classes from './Button_SizeMdHierarchyPrimaryI.module.css';
import { PlaceholderIcon2 } from './PlaceholderIcon2.js';
import { PlaceholderIcon } from './PlaceholderIcon.js';

interface Props {
  className?: string;
  hide?: {
    placeholder?: boolean;
    placeholder2?: boolean;
  };
  text?: {
    text?: ReactNode;
  };
}
/* @figmaId 3287:427299 */
export const Button_SizeMdHierarchyPrimaryI: FC<Props> = memo(function Button_SizeMdHierarchyPrimaryI(props = {}) {
  return (
    <button className={`${resets.clapyResets} ${classes.root}`}>
      {!props.hide?.placeholder && (
        <Placeholder2
          className={classes.placeholder}
          swap={{
            icon: <PlaceholderIcon className={classes.icon} />,
          }}
        />
      )}
      {props.text?.text != null ? props.text?.text : <div className={classes.text}>Button CTA</div>}
      {!props.hide?.placeholder2 && (
        <Placeholder2
          className={classes.placeholder2}
          swap={{
            icon: <PlaceholderIcon2 className={classes.icon2} />,
          }}
        />
      )}
    </button>
  );
});
