// Monochrome icon set (all stroke="#000", CSS-filter-tintable)
// Static icons — main weather display
import staticFillPartlyCloudyNightRain from './icons/monochrome/svg-static/partly-cloudy-night-rain.svg'
import staticFillPartlyCloudyDayRain from './icons/monochrome/svg-static/partly-cloudy-day-rain.svg'
import staticFillPartlyCloudyNight from './icons/monochrome/svg-static/partly-cloudy-night.svg'
import staticFillPartlyCloudyDay from './icons/monochrome/svg-static/partly-cloudy-day.svg'
import staticFillCloudy from './icons/monochrome/svg-static/cloudy.svg'
import staticFillClearNight from './icons/monochrome/svg-static/clear-night.svg'
import staticFillFogNight from './icons/monochrome/svg-static/fog-night.svg'
import staticFillFogDay from './icons/monochrome/svg-static/fog-day.svg'
import staticFillHail from './icons/monochrome/svg-static/hail.svg'
import staticFillThunderstormsNight from './icons/monochrome/svg-static/thunderstorms-night.svg'
import staticFillThunderstormsDay from './icons/monochrome/svg-static/thunderstorms-day.svg'
import staticFillThunderstormsRainNight from './icons/monochrome/svg-static/thunderstorms-night-rain.svg'
import staticFillThunderstormsRainDay from './icons/monochrome/svg-static/thunderstorms-day-rain.svg'
import staticFillRain from './icons/monochrome/svg-static/rain.svg'
import staticFillSnow from './icons/monochrome/svg-static/snow.svg'
import staticFillSleet from './icons/monochrome/svg-static/sleet.svg'
import staticFillClearDay from './icons/monochrome/svg-static/clear-day.svg'
import staticFillWindsock from './icons/monochrome/svg-static/windsock.svg'
import staticFillHurricane from './icons/monochrome/svg-static/hurricane.svg'
import staticFillRaindrops from './icons/monochrome/svg-static/raindrops.svg'
import staticFillRaindrop from './icons/monochrome/svg-static/raindrop.svg'
import staticFillHumidity from './icons/monochrome/svg-static/humidity.svg'
import staticFillNotAvailable from './icons/monochrome/svg-static/not-available.svg'

// Crop icons — forecast rows (no crop variants in monochrome, using overcast-* equivalents)
import staticCropPartlyCloudyNightRain from './icons/monochrome/svg-static/partly-cloudy-night-rain.svg'
import staticCropPartlyCloudyDayRain from './icons/monochrome/svg-static/partly-cloudy-day-rain.svg'
import staticCropPartlyCloudyNight from './icons/monochrome/svg-static/partly-cloudy-night.svg'
import staticCropPartlyCloudyDay from './icons/monochrome/svg-static/partly-cloudy-day.svg'
import staticCropCloudyNight from './icons/monochrome/svg-static/overcast-night.svg'
import staticCropCloudyDay from './icons/monochrome/svg-static/overcast-day.svg'
import staticCropClearNight from './icons/monochrome/svg-static/clear-night.svg'
import staticCropClearDay from './icons/monochrome/svg-static/clear-day.svg'
import staticCropFogNight from './icons/monochrome/svg-static/fog-night.svg'
import staticCropFogDay from './icons/monochrome/svg-static/fog-day.svg'
import staticCropHailNight from './icons/monochrome/svg-static/overcast-night-hail.svg'
import staticCropHailDay from './icons/monochrome/svg-static/overcast-day-hail.svg'
import staticCropThunderstormsNight from './icons/monochrome/svg-static/thunderstorms-night.svg'
import staticCropThunderstormsDay from './icons/monochrome/svg-static/thunderstorms-day.svg'
import staticCropThunderstormsRainNight from './icons/monochrome/svg-static/thunderstorms-night-rain.svg'
import staticCropThunderstormsRainDay from './icons/monochrome/svg-static/thunderstorms-day-rain.svg'
import staticCropRainNight from './icons/monochrome/svg-static/overcast-night-rain.svg'
import staticCropRainDay from './icons/monochrome/svg-static/overcast-day-rain.svg'
import staticCropSnowNight from './icons/monochrome/svg-static/overcast-night-snow.svg'
import staticCropSnowDay from './icons/monochrome/svg-static/overcast-day-snow.svg'
import staticCropSleetNight from './icons/monochrome/svg-static/overcast-night-sleet.svg'
import staticCropSleetDay from './icons/monochrome/svg-static/overcast-day-sleet.svg'
import staticCropWindsock from './icons/monochrome/svg-static/windsock.svg'
import staticCropHurricane from './icons/monochrome/svg-static/hurricane.svg'
import staticCropRaindrops from './icons/monochrome/svg-static/raindrops.svg'
import staticCropRaindrop from './icons/monochrome/svg-static/raindrop.svg'
import staticCropHumidity from './icons/monochrome/svg-static/humidity.svg'

export const staticIcons = {
  fill: {
    rainy: {
      day: staticFillPartlyCloudyDayRain,
      night: staticFillPartlyCloudyNightRain
    },
    partlycloudy: {
      day: staticFillPartlyCloudyDay,
      night: staticFillPartlyCloudyNight
    },
    cloudy: staticFillCloudy,
    'clear-night': {
      day: staticFillClearDay,
      night: staticFillClearNight
    },
    fog: {
      day: staticFillFogDay,
      night: staticFillFogNight
    },
    hail: staticFillHail,
    lightning: {
      day: staticFillThunderstormsDay,
      night: staticFillThunderstormsNight
    },
    'lightning-rainy': {
      day: staticFillThunderstormsRainDay,
      night: staticFillThunderstormsRainNight
    },
    pouring: staticFillRain,
    raindrop: staticFillRaindrop,
    raindrops: staticFillRaindrops,
    snowy: staticFillSnow,
    'snowy-rainy': staticFillSleet,
    sunny: {
      day: staticFillClearDay,
      night: staticFillClearNight
    },
    windy: staticFillWindsock,
    'windy-exceptional': staticFillWindsock,
    exceptional: staticFillHurricane,
    humidity: staticFillHumidity,
    loading: staticFillNotAvailable
  }
}
export const cropIcons = {
  crop: {
    rainy: {
      day: staticCropPartlyCloudyDayRain,
      night: staticCropPartlyCloudyNightRain
    },
    partlycloudy: {
      day: staticCropPartlyCloudyDay,
      night: staticCropPartlyCloudyNight
    },
    cloudy: {
      day: staticCropCloudyDay,
      night: staticCropCloudyNight
    },
    'clear-night': {
      day: staticCropClearDay,
      night: staticCropClearNight
    },
    fog: {
      day: staticCropFogDay,
      night: staticCropFogNight
    },
    hail: {
      day: staticCropHailDay,
      night: staticCropHailNight
    },
    lightning: {
      day: staticCropThunderstormsDay,
      night: staticCropThunderstormsNight
    },
    'lightning-rainy': {
      day: staticCropThunderstormsRainDay,
      night: staticCropThunderstormsRainNight
    },
    pouring: {
      day: staticCropRainDay,
      night: staticCropRainNight
    },
    raindrop: staticCropRaindrop,
    raindrops: staticCropRaindrops,
    snowy: {
      day: staticCropSnowDay,
      night: staticCropSnowNight
    },
    'snowy-rainy': {
      day: staticCropSleetDay,
      night: staticCropSleetNight
    },
    sunny: {
      day: staticCropClearDay,
      night: staticCropClearNight
    },
    windy: staticCropWindsock,
    'windy-exceptional': staticCropWindsock,
    exceptional: staticCropHurricane,
    humidity: staticCropHumidity
  }
}
