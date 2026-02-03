// tailwind.config.ts
import type { Config } from "tailwindcss";

export default <Partial<Config>>{
  theme: {
    extend: {
      colors: {
        // Rengine özel bir isim veriyoruz (Örn: 'marka-mavi')
        "special-blue": "#007ba7",
      },
      fontFamily: {
        // Montserrat fontunu tanımlıyoruz
        montserrat: ["Montserrat", "sans-serif"],
      },
    },
  },
};
