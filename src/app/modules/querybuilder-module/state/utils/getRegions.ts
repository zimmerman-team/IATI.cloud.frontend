export function getRegions(data: any, rowFormat: string) {
  if (!data || data.length === 0) {
    return null;
  }
  switch (rowFormat) {
    case 'activity':
      return `(recipient_region_code:(${data.join(
        ' '
      )}) OR transaction_recipient_region_code:(${data.join(' ')}))`;
    case 'transaction':
      return `(activity_recipient_region_code:(${data.join(
        ' '
      )}) OR transaction_recipient_region_code:(${data.join(' ')}))`;
    case 'budget':
      return `recipient_region_code:(${data.join(' ')})`;
    default:
      return null;
  }
}
