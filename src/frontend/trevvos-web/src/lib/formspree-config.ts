export function resolveFormspreeIds(contact = "", commerce = "") {
  // Accept only a public hashid, never a URL, API key or administrative token.
  const normalize = (value: string) =>
    /^[a-zA-Z0-9]+$/.test(value.trim()) ? value.trim() : undefined;
  const contactId = normalize(contact);
  const commerceId = commerce.trim() ? normalize(commerce) : contactId;
  return { contactId, commerceId };
}
export const formspreeConfig = resolveFormspreeIds(
  process.env.NEXT_PUBLIC_FORMSPREE_CONTACT_ID ?? "xyzebnjv",
  process.env.NEXT_PUBLIC_FORMSPREE_COMMERCE_ID,
);
