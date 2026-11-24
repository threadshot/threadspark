interface Env {
  ASSETS: {
    fetch: (request: Request) => Promise<Response>;
  };
  // Future storage bindings:
  // APPLICATIONS_KV?: KVNamespace;
  // DB?: D1Database;
}

interface ApplicationPayload {
  name: string;
  email: string;
  genre: string;
  bookCount: string;
  wordCount: string;
  currentTools?: string;
  feedbackCommitment: boolean;
  agreedToTerms: boolean;
  hpWebsite?: string; // Bot honeypot
}

const worker = {
  async fetch(request: Request, env: Env): Promise<Response> {
    const url = new URL(request.url);

    // API Route: Handle Design Partner Application
    if (url.pathname === "/api/apply" && request.method === "POST") {
      try {
        const data = (await request.json()) as ApplicationPayload;

        // Bot protection: honeypot field
        if (data.hpWebsite) {
          // Silently accept bot submissions
          return new Response(
            JSON.stringify({ success: true, message: "Application received." }),
            {
              status: 200,
              headers: { "Content-Type": "application/json" },
            }
          );
        }

        // Validate required fields
        if (!data.name?.trim() || !data.email?.trim() || !data.agreedToTerms) {
          return new Response(
            JSON.stringify({
              success: false,
              error: "Missing required fields: Name, Email, and Terms agreement are required.",
            }),
            {
              status: 400,
              headers: { "Content-Type": "application/json" },
            }
          );
        }

        // Validate email format
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(data.email)) {
          return new Response(
            JSON.stringify({ success: false, error: "Invalid email format." }),
            {
              status: 400,
              headers: { "Content-Type": "application/json" },
            }
          );
        }

        // REALISTIC PLACEHOLDER FOR OWNER INTEGRATION:
        // In production, forward to transactional email (Resend / SendGrid) or persist to Cloudflare D1/KV.
        // Example:
        // if (env.APPLICATIONS_KV) {
        //   await env.APPLICATIONS_KV.put(`app:${Date.now()}:${data.email}`, JSON.stringify(data));
        // }
        console.log(`[Design Partner Application] ${data.name} <${data.email}> - Genre: ${data.genre}, Scale: ${data.bookCount}`);

        return new Response(
          JSON.stringify({
            success: true,
            message: "Application received successfully. Ezekiel will review and respond within 2 business days.",
          }),
          {
            status: 200,
            headers: {
              "Content-Type": "application/json",
              "Cache-Control": "no-store",
            },
          }
        );
      } catch {
        return new Response(
          JSON.stringify({ success: false, error: "Invalid JSON request payload." }),
          {
            status: 400,
            headers: { "Content-Type": "application/json" },
          }
        );
      }
    }

    // Default: Serve Next.js static export assets
    return env.ASSETS.fetch(request);
  },
};

export default worker;
