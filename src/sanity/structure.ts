import type { StructureResolver } from "sanity/structure";

// https://www.sanity.io/docs/structure-builder-cheat-sheet
export const structure: StructureResolver = (S) =>
  S.list()
    .title("Content")
    .items([
      S.documentTypeListItem("site").title("Site"),
      S.documentTypeListItem("projectPost").title("Projects"),

      S.divider(),

      ...S.documentTypeListItems().filter(
        (item) =>
          item.getId() &&
          !["post", "category", "author", "projectPost", "site"].includes(
            item.getId()!
          )
      ),
      S.documentTypeListItem("post").title("Posts"),
      S.documentTypeListItem("category").title("Categories"),
      S.documentTypeListItem("author").title("Authors"),
    ]);
