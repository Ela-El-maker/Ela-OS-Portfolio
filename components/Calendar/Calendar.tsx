import React, { useRef, useState } from 'react';
import * as Styled from './Calendar.styles';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import { useActions } from '../../hooks/useActions';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import { useCloseModalIfClickedOutside } from '../../hooks/useCloseIfClickedOutside';

/**
 *Renders React-Calendar with customized styles
 *https://github.com/wojtekmaj/react-calendar
 *@function Calendar
 *@returns {JSX.Element} - Rendered CalendarWidget component
 */
const CalendarWidget = (): JSX.Element => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [value, setValue] = useState<Date>(new Date());

  const { closeCalendarModal } = useActions();
  const { isCalendarOpen } = useTypedSelector((state) => state.ui);

  useCloseModalIfClickedOutside({
    isModalOpen: isCalendarOpen,
    closeModalFunction: closeCalendarModal,
    modalRef: containerRef,
  });

  const handleChange = (v: any) => {
    if (Array.isArray(v)) {
      setValue(v[0] ?? new Date());
    } else if (v instanceof Date) {
      setValue(v);
    }
  };

  return (
    <Styled.Container ref={containerRef}>
      <Calendar
        onChange={handleChange as any}
        value={value}
        showWeekNumbers={false}
        maxDetail={'month'}
        minDetail={'month'}
        view={'month'}
        showNeighboringMonth={false}
        showDoubleView={false}
      />
    </Styled.Container>
  );
};

export default CalendarWidget;
