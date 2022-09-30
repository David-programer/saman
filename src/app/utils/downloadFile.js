import axios from 'axios';

export const getFilenameAndExtension = (completeFilename) => {
  const partsFileName = completeFilename.split('.');

  if (partsFileName.length === 0) {
    return {
      filename: 'archivo',
      extension: 'xlsx'
    };
  }
  if (partsFileName.length === 1) {
    return {
      filename: partsFileName[0],
      extension: 'xlsx'
    };
  }
  console.log(partsFileName);
  return {
    filename: partsFileName.slice(0, partsFileName.length - 1).join(),
    extension: partsFileName[partsFileName.length - 1]
  };
};

/**
 * Descargar archivo por POST
 * @param {url: string, params: object, filename: string} args Url debe ser completa y el filename
 * con extensión.
 * @returns Promise<boolean
 */
export const downloadPostFile = ({url, params, filename}) => {
  return axios.post(url, params, {responseType: 'blob'})
  .then((response) => {
    downloadFile({filename, response});
    return true;
  });
};

/**
 * Descargar archivo por GET
 * @param {url: string, filename: string} args Url debe ser completa y el filename
 * con extensión. Los parámetros deben estar en la url.
 * @returns Promise<boolean>
 */
export const downloadGetFile = ({url, filename}) => {
  return axios.get(url, {responseType: 'blob'})
  .then((response) => {
    downloadFile({filename, response});
    return true;
  });
};

/**
 * 
 * @param {{filename: string, response: AxiosResponse}} props La propiedad filename
 * corresponde al nombre del archivo con extensión. El response corresponde a la respuesta de un ajax
 * con Axios. Ejemplo de uso:
 * return axios.post(`${url_api}`, {param: 1}}, {responseType: 'blob'})
 *        .then((response) => {
 *           downloadFile({filename: 'archivo.xlsx', response});
 *        })
 */
const downloadFile = ({filename, response}) => {
  const type = response.headers['content-type'];
  const url = window.URL.createObjectURL(
    new Blob([response.data], { type: type })
  );
  const link = document.createElement('a');
  link.href = url;
  const objFilename = getFilenameAndExtension(filename);
  console.log(objFilename);
  const fecha = +new Date();
  link.setAttribute('download', `${objFilename.filename}_${fecha}.${objFilename.extension}`);
  document.body.appendChild(link);
  link.click();
  link.remove();
}

export default downloadFile;