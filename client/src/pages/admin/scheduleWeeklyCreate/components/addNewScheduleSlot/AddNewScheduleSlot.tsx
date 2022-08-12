import { useState } from 'react';
import { SelectChangeEvent } from '@mui/material';
import MultipleSelect from '../../../../../components/select/multipleSelect/MultipleSelect';
import SingleSelect from '../../../../../components/select/singleSelect/SingleSelect';
import { notify } from '../../../../../utilities/notifyWithToast';

import {
  StyledAddSchedule,
  StyledExplanation,
  AddButton,
} from './addNewScheduleSlot.styles';
import { FlexRowFull } from '../../../../../styles/sharedStyles';

export interface IScheduleListProps {
  teams: string[];
  handleAddTimeSlot: (duration: string, teams: string) => void;
  handleAddTime: () => void;
}

const durationMins = [
  '10',
  '15',
  '20',
  '25',
  '30',
  '35',
  '40',
  '45',
  '50',
  '55',
  '60',
];

const AddNewScheduleSlot = ({
  teams,
  handleAddTimeSlot,
  handleAddTime,
}: IScheduleListProps) => {
  const [teamChoice, setTeamChoice] = useState<string[]>([]);
  const [duration, setDuration] = useState<string>('');

  const handleTeamsChange = (e: SelectChangeEvent<typeof teamChoice>) => {
    const value = e.target.value;
    setTeamChoice(typeof value === 'string' ? value.split(',') : value);
  };

  const clearInputs = () => {
    setDuration('');
    setTeamChoice([]);
  };

  const handleDurationChange = (e: SelectChangeEvent) => {
    setDuration(e.target.value);
  };

  const handleAddNewSchedule = () => {
    // the slot has to be filled by both values - teams and duration
    if (duration === '' || teamChoice.length < 1) {
      notify.error('Please choose both teams and lunch duration');
      return;
    }
    if (typeof teamChoice === 'string') {
      handleAddTimeSlot(duration, teamChoice);
    } else {
      handleAddTimeSlot(duration, teamChoice.join('/'));
    }
    handleAddTime();
    clearInputs();
  };

  return (
    <>
      <FlexRowFull style={{ marginBlock: '-1rem 1rem' }}>
        <StyledExplanation>
          Add teams in the right order and their lunch break duration
        </StyledExplanation>
      </FlexRowFull>
      <StyledAddSchedule>
        <MultipleSelect
          items={teams}
          value={teamChoice}
          handleChange={handleTeamsChange}
          placeholder='Team(s)'
          sx={{
            m: 1,
            minWidth: '10rem',
            '@media (min-width: 500px)': {
              maxWidth: '70px',
            },
          }}
          required={true}
        />
        <SingleSelect
          value={duration}
          handleChange={handleDurationChange}
          items={durationMins}
          placeholder='Min'
          sx={{ minWidth: '6.25rem' }}
          required={true}
        />
        <AddButton
          variant='contained'
          onClick={handleAddNewSchedule}
          sx={{ ml: 1 }}
        >
          ADD
        </AddButton>
      </StyledAddSchedule>
    </>
  );
};
export default AddNewScheduleSlot;
