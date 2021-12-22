import React from 'react';
import styles from './WithLayout.module.scss';

const WithLayout = (WrappedComponent: React.FC) => (props: any) => (
		<div className={styles.container}>
			<div className={styles.header}>
				<a href="https://www.qover.com/">QUOVER.ME</a>
			</div>
			<WrappedComponent {...props} />
			<div className={styles.footer}> © Qover 2017</div>
		</div>
	);

export default WithLayout;
