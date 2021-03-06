export function formatUnixTimestamp(timestamp) {
  return new Date(timestamp * 1000)
    .toLocaleString(undefined, { dateStyle: 'short', timeStyle: 'short' })
}
