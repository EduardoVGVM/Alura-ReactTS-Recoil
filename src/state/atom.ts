import { atom } from 'recoil'
import { IEvento } from '../interfaces/IEvento'
import { IFiltroDeEventos } from '../interfaces/IFiltroDeEventos'
import { eventosAsync } from './seletores'

export const listaDeEventosState = atom<IEvento[]>({
    key: 'listaDeEventosState',
    default: eventosAsync
})

export const FiltroDeEventos = atom<IFiltroDeEventos>({
    key:'filtroDeEventos',
    default:{}
})