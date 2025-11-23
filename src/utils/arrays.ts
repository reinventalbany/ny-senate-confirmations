import { sortBy } from "lodash";

export const sortByIndex = (collection: any[], index: number) =>
  sortBy(collection, [index]);
