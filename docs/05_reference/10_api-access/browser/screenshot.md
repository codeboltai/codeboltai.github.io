---
name: screenshot
cbbaseinfo:
  description: Captures a screenshot of the current browser page as base64 encoded image data. Returns the screenshot in PNG format with the current viewport dimensions. Useful for visual verification, debugging, automated testing, and generating documentation.
cbparameters:
  parameters: []
  returns:
    signatureTypeName: "Promise<BrowserScreenshotResponse>"
    description: A promise that resolves with screenshot data including base64 encoded image, viewport information, and capture metadata.
    typeArgs: []
data:
  name: screenshot
  category: browser
  link: screenshot.md
---
# screenshot

```typescript
codebolt.browser.screenshot(): Promise<BrowserScreenshotResponse>
```

Captures a screenshot of the current browser page as base64 encoded image data. Returns the screenshot in PNG format with the current viewport dimensions. Useful for visual verification, debugging, automated testing, and generating documentation.
### Returns

- **`Promise<BrowserScreenshotResponse>`**: A promise that resolves with screenshot data including base64 encoded image, viewport information, and capture metadata.

### Response Structure

The method returns a Promise that resolves to a [`BrowserScreenshotResponse`](/docs/api/11_doc-type-ref/types/interfaces/BrowserScreenshotResponse) object with the following properties:

- **`type`** (string): Always "screenshotResponse" or similar response type identifier.
- **`payload`** (object, optional): Contains the screenshot data and metadata
  - **`screenshot`** (string, optional): Base64 encoded PNG image data of the captured screenshot.
  - **`fullPage`** (boolean, optional): Indicates if the screenshot captures the full page or just the viewport.
  - **`success`** (boolean, optional): Indicates if the screenshot operation was successful.
  - **`content`** (string, optional): Alternative content field for screenshot data.
  - **`viewport`** (object, optional): Viewport dimensions at time of capture
    - **`width`** (number): Viewport width in pixels.
    - **`height`** (number): Viewport height in pixels.
- **`eventId`** (string, optional): Unique identifier for the screenshot event.
- **`success`** (boolean, optional): Indicates if the operation was successful.
- **`message`** (string, optional): Additional information about the screenshot operation.
- **`error`** (string, optional): Error details if the screenshot operation failed.
- **`messageId`** (string, optional): Unique identifier for the message.
- **`threadId`** (string, optional): Thread identifier for the request.

### Examples

