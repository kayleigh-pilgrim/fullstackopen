import { 
  WiDaySunny, 
  WiCloudy, 
  WiFog, 
  WiRain, 
  WiSnow, 
  WiThunderstorm 
} from 'react-icons/wi';

const WeatherIcon = ({ code }) => {
  // Map WMO codes to specific icons
  switch (code) {
    case 0:
      return <WiDaySunny title="Clear sky" size={40} />;
    
    case 1:
    case 2:
    case 3:
      return <WiCloudy title="Mainly clear, partly cloudy, or overcast" size={40} />;
    
    case 45:
    case 48:
      return <WiFog title="Fog or depositing rime fog" size={40} />;
    
    case 51: case 53: case 55: // Drizzle
    case 61: case 63: case 65: // Rain
    case 80: case 81: case 82: // Rain showers
      return <WiRain title="Rain" size={40} />;
    
    case 71: case 73: case 75: // Snow fall
    case 77: // Snow grains
    case 85: case 86: // Snow showers
      return <WiSnow title="Snow" size={40} />;
    
    case 95:
    case 96:
    case 99:
      return <WiThunderstorm title="Thunderstorm" size={40} />;
    
    default:
      return <WiDaySunny title="Unknown weather code" size={40} />;
  }
};

export default WeatherIcon;