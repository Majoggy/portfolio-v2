export const formatDate = (date: any): string => {
  const d = new Date(date);
  const month = d.toLocaleDateString('en-GB', { month: 'short' });
  const year = d.getFullYear();
  return `${month} ${year}`;
};

export const formatPeriod = (startDate: any, endDate: any | null): string => {
  const start = formatDate(startDate);
  const end = endDate ? formatDate(endDate) : 'Present';
  return `${start} - ${end}`;
};