```javascript
// Example 1: Basic screenshot capture
await codebolt.browser.goToPage('https://example.com');

// Wait for page to load completely
await new Promise(resolve => setTimeout(resolve, 2000));

// Take a screenshot of the current page
const screenshotResult = await codebolt.browser.screenshot();
console.log('✅ Screenshot taken:', screenshotResult);
console.log('Screenshot data available:', !!screenshotResult?.payload?.screenshot);
console.log('Viewport:', screenshotResult?.payload?.viewport);

// Example 2: Save screenshot to file
await codebolt.browser.newPage();
await codebolt.browser.goToPage('https://example.com');
await new Promise(resolve => setTimeout(resolve, 2000));

const screenshot = await codebolt.browser.screenshot();

if (screenshot.payload?.screenshot) {
    // Save base64 screenshot data to file
    await codebolt.fs.createFile(
        'screenshot.txt',
        screenshot.payload.screenshot,
        './screenshots'
    );
    console.log('✅ Screenshot saved to file');
}

codebolt.browser.close();

// Example 3: Screenshot with error handling
async function captureScreenshotWithErrorHandling() {
    try {
        await codebolt.browser.goToPage('https://example.com');
        await new Promise(resolve => setTimeout(resolve, 2000));

        const result = await codebolt.browser.screenshot();

        if (result.success && result.payload?.screenshot) {
            console.log('✅ Screenshot captured successfully');
            console.log('Data length:', result.payload.screenshot.length);
            console.log('Viewport:', result.payload.viewport);
            return result.payload.screenshot;
        } else {
            console.error('❌ Screenshot capture failed:', result.error);
            throw new Error(result.error || 'Screenshot capture failed');
        }
    } catch (error) {
        console.error('❌ Screenshot error:', error.message);
        throw error;
    }
}

// Usage
await captureScreenshotWithErrorHandling();

// Example 4: Multiple screenshots with timestamps
async function captureTimestampedScreenshots(urls) {
    const screenshots = [];

    for (const url of urls) {
        await codebolt.browser.newPage();
        await codebolt.browser.goToPage(url);

        await new Promise(resolve => setTimeout(resolve, 2000));

        const screenshot = await codebolt.browser.screenshot();

        if (screenshot.payload?.screenshot) {
            const filename = `screenshot-${Date.now()}.txt`;
            await codebolt.fs.createFile(
                filename,
                screenshot.payload.screenshot,
                './screenshots'
            );

            screenshots.push({
                url,
                filename,
                timestamp: new Date().toISOString(),
                viewport: screenshot.payload.viewport
            });

            console.log(`✅ Screenshot saved: ${filename}`);
        }

        codebolt.browser.close();
    }

    return screenshots;
}

// Usage
const urls = ['https://example.com', 'https://github.com', 'https://stackoverflow.com'];
const capturedScreenshots = await captureTimestampedScreenshots(urls);

// Example 5: Screenshot comparison
async function compareScreenshots(url1, url2) {
    // Capture first screenshot
    await codebolt.browser.newPage();
    await codebolt.browser.goToPage(url1);
    await new Promise(resolve => setTimeout(resolve, 2000));
    const screenshot1 = await codebolt.browser.screenshot();
    codebolt.browser.close();

    // Capture second screenshot
    await codebolt.browser.newPage();
    await codebolt.browser.goToPage(url2);
    await new Promise(resolve => setTimeout(resolve, 2000));
    const screenshot2 = await codebolt.browser.screenshot();
    codebolt.browser.close();

    // Compare
    const comparison = {
        url1,
        url2,
        screenshot1Size: screenshot1.payload?.screenshot?.length || 0,
        screenshot2Size: screenshot2.payload?.screenshot?.length || 0,
        viewport1: screenshot1.payload?.viewport,
        viewport2: screenshot2.payload?.viewport,
        timestamp: new Date().toISOString()
    };

    console.log('📊 Screenshot comparison:', comparison);
    return comparison;
}

// Usage
await compareScreenshots('https://example.com', 'https://example.org');

// Example 6: Progressive page capture
async function captureScrollingPage(url, maxScrolls = 5) {
    await codebolt.browser.newPage();
    await codebolt.browser.goToPage(url);

    await new Promise(resolve => setTimeout(resolve, 2000));

    const screenshots = [];

    for (let i = 0; i < maxScrolls; i++) {
        // Capture current viewport
        const screenshot = await codebolt.browser.screenshot();

        if (screenshot.payload?.screenshot) {
            const filename = `scroll-${i + 1}-${Date.now()}.txt`;
            await codebolt.fs.createFile(
                filename,
                screenshot.payload.screenshot,
                './screenshots'
            );

            screenshots.push({
                sequence: i + 1,
                filename,
                viewport: screenshot.payload.viewport
            });

            console.log(`✅ Captured scroll position ${i + 1}/${maxScrolls}`);
        }

        // Scroll down for next capture
        await codebolt.browser.scroll('down', 500);
        await new Promise(resolve => setTimeout(resolve, 1000));
    }

    codebolt.browser.close();
    return screenshots;
}

// Usage
const scrollingScreenshots = await captureScrollingPage('https://example.com/long-page');

// Example 7: Screenshot with metadata
async function captureScreenshotWithMetadata(url, metadata = {}) {
    await codebolt.browser.newPage();
    await codebolt.browser.goToPage(url);

    await new Promise(resolve => setTimeout(resolve, 2000));

    const screenshot = await codebolt.browser.screenshot();
    const currentUrl = await codebolt.browser.getUrl();
    const browserInfo = await codebolt.browser.getBrowserInfo();

    const screenshotData = {
        url: currentUrl.payload.currentUrl,
        screenshot: screenshot.payload?.screenshot,
        viewport: screenshot.payload?.viewport,
        browserInfo: browserInfo.payload,
        metadata: {
            timestamp: new Date().toISOString(),
            ...metadata
        }
    };

    // Save as JSON
    await codebolt.fs.createFile(
        'screenshot-metadata.json',
        JSON.stringify(screenshotData, null, 2),
        './screenshots'
    );

    console.log('✅ Screenshot with metadata saved');

    codebolt.browser.close();
    return screenshotData;
}

// Usage
await captureScreenshotWithMetadata('https://example.com', {
    tags: ['homepage', 'production'],
    environment: 'staging'
});

// Example 8: Batch screenshot capture
async function batchCaptureScreenshots(configs) {
    const results = [];

    for (const config of configs) {
        try {
            await codebolt.browser.newPage();
            await codebolt.browser.goToPage(config.url);

            // Custom wait time per config
            await new Promise(resolve => setTimeout(resolve, config.waitTime || 2000));

            const screenshot = await codebolt.browser.screenshot();

            if (screenshot.payload?.screenshot) {
                const filename = config.filename || `${config.name}-${Date.now()}.txt`;
                await codebolt.fs.createFile(
                    filename,
                    screenshot.payload.screenshot,
                    config.outputPath || './screenshots'
                );

                results.push({
                    name: config.name,
                    url: config.url,
                    filename,
                    success: true,
                    viewport: screenshot.payload.viewport
                });

                console.log(`✅ Captured: ${config.name}`);
            } else {
                results.push({
                    name: config.name,
                    url: config.url,
                    success: false,
                    error: 'No screenshot data'
                });
            }

            codebolt.browser.close();
        } catch (error) {
            results.push({
                name: config.name,
                url: config.url,
                success: false,
                error: error.message
            });
            console.error(`❌ Failed to capture ${config.name}:`, error.message);
        }
    }

    console.log(`📊 Batch capture complete: ${results.filter(r => r.success).length}/${results.length} successful`);
    return results;
}

// Usage
const screenshotConfigs = [
    { name: 'homepage', url: 'https://example.com', filename: 'home.png' },
    { name: 'about', url: 'https://example.com/about', waitTime: 3000 },
    { name: 'contact', url: 'https://example.com/contact', outputPath: './screenshots/contact' }
];

await batchCaptureScreenshots(screenshotConfigs);

// Example 9: Screenshot for visual regression testing
async function visualRegressionTest(url, baselinePath) {
    // Capture current screenshot
    await codebolt.browser.newPage();
    await codebolt.browser.goToPage(url);
    await new Promise(resolve => setTimeout(resolve, 2000));

    const currentScreenshot = await codebolt.browser.screenshot();

    // Read baseline if exists
    const baselineExists = await codebolt.fs.readFile(baselinePath);

    if (baselineExists.success) {
        // Compare with baseline (simplified comparison)
        const currentSize = currentScreenshot.payload?.screenshot?.length || 0;
        const baselineSize = baselineExists.content.length;

        const difference = Math.abs(currentSize - baselineSize);
        const differencePercent = (difference / baselineSize) * 100;

        console.log(`📊 Size difference: ${differencePercent.toFixed(2)}%`);

        if (differencePercent > 10) {
            console.warn('⚠️ Significant visual difference detected');
            return {
                passed: false,
                differencePercent,
                message: 'Visual regression detected'
            };
        } else {
            console.log('✅ No significant visual differences');
            return {
                passed: true,
                differencePercent,
                message: 'No visual regression'
            };
        }
    } else {
        // Create new baseline
        await codebolt.fs.createFile(
            baselinePath,
            currentScreenshot.payload?.screenshot || '',
            './baselines'
        );
        console.log('✅ New baseline created');
        return {
            passed: true,
            message: 'Baseline created'
        };
    }
}

// Usage
await visualRegressionTest('https://example.com', './baselines/homepage.txt');

// Example 10: Screenshot with retry logic
async function captureScreenshotWithRetry(url, maxRetries = 3) {
    for (let attempt = 1; attempt <= maxRetries; attempt++) {
        try {
            await codebolt.browser.goToPage(url);
            await new Promise(resolve => setTimeout(resolve, 2000));

            const screenshot = await codebolt.browser.screenshot();

            if (screenshot.payload?.screenshot) {
                console.log(`✅ Screenshot captured on attempt ${attempt}`);
                return screenshot.payload.screenshot;
            } else {
                throw new Error('No screenshot data returned');
            }
        } catch (error) {
            console.error(`❌ Attempt ${attempt} failed:`, error.message);

            if (attempt === maxRetries) {
                throw new Error(`Failed to capture screenshot after ${maxRetries} attempts`);
            }

            // Wait before retry
            await new Promise(resolve => setTimeout(resolve, 1000));
        }
    }
}

// Usage
await captureScreenshotWithRetry('https://example.com');

// Example 11: Automated screenshot testing workflow
async function automatedScreenshotTest(testCases) {
    const results = [];

    for (const testCase of testCases) {
        console.log(`🔄 Testing: ${testCase.name}`);

        try {
            // Navigate to test URL
            await codebolt.browser.newPage();
            await codebolt.browser.goToPage(testCase.url);

            // Wait for page load
            await new Promise(resolve => setTimeout(resolve, testCase.waitTime || 2000));

            // Perform any interactions
            if (testCase.interactions) {
                for (const interaction of testCase.interactions) {
                    if (interaction.type === 'click') {
                        await codebolt.browser.click(interaction.selector);
                    } else if (interaction.type === 'scroll') {
                        await codebolt.browser.scroll(interaction.direction, interaction.amount);
                    }
                    await new Promise(resolve => setTimeout(resolve, 500));
                }
            }

            // Capture screenshot
            const screenshot = await codebolt.browser.screenshot();

            if (screenshot.payload?.screenshot) {
                // Save screenshot
                const filename = `${testCase.name}-${Date.now()}.txt`;
                await codebolt.fs.createFile(
                    filename,
                    screenshot.payload.screenshot,
                    './test-screenshots'
                );

                results.push({
                    name: testCase.name,
                    status: 'passed',
                    filename,
                    viewport: screenshot.payload.viewport
                });

                console.log(`✅ Test passed: ${testCase.name}`);
            } else {
                results.push({
                    name: testCase.name,
                    status: 'failed',
                    error: 'Screenshot capture failed'
                });
                console.error(`❌ Test failed: ${testCase.name}`);
            }

            codebolt.browser.close();
        } catch (error) {
            results.push({
                name: testCase.name,
                status: 'error',
                error: error.message
            });
            console.error(`❌ Test error: ${testCase.name}`, error.message);
        }
    }

    // Generate test report
    const passedCount = results.filter(r => r.status === 'passed').length;
    const failedCount = results.filter(r => r.status === 'failed').length;
    const errorCount = results.filter(r => r.status === 'error').length;

    console.log(`\n📊 Test Summary:`);
    console.log(`   ✅ Passed: ${passedCount}`);
    console.log(`   ❌ Failed: ${failedCount}`);
    console.log(`   ⚠️ Errors: ${errorCount}`);

    return results;
}

// Usage
const testCases = [
    {
        name: 'homepage-test',
        url: 'https://example.com',
        waitTime: 2000
    },
    {
        name: 'scroll-test',
        url: 'https://example.com/long-page',
        interactions: [
            { type: 'scroll', direction: 'down', amount: 500 }
        ]
    }
];

await automatedScreenshotTest(testCases);

// Example 12: Screenshot archive management
async function createScreenshotArchive(urls, archiveName) {
    const timestamp = new Date().toISOString().replace(/[:.]/g, '-');
    const archivePath = `./archives/${archiveName}-${timestamp}`;

    // Create archive directory
    await codebolt.fs.createFolder(archiveName, './archives');

    const screenshots = [];

    for (const url of urls) {
        await codebolt.browser.newPage();
        await codebolt.browser.goToPage(url);
        await new Promise(resolve => setTimeout(resolve, 2000));

        const screenshot = await codebolt.browser.screenshot();

        if (screenshot.payload?.screenshot) {
            const urlSlug = url.replace(/[^a-z0-9]/gi, '-').toLowerCase();
            const filename = `${urlSlug}.txt`;
            const filepath = `${archivePath}/${filename}`;

            await codebolt.fs.createFile(
                filename,
                screenshot.payload.screenshot,
                archivePath
            );

            screenshots.push({
                url,
                filename,
                filepath,
                viewport: screenshot.payload.viewport
            });
        }

        codebolt.browser.close();
    }

    // Create manifest
    const manifest = {
        archiveName,
        timestamp: new Date().toISOString(),
        screenshotCount: screenshots.length,
        screenshots
    };

    await codebolt.fs.createFile(
        'manifest.json',
        JSON.stringify(manifest, null, 2),
        archivePath
    );

    console.log(`✅ Archive created: ${archivePath}`);
    return manifest;
}

// Usage
await createScreenshotArchive(
    ['https://example.com', 'https://github.com', 'https://stackoverflow.com'],
    'screenshots-2024-01-15'
);
```

