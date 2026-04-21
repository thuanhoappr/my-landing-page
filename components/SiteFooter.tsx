import {
  SITE_BRAND,
  formatPhoneDisplay,
  getSitePublicConfig,
} from "@/lib/siteConfig";

export function SiteFooter() {
  const { adminPhoneRaw } = getSitePublicConfig();
  const phoneDisplay =
    adminPhoneRaw.length > 0 ? formatPhoneDisplay(adminPhoneRaw) : null;

  return (
    <footer className="relative z-10 border-t border-white/10 px-4 py-8 text-center text-sm text-slate-400">
      <p>
        © {new Date().getFullYear()} {SITE_BRAND}. All rights reserved.
      </p>
      {phoneDisplay ? (
        <p className="mt-2">
          Hotline / Zalo:{" "}
          <a
            href={`tel:${adminPhoneRaw.replace(/\s/g, "")}`}
            className="font-medium text-emerald-300 underline-offset-2 hover:underline"
          >
            {phoneDisplay}
          </a>
        </p>
      ) : null}
    </footer>
  );
}
