export function getHumanitarian(data: any, rowFormat: string) {
  if (!data || data.length === 0) {
    return null;
  }
  switch (rowFormat) {
    case 'activity':
      return `(humanitarian:(${data.join(
        ' '
      )}) OR transaction_humanitarian:(${data.join(' ')}))`;
    case 'transaction':
      return `(default_humanitarian:(${data.join(
        ' '
      )}) OR transaction_humanitarian:(${data.join(' ')}))`;
    case 'budget':
      return `default_humanitarian:(${data.join(' ')})`;
    default:
      return null;
  }
}
