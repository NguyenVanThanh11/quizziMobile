import { memo } from 'react';
import type { FC } from 'react';

import resets from '../_resets.module.css';
import { _ButtonGroupBase_CurrentFalseI } from './_ButtonGroupBase_CurrentFalseI/_ButtonGroupBase_CurrentFalseI.js';
import { _TabButtonBase_CurrentFalseSiz } from './_TabButtonBase_CurrentFalseSiz/_TabButtonBase_CurrentFalseSiz.js';
import classes from './AnswerQuiz.module.css';
import { ArrowLeft } from './ArrowLeft/ArrowLeft.js';
import { ArrowLeftIcon } from './ArrowLeftIcon.js';
import { Avatar_SizeLgPlaceholderFalseT } from './Avatar_SizeLgPlaceholderFalseT/Avatar_SizeLgPlaceholderFalseT.js';
import { Avatar_SizeMdPlaceholderFalseT } from './Avatar_SizeMdPlaceholderFalseT/Avatar_SizeMdPlaceholderFalseT.js';
import { BatteryIcon } from './BatteryIcon.js';
import { CellularConnectionIcon } from './CellularConnectionIcon.js';
import { Checkbox_CheckedTrueIndetermin } from './Checkbox_CheckedTrueIndetermin/Checkbox_CheckedTrueIndetermin.js';
import { ClarityBookSolidIcon } from './ClarityBookSolidIcon.js';
import { IcOutlineAccountCircleIcon } from './IcOutlineAccountCircleIcon.js';
import { JamHomeIcon } from './JamHomeIcon.js';
import { ProgressBar_Progress40LabelRig } from './ProgressBar_Progress40LabelRig/ProgressBar_Progress40LabelRig.js';
import { ProgressBar_Progress70LabelRig } from './ProgressBar_Progress70LabelRig/ProgressBar_Progress70LabelRig.js';
import { ProgressBar_Progress80LabelRig } from './ProgressBar_Progress80LabelRig/ProgressBar_Progress80LabelRig.js';
import { ProgressBar_Progress90LabelRig } from './ProgressBar_Progress90LabelRig/ProgressBar_Progress90LabelRig.js';
import { TableCell_StyleProgressBarSupp } from './TableCell_StyleProgressBarSupp/TableCell_StyleProgressBarSupp.js';
import { TableHeader_HelpIconFalseArrow } from './TableHeader_HelpIconFalseArrow/TableHeader_HelpIconFalseArrow.js';
import { TableHeaderCell_TextTrueCheckb } from './TableHeaderCell_TextTrueCheckb/TableHeaderCell_TextTrueCheckb.js';
import { WifiIcon } from './WifiIcon.js';
import { useNavigate } from 'react-router-dom';

