import { memo } from 'react';
import type { FC } from 'react';
import { useNavigate } from 'react-router-dom';

import resets from '../_resets.module.css';
import { _ButtonGroupBase_CurrentFalseI } from './_ButtonGroupBase_CurrentFalseI/_ButtonGroupBase_CurrentFalseI.js';
import { _TabButtonBase_CurrentFalseSiz } from './_TabButtonBase_CurrentFalseSiz/_TabButtonBase_CurrentFalseSiz.js';
import classes from './AnswerQuiz2.module.css';
import { ArrowLeft } from './ArrowLeft/ArrowLeft.js';
import { ArrowLeftIcon } from './ArrowLeftIcon.js';
import { Badge_SizeSmIconDotColorSucces } from './Badge_SizeSmIconDotColorSucces/Badge_SizeSmIconDotColorSucces.js';
import { Badge_SizeSmIconFalseColorBlue } from './Badge_SizeSmIconFalseColorBlue/Badge_SizeSmIconFalseColorBlue.js';
import { Badge_SizeSmIconFalseColorIndi } from './Badge_SizeSmIconFalseColorIndi/Badge_SizeSmIconFalseColorIndi.js';
import { Badge_SizeSmIconFalseColorOran } from './Badge_SizeSmIconFalseColorOran/Badge_SizeSmIconFalseColorOran.js';
import { Badge_SizeSmIconFalseColorPink } from './Badge_SizeSmIconFalseColorPink/Badge_SizeSmIconFalseColorPink.js';
import { BatteryIcon } from './BatteryIcon.js';
import { CellularConnectionIcon } from './CellularConnectionIcon.js';
import { ClarityBookSolidIcon } from './ClarityBookSolidIcon.js';
import { IcOutlineAccountCircleIcon } from './IcOutlineAccountCircleIcon.js';
import { JamHomeIcon } from './JamHomeIcon.js';
import { TableCell_StyleActionIconsSupp } from './TableCell_StyleActionIconsSupp/TableCell_StyleActionIconsSupp.js';
import { TableHeader_HelpIconFalseArrow } from './TableHeader_HelpIconFalseArrow/TableHeader_HelpIconFalseArrow.js';
import { TableHeaderCell_TextFalseCheck } from './TableHeaderCell_TextFalseCheck/TableHeaderCell_TextFalseCheck.js';
import { TableHeaderCell_TextTrueCheckb } from './TableHeaderCell_TextTrueCheckb/TableHeaderCell_TextTrueCheckb.js';
import { WifiIcon } from './WifiIcon.js';

