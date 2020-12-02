export function getAidTypeCodes(data: any, rowFormat: string) {
  if (!data || data.length === 0) {
    return null;
  }
  switch (rowFormat) {
    case 'activity':
      return `(default_aid_type_code:(${data.join(
        ' '
      )}) OR transaction_aid_type_code:(${data.join(' ')}))`;
    case 'transaction':
      return `(default_aid_type_code:(${data.join(
        ' '
      )}) OR transaction_aid_type_code:(${data.join(' ')}))`;
    case 'budget':
      return `default_aid_type_code:(${data.join(' ')})`;
    default:
      return null;
  }
}
