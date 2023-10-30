"use client";
// @ts-ignore
import { experimental_useFormState as useFormState } from "react-dom";
import { submitFormium } from "./actions";
import { InputField } from "./InputField";
import { SubmitButton } from "./SubmitFormButton";
import { Error } from "./Error";
import Input from "@components/Inputs/Input";
import { useRef } from "react";
import ReCAPTCHA from "react-google-recaptcha";

const initialState = {
  name: "",
  email: "",
  message: "",
  recaptcha: "",
};

function getErrorMessage(id: string, e: string) {
  try {
    let issue = JSON.parse(e).issues.find((val: any) => {
      if (val.path[0] === id) return val;
    });
    if (!issue) return "";
    return issue.message;
  } catch (e) {
    return "An error occurred. Please reload the page.";
  }
}

function checkError(id: string, e: string) {
  try {
    let issue = JSON.parse(e).issues.find((val: any) => {
      if (val.path[0] === id) return true;
      else return false;
    });
    return issue;
  } catch (e) {
    return false;
  }
}

export function ContactForm() {
  const recaptchaRef = useRef<ReCAPTCHA>(null);

  async function submitForm(previousState: FormState, data: FormData) {
    const recaptchaValue = recaptchaRef.current?.getValue();

    if (!recaptchaValue) data.append("recaptcha", "");
    else data.append("recaptcha", recaptchaValue);

    return submitFormium(previousState, data);
  }

  const [state, formAction] = useFormState(submitForm, initialState);

  const asyncScriptOnLoad = () => {
    console.log("scriptLoad - reCaptcha Ref-", recaptchaRef);
  };

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
        {state.error && <Error>{getErrorMessage("email", state.error)}</Error>}
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
        {state.error && (
          <Error>{getErrorMessage("message", state.error)}</Error>
        )}
      </InputField>
      <InputField>
        {!state.success && (
          <div>
            <ReCAPTCHA
              ref={recaptchaRef}
              sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY!}
              asyncScriptOnLoad={asyncScriptOnLoad}
            />
            {state.error && (
              <Error>{getErrorMessage("recaptcha", state.error)}</Error>
            )}
          </div>
        )}
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
