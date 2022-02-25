// mapping for site logos
export function getSiteLogo(site) {
  let siteLogo;

  switch (site) {
      case 'https://www.wsbtv.com':
        siteLogo = 'https://www.wsbtv.com/pf/resources/images/sites/cmg-tv-10010/station-logo.png?d=362';
        break;
      case 'https://www.whio.com':
        siteLogo = 'https://www.whio.com/pf/resources/images/sites/cmg-tv-10040/station-logo.png?d=362';
        break;
      case 'https://www.kiro7.com':
        siteLogo = 'https://www.kiro7.com/pf/resources/images/sites/cmg-tv-10090/station-logo.png?d=362';
        break;
      case 'https://www.wsoctv.com':
        siteLogo = 'https://www.wsoctv.com/pf/resources/images/sites/cmg-tv-10030/station-logo.png?d=362';
        break;
      case 'https://www.wpxi.com':
        siteLogo = 'https://www.wpxi.com/pf/resources/images/sites/cmg-tv-10080/station-logo.png?d=362';
        break;
      case 'https://www.wftv.com':
        siteLogo = 'https://www.wftv.com/pf/resources/images/sites/cmg-tv-10070/station-logo.png?d=362';
        break;
      case 'https://www.boston25news.com':
        siteLogo = 'https://www.boston25news.com/pf/resources/images/sites/cmg-tv-10020/station-logo.png?d=362';
        break;
      case 'https://www.fox23.com':
        siteLogo = 'https://www.fox23.com/pf/resources/images/sites/cmg-tv-10100/station-logo.png?d=362';
        break;
      case 'https://www.fox13memphis.com':
        siteLogo = 'https://www.fox13memphis.com/pf/resources/images/sites/cmg-tv-10060/station-logo.png?d=362';
        break;
      case 'https://www.actionnewsjax.com/':
        siteLogo = 'https://www.actionnewsjax.com/pf/resources/images/sites/cmg-tv-10050/station-logo.png?d=362';
        break;
      default:
        siteLogo = 'https://www.wsbtv.com/pf/resources/images/sites/cmg-tv-10010/station-logo.png?d=362';
  }

  return siteLogo;
}

export function getCityState(site) {
  let cityState;

  switch (site) {
      case 'https://www.wsbtv.com':
        cityState = 'Atlanta, GA';
        break;
      case 'https://www.whio.com':
        cityState = 'Dayton, OH';
        break;
      case 'https://www.kiro7.com':
        cityState = 'Seattle, WA';
        break;
      case 'https://www.wsoctv.com':
        cityState = 'Charlotte, NC';
        break;
      case 'https://www.wpxi.com':
        cityState = 'Pittsburgh, PA';
        break;
      case 'https://www.wftv.com':
        cityState = 'Orlando, FL';
        break;
      case 'https://www.boston25news.com':
        cityState = 'Boston, MA';
        break;
      case 'https://www.fox23.com':
        cityState = 'Tulsa, OK';
        break;
      case 'https://www.fox13memphis.com':
        cityState = 'Memphis, TN';
        break;
      case 'https://www.actionnewsjax.com/':
        cityState = 'Jacksonville, FL';
        break;
      default:
        cityState = 'Atlanta, GA';
  }

  return cityState;
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

export function padIconCode(iconCode = '') {
  return (iconCode+'').padStart(2, '0');
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