/*
	File for encapsulating languages card data
*/
import React, { useEffect, useRef } from 'react';
//import { useRef } from 'react-dom';

import styles from './index.module.css';
import LANGUAGES from '../imgs/';

const Lannguages = ({ languages }) => {
	let ref = useRef(null);

	useEffect(() => {
		if (ref.current.scrollHeight > 128) 
			ref.current.style.boxShadow = "0px -40px 25px -34px #005eff inset";
	})
	return (
		<div className={styles.languagesImgCard} ref={ref}>
		{
			languages.map((language, i) => 
				<div key={i} className={styles.imgCont}>
					<img src={LANGUAGES[language.imgName]} alt={language.imgAlt} onClick={() => window.open(language.link,"_blank")} />
				</div>
			)
		}
		</div>
	)
}

export default Lannguages