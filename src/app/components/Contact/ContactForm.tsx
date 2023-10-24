"use client";
// @ts-ignore
import { experimental_useFormState as useFormState } from "react-dom";
import { submitFormium } from "./actions";
import { InputField } from "./InputField";
import Input from "../Inputs/Input";
import { SubmitButton } from "./SubmitFormButton";
import { ZodError } from "zod";

const initialState = {
  name: null,
  email: null,
  message: null,
  recaptcha: null,
};

function getError(id: string, e: Error) {
  console.log("a");
  if (e instanceof ZodError) {
    const issue = e.errors.find((val) => {
      if (val.path[0] === id) return val;
    });

    return issue!.message;
  }
  console.log("f");

  return e.message;
}

export function ContactForm() {
  const [state, formAction] = useFormState(submitFormium, initialState);
  return (
    <form action={formAction}>
      <InputField>
        <label htmlFor="name">Enter your name</label>
        <Input
          id="name"
          name="name"
          aria_label="name"
          placeholder="Full Name"
          error={state.error ? true : false}
          required
        />
        {state.error ? (
          <p aria-live="polite" className="text-red-500 text-sm mt-1">
            {getError("name", state.error)}
          </p>
        ) : null}
      </InputField>
      <InputField>
        <label htmlFor="email">Enter your email address</label>
        <Input
          id="email"
          name="email"
          aria_label="email"
          placeholder="email"
          error={state.error ? true : false}
          required
        />
        {state.error ? (
          <p aria-live="polite" className="text-red-500 text-sm mt-1">
            {getError("email", state.error)}
          </p>
        ) : null}
      </InputField>
      <InputField>
        <label htmlFor="message">Enter the message you wish to send</label>
        <Input
          id="message"
          name="message"
          aria_label="message"
          placeholder="Message"
          error={state.error ? true : false}
          required
        />
        {state.error ? (
          <p aria-live="polite" className="text-red-500 text-sm mt-1">
            {getError("message", state.error)}
          </p>
        ) : null}
      </InputField>
      <div className="center">
        {state.success ? (
          <h4>
            Your message has been successfully sent, we will get back to you
            ASAP!
          </h4>
        ) : (
          <SubmitButton />
        )}
      </div>
    </form>
  );
}
