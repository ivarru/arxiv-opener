** Beware: This is an experiment in vibe coding. Use at your own risk. **

# arXiv Abstract Opener

A simple Firefox extension that adds context menu options to switch between arXiv abstract and PDF pages.

## Features

- When you right-click on an arXiv PDF link (e.g., `https://arxiv.org/pdf/2301.12345.pdf`), you'll see an "Open arXiv abstract" option that opens the corresponding abstract page (e.g., `https://arxiv.org/abs/2301.12345`)
- When you right-click on an arXiv abstract link (e.g., `https://arxiv.org/abs/2301.12345`), you'll see an "Open arXiv PDF" option that opens the corresponding PDF (e.g., `https://arxiv.org/pdf/2301.12345.pdf`)

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

1. Navigate to any page with arXiv links (PDF or abstract)
2. Right-click on an arXiv link
3. Select either "Open arXiv abstract" or "Open arXiv PDF" from the context menu
4. The corresponding page opens in a new tab
