import { NextSeoProps } from "next-seo";

export const NEXT_SEO_DEFAULT: NextSeoProps = {
  titleTemplate: "%s",
  defaultTitle: "Thư mời Bee & Fox gửi bạn 💕",
  description:
    "Sự hiện diện của quý khách là niềm vinh hạnh cho gia đình chúng tôi. Rất hân hạnh đón tiếp!",
  openGraph: {
    type: "website",
    locale: "en_IE",
    description:
      "Sự hiện diện của quý khách là niềm vinh hạnh cho gia đình chúng tôi. Rất hân hạnh đón tiếp!",
    title: "Thư mời Bee & Fox gửi bạn 💕",
    images: [
      {
        url: "/assets/thumbnail.jpg",
        width: 800,
        height: 600,
        alt: "OG Image Alt Snews",
        type: "image/jpeg",
      },
    ],
  },
  twitter: {
    handle: "@hoando",
    site: "@damcuoi",
    cardType: "summary_large_image",
  },
};
