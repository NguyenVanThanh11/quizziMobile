import { memo } from 'react';
import type { FC } from 'react';
import { useNavigate } from 'react-router-dom';

import resets from '../_resets.module.css';
import { _ButtonGroupBase_CurrentFalseI } from './_ButtonGroupBase_CurrentFalseI/_ButtonGroupBase_CurrentFalseI.js';
import { ArrowLeft } from './ArrowLeft/ArrowLeft.js';
import { ArrowLeftIcon } from './ArrowLeftIcon.js';
import { BatteryIcon } from './BatteryIcon.js';
import { Button_SizeLgHierarchyPrimaryI } from './Button_SizeLgHierarchyPrimaryI/Button_SizeLgHierarchyPrimaryI.js';
import { CellularConnectionIcon } from './CellularConnectionIcon.js';
import { CheckboxGroupItem_SelectedFals } from './CheckboxGroupItem_SelectedFals/CheckboxGroupItem_SelectedFals.js';
import { CheckboxGroupItem_SelectedTrue } from './CheckboxGroupItem_SelectedTrue/CheckboxGroupItem_SelectedTrue.js';
import { CheckIcon } from './CheckIcon.js';
import { ClarityBookLineIcon } from './ClarityBookLineIcon.js';
import { IcOutlineAccountCircleIcon } from './IcOutlineAccountCircleIcon.js';
import { InputField_SizeSmTypeDefaultDe } from './InputField_SizeSmTypeDefaultDe/InputField_SizeSmTypeDefaultDe.js';
import { JamHomeFIcon } from './JamHomeFIcon.js';
import { Plus } from './Plus/Plus.js';
import { PlusIcon } from './PlusIcon.js';
import classes from './Question.module.css';
import { WifiIcon } from './WifiIcon.js';

interface Props {
  className?: string;
  hide?: {
    textAndSubtext?: boolean;
    textAndSubtext2?: boolean;
    textAndSubtext3?: boolean;
    textAndSubtext4?: boolean;
    helpIcon?: boolean;
    hintText?: boolean;
    placeholder?: boolean;
    placeholder2?: boolean;
  };
}
/* @figmaId 5660:20680 */
export const Question: FC<Props> = memo(function Question(props = {}) {
  const navigate = useNavigate();
  return (
    <div className={`${resets.clapyResets} ${classes.root}`}>
      <div className={classes.barsStatusBarIPhoneLight}>
        <div className={classes.rectangle29}></div>
        <div className={classes.battery}>
          <BatteryIcon className={classes.icon4} />
        </div>
        <div className={classes.wifi}>
          <WifiIcon className={classes.icon5} />
        </div>
        <div className={classes.cellularConnection}>
          <CellularConnectionIcon className={classes.icon6} />
        </div>
        <div className={classes.timeStyle}>
          <div className={classes.time}>9:41</div>
        </div>
      </div>
      <div className={classes.frame3}>
        <_ButtonGroupBase_CurrentFalseI
          className={classes._ButtonGroupBase}
          swap={{
            placeholder: (
              <ArrowLeft
                className={classes.arrowLeft}
                swap={{
                  icon: <ArrowLeftIcon className={classes.icon} />,
                }}
              />
            ),
          }}
        />
        <div className={classes.question}>Question</div>
      </div>
      <div className={classes.checkboxGroup}>
        <CheckboxGroupItem_SelectedTrue
          className={classes.checkboxGroupItem}
          classes={{ _CheckboxBase: classes._CheckboxBase }}
          swap={{
            icon: <CheckIcon className={classes.icon2} />,
          }}
          hide={{
            textAndSubtext: true,
          }}
          text={{
            includesUpTo10Users20GBIndivid: <div className={classes.includesUpTo10Users20GBIndivid}>Answer 1</div>,
          }}
        />
        <CheckboxGroupItem_SelectedFals
          className={classes.checkboxGroupItem2}
          hide={{
            textAndSubtext: true,
          }}
          text={{
            includesUpTo10Users20GBIndivid: <div className={classes.includesUpTo10Users20GBIndivid2}>Answer 2</div>,
          }}
        />
        <CheckboxGroupItem_SelectedFals
          className={classes.checkboxGroupItem3}
          hide={{
            textAndSubtext: true,
          }}
          text={{
            includesUpTo10Users20GBIndivid: <div className={classes.includesUpTo10Users20GBIndivid3}>Answer 3</div>,
          }}
        />
        <CheckboxGroupItem_SelectedFals
          className={classes.checkboxGroupItem4}
          hide={{
            textAndSubtext: true,
          }}
          text={{
            includesUpTo10Users20GBIndivid: <div className={classes.includesUpTo10Users20GBIndivid4}>Answer 4</div>,
          }}
        />
        <div className={classes.checkboxGroupItem5}>
          <Plus
            className={classes.plus}
            swap={{
              icon: <PlusIcon className={classes.icon3} />,
            }}
          />
          <div className={classes.content}>
            <div className={classes.textAndSupportingText}>
              <div className={classes.includesUpTo10Users20GBIndivid5}>Add new answer</div>
            </div>
          </div>
        </div>
      </div>
      <div className={classes.answer}>Answer</div>
      <div className={classes.barsHomeIndicatorIPhoneLightPo}>
        <div className={classes.rectangle30}></div>
        <div className={classes.homeIndicator}></div>
      </div>
      <div className={classes.rectangle39}></div>
      <div className={classes.rectangle33}></div>
      <div className={classes.rectangle38}></div>
      <div className={classes.home}>Home</div>
      <div className={classes.jamHomeF}>
        <JamHomeFIcon className={classes.icon7} />
      </div>
      <div className={classes.rectangle34}></div>
      <div className={classes.clarityBookLine}>
        <ClarityBookLineIcon className={classes.icon8} />
      </div>
      <div className={classes.rectangle35}></div>
      <div className={classes.icOutlineAccountCircle}>
        <IcOutlineAccountCircleIcon className={classes.icon9} />
      </div>
      <InputField_SizeSmTypeDefaultDe
        className={classes.inputField}
        hide={{
          helpIcon: true,
          hintText: true,
        }}
        text={{
          label: <div className={classes.label}>Question 1</div>,
          text: <div className={classes.text}>Put your question here</div>,
        }}
      />
      <Button_SizeLgHierarchyPrimaryI
        className={classes.button}
        hide={{
          placeholder: true,
          placeholder2: true,
        }}
        text={{
          text: <div className={classes.text2}>Save</div>,
        }}
      />
    </div>
  );
});
