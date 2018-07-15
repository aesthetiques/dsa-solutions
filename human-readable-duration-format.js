const calculateSeconds = (seconds) => seconds % 60 
const calculateMinutes = (seconds) => Math.floor(seconds / 60) % 60
const calculateHours = (seconds) => Math.floor(seconds / 60 * 60 ) % 24
const calculateDays = (seconds) => Math.floor(seconds / 60 * 60 * 24) % 365
const calculateYears = (seconds) => Math.floor(seconds / 60 * 60 * 24 * 365)

const pluralizeOrNah = (time) => {
  switch(time){
    case 'years':
      return time.count > 1 ? 'years' : time.count === 1 ? 'year' : null
    case 'days':
      return time.count > 1 ? 'days' : time.count === 1 ? 'day' : null
    case 'hours':
      return time.count > 1 ? 'hours' : time.count === 1 ? 'hour' : null
    case 'minutes':
      return time.count > 1 ? 'minutes' : time.count === 1 ? 'minute' : null
    case 'seconds':
      return time.count > 1 ? 'seconds' : time.count === 1 ? 'second' : null
  }
}

const composePhrase = (metric) => {
  if(!metric) return ''
  switch(metric.metric){
    case 'second':
    case 'seconds': 
      return ` and ${metric.count} ${metric.metric}`
    case 'minutes': 
      return ` ${metric.count} ${metric.metric}`
    case 'hours': 
      return ` ${metric.count} ${metric.metric},`
    case 'days': 
      return ` ${metric.count} ${metric.metric}`
    case 'years': 
      return ` ${metric.count} ${metric.metric}`
  }
}

function formatDuration (seconds) {
  if(seconds === 0) return 'now'
  let phrase = ''
  
  const metrics = [ 
    { count: calculateYears(seconds), metric: pluralizeOrNah('years') },
    { count: calculateDays(seconds), metric: pluralizeOrNah('days') },
    { count: calculateHours(seconds), metric: pluralizeOrNah('hours') },
    { count: calculateMinutes(seconds), metric: pluralizeOrNah('minutes') },
    { count: calculateSeconds(seconds), metric: pluralizeOrNah('seconds') }
   ]
  
  for(let metric of metrics){
    if(metric.count) phrase += composePhrase(metric)
  }
  
  return phrase
}

