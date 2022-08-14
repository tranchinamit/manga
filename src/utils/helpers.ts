export const kFormatter = (num: number): string | number => {
  if (!num) return 0;
  return Math.abs(num) > 999 ? Math.sign(num) * parseFloat((Math.abs(num) / 1000).toFixed(1)) + 'k' : Math.sign(num) * Math.abs(num)
}

export const handleCommentTime = (datetime: number) => {
  const timeNum = Date.now() - datetime;
  if (timeNum / (60 * 1000) < 60) {
    return `${Math.round(timeNum / (60 * 1000))} min. ago`;
  } else if (timeNum / (3600 * 1000) < 24) {
    return `${Math.round(timeNum / (60 * 60 * 1000))} hour ago`;
  } else {
    return `${Math.round(timeNum / (1000 * 3600 * 24))} days ago`;
  }
}