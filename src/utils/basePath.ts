const isProduction = process.env.NODE_ENV === "production";

// CDN kökü: Cloudflare üzerinden görselleri servis etmek için.
// ENV ile değiştirilebilir, varsayılan olarak cdn alt alan adını kullanır.
const CDN_BASE =
  process.env.NEXT_PUBLIC_CDN_BASE?.replace(/\/+$/, "") ||
  "https://cdn.gozumunnuru.com";

export const getBasePath = () => {
  return isProduction ? CDN_BASE : "";
};

