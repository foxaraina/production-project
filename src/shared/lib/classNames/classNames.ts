type ModType = Record<string, boolean | string>
export function classNames (cls: string, mod: ModType = {}, additional: string[] = []): string {
  return [
    cls,
    ...additional,
    ...Object.entries(mod).filter(([className, value]) => Boolean(value))
      .map(([className]) => className)
  ].join(' ')
}