interface Props {
  className?: string;
  hide?: {
    button?: boolean;
    button2?: boolean;
    button3?: boolean;
    button4?: boolean;
    button5?: boolean;
    button6?: boolean;
    button7?: boolean;
    button8?: boolean;
    button9?: boolean;
    button10?: boolean;
  };
}
/* @figmaId 5650:8412 */
export const AnswerQuiz2: FC<Props> = memo(function AnswerQuiz2(props = {}) {
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
      <div className={classes.answer}>
        <div className={classes.frame5}>
          <div className={classes._1}>1 </div>
          <div className={classes.textAndSupportingText}>
            <div className={classes.text5}>Trong Figma, các tính năng nào giúp bạn tạo và quản lý Design System</div>
            <div className={classes.supportingText}>
              style,component, design token,Figma&#39;s Design System Community symbol
            </div>
          </div>
        </div>
        <div className={classes.frame6}>
          <div className={classes._2}>2</div>
          <div className={classes.textAndSupportingText2}>
            <div className={classes.text6}>Trong Figma, các tính năng nào giúp bạn tạo và quản lý Design System</div>
            <div className={classes.supportingText2}>
              style,component, design token,Figma&#39;s Design System Community symbol
            </div>
          </div>
        </div>
        <div className={classes.frame7}>
          <div className={classes._3}>
            <div className={classes.textBlock}>3</div>
            <div className={classes.textBlock2}>
              <p></p>
            </div>
          </div>
          <div className={classes.textAndSupportingText3}>
            <div className={classes.text7}>Trong Figma, các tính năng nào giúp bạn tạo và quản lý Design System</div>
            <div className={classes.supportingText3}>
              style,component, design token,Figma&#39;s Design System Community symbol
            </div>
          </div>
        </div>
        <div className={classes.frame8}>
          <div className={classes._4}>
            <div className={classes.textBlock3}>4</div>
            <div className={classes.textBlock4}>
              <p></p>
            </div>
          </div>
          <div className={classes.textAndSupportingText4}>
            <div className={classes.text8}>Trong Figma, các tính năng nào giúp bạn tạo và quản lý Design System</div>
            <div className={classes.supportingText4}>
              style,component, design token,Figma&#39;s Design System Community symbol
            </div>
          </div>
        </div>
        <div className={classes.frame9}>
          <div className={classes._5}>5</div>
          <div className={classes.textAndSupportingText5}>
            <div className={classes.text9}>Trong Figma, các tính năng nào giúp bạn tạo và quản lý Design System</div>
            <div className={classes.supportingText5}>
              style,component, design token,Figma&#39;s Design System Community symbol
            </div>
          </div>
        </div>
        <div className={classes.frame13}>
          <div className={classes._6}>
            <div className={classes.textBlock5}>6</div>
            <div className={classes.textBlock6}>
              <p></p>
            </div>
          </div>
          <div className={classes.textAndSupportingText6}>
            <div className={classes.text10}>Trong Figma, các tính năng nào giúp bạn tạo và quản lý Design System</div>
            <div className={classes.supportingText6}>
              style,component, design token,Figma&#39;s Design System Community symbol
            </div>
          </div>
        </div>
        <div className={classes.frame10}>
          <div className={classes._62}>
            <div className={classes.textBlock7}>6</div>
            <div className={classes.textBlock8}>
              <p></p>
            </div>
          </div>
          <div className={classes.textAndSupportingText7}>
            <div className={classes.text11}>Trong Figma, các tính năng nào giúp bạn tạo và quản lý Design System</div>
            <div className={classes.supportingText7}>
              style,component, design token,Figma&#39;s Design System Community symbol
            </div>
          </div>
        </div>
        <div className={classes.frame11}>
          <div className={classes._63}>
            <div className={classes.textBlock9}>6</div>
            <div className={classes.textBlock10}>
              <p></p>
            </div>
          </div>
          <div className={classes.textAndSupportingText8}>
            <div className={classes.text12}>Trong Figma, các tính năng nào giúp bạn tạo và quản lý Design System</div>
            <div className={classes.supportingText8}>
              style,component, design token,Figma&#39;s Design System Community symbol
            </div>
          </div>
        </div>
        <div className={classes.frame12}>
          <div className={classes._64}>
            <div className={classes.textBlock11}>6</div>
            <div className={classes.textBlock12}>
              <p></p>
            </div>
          </div>
          <div className={classes.textAndSupportingText9}>
            <div className={classes.text13}>Trong Figma, các tính năng nào giúp bạn tạo và quản lý Design System</div>
            <div className={classes.supportingText9}>
              style,component, design token,Figma&#39;s Design System Community symbol
            </div>
          </div>
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
      <div className={classes.answer2}>
        <div className={classes.content}>
          <div className={classes.column}>
            <div className={classes.tableHeaderCell3}>
              <TableHeader_HelpIconFalseArrow
                text={{
                  text: <div className={classes.text3}>Question</div>,
                }}
              />
            </div>
            <div className={classes.tableCell6}>
              <div className={classes.textAndSupportingText10}>
                <div className={classes.text14}>
                  Trong Figma, các tính năng nào giúp bạn tạo và quản lý Design System
                </div>
              </div>
            </div>
            <div className={classes.tableCell7}>
              <div className={classes.textAndSupportingText11}>
                <div className={classes.text15}>
                  Trong Figma, các tính năng nào giúp bạn tạo và quản lý Design System
                </div>
              </div>
            </div>
            <div className={classes.tableCell8}>
              <div className={classes.textAndSupportingText12}>
                <div className={classes.text16}>
                  Trong Figma, các tính năng nào giúp bạn tạo và quản lý Design System
                </div>
              </div>
            </div>
            <div className={classes.tableCell9}>
              <div className={classes.textAndSupportingText13}>
                <div className={classes.text17}>
                  Trong Figma, các tính năng nào giúp bạn tạo và quản lý Design System
                </div>
              </div>
            </div>
            <div className={classes.tableCell10}>
              <div className={classes.textAndSupportingText14}>
                <div className={classes.text18}>
                  Trong Figma, các tính năng nào giúp bạn tạo và quản lý Design System
                </div>
              </div>
            </div>
          </div>
          <div className={classes.column2}>
            <TableHeaderCell_TextTrueCheckb
              className={classes.tableHeaderCell}
              text={{
                text: <div className={classes.text4}>Answer</div>,
              }}
            />
            <div className={classes.tableCell11}>
              <div className={classes.badges}>
                <div className={classes.badge}>
                  <div className={classes.text19}>
                    style,component, design token,Figma&#39;s Design System Community symbol
                  </div>
                </div>
              </div>
            </div>
            <div className={classes.tableCell12}>
              <div className={classes.badges2}>
                <div className={classes.badge2}>
                  <div className={classes.text20}>
                    style,component, design token,Figma&#39;s Design System Community symbol
                  </div>
                </div>
              </div>
            </div>
            <div className={classes.tableCell13}>
              <div className={classes.badges3}>
                <div className={classes.badge3}>
                  <div className={classes.text21}>
                    style,component, design token,Figma&#39;s Design System Community symbol
                  </div>
                </div>
              </div>
            </div>
            <div className={classes.tableCell14}>
              <div className={classes.badges4}>
                <div className={classes.badge4}>
                  <div className={classes.text22}>
                    style,component, design token,Figma&#39;s Design System Community symbol
                  </div>
                </div>
              </div>
            </div>
            <div className={classes.tableCell15}>
              <div className={classes.badges5}>
                <div className={classes.badge5}>
                  <div className={classes.text23}>
                    style,component, design token,Figma&#39;s Design System Community symbol
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={classes.column3}>
            <TableHeaderCell_TextFalseCheck className={classes.tableHeaderCell2} />
            <TableCell_StyleActionIconsSupp
              className={classes.tableCell}
              hide={{
                button: true,
                button2: true,
              }}
            />
            <TableCell_StyleActionIconsSupp
              className={classes.tableCell2}
              hide={{
                button: true,
                button2: true,
              }}
            />
            <TableCell_StyleActionIconsSupp
              className={classes.tableCell3}
              hide={{
                button: true,
                button2: true,
              }}
            />
            <TableCell_StyleActionIconsSupp
              className={classes.tableCell4}
              hide={{
                button: true,
                button2: true,
              }}
            />
            <TableCell_StyleActionIconsSupp
              className={classes.tableCell5}
              hide={{
                button: true,
                button2: true,
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
});
