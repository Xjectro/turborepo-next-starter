"use client";

import * as React from "react";
import { useClientTranslation } from "@repo/internationalization";

import { useParams } from "next/navigation";

export default function LoginPage() {
  const params = useParams();
  const { t } = useClientTranslation(params.lng, "auth-login");

  return <div>test</div>;
}