### Common Use Cases

- **Visual Testing**: Capture screenshots for automated visual regression testing
- **Documentation**: Generate visual documentation of web pages and applications
- **Debugging**: Capture page states for debugging and troubleshooting
- **Monitoring**: Monitor website changes over time with periodic screenshots
- **Quality Assurance**: Verify page layouts and responsive design implementations
- **Archiving**: Create visual archives of website states
- **Reporting**: Include screenshots in automated test reports
- **Compliance**: Capture evidence of page states for compliance purposes

### Advanced Usage Patterns

### Responsive Design Testing
```javascript
// Capture screenshots at different viewport sizes
async function responsiveScreenshots(url, viewports) {
    const screenshots = [];

    for (const viewport of viewports) {
        await codebolt.browser.newPage();

        // Set viewport size (if supported)
        await codebolt.browser.goToPage(url);

        await new Promise(resolve => setTimeout(resolve, 2000));

        const screenshot = await codebolt.browser.screenshot();

        screenshots.push({
            viewport,
            screenshot: screenshot.payload?.screenshot
        });

        codebolt.browser.close();
    }

    return screenshots;
}

// Usage
await responsiveScreenshots('https://example.com', [
    { width: 1920, height: 1080 }, // Desktop
    { width: 768, height: 1024 },   // Tablet
    { width: 375, height: 667 }     // Mobile
]);
```

