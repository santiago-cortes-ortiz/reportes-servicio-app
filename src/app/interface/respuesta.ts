import { Reporte } from "./reporte";

export interface Respuesta{
    marcaTiempo: Date;
    codigoEstado: number;
    estadoHttp: string;
    razon: string;
    mensaje: string;
    mensajeDesarollador: string;
    dato: { reportes?: Reporte[], reporte?: Reporte };
}