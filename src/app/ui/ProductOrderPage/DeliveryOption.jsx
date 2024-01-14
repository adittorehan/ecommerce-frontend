import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import KeyboardReturnOutlinedIcon from '@mui/icons-material/KeyboardReturnOutlined';
import RemoveModeratorOutlinedIcon from '@mui/icons-material/RemoveModeratorOutlined';
import { Button } from '@mui/material';

import styles from './DeliveryOption.module.scss';

export default function DeliveryOption() {
    return (
        <div className={styles.container}>
            <div className={styles.header}>
                <span>Delivery</span>
                <InfoOutlinedIcon size="small" />
            </div>

            <div className={styles.optionContainer}>
                <LocationOnOutlinedIcon size="medium" />
                <div className={styles.address}>
                    Dhaka, Dhaka North, Banani Road 12-19
                </div>

                <Button variant="text" className={styles.changeLocationButton}>Change</Button>
            </div>

            <div className={styles.header}>
                <span>Service</span>
                <InfoOutlinedIcon size="small" />
            </div>

            <div className={styles.optionContainer}>
                <KeyboardReturnOutlinedIcon size="medium" />
                <div className={styles.address}>
                    7 Day Return
                    <p className={styles.subInfo}>Change of mind applicable</p>
                </div>
            </div>

            <div className={styles.optionContainer}>
                <RemoveModeratorOutlinedIcon size="medium" />
                <div className={styles.address}>
                    Warranty not available
                </div>
            </div>
        </div>
    )
}