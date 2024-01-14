import Link from 'next/link';
import { Button } from '@mui/material';
import ForumIcon from '@mui/icons-material/Forum';

import styles from './StoreInfo.module.scss';

export default function StoreInfo() {
    return (
        <div className={styles.container}>

            <div className={styles.header}>
                <div className={styles.storeInfo}>
                    <p className={styles.soldBy}>Sold by</p>
                    <p className={styles.storeName}>Name</p>
                </div>

                <Button
                    className={styles.chatButton}
                    startIcon={<ForumIcon className={styles.chatIcon} />}
                >
                    CHAT
                </Button>
            </div>

            <div className={styles.summaryContainer}>
                <div className={styles.summary}>
                    <div className={styles.label}>Positive Seller Ratings</div>
                    <div className={styles.value}>70%</div>
                </div>
                <div className={styles.summary}>
                    <div className={styles.label}>
                        Ship on Time
                    </div>
                    <div className={styles.value}>
                        100%
                    </div>
                </div>
                <div className={styles.summary}>
                    <div className={styles.label}>
                        Chat Response Rate
                    </div>
                    <div className={styles.value}>
                        88%
                    </div>
                </div>
            </div>

            <div className={styles.link}>
                <Link href="#">Visit Store</Link>
            </div>

        </div>
    )
}
{/* <div className={styles}></div> */ }