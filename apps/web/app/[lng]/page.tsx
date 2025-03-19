"use client";

import { useMemo } from "react";
import { useImports } from "@/lib/imports";
import { useClientTranslation } from "@repo/internationalization";

import {
  Tabs,TabsContent,TabsList,TabsTrigger
} from "@repo/ui/components/tabs";
import { Button } from "@repo/ui/components/button";

export default function Page() {
  const {pageStore,lng } = useImports()
  // const { t } = useClientTranslation(lng, "auth-login");
  const categories = useMemo(()=>{
    return pageStore.getCategories(lng)
  },[pageStore,lng])

  return (
    <div className="flex items-center justify-center">
      <Tabs defaultValue={categories[0]?.value} className="w-full">
        <TabsList className="w-full">  
          {categories.map(cat=><TabsTrigger value={cat.value} key={cat.value}>{cat.name}</TabsTrigger>)}
        </TabsList> 
        {categories.map(cat=><TabsContent value={cat.value} key={cat.value}>{cat.name} Videoları</TabsContent>)}
      </Tabs>
    </div>
  );
}