interface Props {
  className?: string;
}
/* @figmaId 5637:9421 */
export const AnswerQuiz: FC<Props> = memo(function AnswerQuiz(props = {}) {
  const navigate = useNavigate();
  return (
    <div className={`${resets.clapyResets} ${classes.root}`}>
      <div className={classes.barsStatusBarIPhoneLight}>
        <div className={classes.rectangle29}></div>
        <div className={classes.battery}>
          <BatteryIcon className={classes.icon2} />
        </div>
        <div className={classes.wifi}>
          <WifiIcon className={classes.icon3} />
        </div>
        <div className={classes.cellularConnection}>
          <CellularConnectionIcon className={classes.icon4} />
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
        <div className={classes.quiz1}>Quiz 1</div>
      </div>
      <div className={classes.rectangle39}></div>
      <div className={classes.rectangle33}></div>
      <div onClick={() => {navigate('/dashboard');}} className={classes.jamHome}>
        <JamHomeIcon className={classes.icon5} />
      </div>
      <div className={classes.rectangle34}></div>
      <div className={classes.rectangle38}></div>
      <div className={classes.workspace}>Workspace</div>
      <div className={classes.clarityBookSolid}>
        <ClarityBookSolidIcon className={classes.icon6} />
      </div>
      <div className={classes.rectangle35}></div>
      <div className={classes.icOutlineAccountCircle}>
        <IcOutlineAccountCircleIcon className={classes.icon7} />
      </div>
      <div className={classes.barsHomeIndicatorIPhoneLightPo}>
        <div className={classes.rectangle30}></div>
        <div className={classes.homeIndicator}></div>
      </div>
      <div className={classes.frame4}>
        <_TabButtonBase_CurrentFalseSiz
          className={classes._TabButtonBase}
          text={{
            text: <div className={classes.text}>Rank</div>,
          }}
        />
        <_TabButtonBase_CurrentFalseSiz
          className={classes._TabButtonBase2}
          text={{
            text: <div className={classes.text2}>Answer</div>,
          }}
        />
      </div>
      <div className={classes.rank}>
        <div className={classes.column}>
          <div className={classes.tableHeaderCell2}>
            <TableHeader_HelpIconFalseArrow
              text={{
                text: <div className={classes.text3}>Name</div>,
              }}
            />
          </div>
          <div className={classes.tableCell8}>
            <Avatar_SizeLgPlaceholderFalseT className={classes.avatar} />
            <div className={classes.textAndSupportingText}>
              <div className={classes.text5}>Olivia Rhye</div>
              <div className={classes.supportingText}>@olivia</div>
            </div>
          </div>
          <div className={classes.tableCell9}>
            <Avatar_SizeLgPlaceholderFalseT className={classes.avatar2} />
            <div className={classes.textAndSupportingText2}>
              <div className={classes.text6}>Olivia Rhye</div>
              <div className={classes.supportingText2}>@olivia</div>
            </div>
          </div>
          <div className={classes.tableCell10}>
            <Avatar_SizeMdPlaceholderFalseT className={classes.avatar3} />
            <div className={classes.textAndSupportingText3}>
              <div className={classes.text7}>Quotient</div>
              <div className={classes.supportingText3}>quotient.co</div>
            </div>
          </div>
          <div className={classes.tableCell11}>
            <Avatar_SizeLgPlaceholderFalseT className={classes.avatar4} />
            <div className={classes.textAndSupportingText4}>
              <div className={classes.text8}>Olivia Rhye</div>
              <div className={classes.supportingText4}>@olivia</div>
            </div>
          </div>
          <div className={classes.tableCell12}>
            <Avatar_SizeMdPlaceholderFalseT className={classes.avatar5} />
            <div className={classes.textAndSupportingText5}>
              <div className={classes.text9}>Quotient</div>
              <div className={classes.supportingText5}>quotient.co</div>
            </div>
          </div>
          <div className={classes.tableCell13}>
            <Avatar_SizeLgPlaceholderFalseT className={classes.avatar6} />
            <div className={classes.textAndSupportingText6}>
              <div className={classes.text10}>Olivia Rhye</div>
              <div className={classes.supportingText6}>@olivia</div>
            </div>
          </div>
          <div className={classes.tableCell14}>
            <Avatar_SizeMdPlaceholderFalseT className={classes.avatar7} />
            <div className={classes.textAndSupportingText7}>
              <div className={classes.text11}>Quotient</div>
              <div className={classes.supportingText7}>quotient.co</div>
            </div>
          </div>
        </div>
        <div className={classes.column2}>
          <TableHeaderCell_TextTrueCheckb
            className={classes.tableHeaderCell}
            text={{
              text: <div className={classes.text4}>Rating</div>,
            }}
          />
          <TableCell_StyleProgressBarSupp
            className={classes.tableCell}
            classes={{ progress: classes.progress }}
            text={{
              percentage: <div className={classes.percentage}>6</div>,
            }}
          />
          <TableCell_StyleProgressBarSupp
            className={classes.tableCell2}
            swap={{
              progressBar: (
                <ProgressBar_Progress70LabelRig
                  className={classes.progressBar}
                  classes={{ progress: classes.progress2 }}
                  text={{
                    percentage: <div className={classes.percentage2}>7</div>,
                  }}
                />
              ),
            }}
          />
          <TableCell_StyleProgressBarSupp
            className={classes.tableCell3}
            swap={{
              progressBar: (
                <ProgressBar_Progress80LabelRig
                  className={classes.progressBar2}
                  classes={{ progress: classes.progress3 }}
                  text={{
                    percentage: <div className={classes.percentage3}>8</div>,
                  }}
                />
              ),
            }}
          />
          <TableCell_StyleProgressBarSupp
            className={classes.tableCell4}
            swap={{
              progressBar: (
                <ProgressBar_Progress40LabelRig
                  className={classes.progressBar3}
                  classes={{ progress: classes.progress4 }}
                  text={{
                    percentage: <div className={classes.percentage4}>3</div>,
                  }}
                />
              ),
            }}
          />
          <TableCell_StyleProgressBarSupp
            className={classes.tableCell5}
            swap={{
              progressBar: (
                <ProgressBar_Progress40LabelRig
                  className={classes.progressBar4}
                  classes={{ progress: classes.progress5 }}
                  text={{
                    percentage: <div className={classes.percentage5}>4</div>,
                  }}
                />
              ),
            }}
          />
          <TableCell_StyleProgressBarSupp
            className={classes.tableCell6}
            classes={{ progress: classes.progress6 }}
            text={{
              percentage: <div className={classes.percentage6}>6</div>,
            }}
          />
          <TableCell_StyleProgressBarSupp
            className={classes.tableCell7}
            swap={{
              progressBar: (
                <ProgressBar_Progress90LabelRig
                  className={classes.progressBar5}
                  classes={{ progress: classes.progress7 }}
                  text={{
                    percentage: <div className={classes.percentage7}>9</div>,
                  }}
                />
              ),
            }}
          />
        </div>
      </div>
    </div>
  );
});
