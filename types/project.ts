

export interface Project {
  id: string;
  title: string;
  slug: string;
  description: string;
  category: string;
  tech: string[];
  image?: string;
  link?: string;
  featured: boolean;
  published: boolean;
  createdAt: Date;
  updatedAt: Date;
  metrics?: ProjectMetric[];
}

export interface ProjectMetric {
  id: string;
  label: string;
  value: string;
}
