import { memo } from 'react';
import type { FC } from 'react';

import resets from '../_resets.module.css';
import { _Dot_SizeMd } from './_Dot_SizeMd/_Dot_SizeMd.js';
import { AntDesignSearchOutlinedIcon } from './AntDesignSearchOutlinedIcon.js';
import { BatteryIcon } from './BatteryIcon.js';
import { BxBxTimeIcon2 } from './BxBxTimeIcon2.js';
import { BxBxTimeIcon3 } from './BxBxTimeIcon3.js';
import { BxBxTimeIcon } from './BxBxTimeIcon.js';
import { CellularConnectionIcon } from './CellularConnectionIcon.js';
import { ClarityBookLineIcon } from './ClarityBookLineIcon.js';
import { ClarityNotificationSolidBadged } from './ClarityNotificationSolidBadged.js';
import classes from './Dashboard.module.css';
import { IcOutlineAccountCircleIcon } from './IcOutlineAccountCircleIcon.js';
import { JamHomeFIcon } from './JamHomeFIcon.js';
import { LatestNews } from './LatestNews/LatestNews.js';
import { MessageDotsCircle } from './MessageDotsCircle/MessageDotsCircle.js';
import { MessageDotsCircleIcon } from './MessageDotsCircleIcon.js';
import { WifiIcon } from './WifiIcon.js';
import { useNavigate } from 'react-router-dom';

interface Props {
  className?: string;
}
/* @figmaId 5607:22589 */
export const Dashboard: FC<Props> = memo(function Dashboard(props = {}) {
  const navigate = useNavigate();
  return (
    <div className={`${resets.clapyResets} ${classes.root}`}>
      <div className={classes.barsStatusBarIPhoneLight}>
        <div className={classes.rectangle29}></div>
        <div className={classes.battery}>
          <BatteryIcon className={classes.icon5} />
        </div>
        <div className={classes.wifi}>
          <WifiIcon className={classes.icon6} />
        </div>
        <div className={classes.cellularConnection}>
          <CellularConnectionIcon className={classes.icon7} />
        </div>
        <div className={classes.timeStyle}>
          <div className={classes.time}>9:41</div>
        </div>
      </div>
      <div className={classes.rectangle33}></div>
      <div className={classes.antDesignSearchOutlined}>
        <AntDesignSearchOutlinedIcon className={classes.icon8} />
      </div>
      <div className={classes.search}>Search</div>
      <div className={classes.text}>Welcome back, team 3</div>
      <div className={classes.rectangle40}></div>
      <div onClick={() => {navigate('/create-quiz');}} className={classes.inputWithLabel}>
        <div className={classes.input}>
          <div className={classes.content}>
            <div className={classes.text2}>Create Quiz</div>
          </div>
        </div>
      </div>
      <div className={classes.inputWithLabel2}>
        <div className={classes.input2}>
          <div className={classes.content2}>
            <div className={classes.text3}>Practice</div>
          </div>
        </div>
      </div>
      <div className={classes.clarityNotificationSolidBadged}>
        <ClarityNotificationSolidBadged className={classes.icon9} />
      </div>
      <LatestNews
        className={classes.latestNews2}
        classes={{
          vishwarajsinhRana_1fByLYHA_0Un: classes.vishwarajsinhRana_1fByLYHA_0Un,
          vishwarajsinhRana_1fByLYHA_0Un2: classes.vishwarajsinhRana_1fByLYHA_0Un2,
          nationalCancerInstituteL7en7Lb: classes.nationalCancerInstituteL7en7Lb,
        }}
        swap={{
          bxBxTime: <BxBxTimeIcon className={classes.icon} />,
          bxBxTime2: <BxBxTimeIcon2 className={classes.icon2} />,
          bxBxTime3: <BxBxTimeIcon3 className={classes.icon3} />,
        }}
        text={{
          howToWorkOutAPercentageUsingAC: (
            <div className={classes.howToWorkOutAPercentageUsingAC}>Discover Your Interests!</div>
          ),
          _24August2020: <div className={classes._24August2020}>1/8/2024</div>,
          mathematics: <div className={classes.mathematics}>Quiz 6</div>,
          howToWorkOutAPercentageUsingAC2: (
            <div className={classes.howToWorkOutAPercentageUsingAC2}>Discover Your Interests!</div>
          ),
          _24August20202: <div className={classes._24August20202}>1/1/2024</div>,
          mathematics2: <div className={classes.mathematics2}>Quiz 7</div>,
          theEffectsOfTemperatureOnEnzym: (
            <div className={classes.theEffectsOfTemperatureOnEnzym}>Discover Your Interests!</div>
          ),
          _1HourAgo: <div className={classes._1HourAgo}>1 hour</div>,
          biology: <div className={classes.biology}>Quiz 5</div>,
          latestNews: <div className={classes.latestNews}>New Quiz</div>,
        }}
      />
      <div className={classes.barsHomeIndicatorIPhoneLightPo}>
        <div className={classes.rectangle30}></div>
        <div className={classes.homeIndicator}></div>
      </div>
      <div className={classes.rectangle39}></div>
      <div className={classes.rectangle332}></div>
      <div className={classes.rectangle38}></div>
      <div className={classes.home}>Home</div>
      <div className={classes.jamHomeF}>
        <JamHomeFIcon className={classes.icon10} />
      </div>
      <div className={classes.rectangle34}></div>
      <div onClick={() => {navigate('/workspace');}} className={classes.clarityBookLine}>
        <ClarityBookLineIcon className={classes.icon11} />
      </div>
      <div className={classes.rectangle35}></div>
      <div className={classes.icOutlineAccountCircle}>
        <IcOutlineAccountCircleIcon className={classes.icon12} />
      </div>
      <button className={classes.button}>
        <MessageDotsCircle
          swap={{
            icon: <MessageDotsCircleIcon className={classes.icon4} />,
          }}
        />
      </button>
    </div>
  );
});
