import styles from "./Checkbox.module.scss";

interface CheckboxProps {
  label: string;
  checked: boolean;
  onChange: (checked: boolean) => void;
}

const Checkbox: React.FC<CheckboxProps> = ({ label, checked, onChange }) => {
  const handleToggle = () => {
    onChange(!checked);
  };

  return (
    <label className={styles.checkbox}>
      <input
        type="checkbox"
        className={styles.checkbox__input}
        checked={checked}
        onChange={handleToggle}
      />
      <span className={styles.checkbox__control}>
        {checked && <span className={styles.checkbox__control__indicator} />}
      </span>
      <span className={styles.checkbox__label}>{label}</span>
    </label>
  );
};

export default Checkbox;
