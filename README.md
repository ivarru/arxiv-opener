** Beware: This is an experiment in vibe coding. Use at your own risk. **

# arXiv Abstract Opener

A simple Firefox extension that adds a context menu option to open arXiv abstract pages from PDF links.

## Features

When you right-click on an arXiv PDF link (e.g., `https://arxiv.org/pdf/2301.12345.pdf`), you'll see an "Open arXiv Abstract" option that opens the corresponding abstract page (e.g., `https://arxiv.org/abs/2301.12345`).

## Installation

### From Source

1. Open Firefox and navigate to `about:debugging`
2. Click "This Firefox" in the left sidebar
3. Click "Load Temporary Add-on"
4. Navigate to the extension directory and select `manifest.json`

### Manual Installation (unsigned)

For permanent installation without signing:
1. Convert the SVG icon to PNG (48x48px) - name it `icon.png`
2. Zip all files together
3. Install as a temporary extension via `about:debugging`

Note: For permanent installation in release Firefox, the extension needs to be signed by Mozilla.

## Files

- `manifest.json` - Extension configuration
- `background.js` - Context menu logic
- `icon.svg` - Extension icon (convert to PNG for use)

## Usage

1. Navigate to any page with arXiv PDF links
2. Right-click on an arXiv PDF link
3. Select "Open arXiv Abstract" from the context menu
4. The abstract page opens in a new tab
