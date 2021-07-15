import {BookingTime} from '../types/DoctorStore';
import {MONTH} from '../constant/DateConstant';

export const processDispatchArray = (v: any, curr: any[]) => {
  if (!curr?.find((e) => e === v)) {
    return [...curr, v];
  } else {
    return [...curr].filter((e) => e !== v);
  }
};

export const processDispatchBookingTime: (
  d: number,
  time: string,
) => BookingTime = (d, time) => {
  const mDate = new Date(d);
  const dateNum = mDate.getDate();
  const month = MONTH[mDate.getMonth()];
  const date = `${dateNum} ${month} `;
  return {
    date,
    time,
  };
};
