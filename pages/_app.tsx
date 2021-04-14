import '../styles/global.css';
import { AppProps } from 'next/app';
import '../lib/i18n';

if (typeof global.navigator === 'undefined') global.navigator = {} as Navigator;
// if (typeof global.document === 'undefined') global.document = {};
// if (typeof global.window === 'undefined') global.window = {};

export default function App({ Component, pageProps }: AppProps) {
	return <Component {...pageProps} />;
}
