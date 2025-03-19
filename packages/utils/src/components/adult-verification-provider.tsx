"use client";

import { createContext, useContext, useEffect, useState } from "react";
import Cookies from "js-cookie";
import { LangaugeKey, useClientTranslation } from "@repo/internationalization";
import { Button } from "@repo/ui/components/button";
import {
  Card,
  CardHeader,
  CardContent,
  CardFooter,
  CardTitle,
  CardDescription,
} from "@repo/ui/components/card";

const COOKIE_KEY = "verified-adult";

const AdultVerificationContext = createContext<{
  isAdult: string | null;
  setIsAdult: (isAdult: string) => void;
}>({
  isAdult: null,
  setIsAdult: () => {},
});

export const useAdultVerification = () => useContext(AdultVerificationContext);

export const AdultVerificationProvider = ({
  children,
  lng,
}: {
  children: React.ReactNode;
  lng: LangaugeKey;
}) => {
  const { t } = useClientTranslation(lng, "adult-verification");
  const [isAdult, setIsAdult] = useState<string | null>(null);
  const [isChecking, setIsChecking] = useState(true);

  useEffect(() => {
    const storedValue = Cookies.get(COOKIE_KEY);
    if (storedValue === "yes") {
      setIsAdult("yes");
    } else if (storedValue === "no") {
      setIsAdult("no");
    }
    setIsChecking(false);
  }, []);

  const handleEnter = () => {
    Cookies.set(COOKIE_KEY, "yes", { expires: 365 });
    setIsAdult("yes");
  };

  const handleExit = () => {
    Cookies.set(COOKIE_KEY, "no", { expires: 365 });
    if (typeof window !== "undefined") {
      window.close();
    }
  };

  if (isChecking) {
    return (
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          height: "100vh",
        }}
      >
        <p>{t("loading")}</p>
      </div>
    );
  }

  return (
    <AdultVerificationContext.Provider value={{ isAdult, setIsAdult }}>
      <div suppressHydrationWarning={true}>
        {isAdult === "yes" ? (
          children
        ) : (
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              height: "100vh",
            }}
          >
            <Card style={{ maxWidth: "600px" }}>
              <CardHeader align="center">
                <CardTitle size="3xl" text="center">
                  {t("title")}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription size="lg" text="center">
                  {t("description")}
                </CardDescription>
              </CardContent>
              <CardFooter align="between" className="border-t gap-5">
                <Button size="lg" variant="secondary" onClick={handleExit}>
                  {t("exit")}
                </Button>
                <Button size="lg" onClick={handleEnter}>
                  {t("enter")}
                </Button>
              </CardFooter>
            </Card>
          </div>
        )}
      </div>
    </AdultVerificationContext.Provider>
  );
};
