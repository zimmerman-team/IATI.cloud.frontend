export function getGeneralSearch(data: any, rowFormat: string) {
  if (!data || data.length === 0) {
    return null;
  }
  switch (rowFormat) {
    case 'activity':
      return `(title_narrative:"${data}" OR description_narrative:"${data}" OR iati_identifier:"${data}" OR transaction_description_narrative:"${data}")`;
    case 'transaction':
      return `(title_narrative:"${data}" OR activity_description_narrative:"${data}" OR iati_identifier:"${data}" OR transaction_description_narrative:"${data}")`;
    case 'budget':
      return `(iati_identifier:"${data}")`;
    default:
      return null;
  }
}
