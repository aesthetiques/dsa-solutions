function formatDuration (seconds) {
  if(seconds === 0) return 'now'
  
  const counts = [
    { singular: 'year', plural: 'years', measure: Math.floor(seconds / (60 * 60 * 24 * 365))},
    { singular: 'day', plural: 'days', measure: Math.floor(seconds / (60 * 60 * 24)) % 365},
    { singular: 'hour', plural: 'hours', measure: Math.floor(seconds / (60 * 60 )) % 24},
    { singular: 'minute', plural: 'minutes', measure: Math.floor(seconds / 60) % 60},
    { singular: 'second', plural: 'seconds', measure: seconds % 60},
  ]

  const phrase = counts.map(count => {
    if(count.measure > 1) return `${count.measure} ${count.plural}`
    if(count.measure === 1) return `${count.measure} ${count.singular}`
  }).filter(count => count !== undefined)
  
  if()
  
  return
}

