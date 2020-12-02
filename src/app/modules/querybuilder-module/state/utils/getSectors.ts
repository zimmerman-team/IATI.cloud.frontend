export function getSectors(data: any, rowFormat: string) {
  if (!data || data.length === 0) {
    return null;
  }
  const tempstr = data && data.join(' ');
  const output = `"${tempstr.split(' ').join('" "')}"`;
  switch (rowFormat) {
    case 'activity':
      return `(sector_code:(${output}) OR transaction_sector_code:(${output}))`;
    case 'transaction':
      return `(transaction_sector_code:(${output}) OR activity_sector_code:(${output}))`;
    case 'budget':
      return `sector_code:(${output})`;
    default:
      return null;
  }
}
