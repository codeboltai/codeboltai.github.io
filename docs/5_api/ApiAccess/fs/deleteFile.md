---
name: deleteFile
cbbaseinfo:
  description: Deletes a file at the specified path. This function allows you to remove files from the filesystem permanently.
cbparameters:
  parameters:
    - name: filename
      typeName: string
      description: The name of the file to delete (e.g., 'example.txt', 'old-config.json').
    - name: filePath
      typeName: string
      description: The path of the file to delete (e.g., '.', '/home/user/documents', './temp').
  returns:
    signatureTypeName: Promise<DeleteFileResponse>
    description: A promise that resolves with a `DeleteFileResponse` object containing the response type and file deletion metadata.
data:
  name: deleteFile
  category: fs
  link: deleteFile.md
---
<CBBaseInfo/> 
<CBParameters/>

### Response Structure

The method returns a Promise that resolves to a `DeleteFileResponse` object with the following properties:

- **`type`** (string): Always "deleteFileResponse".
- **`path`** (string, optional): The full path of the file that was deleted.
- **`success`** (boolean, optional): Indicates if the operation was successful.
- **`message`** (string, optional): A message with additional information about the operation.
- **`error`** (string, optional): Error details if the operation failed.
- **`messageId`** (string, optional): A unique identifier for the message.
- **`threadId`** (string, optional): The thread identifier.

### Examples

```javascript
// Example 1: Delete a file from a specific directory
const result = await codebolt.fs.deleteFile('example.txt', '/home/user/documents');
console.log("Response type:", result.type); // "deleteFileResponse"
console.log("File path:", result.path); // "/home/user/documents/example.txt"
console.log("Success:", result.success); // true (if successful)

// Example 2: Delete a file from current directory
const deleteResult = await codebolt.fs.deleteFile('temp-file.txt', '.');
console.log("✅ File deleted:", deleteResult.success);

// Example 3: Delete multiple files
const filesToDelete = [
    { name: 'temp1.txt', path: './temp' },
    { name: 'temp2.txt', path: './temp' },
    { name: 'old-config.json', path: '.' }
];

for (const file of filesToDelete) {
    const result = await codebolt.fs.deleteFile(file.name, file.path);
    console.log(`${file.name}: ${result.success ? 'deleted' : 'failed'}`);
}

// Example 4: Error handling
try {
    const fileResult = await codebolt.fs.deleteFile('non-existent-file.txt', '.');
    
    if (fileResult.success) {
        console.log('✅ File deleted successfully');
        console.log('File path:', fileResult.path);
        console.log('Message:', fileResult.message);
    } else {
        console.error('❌ File deletion failed:', fileResult.error);
    }
} catch (error) {
    console.error('Error deleting file:', error);
}

// Example 5: Cleanup workflow
const cleanupFiles = [
    'build-temp.log',
    'cache.tmp',
    'debug.log',
    'error.log'
];

console.log("Starting cleanup...");
for (const fileName of cleanupFiles) {
    const result = await codebolt.fs.deleteFile(fileName, './logs');
    if (result.success) {
        console.log(`✅ Cleaned up: ${fileName}`);
    } else {
        console.log(`⚠️  Could not delete: ${fileName} (${result.error})`);
    }
}
console.log("Cleanup complete");

// Example 6: Safe deletion with confirmation
const fileToDelete = 'important-file.txt';
const filePath = './backup';

// First, check if file exists by trying to read it
try {
    const fileContent = await codebolt.fs.readFile(`${filePath}/${fileToDelete}`);
    if (fileContent.success && fileContent.content) {
        console.log(`File exists with ${fileContent.content.length} characters`);
        
        // Proceed with deletion
        const deleteResult = await codebolt.fs.deleteFile(fileToDelete, filePath);
        if (deleteResult.success) {
            console.log('✅ File safely deleted');
        } else {
            console.error('❌ Failed to delete file:', deleteResult.error);
        }
    }
} catch (error) {
    console.log('File does not exist or cannot be read');
}
```

### Common Use Cases

- **Cleanup Operations**: Remove temporary files, logs, and cache files
- **File Management**: Delete outdated or unnecessary files
- **Build Processes**: Clean up build artifacts and intermediate files
- **Data Management**: Remove old data files and backups
- **Testing**: Clean up test files and mock data

### Notes

- **⚠️ WARNING**: This operation permanently deletes files and cannot be undone.
- The function removes the specified file from the filesystem.
- If the file doesn't exist, the operation may fail (check the `error` property).
- The `path` property confirms which file was deleted.
- Use error handling to gracefully handle cases where files don't exist or are protected.
- Some files may be protected by the operating system and cannot be deleted.
- Always double-check file paths before deletion to avoid accidental data loss.
- Consider creating backups before deleting important files.
- The operation is atomic - either the file is deleted or the operation fails.
