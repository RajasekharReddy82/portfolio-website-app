"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Card } from "./Card";
import { Badge } from "./Badge";
import { ArrowRight } from "lucide-react";

interface ProjectCardProps {
  id: string;
  title: string;
  slug: string;
  duration: string;
  techStack: string[];
  description?: string;
  featured?: boolean;
  index?: number;
}

export const ProjectCard = ({
  title,
  slug,
  duration,
  techStack,
  description,
  featured = false,
  index = 0,
}: ProjectCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
    >
      <Link href={`/projects/${slug}`} className="block group">
        <Card hover glow={featured} className="h-full">
          <div className="flex flex-col gap-4">
            <div className="flex items-start justify-between gap-4">
              <div className="flex-1">
                <h3 className="mb-2 text-2xl font-semibold text-foreground group-hover:text-primary transition-colors">
                  {title}
                </h3>
                <p className="text-sm text-foreground/70">{duration}</p>
              </div>
              <ArrowRight className="h-5 w-5 text-foreground/50 group-hover:text-primary group-hover:translate-x-1 transition-all" />
            </div>
            {description && (
              <p className="text-foreground/80 line-clamp-2">{description}</p>
            )}
            <div className="flex flex-wrap gap-2">
              {techStack.slice(0, 4).map((tech) => (
                <Badge key={tech} variant="primary">
                  {tech}
                </Badge>
              ))}
              {techStack.length > 4 && (
                <Badge variant="default">+{techStack.length - 4} more</Badge>
              )}
            </div>
          </div>
        </Card>
      </Link>
    </motion.div>
  );
};

