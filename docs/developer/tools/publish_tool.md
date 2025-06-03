---
sidebar_position: 4
---
# Publishing Tools

Once you've created and tested your tool, you can publish it to the Codebolt Tool Registry to share it with the community. This guide covers the entire publishing process, from preparation to maintenance.

## Prerequisites

Before publishing your tool, ensure you have:

- **Completed Tool**: A fully functional tool with proper configuration
- **Testing**: Comprehensive testing completed (see [Testing Guide](./3_testlocalmcp.md))
- **Documentation**: Clear README and usage examples
- **CLI Access**: Codebolt CLI installed and authenticated
- **Account**: Valid Codebolt account with publishing permissions

## Publishing Process

### Step 1: Prepare Your Tool

#### Validate Configuration

Ensure your `codebolttool.yaml` is complete and valid:

```yaml
name: "Weather API Tool"
description: "Fetches weather information from external APIs"
version: "1.0.0"
uniqueName: "weather-api-tool"
author: "Your Name"
category: "API"
tags: ["weather", "api", "forecast", "data"]

parameters:
  apiKey:
    type: "string"
    description: "Weather API key from WeatherAPI.com"
    required: true
    sensitive: true
  
  units:
    type: "string"
    description: "Temperature units (celsius or fahrenheit)"
    default: "celsius"
    enum: ["celsius", "fahrenheit"]
  
  timeout:
    type: "number"
    description: "Request timeout in seconds"
    default: 10
    minimum: 1
    maximum: 60
```

#### Required Fields

- `name`: Human-readable tool name
- `description`: Clear description of what the tool does
- `version`: Semantic version (e.g., "1.0.0")
- `uniqueName`: Unique identifier (no spaces, lowercase)

#### Optional but Recommended

- `author`: Your name or organization
- `category`: Tool category for organization
- `tags`: Keywords for discovery
- `parameters`: Tool configuration options

#### Create Quality Documentation

Write a comprehensive `README.md`:

```markdown
# Weather API Tool

A Codebolt tool that provides weather information using the WeatherAPI.com service.

## Features

- Get current weather conditions for any city
- Fetch weather forecasts (1-7 days)
- Support for Celsius and Fahrenheit units
- Comprehensive error handling and logging
- Rate limiting and timeout protection

## Installation

This tool is available in the Codebolt Tool Registry. Install it using:

```bash
codebolt-cli installtool weather-api-tool
```

## Configuration

### Required Parameters

- `apiKey`: Your WeatherAPI.com API key
  - Get a free key at [WeatherAPI.com](https://weatherapi.com)
  - Free tier includes 1 million calls per month

### Optional Parameters

- `units`: Temperature units ("celsius" or "fahrenheit", default: "celsius")
- `timeout`: Request timeout in seconds (default: 10, max: 60)

## Functions

### get_current_weather

Get current weather conditions for a city.

**Parameters:**
- `city` (string, required): City name or coordinates

**Example:**
```javascript
const weather = await tool.getCurrentWeather({
  city: "London"
});
```

**Response:**
```json
{
  "city": "London",
  "country": "United Kingdom",
  "temperature": 15.5,
  "condition": "Partly cloudy",
  "humidity": 65,
  "windSpeed": 12.5,
  "lastUpdated": "2024-01-15 14:30"
}
```

### get_forecast

Get weather forecast for a city.

**Parameters:**
- `city` (string, required): City name or coordinates
- `days` (number, optional): Number of forecast days (1-7, default: 3)

**Example:**
```javascript
const forecast = await tool.getForecast({
  city: "Tokyo",
  days: 5
});
```

## Error Handling

The tool handles various error scenarios:

- Invalid API keys → Clear error message with setup instructions
- Network timeouts → Automatic retry with exponential backoff
- Invalid city names → Suggestions for similar cities
- API rate limits → Graceful degradation with caching

## Usage in Agents

```javascript
class WeatherAgent extends Agent {
  async getWeatherReport(city) {
    try {
      const weather = await this.tools.weatherApi.getCurrentWeather({ city });
      return `Current weather in ${weather.city}: ${weather.temperature}°C, ${weather.condition}`;
    } catch (error) {
      return `Sorry, I couldn't get weather information: ${error.message}`;
    }
  }
}
```

## Contributing

Found a bug or want to contribute? Please:

1. Check existing issues on GitHub
2. Create a detailed bug report or feature request
3. Submit pull requests with tests

## License

MIT License - see LICENSE file for details

## Support

- GitHub Issues: [your-repo/issues](https://github.com/your-username/weather-api-tool/issues)
- Documentation: [Tool Registry Page](https://codebolt.ai/tools/weather-api-tool)
- Email: your-email@example.com
```

