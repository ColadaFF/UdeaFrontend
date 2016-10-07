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
        value: 'catedra',
        text: 'Catedra'
    },
    {
        value: 'lab',
        text: 'Laboratorio'
    }
];