import { useDefaultForm } from "~/hooks/useDefaultForm";
import "@testing-library/jest-dom";
import { renderHook } from "@testing-library/react";

describe("(hooks) useDefaultForm", () => {
  type Form = {
    userId: string;
    userName: string;
  };
  const { result } = renderHook(() =>
    useDefaultForm<Form>({
      defaultValues: {
        userId: "",
        userName: "",
      },
    }),
  );
  const { getValues } = result.current;
  test("check useForm is working", () => {
    expect(getValues()).toStrictEqual({ userId: "", userName: "" });
  });
});
