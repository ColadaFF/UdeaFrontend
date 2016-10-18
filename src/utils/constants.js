import {green900} from 'material-ui/styles/colors';
import Spacing from 'material-ui/styles/spacing';
import zIndex from 'material-ui/styles/zIndex';
export const mainTheme = {
    spacing: Spacing,
    zIndex: zIndex,
    fontFamily: 'Roboto, sans-serif',
    palette: {
        primary1Color: green900,
        primary2Color: green900,
        primary3Color: green900,
        accent1Color: green900,
        accent2Color: green900,
        accent3Color: green900,
    }
};

export const itemsIdType = [
    {
        value: 'cc',
        text: 'Cédula de ciudadanía'
    },
    {
        value: 'pass',
        text: 'Pasaporte'
    }
];

export const itemsRoomType = [
    {
        value: 'auditorium',
        text: 'Auditorio'
    },
    {
        value: 'computersRoom',
        text: 'Sala de computo'
    },
    {
        value: 'drawingRoom',
        text: 'Sala de dibujo'
    },
    {
        value: 'specialRoom',
        text: 'Aula especial'
    },
    {
        value: 'labRoom',
        text: 'Laboratorio'
    }
];