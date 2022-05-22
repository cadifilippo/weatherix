const ERROR_CODE = {
  1: 'Se necesitan permisos de ubicación',
  2: 'La posición actual no está disponible',
  3: 'Se agotó el tiempo de espera',
};

const navigatorLocation = () =>
  new Promise((resolve, reject) => {
    if ('geolocation' in navigator) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          console.log('Latitude is :', latitude);
          console.log('Longitude is :', longitude);
          resolve({ latitude, longitude });
        },
        (error) => {
          reject({
            error: ERROR_CODE[error.code],
            code: error.code,
          });
        }
      );
    } else {
      reject({
        error: 'El navegador no soporta geolocalización',
        code: -1,
      });
    }
  });

export default navigatorLocation;
