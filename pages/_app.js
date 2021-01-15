import {ThemeProvider, theme} from '@chakra-ui/core';
import 'tailwindcss/tailwind.css';
import {ToastProvider} from 'react-toast-notifications';

const customTheme = {
    ...theme,
    colors: {
        ...theme.colors,
        primary: {
            100: '#E5FCF1',
            200: '#27EF96',
            300: '#10DE82',
            400: '#0EBE6F',
            500: '#0CA25F',
            600: '#0A864F',
            700: '#086F42',
            800: '#075C37',
            900: '#064C2E',
        },
    },
};

function MyApp({Component, pageProps}) {
    return (
        <ToastProvider autoDismiss autoDismissTimeout={6000} placement="top-right">
            <ThemeProvider theme={customTheme}>
                <Component {...pageProps} />
            </ThemeProvider>
        </ToastProvider>
    );
}

export default MyApp;
