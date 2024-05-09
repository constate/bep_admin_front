const deviceSizes = {
    mobile: '375px',
    tablet: '768px',
    laptop: '1024px',
};

const colors = {
    primary: '#0099ff',
    secondary: '#0583F2',
    main: '#6DBFF2',
    background: '#FEFFFE',
    dark: '#262626',
    logo: '#39c3f4',
};

const device = {
    mobile: `screen and (max-width: ${deviceSizes.mobile})`,
    tablet: `screen and (max-width: ${deviceSizes.tablet})`,
    laptop: `screen and (max-width: ${deviceSizes.laptop})`,
};

const theme = {
    device,
};

export default theme;
