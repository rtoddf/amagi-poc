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

export function metCertLogo(cert) {
    console.log('cert: ', cert)

    let certLogo;

    switch (cert) {
        case 'AMS Certified':
            certLogo = 'https://www.wsbtv.com/pf/resources/images/weather/meteorologist-cert/logo_AMS_Cert.png?d=348';
            break;
        default:
            certLogo = '';
    }

    return certLogo;
}