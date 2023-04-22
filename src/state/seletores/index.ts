import { selector } from "recoil";
import { FiltroDeEventos, listaDeEventosState } from "../atom";
import { IEvento } from "../../interfaces/IEvento";

export const eventosFiltradosState = selector({

    key: 'eventosFiltrados',

    get: ({ get }) => {
        const filtro = get(FiltroDeEventos)
        const todosEventos = get(listaDeEventosState)
        const eventos = todosEventos.filter(evento => {
            if (!filtro.data) {
                return true
            }
            const mesmoDia = filtro.data.toISOString().slice(0, 10) === evento.inicio.toISOString().slice(0, 10)
            return mesmoDia
        })
        return (eventos)
    }
})

export const eventosAsync = selector({
    key:'eventosAsyc',
    get: async () => {
        const respostaHttp = await fetch('http://localhost:8080/eventos')
        const eventosJSON:IEvento[] = await respostaHttp.json()
        return eventosJSON.map(evento => ({
            ...evento,
            inicio: new Date(evento.inicio),
            fim: new Date(evento.fim)
        }))
    }
})