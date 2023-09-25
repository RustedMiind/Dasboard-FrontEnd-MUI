function sortByDate<T>(arr: T[], key: string): T[] {
  return arr.sort((a, b) => {
    return (
      new Date(Date.parse(b[key as keyof T] as string) || 0).getTime() -
      new Date(Date.parse(a[key as keyof T] as string) || 0).getTime()
    );
  });
}

export { sortByDate };
