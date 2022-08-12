import { ScheduleUl } from './scheduleList.styles';
import { Typography } from '@mui/material';
import { ITeamDuration } from '../../ScheduleWeeklyCreate';
import { ListContentWrapper } from '../../../menuEditPage/components/editableListItem/editableLi.styles';
import { TextDirEnum } from '../../../../../utilities/types/enums';
import { IApiSchedule } from '../../../../../utilities/types/apiResponseTypes';
import { separateListWithComa } from '../../../../../utilities/separateListWithComa';

export interface IScheduleListProps {
  teamsOrder?: ITeamDuration[];
  timeStrings?: string[];
  existingSchedule?: IApiSchedule[];
}

const scheduleTextDir = { isRTL: false, textDir: TextDirEnum.LTR };

const ScheduleList = ({
  teamsOrder = [],
  timeStrings = [],
  existingSchedule = [],
}: IScheduleListProps) => {
  return (
    <>
      {existingSchedule.length > 0 ? (
        <ScheduleUl isRTLText={scheduleTextDir}>
          {existingSchedule.map((item, index) => (
            <li key={item.name}>
              <ListContentWrapper
                isRTLText={scheduleTextDir}
                style={{ justifyContent: 'space-between' }}
              >
                <Typography>
                  {index + 1}. <strong>{item.name}</strong> - start at{' '}
                  <strong>{item.time}</strong> (their lunch is {item.duration}{' '}
                  minutes)
                </Typography>
              </ListContentWrapper>
            </li>
          ))}
        </ScheduleUl>
      ) : (
        <ScheduleUl isRTLText={scheduleTextDir}>
          {teamsOrder.map((item, index) => (
            <li key={item.name}>
              <ListContentWrapper
                isRTLText={scheduleTextDir}
                style={{ justifyContent: 'space-between' }}
              >
                <Typography>
                  {index + 1}.{' '}
                  <strong>{separateListWithComa(item.name)}</strong> - start at{' '}
                  <strong>{timeStrings[index]}</strong> (their lunch is{' '}
                  {item.duration} minutes)
                </Typography>
              </ListContentWrapper>
            </li>
          ))}
        </ScheduleUl>
      )}
    </>
  );
};

export default ScheduleList;
