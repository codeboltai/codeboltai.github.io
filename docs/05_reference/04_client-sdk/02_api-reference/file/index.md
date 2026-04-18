---
cbapicategory:
  - name: addFile
    link: /docs/reference/client-sdk/api-reference/file/addFile
    description: "Creates a new file in the workspace.

Adds a file with the specified name and content. If the file already
exists, behavior depends on the server configuration."
  - name: checkFileExists
    link: /docs/reference/client-sdk/api-reference/file/checkFileExists
    description: "Checks whether a file exists at the specified path.

Verifies file existence without reading its contents. Useful for
conditional logic that depends on whether a file is already present."
  - name: deleteZip
    link: /docs/reference/client-sdk/api-reference/file/deleteZip
    description: "Deletes a previously created zip file.

Removes a zip archive from the workspace filesystem. Use this to
clean up temporary archives after they have been downloaded or processed."
  - name: zipFile
    link: /docs/reference/client-sdk/api-reference/file/zipFile
    description: "Creates a zip archive from specified files or directories.

Compresses the specified sources into a zip file at the given output
path. Useful for bundling project files for download or deployment."
---
# File API

File API

<CBAPICategory />

## Methods

- [`addFile()`](./addFile) — Creates a new file in the workspace.

Adds a file with the specified name and content. If the file already
exists, behavior depends on the server configuration.
- [`checkFileExists()`](./checkFileExists) — Checks whether a file exists at the specified path.

Verifies file existence without reading its contents. Useful for
conditional logic that depends on whether a file is already present.
- [`deleteZip()`](./deleteZip) — Deletes a previously created zip file.

Removes a zip archive from the workspace filesystem. Use this to
clean up temporary archives after they have been downloaded or processed.
- [`zipFile()`](./zipFile) — Creates a zip archive from specified files or directories.

Compresses the specified sources into a zip file at the given output
path. Useful for bundling project files for download or deployment.
