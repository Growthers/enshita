import { forwardRef } from "react";
import type { RadioInputProperties } from "./type/model";

// eslint-disable-next-line react/display-name
const RadioInput = forwardRef<HTMLInputElement, RadioInputProperties>(
  ({ id, value, ...rest }, ref) => (
    <input ref={ref} id={id} name={id} type="radio" value={value} {...rest} />
  ),
);

export { RadioInput };
