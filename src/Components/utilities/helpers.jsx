export function getSiteLogo(websiteDomain, siteID) {
  return `${websiteDomain}/pf/resources/images/sites/${siteID}/station-logo.png?d=362`;
}

export function getIcon(websiteDomain, iconCode = '') {
  const paddedIconCode = (iconCode+'').padStart(2, '0');
  return `${websiteDomain}/pf/resources/images/weather/status-icons/${paddedIconCode}.png?d=348`;
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
          src={`${websiteDomain}/pf/resources/images/weather/meteorologist-cert/logo_AMS_Cert.png?d=348`} alt="AMS Certified"
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
