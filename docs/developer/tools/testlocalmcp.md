---
sidebar_position: 3
---
# Testing Tools Locally

Testing is crucial for ensuring your tools work correctly before publishing them. This guide covers various methods for testing Codebolt tools locally, from basic CLI testing to comprehensive unit testing.

## Testing Methods Overview

1. **CLI Testing**: Quick function testing with `runtool`
2. **MCP Inspector**: Interactive debugging and testing
3. **Unit Testing**: Automated testing with Jest
4. **Integration Testing**: Testing with real agents
5. **Manual Testing**: Testing in Codebolt Application

## Method 1: CLI Testing with `runtool`

The fastest way to test individual tool functions:

### Basic Usage

```bash
# Test a specific function
codebolt-cli runtool <function_name> <tool_file>

# Examples
codebolt-cli runtool get_weather ./weather-tool/index.js
codebolt-cli runtool list_files ./file-tool/index.js
codebolt-cli runtool process_data ./data-tool/index.js
```

### Testing with Parameters

When testing functions that require parameters, you'll be prompted to enter them:

```bash
$ codebolt-cli runtool get_weather ./weather-tool/index.js
? Enter parameters for get_weather (JSON format): {"city": "London"}

# Output:
{
  "city": "London",
  "temperature": 15.5,
  "condition": "Partly cloudy",
  "humidity": 65
}
```

### Testing Different Scenarios

Test various input scenarios:

```bash
# Valid input
codebolt-cli runtool get_weather ./weather-tool/index.js
# Input: {"city": "London"}

# Invalid input (test error handling)
codebolt-cli runtool get_weather ./weather-tool/index.js
# Input: {"city": ""}

# Edge cases
codebolt-cli runtool get_weather ./weather-tool/index.js
# Input: {"city": "NonExistentCity123"}
```

## Method 2: MCP Inspector

The MCP Inspector provides an interactive testing environment:

### Starting the Inspector

```bash
codebolt-cli inspecttool <tool_file>

# Example
codebolt-cli inspecttool ./weather-tool/index.js
```

### Inspector Features

The inspector opens a web interface where you can:

1. **View Available Functions**: See all functions your tool exposes
2. **Test Functions**: Execute functions with custom parameters
3. **View Logs**: See real-time logging output
4. **Debug Responses**: Inspect function responses and errors
5. **Monitor Performance**: Track execution times

### Using the Inspector

1. **Select Function**: Choose from the dropdown list
2. **Enter Parameters**: Use the JSON editor to input parameters
3. **Execute**: Click "Run" to execute the function
4. **Review Results**: Check the response and logs

Example inspector session:

```json
// Function: get_weather
// Parameters:
{
  "city": "Tokyo",
  "units": "celsius"
}

// Response:
{
  "city": "Tokyo",
  "country": "Japan",
  "temperature": 22.5,
  "condition": "Clear",
  "humidity": 58,
  "windSpeed": 8.2
}

// Logs:
[INFO] Fetching weather for Tokyo
[INFO] Weather API request completed successfully
```

### Debug Mode

Enable detailed logging for debugging:

```bash
DEBUG=codebolt:tools codebolt-cli inspecttool ./weather-tool/index.js
```

This provides additional information about:
- MCP protocol messages
- Tool initialization
- Parameter validation
- Function execution flow

## Method 3: Unit Testing

Create comprehensive automated tests for your tools:

### Setting Up Jest

Install testing dependencies:

```bash
npm install --save-dev jest @types/jest
```

Add test script to `package.json`:

```json
{
  "scripts": {
    "test": "jest",
    "test:watch": "jest --watch",
    "test:coverage": "jest --coverage"
  },
  "jest": {
    "testEnvironment": "node",
    "collectCoverageFrom": [
      "index.js",
      "src/**/*.js"
    ]
  }
}
```

### Basic Test Structure

Create `test/weather-tool.test.js`:

