---
name: click
cbbaseinfo:
  description: Simulates a click event on an element with the specified ID.
cbparameters:
  parameters:
    - name: id
      typeName: string
      description: The ID of the element to click.
  returns:
    signatureTypeName: "Promise<any>"
    description: A promise that resolves when the click action is complete.
    typeArgs: []
data:
  name: click
  category: crawler
  link: click.md
---
# click

```typescript
codebolt.crawler.click(id: string): Promise<any>
```

Simulates a click event on an element with the specified ID.
### Parameters

- **`id`** (string): The ID of the element to click.

### Returns

- **`Promise<any>`**: A promise that resolves when the click action is complete.

### Example 1: Basic Click

```js
// Start crawler, navigate, and click an element
codebolt.crawler.start();
codebolt.crawler.goToPage('https://example.com');

// Wait for page load
await new Promise(resolve => setTimeout(resolve, 2000));

// Click an element by ID
await codebolt.crawler.click('submit-button');
console.log('Clicked submit button');
```

### Example 2: Click with Verification

```js
// Click element and verify with screenshot
async function clickAndVerify(url, elementId) {
  codebolt.crawler.start();
  codebolt.crawler.goToPage(url);

  await new Promise(resolve => setTimeout(resolve, 2000));

  // Before click
  console.log('Before click:');
  codebolt.crawler.screenshot();

  // Click the element
  await codebolt.crawler.click(elementId);
  console.log(`Clicked element: ${elementId}`);

  // Wait for action to complete
  await new Promise(resolve => setTimeout(resolve, 1000));

  // After click
  console.log('After click:');
  codebolt.crawler.screenshot();
}

// Usage
await clickAndVerify('https://example.com', 'login-button');
```

### Example 3: Sequential Clicks

```js
// Click multiple elements in sequence
async function sequentialClicks(url, elementIds) {
  codebolt.crawler.start();
  codebolt.crawler.goToPage(url);

  await new Promise(resolve => setTimeout(resolve, 2000));

  for (const id of elementIds) {
    console.log(`Clicking element: ${id}`);

    // Click element
    await codebolt.crawler.click(id);

    // Wait for page response
    await new Promise(resolve => setTimeout(resolve, 1500));

    // Capture state
    codebolt.crawler.screenshot();
  }

  console.log('Completed all clicks');
}

// Usage
await sequentialClicks('https://example.com', [
  'nav-home',
  'nav-about',
  'nav-contact'
]);
```

### Example 4: Click with Error Handling

```js
// Click element with error handling
async function safeClick(url, elementId, maxRetries = 3) {
  codebolt.crawler.start();
  codebolt.crawler.goToPage(url);

  await new Promise(resolve => setTimeout(resolve, 2000));

  for (let attempt = 1; attempt <= maxRetries; attempt++) {
    try {
      console.log(`Click attempt ${attempt} for: ${elementId}`);

      // Attempt to click
      await codebolt.crawler.click(elementId);

      console.log('Click successful');
      return { success: true, elementId, attempts: attempt };
    } catch (error) {
      console.error(`Attempt ${attempt} failed:`, error.message);

      if (attempt === maxRetries) {
        return { success: false, error: error.message, elementId };
      }

      // Wait before retry
      await new Promise(resolve => setTimeout(resolve, 1000));
    }
  }
}

// Usage
const result = await safeClick('https://example.com', 'submit-button');
if (result.success) {
  console.log('Successfully clicked after', result.attempts, 'attempts');
} else {
  console.error('Failed to click:', result.error);
}
```

### Example 5: Form Interaction

