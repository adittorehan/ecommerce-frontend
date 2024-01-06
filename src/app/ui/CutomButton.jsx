import Button from '@mui/material/Button';

export default function CustomButton({ text, style, startIcon }) {
    return (
        <Button variant="contained"
            style={{
                ...style,
                width: style?.width ?? '100%',
                height: style?.height ?? 40,
            }}
            startIcon={startIcon}
        >{text}</Button>
    )
}