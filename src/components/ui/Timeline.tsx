"use client";

import { motion } from "framer-motion";
import { cn } from "@/utils/cn";
import { Card } from "./Card";

interface TimelineItem {
  id: string;
  title: string;
  subtitle?: string;
  duration: string;
  description?: string;
}

interface TimelineProps {
  items: TimelineItem[];
  className?: string;
}

export const Timeline = ({ items, className }: TimelineProps) => {
  return (
    <div className={cn("relative", className)}>
      <div className="absolute left-8 top-0 h-full w-0.5 bg-gradient-to-b from-primary via-accent to-secondary md:left-1/2 md:-translate-x-1/2" />
      <div className="space-y-12">
        {items.map((item, index) => (
          <motion.div
            key={item.id}
            className="relative flex items-start gap-8 md:gap-12"
            initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
          >
            <div
              className={cn(
                "flex-1",
                index % 2 === 0 ? "md:text-right md:pr-12" : "md:ml-auto md:w-1/2 md:pl-12"
              )}
            >
              <div className="relative">
                <div className="absolute -left-4 top-2 h-3 w-3 rounded-full border-4 border-background bg-primary md:left-1/2 md:-translate-x-1/2" />
                <Card hover={false} className="border-primary/30">
                  <div className="mb-2">
                    <h3 className="text-xl font-semibold text-foreground">{item.title}</h3>
                    {item.subtitle && <p className="text-sm text-foreground/70">{item.subtitle}</p>}
                    <p className="mt-1 text-sm font-medium text-primary">{item.duration}</p>
                  </div>
                  {item.description && <p className="text-foreground/80">{item.description}</p>}
                </Card>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};
