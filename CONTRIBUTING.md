# Contributing to imakepdf.site

Thank you for considering contributing to imakepdf.site! We welcome contributions from the community.

## How to Contribute

### Reporting Bugs

1. Check if the bug has already been reported in [Issues](https://github.com/yourusername/imakepdf-site/issues)
2. If not, create a new issue with:
   - Clear title and description
   - Steps to reproduce
   - Expected vs actual behavior
   - Screenshots if applicable
   - Your environment (browser, OS, etc.)

### Suggesting Features

1. Check existing feature requests in Issues
2. Create a new issue with the label "enhancement"
3. Describe the feature and its use case
4. Explain why it would benefit users

### Code Contributions

#### Setup Development Environment

1. Fork the repository
2. Clone your fork:
```bash
git clone https://github.com/yourusername/imakepdf-site.git
cd imakepdf-site
```

3. Install dependencies:
```bash
pnpm install
```

4. Create a branch:
```bash
git checkout -b feature/your-feature-name
```

#### Coding Standards

- Use TypeScript for all new code
- Follow the existing code style
- Use Prettier for formatting
- Write meaningful commit messages
- Add comments for complex logic
- Keep functions small and focused

#### Testing

- Test your changes thoroughly
- Check all affected PDF tools
- Test on different browsers
- Verify mobile responsiveness

#### Pull Request Process

1. Update documentation if needed
2. Ensure all tests pass
3. Update the README.md if adding features
4. Create a pull request with:
   - Clear title describing the change
   - Detailed description of what and why
   - Reference any related issues
   - Screenshots for UI changes

5. Wait for review and address feedback

### Development Guidelines

#### Adding a New PDF Tool

1. Create the page in `app/[tool-name]/page.tsx`
2. Create the API route in `app/api/pdf/[tool-name]/route.ts`
3. Add the tool card to the homepage
4. Update the sitemap
5. Add documentation

#### Adding a Blog Post

1. Create markdown file in `app/blog/[slug]/`
2. Follow SEO best practices
3. Include relevant keywords
4. Add internal links to tools

## Questions?

Feel free to open an issue with the "question" label if you need help or clarification.

Thank you for contributing!