### Step 2: Authenticate with CLI

Ensure you're logged in to the Codebolt CLI:

```bash
# Login if not already authenticated
codebolt-cli login

# Verify authentication
codebolt-cli whoami
```

### Step 3: Publish Your Tool

#### Basic Publishing

Navigate to your tool directory and publish:

```bash
cd .codeboltAgents/tools/weather-api-tool
codebolt-cli publishtool
```

#### Publishing with Options

You can also specify the directory:

```bash
codebolt-cli publishtool ./path/to/your/tool
```

#### Interactive Publishing Process

The CLI will prompt you for additional information:

```bash
$ codebolt-cli publishtool

Processing the MCP Tool....
Found tool configuration: Weather API Tool

? GitHub repository URL (optional): https://github.com/username/weather-api-tool
? Category for your MCP tool (optional): API
? Tags (comma-separated): weather,api,forecast,data
? Does this tool require an API key? Yes

Fetching GitHub information...
Packaging source code...
Source code packaging done.
Uploading source code...
Source code uploaded successfully.

✅ MCP tool "Weather API Tool" published successfully!
📦 Tool ID: weather-api-tool
📝 Description: Fetches weather information from external APIs
```

### Step 4: Verify Publication

After successful publication, verify your tool is available:

```bash
# List your published tools
codebolt-cli listtools --author "Your Name"

# Search for your tool
codebolt-cli searchtools weather-api-tool
```

## Publishing Best Practices

### 1. Version Management

Follow semantic versioning (SemVer):

- **Major** (1.0.0 → 2.0.0): Breaking changes
- **Minor** (1.0.0 → 1.1.0): New features, backward compatible
- **Patch** (1.0.0 → 1.0.1): Bug fixes, backward compatible

```yaml
# Initial release
version: "1.0.0"

# Bug fix
version: "1.0.1"

# New feature
version: "1.1.0"

# Breaking change
version: "2.0.0"
```

### 2. Meaningful Descriptions

Write clear, concise descriptions:

```yaml
# Good
description: "Fetches weather information from external APIs with support for forecasts and multiple units"

# Bad
description: "Weather tool"
```

### 3. Comprehensive Tags

Use relevant tags for discoverability:

```yaml
tags: ["weather", "api", "forecast", "data", "meteorology", "climate"]
```

### 4. Parameter Documentation

Document all parameters clearly:

```yaml
parameters:
  apiKey:
    type: "string"
    description: "API key from WeatherAPI.com (get free key at weatherapi.com)"
    required: true
    sensitive: true
  
  retryAttempts:
    type: "number"
    description: "Number of retry attempts for failed requests"
    default: 3
    minimum: 1
    maximum: 10
```

### 5. Error Handling

Implement robust error handling:

```javascript
async getCurrentWeather(args, context) {
  try {
    // Validate inputs
    if (!args.city || typeof args.city !== 'string') {
      throw new Error('City parameter is required and must be a string');
    }

    // Make API call with timeout
    const response = await this.makeApiCall(args.city);
    
    // Log success
    context.log.info(`Weather fetched successfully for ${args.city}`);
    
    return this.formatResponse(response);
  } catch (error) {
    // Log error with context
    context.log.error('Weather fetch failed', {
      city: args.city,
      error: error.message,
      timestamp: new Date().toISOString()
    });
    
    // Throw user-friendly error
    throw new Error(`Failed to get weather for ${args.city}: ${error.message}`);
  }
}
```

## Updating Published Tools

### Publishing Updates

When you update your tool, increment the version and republish:

```yaml
# Update version in codebolttool.yaml
version: "1.1.0"
```

```bash
# Republish
codebolt-cli publishtool
```

### Update Process

The CLI handles updates automatically:

1. **Version Check**: Compares local vs. published version
2. **Validation**: Ensures you're the tool owner
3. **Backup**: Creates backup of previous version
4. **Update**: Publishes new version
5. **Notification**: Notifies users of available update

### Breaking Changes

For breaking changes, consider:

1. **Major Version Bump**: Increment major version (2.0.0)
2. **Migration Guide**: Provide upgrade instructions
3. **Deprecation Notice**: Warn users in advance
4. **Backward Compatibility**: Support old parameters temporarily

## Tool Registry Features

### Discovery

