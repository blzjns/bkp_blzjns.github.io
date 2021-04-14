import Head from 'next/head';
import Image from 'next/image';
import styles from './layout.module.css';
import utilStyles from '../styles/utils.module.css';
import Link from 'next/link';
import { aboutMe } from './aboutMe';
import React from 'react';
import { NextRouter, withRouter } from 'next/router';
// import { Translation } from 'react-i18next';
import i18n from '../lib/i18n';
// import { TFunction, useTranslation } from 'react-i18next';
// import { i18n } from 'i18next';

export const siteTitle = aboutMe.name;

interface IProps {
	children: any[];
	home: any;
	router: NextRouter;
}

interface IState {
	i18nLang: string;
	theme: 'dark' | 'light';
	showWave: boolean;
	expandedAvatar: boolean;
}

class Layout extends React.Component<IProps, IState> {
	constructor(props) {
		super(props);

		const urlQueryParam = (param, placeholder): string => {
			let paramVal: any = this.props.router.asPath.split('&');
			paramVal = paramVal.find(v => v.includes(param + '='));

			return paramVal
				? paramVal.substring(paramVal.indexOf('=') + 1)
				: placeholder;
		};

		this.state = {
			theme: 'dark',
			i18nLang: urlQueryParam('lang', 'en'),
			showWave: false,
			expandedAvatar: false,
		};

		this.onCLick = this.onCLick.bind(this);
		this.i18nSwitcher = this.i18nSwitcher.bind(this);
		this.switchTheme = this.switchTheme.bind(this);
	}

	async switchTheme() {
		await this.setState({
			theme: this.state.theme == 'dark' ? 'light' : 'dark',
		});
	}

	async onCLick() {
		await this.setState({
			i18nLang: 'en',
		} as IState);
	}

	i18nSwitcher(lng: string) {
		i18n.changeLanguage(lng);

		this.setState({
			i18nLang: lng,
		});
	}

	render() {
		return (
			<div className={styles.container + ' ' + styles[this.state.theme]}>
				<Head>
					<link rel="icon" href="/favicon.ico" />
					<meta
						name="description"
						content="Learn how to build a personal website using Next.js"
					/>
					<meta
						property="og:image"
						content={`https://og-image.vercel.app/${encodeURI(
							siteTitle
						)}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.zeit.co%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
					/>
					<meta name="og:title" content={siteTitle} />
					<meta name="twitter:card" content="summary_large_image" />
				</Head>
				<header
					className={styles.header + ' ' + styles[this.state.theme + 'Header']}>
					<div
						className={
							utilStyles.waveWrapper +
							' ' +
							utilStyles[this.state.theme + 'WaveWrapper']
						}
						style={{ display: !!this.state.showWave ? 'block' : 'none' }}>
						<div
							className={
								utilStyles.sun + ' ' + utilStyles[this.state.theme + 'Sun']
							}></div>
						<div
							className={
								utilStyles.wave +
								' ' +
								utilStyles.wave0 +
								' ' +
								utilStyles[this.state.theme + 'Wave']
							}
							style={{ left: '10%', top: '-85%' }}></div>
						<div
							className={
								utilStyles.wave +
								' ' +
								utilStyles.wave1 +
								' ' +
								utilStyles[this.state.theme + 'Wave']
							}></div>
						<div
							className={
								utilStyles.wave +
								' ' +
								utilStyles.wave2 +
								' ' +
								utilStyles[this.state.theme + 'Wave']
							}
							style={{ left: '90%', top: '-115%' }}></div>
					</div>

					<div className={styles.headerTop}>
						<img
							src="http://www.script-tutorials.com/demos/360/images/stars.png"
							style={{
								height: '100px',
								width: '100%',
								position: 'absolute',
								// zIndex: -1
							}}></img>
						<div
							style={{ zIndex: 1 }}
							className={
								this.state.expandedAvatar
									? utilStyles.avatarBig
									: utilStyles.avatarSmall
							}
							// onMouseOver={() =>
							// 	this.setState({
							// 		expandedAvatar: true,
							// 	})
							// }
							// onMouseOut={() =>
							// 	this.setState({
							// 		expandedAvatar: false,
							// 	})
							// }
						>
							<span
								className={utilStyles.avatarSmall}
								style={{ color: '#5f5' }}>
								{aboutMe.name}
							</span>
							<br />
							<span style={{ fontSize: '30px', fontFamily: 'monospace' }}>
								{' '}
								{i18n.t('jobTitle')}
							</span>
						</div>
						{/* {this.props.home ? (
						<>
							<Link href={aboutMe.link}>
								<a>
									<Image
										priority
										id="home"
										src="/images/logo.png"
										className={utilStyles.borderCircle}
										height={80}
										width={80}
										alt={aboutMe.name}
									/>
									<h1 className={utilStyles.heading2Xl}>{aboutMe.name}</h1>
								</a>
							</Link>
						</>
					) : (
						<>
							<Link href="/">
								<a>
									<Image
										priority
										id="not home"
										src="../../images/logo.png"
										className={utilStyles.borderCircle}
										height={108}
										width={108}
										alt={aboutMe.name}
									/>
								</a>
							</Link>
							<h2 className={utilStyles.headingLg}>
								<Link href="/">
									<a className={utilStyles.colorInherit}>{aboutMe.name}</a>
								</Link>
							</h2>
						</>
					)} */}

						{/* <h1>{i18n.t('welcomeMsg')}</h1> */}

						<div className={styles.actions}>
							<a
								href="something"
								className={utilStyles.btn}
								style={{
									borderColor: '#FFFFFF',
									backgroundColor: 'rgba(0,0,0,0)',
									color: '#FFFFFF',
								}}>
								Hire Me
							</a>
							{/* <a
								href="hireme"
								className={utilStyles.btn}
								style={{ backgroundColor: '#42cc8c;' }}>
								Hire me
							</a> */}
							&nbsp;&nbsp;&nbsp;
							<small>
								<b>
									<a onClick={() => this.i18nSwitcher('fr')}>FR</a>
								</b>
								&nbsp;|&nbsp;
							</small>
							<small>
								<b>
									<a onClick={() => this.i18nSwitcher('en')}>EN</a>
								</b>
								&nbsp;|&nbsp;
							</small>
							<small>
								<b>
									<a onClick={() => this.i18nSwitcher('br')}>BR</a>
								</b>
							</small>
							&nbsp;&nbsp;&nbsp;
							<label
								className={utilStyles.switch}
								onMouseOver={async () => {
									// await this.switchTheme();
									await this.setState({ showWave: true });
								}}
								onMouseOut={async () => {
									// await this.switchTheme();
									await this.setState({ showWave: false });
								}}>
								<input
									type="checkbox"
									onChange={this.switchTheme}
									defaultChecked={this.state.theme == 'dark'}></input>
								<span
									className={
										utilStyles.slider +
										' ' +
										utilStyles.round +
										' ' +
										styles.themeBtn +
										' ' +
										styles[this.state.theme]
									}></span>
							</label>
						</div>
					</div>
				</header>
				<main className={styles.main}>{this.props.children}</main>
				{!this.props.home && (
					<div className={styles.backToHome}>
						<Link href="/">
							<a>← Back to home</a>
						</Link>
					</div>
				)}
			</div>
		);
	}
}

export default withRouter(Layout);
