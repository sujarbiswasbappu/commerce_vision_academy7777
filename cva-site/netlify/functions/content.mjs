import { getStore } from "@netlify/blobs";

export default async (req) => {
  const store = getStore("site");

  if (req.method === "GET") {
    const data = await store.get("content", { type: "json" });
    return new Response(JSON.stringify(data), {
      headers: { "content-type": "application/json", "cache-control": "no-store" },
    });
  }

  if (req.method === "POST") {
    const pass = process.env.ADMIN_PASSWORD || "507242";
    if ( req.headers.get("x-admin-password") !== pass) {
      return new Response("Unauthorized", { status: 401 });
    }
    const body = await req.json();
    if (body && body.__check) return Response.json({ ok: true });
    await store.setJSON("content", body);
    return Response.json({ ok: true });
  }

  return new Response("Method not allowed", { status: 405 });
};

export const config = { path: "/api/content" };
