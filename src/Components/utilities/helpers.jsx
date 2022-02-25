import axios from 'axios';

const deployment = { d: 362 };

async function getLatestDeployment (websiteDomain, currentDeployment) {
  if (currentDeployment) {
    deployment.d = parseInt(currentDeployment);
  }

  const startingD = deployment.d;
  while (Math.abs(startingD - deployment.d) < 10) {
    try {
      await axios({
        url: websiteDomain + `?d=${deployment.d}`,
        method: 'GET',
      });
      console.log('The latest deployment:', deployment);
      break;
    } catch (err) {
      console.log('No longer the latest deployment:', deployment);
      deployment.d += 1;
      continue;
    }
  }
}

export async function getWeatherContent ({
  websiteDomain, metCollectionAlias, siteID, zipCode, currentDeployment
}) {
  await getLatestDeployment(websiteDomain, currentDeployment);

  try {
    const { data } = await axios({
      url: getWeatherEndpoint(websiteDomain, metCollectionAlias, siteID, zipCode),
      method: 'GET',
    });

    return data;
  } catch (err) {
    debugger;
  }
}

export function getWeatherEndpoint(websiteDomain, metCollectionAlias, siteID, zipCode) {
  return `${websiteDomain}/pf/api/v3/content/fetch/weather-api?query={"metCollectionAlias":"${metCollectionAlias}","website":"${siteID}","zipCode":"${zipCode}"}&d=${deployment.d}&_website=${siteID}`;
}

export function getSiteLogo(websiteDomain, siteID) {
  return `${websiteDomain}/pf/resources/images/sites/${siteID}/station-logo.png?d=${deployment.d}`;
}

export function getIcon(websiteDomain, iconCode = '') {
  const paddedIconCode = (iconCode+'').padStart(2, '0');
  return `${websiteDomain}/pf/resources/images/weather/status-icons/${paddedIconCode}.png?d=${deployment.d}`;
}

export function getCityState(siteProps) {
  return siteProps["cityState"] || 'Atlanta, GA';
}

// we loop through all the certifications and add the respective images
// need to ask Sara for all certifications and corresponding images
export function metCertLogo(certs, websiteDomain) {
  let certLogos = [];

  certs.forEach(function(cert, index) {
    switch (cert.name) {
    case 'AMS Certified':
      certLogos.push(
        <img
          key={index}
          src={`${websiteDomain}/pf/resources/images/weather/meteorologist-cert/logo_AMS_Cert.png?d=${deployment.d}`} alt="AMS Certified"
        />
      );
      break;
    default:
    }
  });
  return certLogos;
}

// days of the week come in as full day names
// need to shorten to reflect UX design
export function getShortDayName(day) {
  let dayName;

  switch (day) {
      case 'Sunday':
          dayName = 'sun';
          break;
      case 'Monday':
          dayName = 'mon';
          break;
      case 'Tuesday':
          dayName = 'tue';
          break;
      case 'Wednesday':
          dayName = 'wed';
          break;
      case 'Thursday':
          dayName = 'thu';
          break;
      case 'Friday':
          dayName = 'fri';
          break;
      case 'Saturday':
          dayName = 'sat';
          break;
      default:
          dayName = '';
  }

  return dayName;
}
