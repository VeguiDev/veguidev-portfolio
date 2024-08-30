import type { APIRoute } from "astro";

export const prerender = false;

export const POST: APIRoute = async ({ request }) => {
  try {
    const { from, message, subject } = await request.json();

    if (!from || !message || !subject) {
      return Response.json(
        {
          status: "error",
          message: "Please fill in all the fields",
        },
        {
          status: 400,
        }
      );
    }

    // Send to discord webhook

    const webhook = import.meta.env.DISCORD_WEBHOOK || null;

    if (!webhook) {
      return Response.json(
        {
          status: "error",
          message: "Discord webhook is not set up",
        },
        {
          status: 500,
        }
      );
    }

    const data = {
      username: "Contact Form - (" + from + ")",

      embeds: [
        {
          title: subject,
          description: message,
          color: 16711680,
          fields: [
            {
              name: "Email",
              value: from,
            },
          ],
        },
      ],
    };

    await fetch(webhook, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    return Response.json({
      status: "success",
      message: "Contact form submitted successfully",
    });
  } catch (e) {
    return Response.json(
      {
        status: "error",
        message: "An error occurred while submitting the form",
      },
      {
        status: 400,
      }
    );
  }
};
