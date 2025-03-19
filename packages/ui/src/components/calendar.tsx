"use client";

import * as React from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { DayPicker } from "react-day-picker";

import { cn } from "@repo/ui/lib/utils";
import { buttonVariants } from "@repo/ui/components/button";

function Calendar({
  className,
  classNames,
  showOutsideDays = true,
  ...props
}: React.ComponentProps<typeof DayPicker>) {
  return (
    <DayPicker
      showOutsideDays={showOutsideDays}
      className={cn("p-3 bg-surface-100 border", className)}
      classNames={{
        months: "flex flex-col sm:flex-row gap-2",
        month: "flex flex-col gap-4",
        caption: "flex justify-center pt-1 relative items-center w-full",
        caption_label: "text-sm font-medium",
        nav: "flex items-center gap-1",
        nav_button: cn(
          buttonVariants({ variant: "outline" }),
          "size-7 bg-transparent p-0 opacity-50 hover:opacity-100",
        ),
        nav_button_previous: "absolute left-1",
        nav_button_next: "absolute right-1",
        table: "w-full border-collapse space-x-1",
        head_row: "flex items-center border-b pb-2",
        head_cell:
          "text-typography-400 rounded-primary w-8 font-medium text-[0.8rem]",
        row: "flex w-full mt-2",
        cell: cn(
          "relative p-0 text-center text-sm [&:has([aria-selected].day-range-end)]:rounded-r-primary",
          props.mode === "range"
            ? "[&:has(>.day-range-end)]:rounded-r-primary [&:has(>.day-range-start)]:rounded-l-primary first:[&:has([aria-selected])]:rounded-l-primary last:[&:has([aria-selected])]:rounded-r-primary"
            : "[&:has([aria-selected])]:rounded-primary",
        ),
        day: cn(
          buttonVariants({ variant: "ghost" }),
          "size-8 p-0 font-normal aria-selected:opacity-100",
        ),
        day_range_start:
          "day-range-start aria-selected:bg-primary-500 aria-selected:text-primary-foreground",
        day_range_end:
          "day-range-end aria-selected:bg-primary-500 aria-selected:text-primary-foreground",
        day_selected:
          "bg-primary-500 text-primary-foreground hover:bg-primary-500 hover:text-primary-foreground focus:bg-primary-500 focus:text-primary-foreground",
        day_today: "bg-surface-400 text-typography-50",
        day_outside:
          "day-outside text-typography-500 aria-selected:text-typography-500",
        day_disabled: "text-destructive-500/50 pointer-events-none",
        day_range_middle:
          "aria-selected:bg-surface-300 aria-selected:text-typography-50",
        day_hidden: "invisible",
        ...classNames,
      }}
      components={{
        IconLeft: ({ className, ...props }) => (
          <ChevronLeft className={cn("size-4", className)} {...props} />
        ),
        IconRight: ({ className, ...props }) => (
          <ChevronRight className={cn("size-4", className)} {...props} />
        ),
      }}
      {...props}
    />
  );
}

export { Calendar };