```javascript
const WeatherTool = require('../index.js');

// Mock external dependencies
global.fetch = jest.fn();

describe('WeatherTool', () => {
  let tool;
  let mockContext;

  beforeEach(() => {
    // Initialize tool with test configuration
    tool = new WeatherTool({
      parameters: {
        apiKey: 'test-api-key',
        units: 'celsius',
        timeout: 10
      }
    });

    // Mock context object
    mockContext = {
      log: {
        info: jest.fn(),
        error: jest.fn(),
        warn: jest.fn(),
        debug: jest.fn()
      }
    };

    // Clear all mocks
    jest.clearAllMocks();
  });

  afterEach(() => {
    // Clean up after each test
    fetch.mockClear();
  });
});
```

### Testing Successful Operations

```javascript
describe('getCurrentWeather', () => {
  test('should return weather data for valid city', async () => {
    // Arrange
    const mockResponse = {
      location: { name: 'London', country: 'UK' },
      current: {
        temp_c: 15.5,
        condition: { text: 'Sunny' },
        humidity: 65,
        wind_kph: 12.5,
        last_updated: '2024-01-15 14:30'
      }
    };

    fetch.mockResolvedValueOnce({
      ok: true,
      json: async () => mockResponse
    });

    // Act
    const result = await tool.getCurrentWeather(
      { city: 'London' },
      mockContext
    );

    // Assert
    expect(result).toEqual({
      city: 'London',
      country: 'UK',
      temperature: 15.5,
      condition: 'Sunny',
      humidity: 65,
      windSpeed: 12.5,
      lastUpdated: '2024-01-15 14:30'
    });

    expect(mockContext.log.info).toHaveBeenCalledWith('Fetching weather for London');
    expect(fetch).toHaveBeenCalledWith(
      expect.stringContaining('api.weatherapi.com')
    );
  });

  test('should handle multiple cities', async () => {
    const cities = ['London', 'Tokyo', 'New York'];
    
    for (const city of cities) {
      fetch.mockResolvedValueOnce({
        ok: true,
        json: async () => ({
          location: { name: city, country: 'Test' },
          current: { temp_c: 20, condition: { text: 'Clear' } }
        })
      });

      const result = await tool.getCurrentWeather({ city }, mockContext);
      expect(result.city).toBe(city);
    }
  });
});
```

### Testing Error Scenarios

```javascript
describe('error handling', () => {
  test('should handle API errors', async () => {
    // Mock API error response
    fetch.mockResolvedValueOnce({
      ok: false,
      status: 401,
      statusText: 'Unauthorized'
    });

    await expect(tool.getCurrentWeather(
      { city: 'London' },
      mockContext
    )).rejects.toThrow('Failed to get weather: Weather API error: Unauthorized');

    expect(mockContext.log.error).toHaveBeenCalledWith(
      'Weather fetch failed',
      expect.objectContaining({
        error: expect.stringContaining('Unauthorized'),
        city: 'London'
      })
    );
  });

  test('should handle network errors', async () => {
    fetch.mockRejectedValueOnce(new Error('Network error'));

    await expect(tool.getCurrentWeather(
      { city: 'London' },
      mockContext
    )).rejects.toThrow('Failed to get weather: Network error');
  });

  test('should handle invalid JSON response', async () => {
    fetch.mockResolvedValueOnce({
      ok: true,
      json: async () => { throw new Error('Invalid JSON'); }
    });

    await expect(tool.getCurrentWeather(
      { city: 'London' },
      mockContext
    )).rejects.toThrow('Failed to get weather: Invalid JSON');
  });
});
```

### Testing Input Validation

```javascript
describe('input validation', () => {
  test('should reject empty city name', async () => {
    await expect(tool.getCurrentWeather(
      { city: '' },
      mockContext
    )).rejects.toThrow('Invalid city parameter');
  });

  test('should reject non-string city name', async () => {
    await expect(tool.getCurrentWeather(
      { city: 123 },
      mockContext
    )).rejects.toThrow('City must be a string');
  });

  test('should handle missing parameters', async () => {
    await expect(tool.getCurrentWeather(
      {},
      mockContext
    )).rejects.toThrow('City parameter is required');
  });
});
```

### Testing Configuration