### Periodic Screenshot Capture
```javascript
// Capture screenshots at regular intervals
async function periodicScreenshotCapture(url, intervalMs, duration) {
    const screenshots = [];
    const endTime = Date.now() + duration;

    await codebolt.browser.newPage();
    await codebolt.browser.goToPage(url);

    while (Date.now() < endTime) {
        const screenshot = await codebolt.browser.screenshot();

        if (screenshot.payload?.screenshot) {
            screenshots.push({
                timestamp: new Date().toISOString(),
                screenshot: screenshot.payload.screenshot
            });
        }

        await new Promise(resolve => setTimeout(resolve, intervalMs));
    }

    codebolt.browser.close();
    return screenshots;
}

// Usage - capture every 5 seconds for 1 minute
await periodicScreenshotCapture('https://example.com', 5000, 60000);
```

### Screenshot with Annotations
```javascript
// Capture screenshot and add annotations
async function annotatedScreenshot(url, annotations) {
    await codebolt.browser.newPage();
    await codebolt.browser.goToPage(url);

    await new Promise(resolve => setTimeout(resolve, 2000));

    const screenshot = await codebolt.browser.screenshot();
    const currentUrl = await codebolt.browser.getUrl();

    const annotatedData = {
        url: currentUrl.payload.currentUrl,
        screenshot: screenshot.payload?.screenshot,
        viewport: screenshot.payload?.viewport,
        annotations: annotations.map(a => ({
            ...a,
            timestamp: new Date().toISOString()
        }))
    };

    await codebolt.fs.createFile(
        'annotated-screenshot.json',
        JSON.stringify(annotatedData, null, 2),
        './screenshots'
    );

    codebolt.browser.close();
    return annotatedData;
}

// Usage
await annotatedScreenshot('https://example.com', [
    { type: 'highlight', selector: '.header', note: 'Main navigation' },
    { type: 'arrow', selector: '.cta-button', note: 'Call to action' }
]);
```

