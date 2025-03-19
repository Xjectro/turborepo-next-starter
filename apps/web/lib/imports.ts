import { usePageStore, type PageStore } from "@repo/utils/stores/pageStore";
import { fallbackLng, LangaugeKey } from "@repo/internationalization";
import { useParams } from "next/navigation";

export const useImports = (): {
    pageStore: PageStore;
    params: ReturnType<typeof useParams>;
    lng: LangaugeKey
} => {
    const pageStore = usePageStore();
    const params = useParams()

    const lng = (params.lng ?? fallbackLng) as LangaugeKey;

    return { pageStore, params, lng };
};
