import { ComunaDto } from "../models/comunaDto";

export interface IComunaService {
    getComuna():ComunaDto[];
}