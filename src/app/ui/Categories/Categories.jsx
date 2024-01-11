'use client';

import Box from '@mui/material/Box';
import styles from "./Categories.module.scss";
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';

const items = [
    "Women's & Girls' Fashion",
    "Health & Beauty",
    "Watches, Bags, Jewellery",
    "Men's & Boy's Fashion",
    "Mother & Baby",
    "Electronics Devices",
    "TV & Home Appliances",
    "Electronic Accessories",
    "Groceries",
    "Home & Lifestyle",
    "Sports & Outdoors",
    "Automotive & Motorbike",
]

const Item = ({ name }) => {
    return (
        <div className={styles.item}>
            <AddCircleOutlineIcon />
            <p>{name}</p>
        </div>
    )
}

export default function Categories() {
    return (
        <Box className={styles.container} sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
            {
                items.map(i => <Item name={i} key={i} />)
            }
        </Box>
    )
}