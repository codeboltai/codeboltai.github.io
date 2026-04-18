---
cbapicategory:
  - name: allFiles
    link: /docs/reference/client-sdk/api-reference/fileRead/allFiles
    description: "Retrieves a listing of all files in the project.

Returns the complete set of files, optionally filtered by the provided
search parameters. Useful for building file indexes or bulk operations."
  - name: autocomplete
    link: /docs/reference/client-sdk/api-reference/fileRead/autocomplete
    description: "Gets autocomplete suggestions for file paths.

Returns file path completions matching a partial input string. Useful
for building file picker UIs with type-ahead functionality."
  - name: autocompleteFolders
    link: /docs/reference/client-sdk/api-reference/fileRead/autocompleteFolders
    description: "Gets autocomplete suggestions for folder paths only.

Like  but restricted to directories, excluding
individual files from the results. Useful for folder picker UIs."
  - name: autocompleteForSearch
    link: /docs/reference/client-sdk/api-reference/fileRead/autocompleteForSearch
    description: "Gets autocomplete suggestions optimized for search input.

Similar to  but tailored for search-box contexts
where the user is typing a search query rather than a file path."
  - name: read
    link: /docs/reference/client-sdk/api-reference/fileRead/read
    description: "Reads the content of a file.

Retrieves the full content of a file at the specified path. Returns
the raw file data suitable for display or further processing."
  - name: search
    link: /docs/reference/client-sdk/api-reference/fileRead/search
    description: "Searches for files matching a query string.

Performs a text-based search across file names and paths in the project.
Returns matching files with their paths and metadata."
---
# FileRead API

File Read API

<CBAPICategory />

## Methods

- [`allFiles()`](./allFiles) — Retrieves a listing of all files in the project.

Returns the complete set of files, optionally filtered by the provided
search parameters. Useful for building file indexes or bulk operations.
- [`autocomplete()`](./autocomplete) — Gets autocomplete suggestions for file paths.

Returns file path completions matching a partial input string. Useful
for building file picker UIs with type-ahead functionality.
- [`autocompleteFolders()`](./autocompleteFolders) — Gets autocomplete suggestions for folder paths only.

Like  but restricted to directories, excluding
individual files from the results. Useful for folder picker UIs.
- [`autocompleteForSearch()`](./autocompleteForSearch) — Gets autocomplete suggestions optimized for search input.

Similar to  but tailored for search-box contexts
where the user is typing a search query rather than a file path.
- [`read()`](./read) — Reads the content of a file.

Retrieves the full content of a file at the specified path. Returns
the raw file data suitable for display or further processing.
- [`search()`](./search) — Searches for files matching a query string.

Performs a text-based search across file names and paths in the project.
Returns matching files with their paths and metadata.
