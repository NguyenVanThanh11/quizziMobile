import { memo } from 'react';
import type { FC, ReactNode } from 'react';

import resets from '../../_resets.module.css';
import { Avatar_SizeMdPlaceholderFalseT2 } from '../Avatar_SizeMdPlaceholderFalseT2/Avatar_SizeMdPlaceholderFalseT2.js';
import { Badge_SizeSmIconDotColorSucces } from '../Badge_SizeSmIconDotColorSucces/Badge_SizeSmIconDotColorSucces.js';
import { CardHeader_AvatarFalseBadgeTru } from '../CardHeader_AvatarFalseBadgeTru/CardHeader_AvatarFalseBadgeTru.js';
import { Pagination_TypeCardDefaultShap } from '../Pagination_TypeCardDefaultShap/Pagination_TypeCardDefaultShap.js';
import { TableCell_StyleBadgeSupporting } from '../TableCell_StyleBadgeSupporting/TableCell_StyleBadgeSupporting.js';
import { TableCell_StyleLeadAvatarCheck } from '../TableCell_StyleLeadAvatarCheck/TableCell_StyleLeadAvatarCheck.js';
import { TableCell_StyleTextSupportingT } from '../TableCell_StyleTextSupportingT/TableCell_StyleTextSupportingT.js';
import { TableHeader_HelpIconFalseArrow2 } from '../TableHeader_HelpIconFalseArrow2/TableHeader_HelpIconFalseArrow2.js';
import { TableHeader_HelpIconFalseArrow } from '../TableHeader_HelpIconFalseArrow/TableHeader_HelpIconFalseArrow.js';
import { TableHeader_HelpIconTrueArrowF } from '../TableHeader_HelpIconTrueArrowF/TableHeader_HelpIconTrueArrowF.js';
import { TableHeaderCell_TextTrueCheckb2 } from '../TableHeaderCell_TextTrueCheckb2/TableHeaderCell_TextTrueCheckb2.js';
import { TableHeaderCell_TextTrueCheckb } from '../TableHeaderCell_TextTrueCheckb/TableHeaderCell_TextTrueCheckb.js';
import classes from './Table_ExampleTeamMembersBreakp.module.css';

