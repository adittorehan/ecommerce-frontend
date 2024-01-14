import { Rating, LinearProgress } from "@mui/material";

import styles from './RatingCount.module.scss';

export default function RatingCount({
    value,
    count = 0,
    totalCount
}) {

    const calculateCount = () => (count / totalCount) * 100;

    return (
        <div className={styles.container}>
            <Rating
                value={value}
                precision={0.1}
                size='small'
                readOnly
            />
            <LinearProgress
                className={styles.linear}
                variant="determinate"
                value={calculateCount()}
                sx={{
                    '& .MuiLinearProgress-bar': {
                        backgroundColor: '#ffc700', // Progress bar color
                    },
                }}
            />
            <div className={styles.count}>{count}</div>
        </div>
    )
}