import { works, type Work, type WorkType } from "@/data/works";

export type WorkSortType = "priority" | "year" | "title";

export function getPublishedWorks() {
  return works
    .filter((work) => work.status === "published")
    .sort((a, b) => a.priority - b.priority);
}

export function getFeaturedWorks(limit = 7) {
  return works
    .filter((work) => work.featured && work.status === "published")
    .sort((a, b) => a.priority - b.priority)
    .slice(0, limit);
}

export function getWorkBySlug(slug: string) {
  return works.find((work) => work.slug === slug);
}

export function getWorksByType(type: WorkType) {
  return works.filter((work) => work.type === type);
}

export function getRelatedWorks(work: Work) {
  if (!work.relatedWorks?.length) return [];

  return work.relatedWorks
    .map((slug) => getWorkBySlug(slug))
    .filter((relatedWork): relatedWork is Work => Boolean(relatedWork))
    .filter((relatedWork) => relatedWork.status === "published");
}

export function sortWorks(list: Work[], sortType: WorkSortType) {
  const sortedWorks = [...list];

  switch (sortType) {
    case "year":
      return sortedWorks.sort(
        (a, b) => (b.year ?? 0) - (a.year ?? 0) || a.priority - b.priority,
      );
    case "title":
      return sortedWorks.sort((a, b) => a.title.ru.localeCompare(b.title.ru));
    case "priority":
    default:
      return sortedWorks.sort(
        (a, b) => a.priority - b.priority || (b.year ?? 0) - (a.year ?? 0),
      );
  }
}
