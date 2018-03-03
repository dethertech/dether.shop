export const times = [
  { key: 'a', val: '00:00' },
  { key: 'b', val: '00:30' },
  { key: 'c', val: '01:00' },
  { key: 'd', val: '01:30' },
  { key: 'e', val: '02:00' },
  { key: 'f', val: '02:30' },
  { key: 'g', val: '03:00' },
  { key: 'h', val: '03:30' },
  { key: 'i', val: '04:00' },
  { key: 'j', val: '04:30' },
  { key: 'k', val: '05:00' },
  { key: 'l', val: '05:30' },
  { key: 'm', val: '06:00' },
  { key: 'n', val: '06:30' },
  { key: 'o', val: '07:00' },
  { key: 'p', val: '07:30' },
  { key: 'q', val: '08:00' },
  { key: 'r', val: '08:30' },
  { key: 's', val: '09:00' },
  { key: 't', val: '09:30' },
  { key: 'u', val: '10:00' },
  { key: 'v', val: '10:30' },
  { key: 'w', val: '11:00' },
  { key: 'x', val: '11:30' },
  { key: 'y', val: '12:00' },
  { key: 'z', val: '12:30' },
  { key: 'A', val: '13:00' },
  { key: 'B', val: '13:30' },
  { key: 'C', val: '14:00' },
  { key: 'D', val: '14:30' },
  { key: 'E', val: '15:00' },
  { key: 'F', val: '15:30' },
  { key: 'G', val: '16:00' },
  { key: 'H', val: '16:30' },
  { key: 'I', val: '17:00' },
  { key: 'J', val: '17:30' },
  { key: 'K', val: '18:00' },
  { key: 'L', val: '18:30' },
  { key: 'M', val: '19:00' },
  { key: 'N', val: '19:30' },
  { key: 'O', val: '20:00' },
  { key: 'P', val: '20:30' },
  { key: 'Q', val: '21:00' },
  { key: 'R', val: '21:30' },
  { key: 'S', val: '22:00' },
  { key: 'T', val: '22:30' },
  { key: 'U', val: '23:00' },
  { key: 'V', val: '23:30' }
];

export const hours = times.map(e => e.val);

export const convertDay = ({ open, openAt, closeAt }) => {
  if (!open) {
    return '0';
  }
  const charOpen = times.filter(e => e.val === openAt)[0].key;
  const charClose = times.filter(e => e.val === closeAt)[0].key;
  return charOpen + charClose;
};