### Performance Considerations

- **File Size**: Screenshots are base64 encoded, which increases file size by ~33%
- **Memory Usage**: Large screenshots can consume significant memory
- **Storage**: Consider compression or PNG optimization for storage efficiency
- **Batch Operations**: Process screenshots in batches to avoid memory issues

```javascript
// ❌ Bad: Captures all screenshots at once
const screenshots = await Promise.all(
    urls.map(url => captureScreenshot(url))
);

// ✅ Good: Process in batches
const batchSize = 5;
for (let i = 0; i < urls.length; i += batchSize) {
    const batch = urls.slice(i, i + batchSize);
    for (const url of batch) {
        await captureScreenshot(url);
    }
}
```

### Error Handling

Always implement proper error handling for screenshot operations:

```javascript
async function robustScreenshotCapture(url) {
    try {
        await codebolt.browser.goToPage(url);
        await new Promise(resolve => setTimeout(resolve, 2000));

        const screenshot = await codebolt.browser.screenshot();

        if (!screenshot.payload?.screenshot) {
            throw new Error('Screenshot data not available');
        }

        // Verify screenshot has content
        if (screenshot.payload.screenshot.length === 0) {
            throw new Error('Screenshot is empty');
        }

        return screenshot.payload.screenshot;

    } catch (error) {
        console.error('Screenshot capture failed:', error.message);

        // Handle specific errors
        if (error.message.includes('timeout')) {
            console.error('💡 Page load timeout - try increasing wait time');
        } else if (error.message.includes('empty')) {
            console.error('💡 Screenshot capture failed - page may not have loaded');
        }

        throw error;
    }
}
```

