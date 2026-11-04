export type FormStatus = "idle" | "sending" | "success" | "error" | "unconfigured";
export interface FormResult { status: FormStatus; message?: string }

/**
 * Posts JSON to a form service (Formspree, Basin, or similar).
 * No data is sent anywhere unless an endpoint has been configured in the environment.
 */
export async function submitForm(endpoint: string, data: Record<string, unknown>): Promise<FormResult> {
  if (!endpoint) {
    return { status: "unconfigured", message: "This form isn't connected to an email service yet. Please check back soon." };
  }
  try {
    const res = await fetch(endpoint, {
      method: "POST",
      headers: { "Content-Type": "application/json", Accept: "application/json" },
      body: JSON.stringify(data),
    });
    if (res.ok) return { status: "success" };
    return { status: "error", message: "Something went wrong sending that. Please try again in a moment." };
  } catch {
    return { status: "error", message: "We couldn't reach the server. Check your connection and try again." };
  }
}

export const isValidEmail = (v: string) => /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v.trim());
