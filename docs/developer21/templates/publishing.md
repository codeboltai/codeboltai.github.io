---
sidebar_position: 4
sidebar_label: Publishing Templates
---

# Publishing Templates

Once you've created and tested your Codebolt template, you can share it with the community by publishing it to the Codebolt registry. This guide covers the publishing process through both the Codebolt Portal and CLI.

## Prerequisites

Before publishing your template, ensure you have:

- **Completed Template**: A fully functional template with all required files
- **Codebolt Account**: Active account on [portal.codebolt.ai](https://portal.codebolt.ai)
- **GitHub Repository**: Public repository hosting your template
- **Valid Configuration**: Properly configured `codeboltconfig.yaml`
- **Documentation**: Comprehensive README and documentation
- **Testing**: Template has been tested and validated

## Publishing Methods

### Method 1: Codebolt Portal (Recommended)

The Codebolt Portal provides a user-friendly interface for publishing templates.

#### Step 1: Access the Portal

1. Navigate to [portal.codebolt.ai](https://portal.codebolt.ai)
2. Sign in to your Codebolt account
3. Go to the Templates section
4. Click "Add Templates" button

#### Step 2: Fill Template Information

Complete the template submission form:

**Basic Information:**
- **Template Title**: Descriptive name for your template
- **Description**: Brief explanation of what the template provides
- **Template Type**: Select "Template" or "App" based on your template type
- **URL**: GitHub repository URL or deployment URL

**Template Icon:**
- Upload an icon/logo for your template
- Recommended size: 256x256 pixels
- Supported formats: PNG, JPG, SVG

#### Step 3: Submit for Review

1. Review all information for accuracy
2. Click "Add" to submit your template
3. Your template will be reviewed by the Codebolt team
4. You'll receive notification once approved

### Method 2: CLI Publishing

Use the Codebolt CLI for programmatic template publishing.

#### Step 1: Prepare Your Template

Ensure your template is ready:

```bash
# Navigate to your template directory
cd my-awesome-template

# Validate template structure
npm run validate-template

# Test template functionality
npm install
npm run dev
npm run build
```

#### Step 2: Login to CLI

```bash
# Login to your Codebolt account
npx codebolt-cli login

# Verify authentication
npx codebolt-cli whoami
```

#### Step 3: Publish Template

```bash
# Publish template to registry
npx codebolt-cli publish-template

# Or specify template directory
npx codebolt-cli publish-template ./path/to/template
```

The CLI will:
1. Validate your `codeboltconfig.yaml`
2. Package your template
3. Upload to the Codebolt registry
4. Provide a confirmation with template ID

## Template Preparation Checklist

### Required Files

Ensure your template includes:

- ✅ `codeboltconfig.yaml` - Template configuration
- ✅ `package.json` - Dependencies and scripts
- ✅ `README.md` - Comprehensive documentation
- ✅ `.env.example` - Environment variable template
- ✅ `.gitignore` - Git ignore rules
- ✅ Source code files in `src/` directory

### Optional but Recommended

- ✅ `LICENSE` - License file (MIT recommended)
- ✅ `CHANGELOG.md` - Version history
- ✅ `CONTRIBUTING.md` - Contribution guidelines
- ✅ `.github/workflows/` - CI/CD workflows
- ✅ `docs/` - Additional documentation
- ✅ `scripts/` - Setup and build scripts

### Quality Checklist

**Code Quality:**
- ✅ Code follows best practices and conventions
- ✅ No hardcoded secrets or sensitive information
- ✅ Proper error handling and validation
- ✅ Clean, readable, and well-commented code

**Documentation:**
- ✅ Clear and comprehensive README
- ✅ Installation and setup instructions
- ✅ Usage examples and screenshots
- ✅ API documentation (if applicable)
- ✅ Troubleshooting guide

**Configuration:**
- ✅ Valid `codeboltconfig.yaml` with all required fields
- ✅ Proper semantic versioning
- ✅ Accurate metadata and descriptions
- ✅ Environment variables documented

**Testing:**
- ✅ Template installs without errors
- ✅ All scripts work as expected
- ✅ Development server starts successfully
- ✅ Build process completes without issues

## Template Metadata Best Practices

### Naming Conventions

**Template Name:**
- Use descriptive, clear names
- Include key technologies (e.g., "React TypeScript Starter")
- Avoid generic names like "Template" or "Starter"
- Keep it concise but informative

**Unique ID:**
- Format: `username/template-name`
- Use lowercase with hyphens
- Example: `johndoe/react-typescript-starter`

### Description Guidelines

Write compelling descriptions that:
- Explain what the template creates
- Highlight key features and technologies
- Mention target use cases
- Keep it under 200 characters for listings

**Good Example:**
```
Modern React application with TypeScript, Vite, Tailwind CSS, and testing setup. Perfect for building scalable web applications with best practices built-in.
```

**Poor Example:**
```
A template for React apps.
```

### Icon and Branding

**Icon Requirements:**
- Size: 256x256 pixels minimum
- Format: PNG, JPG, or SVG
- Clear and recognizable at small sizes
- Represents the template's purpose or technology

**Branding Tips:**
- Use technology logos when appropriate
- Create custom icons for unique templates
- Ensure good contrast and visibility
- Avoid copyrighted images

## Version Management

### Semantic Versioning

Follow semantic versioning for your templates:

- **Major (1.0.0)**: Breaking changes or complete rewrites
- **Minor (1.1.0)**: New features or significant improvements
- **Patch (1.1.1)**: Bug fixes and small improvements

### Update Process

When updating your template:

1. **Update Version**: Increment version in `codeboltconfig.yaml`
2. **Update Changelog**: Document changes in `CHANGELOG.md`
3. **Test Changes**: Thoroughly test all modifications
4. **Republish**: Submit updated template through portal or CLI

### Version History Example

```markdown
# Changelog

## [2.1.0] - 2024-01-15
### Added
- TypeScript support for better type safety
- Tailwind CSS for styling
- Vitest for testing framework

### Changed
- Updated React to version 18
- Improved project structure
- Enhanced documentation

### Fixed
- Build script issues on Windows
- Environment variable loading

## [2.0.0] - 2023-12-01
### Added
- Complete rewrite with Vite
- Modern React patterns and hooks
- Comprehensive testing setup

### Breaking Changes
- Removed Create React App dependency
- Changed build output directory
- Updated environment variable names
```

## Community Guidelines

### Template Quality Standards

**Code Standards:**
- Follow language and framework conventions
- Use consistent formatting and style
- Include proper error handling
- Implement security best practices

**Documentation Standards:**
- Provide clear setup instructions
- Include usage examples
- Document all configuration options
- Add troubleshooting information

**Maintenance Standards:**
- Keep dependencies up to date
- Respond to issues and questions
- Accept community contributions
- Maintain backward compatibility when possible

### Community Interaction

**Best Practices:**
- Respond to user feedback promptly
- Accept and review pull requests
- Provide helpful issue responses
- Share knowledge and improvements

**Template Promotion:**
- Share on social media and developer communities
- Write blog posts about your template
- Present at meetups or conferences
- Collaborate with other developers

## Template Discovery and SEO

### Improving Discoverability

**Keywords and Tags:**
- Use relevant technology keywords
- Include framework and library names
- Add use case keywords (e.g., "dashboard", "e-commerce")
- Consider trending technologies

**GitHub Optimization:**
- Use descriptive repository names
- Add comprehensive README
- Include relevant topics/tags
- Maintain active development

**Portal Optimization:**
- Choose appropriate template category
- Use clear, searchable descriptions
- Upload attractive icons
- Maintain high-quality documentation

## Analytics and Feedback

### Tracking Template Usage

Monitor your template's performance:

**Portal Analytics:**
- View download/usage statistics
- Monitor user ratings and reviews
- Track template popularity trends
- Analyze user feedback

**GitHub Insights:**
- Monitor repository stars and forks
- Track issue and pull request activity
- Analyze traffic and clone statistics
- Review community contributions

### Gathering Feedback

**Feedback Channels:**
- GitHub issues for bug reports
- Discussions for feature requests
- Social media for general feedback
- Direct messages for private concerns

**Improvement Process:**
1. Collect and analyze feedback
2. Prioritize improvements and fixes
3. Implement changes and test thoroughly
4. Update documentation and version
5. Republish updated template

## Troubleshooting Publishing Issues

### Common Problems

**Authentication Issues:**
```bash
# Re-login to CLI
npx codebolt-cli logout
npx codebolt-cli login

# Verify credentials
npx codebolt-cli whoami
```

**Configuration Validation Errors:**
```bash
# Validate YAML syntax
npx js-yaml codeboltconfig.yaml

# Check required fields
node scripts/validate-config.js
```

**Upload Failures:**
- Check internet connection
- Verify file sizes aren't too large
- Ensure all required files are present
- Try publishing again after a few minutes

**Template Rejection:**
- Review quality guidelines
- Fix any identified issues
- Update documentation
- Resubmit for review

### Getting Help

**Support Channels:**
- **Documentation**: [codeboltai.github.io](https://codeboltai.github.io)
- **Portal Support**: Contact form on portal.codebolt.ai
- **Community**: Discord server for community help
- **GitHub**: Issues on the Codebolt repositories

## Post-Publishing

### Template Maintenance

**Regular Updates:**
- Keep dependencies updated
- Fix reported bugs promptly
- Add new features based on feedback
- Maintain compatibility with latest tools

**Community Engagement:**
- Respond to issues and questions
- Review and merge pull requests
- Share updates and improvements
- Collaborate with other template creators

### Success Metrics

**Track Your Template's Success:**
- Download/usage statistics
- Community feedback and ratings
- GitHub stars and forks
- Issue resolution time
- Community contributions

## Next Steps

After publishing your template:

1. **[Template Best Practices](./best-practices.md)** - Learn advanced template patterns
2. **[Template Examples](./examples.md)** - Study successful template implementations
3. **[Best Practices](./best-practices.md)** - Understand community standards

---

Publishing your template is just the beginning. Engage with the community, gather feedback, and continuously improve your template to provide maximum value to developers worldwide. 