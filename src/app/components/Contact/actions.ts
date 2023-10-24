"use server";

import { revalidatePath } from "next/cache";
import { ZodError, z } from "zod";
import { fromZodError } from "zod-validation-error";

export async function submitFormium(prevState: any, formData: FormData) {
  const schema = z
    .object({
      name: z.string(),
      email: z.string().email(),
      message: z.string(),
      // recaptcha: z.string(),
    })
    .required();

  try {
    const data = schema.parse({
      name: formData.get("name"),
      email: formData.get("email"),
      message: formData.get("message"),
    });
    // const res = await fetch(process.env.PORTFOLIO_FORMIUM_ENDPOINT!, {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    //   cache: "no-cache",
    //   mode: "cors",
    //   body: JSON.stringify(data),
    // });

    // if (!res.ok) {
    //   throw new Error("Failed to fetch data");
    // }

    revalidatePath("/");
    return { message: "Submitted form successfully.", success: true };
  } catch (e) {
    console.error(e);
    if (e instanceof ZodError) {
      return { message: "Validation error.", error: fromZodError(e).message };
    }
    return { message: "Failed to submit form." };
  }
}