```javascript
describe('configuration', () => {
  test('should use default units when not specified', () => {
    const defaultTool = new WeatherTool({
      parameters: { apiKey: 'test-key' }
    });
    
    expect(defaultTool.units).toBe('celsius');
  });

  test('should use provided units', () => {
    const fahrenheitTool = new WeatherTool({
      parameters: { 
        apiKey: 'test-key',
        units: 'fahrenheit'
      }
    });
    
    expect(fahrenheitTool.units).toBe('fahrenheit');
  });

  test('should validate API key presence', () => {
    expect(() => new WeatherTool({
      parameters: {}
    })).toThrow('API key is required');
  });
});
```

### Running Tests

```bash
# Run all tests
npm test

# Run tests in watch mode
npm run test:watch

# Run tests with coverage
npm run test:coverage

# Run specific test file
npm test weather-tool.test.js

# Run tests matching pattern
npm test -- --testNamePattern="error handling"
```

## Method 4: Integration Testing

Test your tool with actual agents:

### Creating Test Agent

Create a simple test agent in `test/test-agent.js`:

```javascript
const WeatherTool = require('../index.js');

class TestAgent {
  constructor() {
    this.tools = {};
    this.setupTools();
  }

  setupTools() {
    this.tools.weather = new WeatherTool({
      parameters: {
        apiKey: process.env.WEATHER_API_KEY,
        units: 'celsius'
      }
    });
  }

  async getWeatherReport(city) {
    try {
      const weather = await this.tools.weather.getCurrentWeather(
        { city },
        { log: console }
      );

      return `Weather in ${weather.city}: ${weather.temperature}°C, ${weather.condition}`;
    } catch (error) {
      return `Error getting weather: ${error.message}`;
    }
  }
}

// Test the integration
async function testIntegration() {
  const agent = new TestAgent();
  
  const report = await agent.getWeatherReport('London');
  console.log(report);
}

if (require.main === module) {
  testIntegration();
}

module.exports = TestAgent;
```

Run integration test:

```bash
WEATHER_API_KEY=your_api_key node test/test-agent.js
```

### Testing Tool Combinations

Test multiple tools working together:

```javascript
class MultiToolAgent {
  constructor() {
    this.tools = {
      weather: new WeatherTool({ /* config */ }),
      file: new FileManagerTool({ /* config */ }),
      data: new DataProcessorTool({ /* config */ })
    };
  }

  async generateWeatherReport(city, outputFile) {
    // Get weather data
    const weather = await this.tools.weather.getCurrentWeather({ city });
    
    // Process data
    const report = await this.tools.data.formatReport({ 
      data: weather,
      template: 'weather-report'
    });
    
    // Save to file
    await this.tools.file.writeFile({
      filePath: outputFile,
      content: report
    });
    
    return `Weather report saved to ${outputFile}`;
  }
}
```

## Method 5: Manual Testing in Application

Test your tool within the Codebolt Application:

### Loading Tool in Application

1. Open Codebolt Application
2. Navigate to Tools section
3. Import your local tool or create it directly
4. Configure parameters
5. Test functions manually

### Testing with Agents

1. Create or open an agent
2. Configure the agent to use your tool
3. Test tool functionality through agent interactions
4. Verify tool responses and behavior

### Debugging in Application

Use the application's debugging features:
- View tool execution logs
- Monitor parameter passing
- Check error messages
- Verify response formatting

## Performance Testing

### Measuring Execution Time

Add timing to your tests:

```javascript
test('should complete within reasonable time', async () => {
  const startTime = Date.now();
  
  await tool.getCurrentWeather({ city: 'London' }, mockContext);
  
  const executionTime = Date.now() - startTime;
  expect(executionTime).toBeLessThan(5000); // 5 seconds max
});
```

### Load Testing

Test with multiple concurrent requests:

```javascript
test('should handle concurrent requests', async () => {
  const cities = ['London', 'Tokyo', 'New York', 'Paris', 'Sydney'];
  
  const promises = cities.map(city => 
    tool.getCurrentWeather({ city }, mockContext)
  );
  
  const results = await Promise.all(promises);
  
  expect(results).toHaveLength(cities.length);
  results.forEach((result, index) => {
    expect(result.city).toBe(cities[index]);
  });
});
```

### Memory Usage Testing

Monitor memory usage during testing:

```javascript
test('should not leak memory', async () => {
  const initialMemory = process.memoryUsage().heapUsed;
  
  // Perform many operations
  for (let i = 0; i < 100; i++) {
    await tool.getCurrentWeather({ city: 'London' }, mockContext);
  }
  
  // Force garbage collection if available
  if (global.gc) {
    global.gc();
  }
  
  const finalMemory = process.memoryUsage().heapUsed;
  const memoryIncrease = finalMemory - initialMemory;
  
  // Memory increase should be reasonable
  expect(memoryIncrease).toBeLessThan(10 * 1024 * 1024); // 10MB
});
```

## Continuous Integration Testing

### GitHub Actions Example

Create `.github/workflows/test.yml`:

```yaml
name: Test Tools

on:
  push:
    branches: [ main, develop ]
  pull_request:
    branches: [ main ]

jobs:
  test:
    runs-on: ubuntu-latest
    
    strategy:
      matrix:
        node-version: [14.x, 16.x, 18.x]
    
    steps:
    - uses: actions/checkout@v3
    
    - name: Use Node.js ${{ matrix.node-version }}
      uses: actions/setup-node@v3
      with:
        node-version: ${{ matrix.node-version }}
        cache: 'npm'
    
    - name: Install dependencies
      run: npm ci
    
    - name: Run tests
      run: npm test
      env:
        WEATHER_API_KEY: ${{ secrets.WEATHER_API_KEY }}
    
    - name: Run CLI tests
      run: |
        npm install -g codebolt-cli
        codebolt-cli runtool get_weather ./index.js
```

## Best Practices for Testing

### 1. Test Coverage

Aim for comprehensive test coverage:

```bash
# Generate coverage report
npm run test:coverage

# View coverage in browser
open coverage/lcov-report/index.html
```

### 2. Test Organization

Organize tests logically:

```
test/
├── unit/
│   ├── weather-tool.test.js
│   ├── file-tool.test.js
│   └── data-tool.test.js
├── integration/
│   ├── agent-integration.test.js
│   └── multi-tool.test.js
├── fixtures/
│   ├── sample-data.json
│   └── mock-responses.js
└── helpers/
    ├── test-utils.js
    └── mock-context.js
```

### 3. Mock Management

Create reusable mocks:

```javascript
// test/helpers/mock-context.js
function createMockContext() {
  return {
    log: {
      info: jest.fn(),
      error: jest.fn(),
      warn: jest.fn(),
      debug: jest.fn()
    }
  };
}

// test/helpers/mock-responses.js
const weatherResponses = {
  london: {
    location: { name: 'London', country: 'UK' },
    current: { temp_c: 15.5, condition: { text: 'Sunny' } }
  },
  error: {
    ok: false,
    status: 404,
    statusText: 'Not Found'
  }
};

module.exports = { weatherResponses };
```

### 4. Environment Setup

Use environment variables for configuration:

```javascript
// test/setup.js
process.env.NODE_ENV = 'test';
process.env.WEATHER_API_KEY = 'test-api-key';

// Mock global fetch
global.fetch = jest.fn();

// Setup test database if needed
beforeAll(async () => {
  // Setup test environment
});

afterAll(async () => {
  // Cleanup test environment
});
```

## Troubleshooting Common Issues

### Tool Not Loading

```
Error: Cannot find module '@codebolt/toolbox'
```

**Solution**: Install dependencies
```bash
npm install
```

### MCP Protocol Errors

```
Error: Invalid MCP response format
```

**Solution**: Check function return format
```javascript
// Correct format
return { result: "success", data: {...} };

// Incorrect format
return "just a string";
```

### Parameter Validation Failures

```
Error: Parameter 'city' is required
```

**Solution**: Check parameter definitions and test inputs

### Timeout Issues

```
Error: Request timeout
```

**Solution**: Increase timeout or optimize function
```yaml
parameters:
  timeout:
    type: "number"
    default: 30
    maximum: 60
```

## Next Steps

- [Publish Your Tool](./4_publish_tool.md) - Share your tested tool
- [Tool Registry](./5_tool_registry.md) - Discover existing tools
- [Advanced Patterns](./6_advanced_patterns.md) - Learn advanced techniques
- [CLI Reference](../cli/tools.md) - Complete CLI documentation



