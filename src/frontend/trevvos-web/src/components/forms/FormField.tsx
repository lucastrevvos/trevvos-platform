"use client";
import { ValidationError, type TUseForm } from "@formspree/react";
import {
  cloneElement,
  type ReactElement,
  type ComponentPropsWithRef,
} from "react";
export type FormspreeErrors = TUseForm<Record<string, string>>[0]["errors"];
interface Props {
  id: string;
  name: string;
  label: string;
  required?: boolean;
  error?: string;
  errors: FormspreeErrors;
  children: ReactElement<ComponentPropsWithRef<"input">>;
}
export function FormField({
  id,
  name,
  label,
  required,
  error,
  errors,
  children,
}: Props) {
  const invalid = Boolean(error || errors?.getFieldErrors(name).length);
  const errorId = id + "-error";
  return (
    <div className="form__field">
      <label htmlFor={id}>
        {label}
        {required ? " *" : ""}
      </label>
      {cloneElement(children, {
        id,
        name,
        required,
        "aria-invalid": invalid || undefined,
        "aria-describedby": invalid ? errorId : undefined,
      })}
      {error ? (
        <p className="form__msg err" id={errorId}>
          {error}
        </p>
      ) : (
        <ValidationError
          id={errorId}
          className="form__msg err"
          field={name}
          prefix={label}
          errors={errors}
        />
      )}
    </div>
  );
}
