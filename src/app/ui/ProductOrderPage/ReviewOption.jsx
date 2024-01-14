import StarIcon from '@mui/icons-material/Star';

import styles from './ReviewOption.module.scss';
import { useEffect, useState } from 'react';


const ButtonContainer = ({ value }) => {
    const [selected, setSelected] = useState(false);
    console.log(selected)
    return (
        <div
            className={selected ? styles.buttonContainerSelected : styles.buttonContainer}
            onClick={() => {
                console.log('asdfsdf')
                setSelected(!selected)
            }}
        >
            <StarIcon className={styles.star} /> {value}
        </div>
    )
}

export default function ReviewOption() {
    return (
        <div className={styles.container}>
            <ButtonContainer value={5} />
            <span className={styles.rating}></span>
        </div>
    )
}