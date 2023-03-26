import { useState } from "react";
import cn from "classnames";
import styles from "./form-input.module.scss";

import EyeClosed from "images/icons/eye-closed-svgrepo-com.svg";
import EyeOpen from "images/icons/eye-open-svgrepo-com.svg";

interface IProps {
  placeholder: string;
  serverErrors?: string;
  extClassName?: string;
  input: any;
  label?: string;
  meta: any;
  required?: boolean;
  onClick?: () => void;
  readonly?: boolean;
}

const FormInput: React.FC<IProps> = ({
  input,
  label,
  meta,
  placeholder,
  serverErrors,
  onClick,
  readonly = false,
}) => {
  const [isShowPassword, setIsShowPassword] = useState(false);

  return (
    <div className={styles.container}>
      <label htmlFor={placeholder} className={styles.label}>
        <p className={styles.title}>{label}</p>
        <div className={styles.block}>
          <input
            {...input}
            className={cn(
              styles.input,
              {
                [styles.errorInput]:
                  (serverErrors && !meta?.dirtySinceLastSubmit) ||
                  (meta?.error && meta?.touched),
              },
              input.type === "password" && [styles.password]
            )}
            id={placeholder}
            placeholder={placeholder}
            onClick={onClick}
            type={isShowPassword ? "text" : input.type}
            readOnly={readonly}
          />
          {input.type === "password" && (
            <div
              className={styles.passwordShow}
              onClick={() => setIsShowPassword((prev) => !prev)}
            >
              {isShowPassword ? <EyeOpen /> : <EyeClosed />}
            </div>
          )}
        </div>
        {meta?.error && meta?.touched && (
          <div className="error">{meta.error}</div>
        )}
        {!meta?.error && !meta?.dirtySinceLastSubmit && serverErrors && (
          <div className="error">{serverErrors}</div>
        )}
      </label>
    </div>
  );
};

export default FormInput;
