export type ExperienceItem = {
  icon: string;
  role: string;
  location: string;
  startYear: string;
  endYear: string;
  bulletPoints: string[];
};

export type EducationItem = {
  date: string;
  title: string;
  subtitle: string;
};

export type ProjectEntry = {
  name: string;
  url: string;
  description: string;
};

export type SideProjectItem =
  | ProjectEntry
  | { name: string; comingSoon: true; description?: string };

export type ProjectOverview = {
  caseStudies: ProjectEntry[];
  sideProjects: SideProjectItem[];
};

export type FeaturedWorkItem = {
  title: string;
  description: string;
  roles: string[];
  image: string;
  url: string;
};
