"use client";
// @ts-ignore
import { experimental_useFormState as useFormState } from "react-dom";
import { submitFormium } from "./actions";
import { InputField } from "./InputField";
import { SubmitButton } from "./SubmitFormButton";
import { Error } from "./Error";
import Input from "@components/Inputs/Input";

const initialState = {
  name: null,
  email: null,
  message: null,
  recaptcha: null,
};

function getErrorMessage(id: string, e: string) {
  const issue = JSON.parse(e).find((val: any) => {
    if (val.path[0] === id) return val;
  });

  return issue?.message ?? "";
}

function checkError(id: string, e: string) {
  try {
    const issue = JSON.parse(e).find((val: any) => {
      if (val.path[0] === id) return true;
      else return false;
    });
    return issue;
  } catch (e) {
    return false;
  }
}

export function ContactForm() {
  const [state, formAction] = useFormState(submitFormium, initialState);
  return (
    <form action={formAction} autoComplete="on">
      <InputField>
        <label htmlFor="name">
          Full Name
          <p className="text-red-500 inline"> *</p>
        </label>
        <Input
          id="name"
          name="name"
          aria_label="name"
          placeholder="Enter your name..."
          autoComplete="name"
          error={checkError("name", state.error)}
        />
        {state.error && <Error>{getErrorMessage("name", state.error)}</Error>}
      </InputField>
      <InputField>
        <label htmlFor="email">
          Email Address
          <p className="text-red-500 inline"> *</p>
        </label>
        <Input
          id="email"
          name="email"
          aria_label="email"
          placeholder="Enter your Email Address..."
          autoComplete="email"
          error={checkError("email", state.error)}
        />
        {state.error ? (
          <Error>{getErrorMessage("email", state.error)}</Error>
        ) : null}
      </InputField>
      <InputField>
        <label htmlFor="message">
          Message
          <p className="text-red-500 inline"> *</p>
        </label>
        <Input
          id="message"
          name="message"
          aria_label="message"
          placeholder="Enter the message you wish to send..."
          error={checkError("message", state.error)}
        />
        {state.error ? (
          <Error>{getErrorMessage("message", state.error)}</Error>
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
