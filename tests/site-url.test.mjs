import assert from "node:assert/strict";
import test from "node:test";
import { resolveSiteUrl } from "../lib/site-url.ts";

test("blank custom URL falls back to the production Vercel host", () => {
  assert.equal(resolveSiteUrl({ configuredUrl: "  ", productionHost: "clinic.example.vercel.app" }).origin, "https://clinic.example.vercel.app");
});

test("blank production host falls back to the deployment host", () => {
  assert.equal(resolveSiteUrl({ configuredUrl: "", productionHost: "", deploymentHost: "preview.example.vercel.app" }).origin, "https://preview.example.vercel.app");
});

test("a custom URL takes precedence over Vercel hosts", () => {
  assert.equal(resolveSiteUrl({ configuredUrl: " https://clinic.example.com/ ", productionHost: "clinic.example.vercel.app" }).origin, "https://clinic.example.com");
});

test("local builds work without deployment environment variables", () => {
  assert.equal(resolveSiteUrl({}).origin, "http://localhost:3000");
});

test("a nonempty invalid custom URL produces an actionable error", () => {
  assert.throws(() => resolveSiteUrl({ configuredUrl: "not-a-url" }), /NEXT_PUBLIC_SITE_URL must be an absolute http\(s\) URL/);
  assert.throws(() => resolveSiteUrl({ configuredUrl: "javascript:alert(1)" }), /NEXT_PUBLIC_SITE_URL must be an absolute http\(s\) URL/);
});
