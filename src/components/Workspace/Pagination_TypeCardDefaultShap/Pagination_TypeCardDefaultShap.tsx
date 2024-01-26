import { memo } from 'react';
import type { FC } from 'react';

import resets from '../../_resets.module.css';
import { ArrowLeft2 } from '../ArrowLeft2/ArrowLeft2.js';
import { ArrowRight } from '../ArrowRight/ArrowRight.js';
import { Button_SizeSmHierarchySecondar } from '../Button_SizeSmHierarchySecondar/Button_SizeSmHierarchySecondar.js';
import { ArrowLeftIcon } from './ArrowLeftIcon.js';
import { ArrowRightIcon } from './ArrowRightIcon.js';
import classes from './Pagination_TypeCardDefaultShap.module.css';

interface Props {
  className?: string;
}
/* @figmaId 226:136 */
export const Pagination_TypeCardDefaultShap: FC<Props> = memo(function Pagination_TypeCardDefaultShap(props = {}) {
  return (
    <div className={`${resets.clapyResets} ${classes.root}`}>
      <Button_SizeSmHierarchySecondar
        swap={{
          placeholder: (
            <ArrowLeft2
              className={classes.arrowLeft}
              swap={{
                icon: <ArrowLeftIcon className={classes.icon} />,
              }}
            />
          ),
        }}
      />
      <div className={classes.details}>
        <p className={classes.labelWrapper}>
          <span className={classes.label}>Page </span>
          <span className={classes.label2}>1</span>
          <span className={classes.label3}> of </span>
          <span className={classes.label4}>10</span>
        </p>
      </div>
      <Button_SizeSmHierarchySecondar
        swap={{
          placeholder: (
            <ArrowRight
              className={classes.arrowRight}
              swap={{
                icon: <ArrowRightIcon className={classes.icon2} />,
              }}
            />
          ),
        }}
      />
    </div>
  );
});
