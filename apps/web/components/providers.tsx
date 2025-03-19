"use client";

import { ThemeProvider as NextThemesProvider } from "next-themes";
import { Toaster } from "@repo/ui/components/sonner";
import {AdultVerificationProvider} from  "@repo/utils/components/adult-verification-provider"
import { useParams } from "next/navigation";
import { fallbackLng, LangaugeKey } from "@repo/internationalization";

export function Providers({ children }: { children: React.ReactNode }) {
const params = useParams()

console.log(params.lng)
    return (
      <NextThemesProvider
        attribute="class"
        defaultTheme="system"
        enableSystem
        disableTransitionOnChange
        enableColorScheme
      >
        <Toaster position="bottom-center" />
        <AdultVerificationProvider lng={params.lng as LangaugeKey ?? fallbackLng}>
        {children}
        </AdultVerificationProvider>
      </NextThemesProvider>
    );
}
