export function getParticipatingOrgs(data: any, rowFormat: string) {
  if (!data || data.length === 0) {
    return null;
  }
  const tempstr = data && data.join(' ');
  const output = `"${tempstr.split(' ').join('" "')}"`;
  return `participating_org_ref:(${output})`;
}
