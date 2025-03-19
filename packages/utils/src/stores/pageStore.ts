import { create } from "zustand";
import { LangaugeKey, fallbackLng } from "@repo/internationalization";

export interface Category {
    value:string;
    name:string;
    translations: Record<LangaugeKey,string>
}

const CATEGORIES = [
  {
    value: "step-mom",
    translations: {
      tr: "Üvey Anne",
      en: "Step Mom",
    },
  },
  {
    value: "hard-sex",
    translations: {
      tr: "Zor Sikiş",
      en:"Hard Sex"
    }
  }
] as const;

export interface PageStore {
  getCategories: (lng: LangaugeKey) => readonly Category[];
}

export const usePageStore = create<PageStore>((set, get) => ({
  getCategories: (lng: LangaugeKey) =>
    CATEGORIES.map((c) => ({...c,name:c.translations[lng] ?? c.translations[fallbackLng]})),
}));
