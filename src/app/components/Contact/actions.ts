"use server";

import { revalidatePath } from "next/cache";
import { ZodError, z } from "zod";
import { errorMap, isValidationErrorLike } from "zod-validation-error";

export async function submitFormium(
  previousState: FormState,
  formData: FormData,
): Promise<{ success: boolean; message: string; error?: string }> {
  const schema = z
    .object({
      name: z.string().min(1, "Full name field is required!"),
      email: z.string().email("Invalid email!"),
      message: z.string().min(1, "Message field is required!"),
      recaptcha: z.string().min(1, "ReCaptcha field is required!"),
    })
    .required();
  z.setErrorMap(errorMap);
  try {
    const data = schema.parse({
      name: formData.get("name"),
      email: formData.get("email"),
      message: formData.get("message"),
      recaptcha: formData.get("recaptcha"),
    });

    const res = await fetch(process.env.PORTFOLIO_FORMIUM_ENDPOINT!, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      cache: "no-cache",
      mode: "cors",
      body: JSON.stringify(data),
    });

    if (!res.ok) {
      throw new Error("Failed to fetch data");
    }

    revalidatePath("/");
    return {
      success: true,
      message: "Submitted form successfully.",
    };
  } catch (e: any) {
    console.error(e);
    let error = {
      success: false,
      message: "Failed to submit form.",
      error: JSON.stringify(e),
    };
    if (e instanceof ZodError || isValidationErrorLike(e)) {
      error.message = "Validation error.";
    }
    return error;
  }
}
