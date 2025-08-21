# Global Search

## Overview

Codebolt's Global Search provides powerful search capabilities across your entire workspace, including files, code, documentation, git history, and even AI chat conversations. Find anything instantly with intelligent search algorithms and advanced filtering options.

## Search Interface

### Search Bar
- **Quick Access**: Keyboard shortcut (Ctrl/Cmd + Shift + F) for instant access
- **Auto-complete**: Intelligent search suggestions as you type
- **Search History**: Access previous search queries
- **Saved Searches**: Save frequently used search patterns
- **Search Scope**: Choose search scope (current file, workspace, or global)

### Search Types
- **Text Search**: Find text content across files
- **File Search**: Search for files by name or path
- **Symbol Search**: Find functions, classes, and variables
- **Reference Search**: Find all references to symbols
- **Git Search**: Search through commit history and changes

### Search Results
```
Search Results Display:
📁 src/components/
  📄 Button.tsx (3 matches)
    Line 12: const Button = styled.button`
    Line 25: // Button variants
    Line 40: export default Button;
  
📁 docs/
  📄 README.md (1 match)
    Line 15: ## Button Component Usage
```

## Advanced Search Features

### Regular Expressions
- **Regex Support**: Full regular expression support
- **Pattern Library**: Pre-built regex patterns for common searches
- **Regex Builder**: Visual regex builder for complex patterns
- **Match Highlighting**: Visual highlighting of regex matches
- **Capture Groups**: Extract specific parts of matches

### Search Patterns
```regex
# Find all function declarations
function\s+([a-zA-Z_][a-zA-Z0-9_]*)\s*\(

# Find TODO comments
(TODO|FIXME|HACK|NOTE):\s*(.*)

# Find CSS class declarations
\.([a-zA-Z-_][a-zA-Z0-9-_]*)\s*\{

# Find import statements
import\s+.*\s+from\s+['"]([^'"]+)['"]
```

### Filters and Scopes
- **File Type Filters**: Search only specific file types (.js, .py, .md)
- **Directory Scopes**: Limit search to specific directories
- **Date Ranges**: Search files modified within date ranges
- **Size Filters**: Filter by file size
- **Git Status**: Search only modified, staged, or untracked files

## Search Categories

### Code Search
- **Symbol Search**: Find functions, classes, variables, and types
- **Definition Search**: Go to symbol definitions
- **Reference Search**: Find all symbol references
- **Implementation Search**: Find interface implementations
- **Inheritance Search**: Find class inheritance hierarchies

### Content Search
- **Full-Text Search**: Search content within files
- **Case Sensitivity**: Toggle case-sensitive search
- **Whole Word**: Match whole words only
- **Multi-line Search**: Search across multiple lines
- **Unicode Support**: Support for international characters

### File System Search
```bash
# File search examples
*.js                 # All JavaScript files
src/**/*.test.js     # All test files in src directory
!node_modules        # Exclude node_modules
package*.json        # Package files
*.{ts,tsx}          # TypeScript files
```

### Git History Search
- **Commit Message Search**: Search through commit messages
- **Author Search**: Find commits by specific authors
- **File History**: Search changes to specific files
- **Branch Search**: Search across different branches
- **Date Range**: Search commits within date ranges

## Intelligent Search

### AI-Powered Search
- **Semantic Search**: Find conceptually related content
- **Natural Language**: Search using natural language queries
- **Code Intent**: Search by what code does, not just what it contains
- **Context Understanding**: AI understands code context and relationships
- **Smart Suggestions**: AI suggests related search terms

### Smart Queries
```
Natural Language Search Examples:
"functions that handle user authentication"
"components that use the theme context"
"database queries for user data"
"API endpoints that return JSON"
"tests that mock external services"
```

### Search Analytics
- **Usage Patterns**: Analyze search usage patterns
- **Popular Queries**: Track most common search queries
- **Performance Metrics**: Monitor search performance
- **Result Quality**: Track search result relevance
- **User Behavior**: Understand how users search

## Search Results Management

### Result Organization
- **Grouped Results**: Group results by file, directory, or type
- **Sort Options**: Sort by relevance, date, file name, or file type
- **Tree View**: Hierarchical view of search results
- **List View**: Flat list of all results
- **Preview Pane**: Quick preview of search results

### Result Actions
- **Open in Editor**: Open files directly from search results
- **Replace in Files**: Replace found text across multiple files
- **Copy Results**: Copy search results to clipboard
- **Export Results**: Export results to various formats
- **Share Results**: Share search results with team members

### Batch Operations
```javascript
// Batch replace across files
const searchResults = await globalSearch.find({
  query: "oldFunctionName",
  scope: "workspace",
  fileTypes: [".js", ".ts", ".tsx"]
});

await globalSearch.replaceAll(searchResults, {
  replacement: "newFunctionName",
  confirmEach: false,
  createBackup: true
});
```

## Performance Optimization

### Indexing
- **Real-time Indexing**: Index files as they change
- **Background Indexing**: Index large projects in background
- **Smart Indexing**: Only index relevant content
- **Incremental Updates**: Update index incrementally
- **Index Compression**: Compress search indexes for efficiency

### Search Performance
- **Fast Results**: Sub-second search results for most queries
- **Pagination**: Paginate large result sets
- **Progressive Loading**: Load results progressively
- **Cache Management**: Cache frequent search results
- **Resource Limits**: Limit resource usage for large searches

### Memory Management
- **Efficient Storage**: Optimize memory usage for search indexes
- **Garbage Collection**: Automatic cleanup of unused indexes
- **Memory Monitoring**: Monitor search memory usage
- **Disk Caching**: Use disk cache for large indexes
- **Compression**: Compress search data

## Integration Features

### Editor Integration
- **Inline Search**: Search within current file
- **Search and Replace**: Advanced find and replace
- **Multi-cursor Search**: Search with multiple cursors
- **Search Highlighting**: Highlight search results in editor
- **Navigation**: Navigate between search results

### Git Integration
- **Commit Search**: Search through git commit history
- **Blame Integration**: Search through git blame information
- **Branch Comparison**: Search differences between branches
- **Tag Search**: Search through git tags
- **Remote Search**: Search remote repository content

### Extension Integration
```javascript
// Extension API for search
const searchAPI = {
  // Register custom search provider
  registerProvider(provider) {
    globalSearch.addProvider({
      name: provider.name,
      search: provider.searchFunction,
      scope: provider.supportedScopes
    });
  },
  
  // Add custom filters
  addFilter(filterName, filterFunction) {
    globalSearch.filters[filterName] = filterFunction;
  }
};
```

## Customization Options

### Search Preferences
- **Default Scope**: Set default search scope
- **Auto-complete**: Configure auto-complete behavior
- **Result Limits**: Set maximum number of results
- **Performance**: Balance speed vs thoroughness
- **Privacy**: Control what gets indexed

### UI Customization
- **Result Layout**: Customize result display layout
- **Color Themes**: Apply themes to search interface
- **Keyboard Shortcuts**: Customize search shortcuts
- **Panel Position**: Configure search panel position
- **Font Settings**: Customize search result fonts

### Advanced Configuration
```json
{
  "search.defaultScope": "workspace",
  "search.maxResults": 1000,
  "search.excludePatterns": [
    "**/node_modules/**",
    "**/dist/**",
    "**/*.min.js"
  ],
  "search.includePatterns": [
    "**/*.{js,ts,jsx,tsx,py,java,cpp,h}"
  ],
  "search.indexing.realTime": true,
  "search.ai.semanticSearch": true
}
```

## Search Commands and Shortcuts

### Keyboard Shortcuts
- **Global Search**: `Ctrl/Cmd + Shift + F`
- **File Search**: `Ctrl/Cmd + P`
- **Symbol Search**: `Ctrl/Cmd + Shift + O`
- **Reference Search**: `Shift + F12`
- **Next Result**: `F3` or `Ctrl/Cmd + G`

### Command Palette
- **Search in Files**: Search across all files
- **Search and Replace**: Find and replace operations
- **Search Git History**: Search through git commits
- **Search Symbols**: Find symbols in workspace
- **Search References**: Find all references

### Voice Commands
```
Voice Search Examples:
"Search for user authentication functions"
"Find all TODO comments in the project"
"Show me recent changes to the login component"
"Find files containing API endpoints"
"Search for unused imports"
```

## Collaboration Features

### Shared Searches
- **Team Searches**: Share search queries with team
- **Search Templates**: Create reusable search templates
- **Collaborative Filters**: Team-defined search filters
- **Search Comments**: Add comments to search results
- **Knowledge Base**: Build searchable team knowledge base

### Search Documentation
- **Search Guides**: Document common search patterns
- **Best Practices**: Share search best practices
- **Query Library**: Maintain library of useful queries
- **Training Materials**: Search training for team members
- **Tips and Tricks**: Advanced search techniques

## Troubleshooting

### Common Issues
- **Slow Search**: Optimize search performance
- **Missing Results**: Troubleshoot indexing issues
- **Large Projects**: Handle large codebase searches
- **Memory Usage**: Manage search memory consumption
- **Regex Errors**: Debug regular expression problems

### Performance Tuning
- **Index Optimization**: Optimize search indexes
- **Query Optimization**: Improve search query performance
- **Resource Management**: Manage search resource usage
- **Cache Tuning**: Optimize search cache settings
- **Network Optimization**: Optimize remote search performance 