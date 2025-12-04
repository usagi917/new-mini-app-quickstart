// minikit.config.ts

export const minikitConfig = {
  // ★ここはまだ空欄でOKです（ステップ5で埋めます）
  accountAssociation: { 
      "header": "eyJmaWQiOjE1NTY4NTMsInR5cGUiOiJjdXN0b2R5Iiwia2V5IjoiMHhiMTBmOUM2OTExOTE5ZDQyZDEwMjI5OTJiYTQ5NENCMzhDNkQ2ZTdlIn0",
      "payload": "eyJkb21haW4iOiJuZXctbWluaS1hcHAtcXVpY2tzdGFydC1ldGEtdHdvLnZlcmNlbC5hcHAifQ",
      "signature": "3f4JvTJuU53/2Df56u3WpEXTXD0Lhbb0Rk1FnuYVuAFozEanTAFIl+oyyDXEZ69v+x5p4ofuyNDsx0DI+kuXcRs="
  },
  miniapp: {
    version: "1",
    name: "26App",            // ★アプリ名を変えるならここ
    subtitle: "My First App",    // ★サブタイトル
    description: "Testing app",  // ★説明文
    screenshotUrls: [`${ROOT_URL}/screenshot-portrait.png`],
    iconUrl: `${ROOT_URL}/blue-icon.png`,
    splashImageUrl: `${ROOT_URL}/blue-hero.png`,
    splashBackgroundColor: "#000000",
    homeUrl: ROOT_URL,
    webhookUrl: `${ROOT_URL}/api/webhook`,
    primaryCategory: "social",
    tags: ["test", "demo"],
    heroImageUrl: `${ROOT_URL}/blue-hero.png`,
    tagline: "",
    ogTitle: "",
    ogDescription: "",
    ogImageUrl: `${ROOT_URL}/blue-hero.png`,
  },
} as const;