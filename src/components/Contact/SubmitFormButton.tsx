"use client";

// @ts-ignore
import { experimental_useFormStatus as useFormStatus } from "react-dom";
import { Button } from "src/components/Buttons";

export const SubmitFormButton = () => {
  const { pending } = useFormStatus();

  return (
    <Button type="submit" aria-disabled={pending}>
      Submit
    </Button>
  );
};
