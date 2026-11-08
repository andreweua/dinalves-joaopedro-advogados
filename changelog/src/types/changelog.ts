export type TagType = 'novo' | 'melhoria' | 'correcao';

export interface ChangelogItem {
  id: string;
  type: TagType;
  title: string;
  description: string;
  previewImage?: {
    src: string;
    alt: string;
    caption?: string;
  };
  metrics?: {
    label: string;
    value: string;
  }[];
}

export interface Release {
  version: string;
  title: string;
  date: string;
  isLatest?: boolean;
  summary: string;
  bannerImage?: string;
  items: ChangelogItem[];
}
