---
name: deleteFolder
cbbaseinfo:
  description: Deletes a folder at the specified path. This function allows you to remove directories from the filesystem permanently.
cbparameters:
  parameters:
    - name: foldername
      typeName: string
      description: The name of the folder to delete (e.g., 'temp-folder', 'old-build', 'cache').
    - name: folderpath
      typeName: string
      description: The path of the folder to delete (e.g., '.', '/home/user/documents', './temp').
  returns:
    signatureTypeName: Promise<DeleteFolderResponse>
    description: A promise that resolves with a `DeleteFolderResponse` object containing the response type and folder deletion metadata.
data:
  name: deleteFolder
  category: fs
  link: deleteFolder.md
---
<CBBaseInfo/> 
<CBParameters/>

### Response Structure

The method returns a Promise that resolves to a `DeleteFolderResponse` object with the following properties:

- **`type`** (string): Always "deleteFolderResponse".
- **`path`** (string, optional): The full path of the folder that was deleted.
- **`success`** (boolean, optional): Indicates if the operation was successful.
- **`message`** (string, optional): A message with additional information about the operation.
- **`error`** (string, optional): Error details if the operation failed.
- **`messageId`** (string, optional): A unique identifier for the message.
- **`threadId`** (string, optional): The thread identifier.

### Examples

```javascript
// Example 1: Delete a folder from a specific directory
const result = await codebolt.fs.deleteFolder('exampleFolder', '/home/user/documents');
console.log("Response type:", result.type); // "deleteFolderResponse"
console.log("Folder path:", result.path); // "/home/user/documents/exampleFolder"
console.log("Success:", result.success); // true (if successful)

// Example 2: Delete a folder from current directory
const deleteFolderResult = await codebolt.fs.deleteFolder('test-folder', '.');
console.log("✅ Folder deleted:", deleteFolderResult.success);

// Example 3: Delete multiple folders
const foldersToDelete = [
    { name: 'temp-build', path: './output' },
    { name: 'cache', path: './data' },
    { name: 'old-logs', path: './logs' }
];

for (const folder of foldersToDelete) {
    const result = await codebolt.fs.deleteFolder(folder.name, folder.path);
    console.log(`${folder.name}: ${result.success ? 'deleted' : 'failed'}`);
}

// Example 4: Error handling
try {
    const folderResult = await codebolt.fs.deleteFolder('non-existent-folder', '.');
    
    if (folderResult.success) {
        console.log('✅ Folder deleted successfully');
        console.log('Folder path:', folderResult.path);
        console.log('Message:', folderResult.message);
    } else {
        console.error('❌ Folder deletion failed:', folderResult.error);
    }
} catch (error) {
    console.error('Error deleting folder:', error);
}

// Example 5: Cleanup workflow for build artifacts
const buildFolders = [
    'dist',
    'build',
    'out',
    'temp'
];

console.log("Cleaning up build folders...");
for (const folderName of buildFolders) {
    const result = await codebolt.fs.deleteFolder(folderName, '.');
    if (result.success) {
        console.log(`✅ Cleaned up: ${folderName}/`);
    } else {
        console.log(`⚠️  Could not delete: ${folderName}/ (${result.error})`);
    }
}
console.log("Build cleanup complete");

// Example 6: Safe deletion with folder listing
const folderToDelete = 'backup-old';
const folderPath = './backups';

// First, check if folder exists by trying to list its contents
try {
    const folderContents = await codebolt.fs.listFile(`${folderPath}/${folderToDelete}`, false);
    if (folderContents.success) {
        console.log(`Folder exists with ${folderContents.files?.length || 0} items`);
        
        // Proceed with deletion
        const deleteResult = await codebolt.fs.deleteFolder(folderToDelete, folderPath);
        if (deleteResult.success) {
            console.log('✅ Folder safely deleted');
        } else {
            console.error('❌ Failed to delete folder:', deleteResult.error);
        }
    }
} catch (error) {
    console.log('Folder does not exist or cannot be accessed');
}

// Example 7: Conditional cleanup based on folder age
const tempFolders = ['temp-1', 'temp-2', 'temp-3'];
const basePath = './temp';

for (const tempFolder of tempFolders) {
    // Check if folder is empty before deletion
    const folderContents = await codebolt.fs.listFile(`${basePath}/${tempFolder}`, false);
    
    if (folderContents.success && folderContents.files?.length === 0) {
        // Delete empty folder
        const deleteResult = await codebolt.fs.deleteFolder(tempFolder, basePath);
        console.log(`Empty folder ${tempFolder}: ${deleteResult.success ? 'deleted' : 'failed'}`);
    } else {
        console.log(`Folder ${tempFolder} is not empty, skipping deletion`);
    }
}
