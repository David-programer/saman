export class Valores{
    constructor(
        public elementos = {
            zonas: { 
              cantidad: { Norte: 0, Centro: 0, Sur: 0, Oriental: 0, Occidente: 0  },
              valor: { Norte: 0, Centro: 0, Sur: 0, Oriental: 0, Occidente: 0  } 
            },
            colores: {
              estados: { verde: 'V', amarillo: 'A', rojo: 'R', negro: 'N', morado: 'M', diamante: 'VD', oro: 'VO', plata: 'VP' },
              cantidad: {
                Norte: {verde: 0, amarillo: 0, rojo: 0, negro: 0, morado: 0, diamante: 0, oro: 0, plata: 0},
                Centro: {verde: 0, amarillo: 0, rojo: 0, negro: 0, morado: 0, diamante: 0, oro: 0, plata: 0},
                Sur: {verde: 0, amarillo: 0, rojo: 0, negro: 0, morado: 0, diamante: 0, oro: 0, plata: 0},
                Oriental: {verde: 0, amarillo: 0, rojo: 0, negro: 0, morado: 0, diamante: 0, oro: 0, plata: 0},
                Occidente: {verde: 0, amarillo: 0, rojo: 0, negro: 0, morado: 0, diamante: 0, oro: 0, plata: 0}, 
              },
              valor: {
                Norte: {verde: 0, amarillo: 0, rojo: 0, negro: 0, morado: 0, diamante: 0, oro: 0, plata: 0},
                Centro: {verde: 0, amarillo: 0, rojo: 0, negro: 0, morado: 0, diamante: 0, oro: 0, plata: 0},
                Sur: {verde: 0, amarillo: 0, rojo: 0, negro: 0, morado: 0, diamante: 0, oro: 0, plata: 0},
                Oriental: {verde: 0, amarillo: 0, rojo: 0, negro: 0, morado: 0, diamante: 0, oro: 0, plata: 0},
                Occidente: {verde: 0, amarillo: 0, rojo: 0, negro: 0, morado: 0, diamante: 0, oro: 0, plata: 0}, 
              }             
            },
            pagos :{
              Norte: { servicio : 0, arriendo : 0, nomina : 0, cantArr: 0, cantSer: 0, cantNom: 0, cantUtil: 0, utilNetaSer: 0, utilNetaArr: 0, utilNetaNom: 0, utilNeta: 0,  },
              Centro: { servicio : 0, arriendo : 0, nomina : 0, cantArr: 0, cantSer: 0, cantNom: 0, cantUtil: 0, utilNetaSer: 0, utilNetaArr: 0, utilNetaNom: 0, utilNeta: 0,  },
              Sur: { servicio : 0, arriendo : 0, nomina : 0, cantArr: 0, cantSer: 0, cantNom: 0, cantUtil: 0, utilNetaSer: 0, utilNetaArr: 0, utilNetaNom: 0, utilNeta: 0,  },
              Oriental: { servicio : 0, arriendo : 0, nomina : 0, cantArr: 0, cantSer: 0, cantNom: 0, cantUtil: 0, utilNetaSer: 0, utilNetaArr: 0, utilNetaNom: 0, utilNeta: 0,  },
              Occidente: { servicio : 0, arriendo : 0, nomina : 0, cantArr: 0, cantSer: 0, cantNom: 0, cantUtil: 0, utilNetaSer: 0, utilNetaArr: 0, utilNetaNom: 0, utilNeta: 0,  },   
              totalServicio: 0,
              cantServicio:0,
              totalArriendo: 0,
              cantArriendo: 0,
              totalNomina: 0,
              cantNomina: 0,
            },
            tipoPdv : { 
              cantidad: { 
                Norte: {1: 0, 3: 0, 4: 0, 5: 0, 6: 0, 7: 0, 8: 0, 9: 0, }, 
                Centro: {1: 0, 3: 0, 4: 0, 5: 0, 6: 0, 7: 0, 8: 0, 9: 0, }, 
                Sur: {1: 0, 3: 0, 4: 0, 5: 0, 6: 0, 7: 0, 8: 0, 9: 0, }, 
                Oriental: {1: 0, 3: 0, 4: 0, 5: 0, 6: 0, 7: 0, 8: 0, 9: 0, }, 
                Occidente: {1: 0, 3: 0, 4: 0, 5: 0, 6: 0, 7: 0, 8: 0, 9: 0, }, 
              },
              valor: { 
                Norte: {1: 0, 3: 0, 4: 0, 5: 0, 6: 0, 7: 0, 8: 0, 9: 0, }, 
                Centro: {1: 0, 3: 0, 4: 0, 5: 0, 6: 0, 7: 0, 8: 0, 9: 0, }, 
                Sur: {1: 0, 3: 0, 4: 0, 5: 0, 6: 0, 7: 0, 8: 0, 9: 0, }, 
                Oriental: {1: 0, 3: 0, 4: 0, 5: 0, 6: 0, 7: 0, 8: 0, 9: 0, }, 
                Occidente: {1: 0, 3: 0, 4: 0, 5: 0, 6: 0, 7: 0, 8: 0, 9: 0, }, 
              },

            },
            pofis: {
              cantidad: { Norte: 0, Centro: 0, Sur: 0, Oriental: 0, Occidente: 0  },
              valor: { Norte: 0, Centro: 0, Sur: 0, Oriental: 0, Occidente: 0  }
            }
        }
    ){}
}