export function getSectorVocabs(data: any, rowFormat: string) {
  if (!data || data.length === 0) {
    return null;
  }
  switch (rowFormat) {
    case 'activity':
      return `(transaction_sector_vocabulary:(${data.join(
        ' '
      )}) OR sector_vocabulary:(${data.join(' ')}))`;
    case 'transaction':
      return `(transaction_sector_vocabulary:(${data.join(
        ' '
      )}) OR activity_sector_vocabulary:(${data.join(' ')}))`;
    case 'budget':
      return `sector_vocabulary:(${data.join(' ')})`;
    default:
      return null;
  }
}
