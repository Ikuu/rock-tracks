export function formatDate(stringDate: string): string {
  const date = new Date(stringDate)
  return date.toLocaleDateString()
}
