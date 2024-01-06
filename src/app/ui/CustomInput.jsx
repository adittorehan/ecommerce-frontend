import styles from './CustomInput.module.scss';

const CustomInput = ({
    id,
    label,
    name,
    state,
    handleOnChange,
    placeHolder,
    labelStyle,
    inputStyle
}) => {

    return (
        <div>
            <label style={labelStyle} htmlFor={id}>{label}</label>
            <input
                className={styles.input}
                value={state?.[name]}
                onChange={(e) => handleOnChange(name, e.target.value)}
                placeholder={placeHolder}
                style={inputStyle}
            />
        </div>
    )
}

export default CustomInput;