# YouTube Cleaner Firefox Extension

A Firefox extension that automatically removes unwanted elements from YouTube pages including rich section renderers and Shorts links.

## Features

- Automatically removes `ytd-rich-section-renderer` elements
- Removes Shorts links from the navigation
- Works on all YouTube pages
- Handles dynamically loaded content
- Lightweight and fast

## Installation

### Temporary Installation (for Development)

1. Clone this repository or download the files:
```bash
git clone https://github.com/ssghait007/cleanyt
cd cleanyt
```

2. Open Firefox and go to `about:debugging`

3. Click on "This Firefox" in the left sidebar

4. Click "Load Temporary Add-on"

5. Navigate to your extension directory and select `manifest.json`

### Permanent Installation

The extension can be installed permanently from the Firefox Add-ons store (link to be added after submission).

## Development

### Project Structure

```
youtube-cleaner/
├── manifest.json        # Extension configuration
├── cleaner.js          # Main cleaning script
├── icon48.png          # Extension icon (48x48)
├── icon96.png          # Extension icon (96x96)
└── README.md           # This file
```

### Files Description

#### manifest.json
Configuration file that defines the extension's properties, permissions, and behavior.

```json
{
    "manifest_version": 2,
    "name": "YouTube Cleaner",
    "version": "1.0",
    "description": "Removes unwanted elements from YouTube"
    // ... (see full file in extension)
}
```

#### cleaner.js
Contains the main cleaning functionality and mutation observer for handling dynamic content.

### Creating Icons

1. Create two square PNG images:
   - `icon48.png`: 48x48 pixels
   - `icon96.png`: 96x96 pixels

2. Place them in the root directory of the extension

## Building for Production

1. Create a ZIP file containing all the extension files:
```bash
zip -r youtube-cleaner.zip * -x ".*" -x "__MACOSX"
```

2. Sign the extension through [Mozilla's Add-on Developer Hub](https://addons.mozilla.org/developers/)

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/new-feature`)
3. Commit your changes (`git commit -am 'Add new feature'`)
4. Push to the branch (`git push origin feature/new-feature`)
5. Create a Pull Request

## Testing

1. Load the extension using the temporary installation steps above
2. Visit YouTube and verify that:
   - Rich section elements are removed
   - Shorts links are removed
   - The cleaning persists when navigating between pages
   - No console errors are present

## Debugging

1. Open Firefox Developer Tools (F12)
2. Go to the Console tab
3. Check for any error messages
4. Use `about:debugging` to reload or debug the extension

## Common Issues

- **Extension not working**: Make sure you have the correct permissions in `manifest.json`
- **Elements reappearing**: The mutation observer should handle this, but refresh the page if needed
- **Performance issues**: The cleaning function is optimized but reports any performance problems

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Support

For support, please:
1. Check existing issues on GitHub
2. Create a new issue with:
   - Firefox version
   - Extension version
   - Clear description of the problem
   - Steps to reproduce

## Acknowledgments

- Thanks to Mozilla for their [extension documentation](https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons)
- YouTube's DOM structure reference

## Version History

- 1.0.0 (2024-03-16)
  - Initial release
  - Basic cleaning functionality
  - Mutation observer implementation