interface Props {
  className?: string;
  classes?: {
    avatar?: string;
    avatar2?: string;
    avatar3?: string;
    avatar4?: string;
    avatar5?: string;
    root?: string;
  };
  hide?: {
    supportingText?: boolean;
    actions?: boolean;
    cardHeader?: boolean;
    checkbox?: boolean;
    checkbox2?: boolean;
    supportingText2?: boolean;
    checkbox3?: boolean;
    supportingText3?: boolean;
    checkbox4?: boolean;
    supportingText4?: boolean;
    checkbox5?: boolean;
    supportingText5?: boolean;
    checkbox6?: boolean;
    supportingText6?: boolean;
    checkbox7?: boolean;
    supportingText7?: boolean;
    tableCell?: boolean;
    tableCell2?: boolean;
    tableCell3?: boolean;
    tableCell4?: boolean;
    column?: boolean;
    tableCell5?: boolean;
    tableCell6?: boolean;
    tableCell7?: boolean;
    tableCell8?: boolean;
  };
  text?: {
    text?: ReactNode;
    text2?: ReactNode;
    text3?: ReactNode;
    text4?: ReactNode;
    text5?: ReactNode;
    text6?: ReactNode;
    text7?: ReactNode;
    text8?: ReactNode;
    text9?: ReactNode;
    text10?: ReactNode;
    text11?: ReactNode;
    text12?: ReactNode;
    text13?: ReactNode;
  };
}
/* @figmaId 1227:110588 */
export const Table_ExampleTeamMembersBreakp: FC<Props> = memo(function Table_ExampleTeamMembersBreakp(props = {}) {
  return (
    <div className={`${resets.clapyResets} ${props.classes?.root || ''} ${props.className || ''} ${classes.root}`}>
      {!props.hide?.cardHeader && (
        <CardHeader_AvatarFalseBadgeTru
          className={classes.cardHeader}
          classes={{ textAndSupportingText: classes.textAndSupportingText }}
          hide={{
            supportingText: true,
            actions: true,
          }}
          text={{
            text: <div className={classes.text}>100 users</div>,
          }}
        />
      )}
      <div className={classes.content}>
        <div className={classes.column}>
          <TableHeaderCell_TextTrueCheckb
            className={classes.tableHeaderCell}
            swap={{
              tableHeader: (
                <TableHeader_HelpIconFalseArrow2
                  text={{
                    text: <div className={classes.text2}>Name</div>,
                  }}
                />
              ),
            }}
            hide={{
              checkbox: props.hide?.checkbox,
            }}
          />
          <TableCell_StyleLeadAvatarCheck
            className={classes.tableCell}
            classes={{ avatar: `${props.classes?.avatar || ''} ${classes.avatar}` }}
            hide={{
              checkbox: props.hide?.checkbox2,
              supportingText: props.hide?.supportingText2,
            }}
            text={{
              supportingText: <div className={classes.supportingText}>@olivia</div>,
              text: props.text?.text,
            }}
          />
          <TableCell_StyleLeadAvatarCheck
            className={classes.tableCell2}
            classes={{ avatar: `${props.classes?.avatar2 || ''} ${classes.avatar2}` }}
            hide={{
              checkbox: props.hide?.checkbox3,
              supportingText: props.hide?.supportingText3,
            }}
            text={{
              text: props.text?.text2 || <div className={classes.text3}>Phoenix Baker</div>,
              supportingText: <div className={classes.supportingText2}>@phoenix</div>,
            }}
          />
          <TableCell_StyleLeadAvatarCheck
            className={classes.tableCell3}
            classes={{ avatar: `${props.classes?.avatar3 || ''} ${classes.avatar3}` }}
            hide={{
              checkbox: props.hide?.checkbox4,
              supportingText: props.hide?.supportingText4,
            }}
            text={{
              text: props.text?.text3 || <div className={classes.text4}>Lana Steiner</div>,
              supportingText: <div className={classes.supportingText3}>@lana</div>,
            }}
          />
          <TableCell_StyleLeadAvatarCheck
            className={classes.tableCell4}
            classes={{ avatar: `${props.classes?.avatar4 || ''} ${classes.avatar4}` }}
            hide={{
              checkbox: props.hide?.checkbox5,
              supportingText: props.hide?.supportingText5,
            }}
            text={{
              text: props.text?.text4 || <div className={classes.text5}>Demi Wilkinson</div>,
              supportingText: <div className={classes.supportingText4}>@demi</div>,
            }}
          />
          <TableCell_StyleLeadAvatarCheck
            className={classes.tableCell5}
            swap={{
              avatar: (
                <Avatar_SizeMdPlaceholderFalseT2
                  text={{
                    text: <div className={classes.text6}>CW</div>,
                  }}
                />
              ),
            }}
            hide={{
              checkbox: props.hide?.checkbox6,
              supportingText: props.hide?.supportingText6,
            }}
            text={{
              text: props.text?.text5 || <div className={classes.text7}>Candice Wu</div>,
              supportingText: <div className={classes.supportingText5}>@candice</div>,
            }}
          />
          <TableCell_StyleLeadAvatarCheck
            className={classes.tableCell6}
            classes={{ avatar: `${props.classes?.avatar5 || ''} ${classes.avatar5}` }}
            hide={{
              checkbox: props.hide?.checkbox7,
              supportingText: props.hide?.supportingText7,
            }}
            text={{
              text: props.text?.text6 || <div className={classes.text8}>Natali Craig</div>,
              supportingText: <div className={classes.supportingText6}>@natali</div>,
            }}
          />
          {!props.hide?.tableCell && (
            <TableCell_StyleLeadAvatarCheck
              className={classes.tableCell7}
              classes={{ avatar: classes.avatar6 }}
              text={{
                text: <div className={classes.text9}>Drew Cano</div>,
                supportingText: <div className={classes.supportingText7}>@drew</div>,
              }}
            />
          )}
          {!props.hide?.tableCell2 && (
            <TableCell_StyleLeadAvatarCheck
              className={classes.tableCell8}
              swap={{
                avatar: (
                  <Avatar_SizeMdPlaceholderFalseT2
                    text={{
                      text: <div className={classes.text10}>OD</div>,
                    }}
                  />
                ),
              }}
              text={{
                text: <div className={classes.text11}>Orlando Diggs</div>,
                supportingText: <div className={classes.supportingText8}>@orlando</div>,
              }}
            />
          )}
          {!props.hide?.tableCell3 && (
            <TableCell_StyleLeadAvatarCheck
              className={classes.tableCell9}
              classes={{ avatar: classes.avatar7 }}
              text={{
                text: <div className={classes.text12}>Andi Lane</div>,
                supportingText: <div className={classes.supportingText9}>@andi</div>,
              }}
            />
          )}
          {!props.hide?.tableCell4 && (
            <TableCell_StyleLeadAvatarCheck
              className={classes.tableCell10}
              classes={{ avatar: classes.avatar8 }}
              text={{
                text: <div className={classes.text13}>Kate Morrison</div>,
                supportingText: <div className={classes.supportingText10}>@kate</div>,
              }}
            />
          )}
        </div>
        {!props.hide?.column && (
          <div className={classes.column2}>
            <TableHeaderCell_TextTrueCheckb2
              className={classes.tableHeaderCell2}
              swap={{
                tableHeader: (
                  <TableHeader_HelpIconFalseArrow
                    text={{
                      text: <div className={classes.text14}>Status</div>,
                    }}
                  />
                ),
              }}
            />
            <TableCell_StyleBadgeSupporting
              className={classes.tableCell11}
              swap={{
                badge: (
                  <Badge_SizeSmIconDotColorSucces
                    text={{
                      text: <div className={classes.text15}>Active</div>,
                    }}
                  />
                ),
              }}
            />
            <TableCell_StyleBadgeSupporting
              className={classes.tableCell12}
              swap={{
                badge: (
                  <Badge_SizeSmIconDotColorSucces
                    text={{
                      text: <div className={classes.text16}>Active</div>,
                    }}
                  />
                ),
              }}
            />
            <TableCell_StyleBadgeSupporting
              className={classes.tableCell13}
              swap={{
                badge: (
                  <Badge_SizeSmIconDotColorSucces
                    text={{
                      text: <div className={classes.text17}>Active</div>,
                    }}
                  />
                ),
              }}
            />
            <TableCell_StyleBadgeSupporting
              className={classes.tableCell14}
              swap={{
                badge: (
                  <Badge_SizeSmIconDotColorSucces
                    text={{
                      text: <div className={classes.text18}>Active</div>,
                    }}
                  />
                ),
              }}
            />
            <TableCell_StyleBadgeSupporting
              className={classes.tableCell15}
              swap={{
                badge: (
                  <Badge_SizeSmIconDotColorSucces
                    text={{
                      text: <div className={classes.text19}>Active</div>,
                    }}
                  />
                ),
              }}
            />
            <TableCell_StyleBadgeSupporting
              className={classes.tableCell16}
              swap={{
                badge: (
                  <Badge_SizeSmIconDotColorSucces
                    text={{
                      text: <div className={classes.text20}>Active</div>,
                    }}
                  />
                ),
              }}
            />
            <TableCell_StyleBadgeSupporting
              className={classes.tableCell17}
              swap={{
                badge: (
                  <Badge_SizeSmIconDotColorSucces
                    text={{
                      text: <div className={classes.text21}>Active</div>,
                    }}
                  />
                ),
              }}
            />
            <TableCell_StyleBadgeSupporting
              className={classes.tableCell18}
              swap={{
                badge: (
                  <Badge_SizeSmIconDotColorSucces
                    text={{
                      text: <div className={classes.text22}>Active</div>,
                    }}
                  />
                ),
              }}
            />
            <TableCell_StyleBadgeSupporting
              className={classes.tableCell19}
              swap={{
                badge: (
                  <Badge_SizeSmIconDotColorSucces
                    text={{
                      text: <div className={classes.text23}>Active</div>,
                    }}
                  />
                ),
              }}
            />
            <TableCell_StyleBadgeSupporting
              className={classes.tableCell20}
              swap={{
                badge: (
                  <Badge_SizeSmIconDotColorSucces
                    text={{
                      text: <div className={classes.text24}>Active</div>,
                    }}
                  />
                ),
              }}
            />
          </div>
        )}
        <div className={classes.column3}>
          <TableHeaderCell_TextTrueCheckb2
            className={classes.tableHeaderCell3}
            swap={{
              tableHeader: (
                <TableHeader_HelpIconTrueArrowF
                  text={{
                    text: <div className={classes.text25}>Role</div>,
                  }}
                />
              ),
            }}
          />
          <TableCell_StyleTextSupportingT
            className={classes.tableCell21}
            text={{
              text: props.text?.text8 || <div className={classes.text26}>Product Designer</div>,
            }}
          />
          <TableCell_StyleTextSupportingT
            className={classes.tableCell22}
            text={{
              text: props.text?.text9 || <div className={classes.text27}>Product Manager</div>,
            }}
          />
          {!props.hide?.tableCell5 && (
            <TableCell_StyleTextSupportingT
              className={classes.tableCell23}
              text={{
                text: <div className={classes.text28}>Frontend Developer</div>,
              }}
            />
          )}
          {!props.hide?.tableCell6 && (
            <TableCell_StyleTextSupportingT
              className={classes.tableCell24}
              text={{
                text: <div className={classes.text29}>Backend Developer</div>,
              }}
            />
          )}
          {!props.hide?.tableCell7 && (
            <TableCell_StyleTextSupportingT
              className={classes.tableCell25}
              text={{
                text: <div className={classes.text30}>Fullstack Developer</div>,
              }}
            />
          )}
          <TableCell_StyleTextSupportingT
            className={classes.tableCell26}
            text={{
              text: props.text?.text10 || <div className={classes.text31}>UX Designer</div>,
            }}
          />
          {!props.hide?.tableCell8 && (
            <TableCell_StyleTextSupportingT
              className={classes.tableCell27}
              text={{
                text: <div className={classes.text32}>UX Copywriter</div>,
              }}
            />
          )}
          <TableCell_StyleTextSupportingT
            className={classes.tableCell28}
            text={{
              text: props.text?.text11 || <div className={classes.text33}>UI Designer</div>,
            }}
          />
          <TableCell_StyleTextSupportingT
            className={classes.tableCell29}
            text={{
              text: props.text?.text12 || <div className={classes.text34}>Product Manager</div>,
            }}
          />
          <TableCell_StyleTextSupportingT
            className={classes.tableCell30}
            text={{
              text: props.text?.text13 || <div className={classes.text35}>QA Engineer</div>,
            }}
          />
        </div>
      </div>
      <Pagination_TypeCardDefaultShap />
    </div>
  );
});
