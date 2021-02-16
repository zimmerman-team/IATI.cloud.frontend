export function getDefaultCurrency(data: any, rowFormat: string) {
  if (!data || data.length === 0) {
    return null;
  }
  switch (rowFormat) {
    case 'activity':
      return `(default_currency:(${data.join(
        ' '
      )}) OR transaction_value_currency:(${data.join(' ')}))`;
    case 'transaction':
      return `(default_currency:(${data.join(
        ' '
      )}) OR transaction_value_currency:(${data.join(' ')}))`;
    case 'budget':
      return `default_currency:(${data.join(
        ' '
      )}) OR budget_value_currency(${data.join(' ')})`;
    default:
      return null;
  }
}
