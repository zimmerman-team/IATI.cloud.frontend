// in: hi my name is, out: hi_my_name_is
export function createID(string: string): string{
  return string.replace(/[^A-Z0-9]+/ig, "_")
}
