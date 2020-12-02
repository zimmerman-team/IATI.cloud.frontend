export function getReportingOrgTypes(data: any, rowFormat: string) {
  if (!data || data.length === 0) {
    return null;
  }
  switch (rowFormat) {
    case 'activity':
      return `reporting_org_type_code:(${data.join(' ')})`;
    case 'transaction':
      return `reporting_org_type:(${data.join(' ')})`;
    case 'budget':
      return `reporting_org_type:(${data.join(' ')})`;
    default:
      return null;
  }
}