```js
// Fill and submit a form
async function fillAndSubmitForm(url, formConfig) {
  codebolt.crawler.start();
  codebolt.crawler.goToPage(url);

  await new Promise(resolve => setTimeout(resolve, 2000));

  console.log('Filling form...');

  // Click input field to focus
  if (formConfig.nameField) {
    await codebolt.crawler.click(formConfig.nameField);
    await new Promise(resolve => setTimeout(resolve, 500));
    // Note: Would need type() function to enter text
  }

  if (formConfig.emailField) {
    await codebolt.crawler.click(formConfig.emailField);
    await new Promise(resolve => setTimeout(resolve, 500));
    // Note: Would need type() function to enter text
  }

  // Click submit button
  console.log('Submitting form...');
  await codebolt.crawler.click(formConfig.submitButton);

  // Wait for submission
  await new Promise(resolve => setTimeout(resolve, 2000));

  // Capture result
  codebolt.crawler.screenshot();
  console.log('Form submitted');
}

// Usage
await fillAndSubmitForm('https://example.com/contact', {
  nameField: 'input-name',
  emailField: 'input-email',
  submitButton: 'submit-btn'
});
```

### Example 6: Navigation Clicks

```js
// Navigate using click interactions
async function navigateByClicks(url, navigationPath) {
  codebolt.crawler.start();
  codebolt.crawler.goToPage(url);

  await new Promise(resolve => setTimeout(resolve, 2000));

  console.log('Starting navigation path...');

  for (const [step, elementId] of Object.entries(navigationPath)) {
    console.log(`Navigation step: ${step}`);

    // Click navigation element
    await codebolt.crawler.click(elementId);

    // Wait for navigation/page load
    await new Promise(resolve => setTimeout(resolve, 2500));

    // Capture current state
    codebolt.crawler.screenshot();
  }

  console.log('Navigation path completed');
}

// Usage
await navigateByClicks('https://example.com', {
  'Step 1': 'nav-products',
  'Step 2': 'category-electronics',
  'Step 3': 'product-laptop',
  'Step 4': 'add-to-cart'
});
```

### Explanation

The `codebolt.crawler.click(id)` function simulates a click event on an element identified by its ID. This is essential for interacting with web pages, triggering actions, and navigating through interfaces.

**Key Points:**
- **Element ID**: Uses element ID to locate the target
- **Promise Return**: Returns a promise that resolves when complete
- **Event-Based**: Sends click event via WebSocket
- **Waits for Response**: Waits for crawlResponse event
- **Async Operation**: Click and subsequent page actions take time

**Common Use Cases:**
- Clicking buttons
- Submitting forms
- Navigation interactions
- Triggering JavaScript actions
- Activating UI elements
- Testing user interactions

**Best Practices:**
1. Ensure element exists before clicking
2. Wait for page load before clicking
3. Add appropriate waits after clicking
4. Handle element not found errors
5. Use screenshots for verification
6. Implement retry logic for reliability

**Typical Workflow:**
```js
// 1. Navigate to page
codebolt.crawler.goToPage(url);
await new Promise(resolve => setTimeout(resolve, 2000));

// 2. Click element
await codebolt.crawler.click('button-id');

// 3. Wait for action completion
await new Promise(resolve => setTimeout(resolve, 1500));

// 4. Verify result
codebolt.crawler.screenshot();
```

**Element ID Requirements:**
- Element must have an ID attribute
- ID must match exactly (case-sensitive)
- Element should be visible and clickable
- Element should be in the viewport

**Error Scenarios:**
- Element ID not found
- Element not visible
- Element not clickable
- Page still loading
- Element obscured by other elements

**Advanced Patterns:**
- Sequential clicking workflows
- Form submission sequences
- Navigation path automation
- Multi-step interactions
- Click verification with screenshots

**Wait Times After Click:**
- Button click: 1000ms
- Form submit: 2000ms
- Navigation: 2500ms
- AJAX actions: 1500ms
- Adjust based on action type

**Response Handling:**
```js
try {
  const response = await codebolt.crawler.click('element-id');
  console.log('Click response:', response);
} catch (error) {
  console.error('Click failed:', error);
}
```

**Notes:**
- Only works with elements that have IDs
- Element must be in the viewport (may need to scroll first)
- Some elements may require additional setup
- Click action is asynchronous
- Response comes via crawlResponse event
- Consider element visibility and state
- May need to wait for page stability before clicking
- Combine with scroll() for off-screen elements
- Use screenshots to verify click results