Your published tool becomes discoverable through:

- **Search**: Users can search by name, tags, or description
- **Categories**: Organized by category for browsing
- **Trending**: Popular tools are featured
- **Recommendations**: Suggested based on usage patterns

### Analytics

Track your tool's performance:

- **Download Count**: Number of installations
- **Usage Statistics**: How often it's used
- **User Feedback**: Ratings and reviews
- **Error Reports**: Common issues and failures

### Community Features

- **Ratings**: Users can rate your tool (1-5 stars)
- **Reviews**: Detailed feedback and use cases
- **Issues**: Bug reports and feature requests
- **Discussions**: Community support and tips

## Managing Your Tools

### Viewing Your Tools

```bash
# List all your published tools
codebolt-cli listtools --author "Your Name"

# Get detailed info about a specific tool
codebolt-cli toolinfo weather-api-tool
```

### Updating Tool Information

Update metadata without changing code:

```bash
# Update description, tags, or category
codebolt-cli updatetool weather-api-tool \
  --description "Enhanced weather tool with forecasting" \
  --tags "weather,api,forecast,enhanced"
```

### Deprecating Tools

Mark tools as deprecated:

```bash
codebolt-cli deprecatetool weather-api-tool \
  --reason "Replaced by weather-api-tool-v2" \
  --alternative "weather-api-tool-v2"
```

### Unpublishing Tools

Remove tools from registry (use carefully):

```bash
codebolt-cli unpublishtool weather-api-tool \
  --confirm
```

## Collaboration and Ownership

### Team Publishing

For team-developed tools:

1. **Organization Account**: Use organization account for publishing
2. **Shared Access**: Grant team members publishing permissions
3. **Code Review**: Implement review process for updates
4. **Documentation**: Maintain shared documentation standards

### Transfer Ownership

Transfer tool ownership:

```bash
codebolt-cli transfertool weather-api-tool \
  --to "new-owner-username" \
  --confirm
```

## Troubleshooting Publishing Issues

### Common Errors

#### Authentication Issues

```
Error: User not authenticated
```

**Solution**: Login again
```bash
codebolt-cli logout
codebolt-cli login
```

#### Duplicate Tool Names

```
Error: Tool with uniqueName 'weather-tool' already exists
```

**Solution**: Choose a unique name
```yaml
uniqueName: "weather-api-tool-enhanced"
```

#### Invalid Configuration

```
Error: Invalid codebolttool.yaml format
```

**Solution**: Validate YAML syntax
```bash
# Check YAML syntax
yamllint codebolttool.yaml
```

#### File Size Limits

```
Error: Tool package exceeds size limit
```

**Solution**: Optimize package size
```bash
# Add to .gitignore
node_modules/
*.log
.DS_Store
coverage/
```

#### Permission Errors

```
Error: You are not authorized to update this tool
```

**Solution**: Verify ownership or contact support

### Debug Mode

Enable debug logging for troubleshooting:

```bash
DEBUG=codebolt:publish codebolt-cli publishtool
```

## Security Considerations

### Sensitive Information

Never include sensitive data in your tool:

```yaml
# ❌ Bad - Don't hardcode secrets
parameters:
  apiKey:
    default: "sk-1234567890abcdef"

# ✅ Good - Require user to provide
parameters:
  apiKey:
    type: "string"
    required: true
    sensitive: true
```

### Code Review

Before publishing:

1. **Remove Debug Code**: Clean up console.log statements
2. **Check Dependencies**: Ensure all dependencies are legitimate
3. **Validate Inputs**: Implement proper input validation
4. **Error Handling**: Don't expose internal errors to users

### License Compliance

Ensure your tool complies with licenses:

1. **Check Dependencies**: Review all dependency licenses
2. **Include License**: Add appropriate license file
3. **Attribution**: Credit any borrowed code or algorithms

## Next Steps

After publishing your tool:

- [Monitor Usage](./5_tool_registry.md) - Track your tool's performance
- [Community Engagement](./6_community.md) - Engage with users
- [Advanced Patterns](./7_advanced_patterns.md) - Learn advanced techniques
- [Maintenance Guide](./8_maintenance.md) - Keep your tool updated

## Support and Resources

- **Documentation**: [Tool Registry Guide](./5_tool_registry.md)
- **Community**: [Codebolt Discord](https://discord.gg/codebolt)
- **Issues**: [GitHub Issues](https://github.com/codebolt/tools/issues)
- **Email**: tools-support@codebolt.ai