### Common Pitfalls and Solutions

**Pitfall 1**: Not waiting for page load
```javascript
// ❌ Bad: Captures before page loads
await codebolt.browser.goToPage(url);
const screenshot = await codebolt.browser.screenshot();

// ✅ Good: Wait for page load
await codebolt.browser.goToPage(url);
await new Promise(resolve => setTimeout(resolve, 2000));
const screenshot = await codebolt.browser.screenshot();
```

**Pitfall 2**: Not verifying screenshot data
```javascript
// ❌ Bad: Assumes screenshot was captured
const screenshot = await codebolt.browser.screenshot();
await codebolt.fs.createFile('screenshot.txt', screenshot.payload.screenshot, '.');

// ✅ Good: Verify screenshot data
const screenshot = await codebolt.browser.screenshot();
if (screenshot.payload?.screenshot) {
    await codebolt.fs.createFile('screenshot.txt', screenshot.payload.screenshot, '.');
} else {
    console.error('Screenshot capture failed');
}
```

**Pitfall 3**: Ignoring viewport dimensions
```javascript
// ❌ Bad: Doesn't account for viewport
const screenshot = await codebolt.browser.screenshot();

// ✅ Good: Log viewport information
const screenshot = await codebolt.browser.screenshot();
console.log('Screenshot dimensions:', screenshot.payload?.viewport);
```

### Integration Examples

**With File System Module**
```javascript
// Capture and save multiple screenshots
const screenshot = await codebolt.browser.screenshot();
await codebolt.fs.createFile('capture.png', screenshot.payload.screenshot, './screenshots');
```

**With Terminal Module**
```javascript
// Use terminal to convert base64 to image file
const screenshot = await codebolt.browser.screenshot();
await codebolt.fs.createFile('temp.txt', screenshot.payload.screenshot, '.');
await codebolt.terminal.executeCommand('base64 -d temp.txt > screenshot.png');
```

### Best Practices

1. **Always Wait for Page Load**: Ensure page is fully loaded before capturing
2. **Verify Screenshot Data**: Check that screenshot data exists before processing
3. **Handle Large Files**: Be mindful of base64 encoding increasing file size
4. **Use Descriptive Filenames**: Include timestamps and context in filenames
5. **Implement Error Handling**: Handle capture failures gracefully
6. **Consider Viewport Size**: Account for different screen sizes in testing
7. **Clean Up Resources**: Always close browser after screenshot operations
8. **Document Context**: Save metadata with screenshots for reference