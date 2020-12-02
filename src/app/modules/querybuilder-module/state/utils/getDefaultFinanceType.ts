export function getDefaultFinanceType(data: any, rowFormat: string) {
  if (!data || data.length === 0) {
    return null;
  }
  switch (rowFormat) {
    case 'activity':
      return `(default_finance_type_code:(${data.join(
        ' '
      )}) OR transaction_finance_type_code:(${data.join(' ')}))`;
    case 'transaction':
      return `(default_finance_type_code:(${data.join(
        ' '
      )}) OR transaction_finance_type_code:(${data.join(' ')}))`;
    case 'budget':
      return `default_finance_type_code:(${data.join(' ')})`;
    default:
      return null;
  }
}
