"use client";

// @ts-ignore
import { experimental_useFormStatus as useFormStatus } from "react-dom";
import Button from "@components/Buttons/Button";

export function SubmitButton() {
  const { pending } = useFormStatus();

  return (
    <Button type="submit" aria-disabled={pending}>
      Submit
    </Button>
  );
}
