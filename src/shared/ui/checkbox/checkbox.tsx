import styles from "./Checkbox.module.scss";

interface CheckboxProps {
  label: string;
  checked: boolean;
  onChange: (checked: boolean) => void;
}

const Checkbox: React.FC<CheckboxProps> = ({ label, checked, onChange }) => {
  return (
    <label className={styles.checkbox}>
      <input
        type="checkbox"
        className={styles.checkbox__input}
        checked={checked}
        onChange={() => onChange(!checked)}
      />
      <span className={styles.checkbox__control} />
      <span className={styles.checkbox__label}>{label}</span>
    </label>
  );
};

export default Checkbox;
