# Slides.js

Dead simple slides using minimal amount JavaScript and CSS.

# Usage

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>My Presentation</title>
  <script src="slides.js"></script>
</head>
<body>

<section>
  <h1>Hello World</h1>
  <p>My first slide</p>
</section>

</body>
</html>
```

## Usage

### Basic Slide

```html
<section>
  <h1>Slide Title</h1>
  <p>Slide content goes here</p>
</section>
```

### Slide with Header and Footer

```html
<section>
  <header>Chapter 1</header>
  <h2>Main Content</h2>
  <p>Your content here</p>
  <footer>© 2024 Your Name</footer>
</section>
```

### Code Syntax Highlighting

```html
<section>
  <h2>Code Example</h2>
  <pre><code class="language-javascript">
function hello() {
  console.log('Hello World!');
}
  </code></pre>
</section>
```

Supported languages: javascript, python, java, css, html, bash, and many more via Highlight.js

### Two Column Layout

```html
<section>
  <h2>Columns</h2>
  <aside>
    <div>
      <h3>Left Column</h3>
      <p>Content here</p>
    </div>
    <div>
      <h3>Right Column</h3>
      <p>Content here</p>
    </div>
  </aside>
</section>
```

### Three Column Layout

```html
<section>
  <aside>
    <div>Column 1</div>
    <div>Column 2</div>
    <div>Column 3</div>
  </aside>
</section>
```

## Keyboard Controls

- `Space` / `Arrow Right` / `Arrow Down` - Next slide
- `Arrow Left` / `Arrow Up` - Previous slide

## HTML5 Tags Used

- `<section>` - Each slide
- `<header>` - Optional top content
- `<footer>` - Optional bottom content
- `<aside>` - Multi-column layouts
- `<nav>` - Slide counter (auto-generated)

## Customization

Edit the CSS in `slides.js` to customize colors, fonts, and spacing. The framework uses a simple alternating dark/light theme by default.

## License

Free to use and modify.
