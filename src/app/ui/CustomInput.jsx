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
            <label style={labelStyle} for={id}>{label}</label>
            <input
                className={styles.input}
                value={state?.[name]}
                handleOnChange={(e) => handleOnChange(name, e.target.value)}
                placeHolder={placeHolder}
                inputStyle={inputStyle}
            />
        </div>
    )
}

export default CustomInput;