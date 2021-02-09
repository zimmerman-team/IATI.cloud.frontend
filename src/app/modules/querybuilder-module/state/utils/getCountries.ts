export function getCountries(data: any, rowFormat: string) {
  if (!data || data.length === 0) {
    return null;
  }
  switch (rowFormat) {
    case 'activity':
      return `(recipient_country_code:(${data.join(
        ' '
      )}) OR transaction_recipient_country_code:(${data.join(' ')}))`;
    case 'transaction':
      return `(activity_recipient_country_code:(${data.join(
        ' '
      )}) OR transaction_recipient_country_code:(${data.join(' ')}))`;
    case 'budget':
      return `recipient_country_code:(${data.join(' ')})`;
    default:
      return null;
  }
}
