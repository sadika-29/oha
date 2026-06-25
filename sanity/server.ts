export const SANITY_API_TOKEN = process.env.SANITY_API_TOKEN ?? "";

export function sanityAuthHeaders() {
  if (!SANITY_API_TOKEN) {
    return {};
  }
  return {
    Authorization: `Bearer ${SANITY_API_TOKEN}`,
  };
}
