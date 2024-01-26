import { memo } from 'react';
import type { FC } from 'react';
import { useNavigate } from 'react-router-dom';

import resets from '../_resets.module.css';
import { _ButtonGroupBase_CurrentFalseI } from './_ButtonGroupBase_CurrentFalseI/_ButtonGroupBase_CurrentFalseI.js';
import { _ModalActions_TypeHorizontalFi } from './_ModalActions_TypeHorizontalFi/_ModalActions_TypeHorizontalFi.js';
import { AntDesignSearchOutlinedIcon } from './AntDesignSearchOutlinedIcon.js';
import { ArrowLeft } from './ArrowLeft/ArrowLeft.js';
import { ArrowLeftIcon } from './ArrowLeftIcon.js';
import { BatteryIcon } from './BatteryIcon.js';
import { ButtonCloseX_SizeLgColorGrayTh } from './ButtonCloseX_SizeLgColorGrayTh/ButtonCloseX_SizeLgColorGrayTh.js';
import { CellularConnectionIcon } from './CellularConnectionIcon.js';
import { ClarityBookSolidIcon } from './ClarityBookSolidIcon.js';
import { HelpIcon_OpenFalseSupportingTe } from './HelpIcon_OpenFalseSupportingTe/HelpIcon_OpenFalseSupportingTe.js';
import { IcOutlineAccountCircleIcon } from './IcOutlineAccountCircleIcon.js';
import { JamHomeIcon } from './JamHomeIcon.js';
import { Placeholder2 } from './Placeholder2/Placeholder2.js';
import { Table_ExampleTeamMembersBreakp } from './Table_ExampleTeamMembersBreakp/Table_ExampleTeamMembersBreakp.js';
import { WifiIcon } from './WifiIcon.js';
import classes from './Workspace_new.module.css';

interface Props {
  className?: string;
  hide?: {
    cardHeader?: boolean;
    checkbox?: boolean;
    checkbox2?: boolean;
    supportingText?: boolean;
    checkbox3?: boolean;
    supportingText2?: boolean;
    checkbox4?: boolean;
    supportingText3?: boolean;
    checkbox5?: boolean;
    supportingText4?: boolean;
    checkbox6?: boolean;
    supportingText5?: boolean;
    checkbox7?: boolean;
    supportingText6?: boolean;
    tableCell?: boolean;
    tableCell2?: boolean;
    tableCell3?: boolean;
    tableCell4?: boolean;
    column?: boolean;
    tableCell5?: boolean;
    tableCell6?: boolean;
    tableCell7?: boolean;
    tableCell8?: boolean;
    helpCircle?: boolean;
    placeholder?: boolean;
    placeholder2?: boolean;
    placeholder3?: boolean;
    placeholder4?: boolean;
  };
}
/* @figmaId 5637:9277 */
export const Workspace_new: FC<Props> = memo(function Workspace_new(props = {}) {
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
      <div className={classes.rectangle33}></div>
      <div className={classes.antDesignSearchOutlined}>
        <AntDesignSearchOutlinedIcon className={classes.icon5} />
      </div>
      <div className={classes.search}>Search</div>
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
      <Table_ExampleTeamMembersBreakp
        className={classes.table}
        classes={{
          avatar: classes.avatar,
          avatar2: classes.avatar2,
          avatar3: classes.avatar3,
          avatar4: classes.avatar4,
          avatar5: classes.avatar5,
        }}
        hide={{
          cardHeader: true,
          checkbox: true,
          checkbox2: true,
          supportingText2: true,
          checkbox3: true,
          supportingText3: true,
          checkbox4: true,
          supportingText4: true,
          checkbox5: true,
          supportingText5: true,
          checkbox6: true,
          supportingText6: true,
          checkbox7: true,
          supportingText7: true,
          tableCell: true,
          tableCell2: true,
          tableCell3: true,
          tableCell4: true,
          column: true,
          tableCell5: true,
          tableCell6: true,
          tableCell7: true,
          tableCell8: true,
        }}
        text={{
          text: <div className={classes.text}>Discover Your Interests!</div>,
          text2: <div className={classes.text2}>Discover Your Interests!</div>,
          text3: <div className={classes.text3}>Discover Your Interests!</div>,
          text4: <div className={classes.text4}>Discover Your Interests!</div>,
          text5: <div className={classes.text5}>Discover Your Interests!</div>,
          text6: <div className={classes.text6}>Discover Your Interests!</div>,
          text7: <div className={classes.text7}>Quiz</div>,
          text8: <div className={classes.text8}>3</div>,
          text9: <div className={classes.text9}>5</div>,
          text10: <div className={classes.text10}>1</div>,
          text11: <div className={classes.text11}>2</div>,
          text12: <div className={classes.text12}>1</div>,
          text13: <div className={classes.text13}>2</div>,
        }}
      />
      <div className={classes.rectangle39}></div>
      <div className={classes.rectangle332}></div>
      <div className={classes.jamHome}>
        <JamHomeIcon className={classes.icon6} />
      </div>
      <div className={classes.rectangle34}></div>
      <div className={classes.rectangle38}></div>
      <div className={classes.workspace}>Workspace</div>
      <div className={classes.clarityBookSolid}>
        <ClarityBookSolidIcon className={classes.icon7} />
      </div>
      <div className={classes.rectangle35}></div>
      <div className={classes.icOutlineAccountCircle}>
        <IcOutlineAccountCircleIcon className={classes.icon8} />
      </div>
      <div className={classes.myWorkspace}>My workspace</div>
      <div className={classes.barsHomeIndicatorIPhoneLightPo}>
        <div className={classes.rectangle30}></div>
        <div className={classes.homeIndicator}></div>
      </div>
      <button className={classes.button2}>
        <div className={classes.text15}>New workpace</div>
      </button>
      <div className={classes.modal}>
        <div className={classes.modal2}>
          <div className={classes.content}></div>
          <div className={classes.inputField}>
            <div className={classes.inputWithLabel}>
              <div className={classes.label}>Create new workspace</div>
              <div className={classes.input}>
                <div className={classes.content2}>
                  <div className={classes.text16}>New workspace</div>
                </div>
                <HelpIcon_OpenFalseSupportingTe
                  hide={{
                    helpCircle: true,
                  }}
                />
              </div>
            </div>
          </div>
          <_ModalActions_TypeHorizontalFi
            classes={{ button2: classes.button }}
            text={{
              text: <div className={classes.text14}>Save</div>,
            }}
          />
          <ButtonCloseX_SizeLgColorGrayTh className={classes.buttonCloseX} />
        </div>
      </div>
    </div>
  );
});
