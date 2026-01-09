const puppeteer = require('puppeteer');
const fs = require('fs');
const path = require('path');
const { promisify } = require('util');
const stat = promisify(fs.stat);

exports.html2pdf = async function (options) {
  let browser;

  try {
    // Parse options using Wappler's parsing methods
    const html = this.parseRequired(options.html, 'string', 'HTML content is required');
    const filename = this.parseOptional(options.filename, 'string', 'document.pdf');
    const format = this.parseOptional(options.format, 'string', 'A4');
    const landscape = this.parseOptional(options.landscape, 'boolean', false);
    const marginTop = this.parseOptional(options.marginTop, 'string', '10mm');
    const marginRight = this.parseOptional(options.marginRight, 'string', '10mm');
    const marginBottom = this.parseOptional(options.marginBottom, 'string', '10mm');
    const marginLeft = this.parseOptional(options.marginLeft, 'string', '10mm');
    const displayHeaderFooter = this.parseOptional(options.displayHeaderFooter, 'boolean', false);
    const headerTemplate = this.parseOptional(options.headerTemplate, 'string', '');
    const footerTemplate = this.parseOptional(options.footerTemplate, 'string', '');
    const printBackground = this.parseOptional(options.printBackground, 'boolean', true);
    const scale = this.parseOptional(options.scale, 'number', 1);
    const preferCSSPageSize = this.parseOptional(options.preferCSSPageSize, 'boolean', false);
    const waitForSelector = this.parseOptional(options.waitForSelector, 'string', null);
    const waitTime = this.parseOptional(options.waitTime, 'number', 0);

    // Parse optional custom output path (relative to project root)
    const customPath = this.parseOptional(options.path, 'string', null);

    let outputPath;
    let relativePath;

    if (customPath) {
      // Clean the custom path and ensure it doesn't escape project directory
      const cleanPath = customPath.replace(/^\/+/, '').replace(/\.\./g, '');

      // Construct the final absolute path within project directory
      const projectDir = process.cwd();
      const customDir = path.join(projectDir, path.dirname(cleanPath));

      // Create custom directory structure if it doesn't exist
      if (!fs.existsSync(customDir)) {
        fs.mkdirSync(customDir, { recursive: true });
      }

      outputPath = path.join(customDir, path.basename(cleanPath));
      relativePath = '/' + cleanPath.replace(/\\/g, '/');
    } else {
      // Create temp output directory if it doesn't exist
      const tempDir = path.join(process.cwd(), 'temp', 'pdfs');
      if (!fs.existsSync(tempDir)) {
        fs.mkdirSync(tempDir, { recursive: true });
      }

      // Generate unique filename
      const timestamp = Date.now();
      const uniqueFilename = filename.includes('.pdf')
        ? filename.replace('.pdf', `_${timestamp}.pdf`)
        : `${filename}_${timestamp}.pdf`;

      outputPath = path.join(tempDir, uniqueFilename);
      relativePath = `/temp/pdfs/${uniqueFilename}`;
    }

    browser = await puppeteer.launch({
      headless: 'new',
      args: [
        '--no-sandbox',
        '--disable-setuid-sandbox',
        '--disable-dev-shm-usage',
        '--disable-gpu'
      ]
    });

    const page = await browser.newPage();

    // Set content
    await page.setContent(html, {
      waitUntil: 'networkidle0'
    });

    // Wait for selector if specified
    if (waitForSelector) {
      await page.waitForSelector(waitForSelector, { timeout: 30000 });
    }

    // Wait additional time if specified
    if (waitTime > 0) {
      await new Promise(resolve => setTimeout(resolve, waitTime));
    }

    // PDF options
    const pdfOptions = {
      path: outputPath,
      format,
      landscape,
      margin: {
        top: marginTop,
        right: marginRight,
        bottom: marginBottom,
        left: marginLeft
      },
      printBackground,
      scale,
      preferCSSPageSize
    };

    // Add header/footer if enabled
    if (displayHeaderFooter) {
      pdfOptions.displayHeaderFooter = true;
      pdfOptions.headerTemplate = headerTemplate || '<div></div>';
      pdfOptions.footerTemplate = footerTemplate || '<div></div>';
    }

    // Generate PDF
    await page.pdf(pdfOptions);

    // Get file stats
    const stats = await stat(outputPath);

    // Return relative path for web access
    return {
      path: relativePath,
      filename: path.basename(outputPath),
      size: stats.size
    };

  } catch (error) {
    console.error('PDF Generation Error:', error);
    throw new Error(`Failed to generate PDF: ${error.message}`);
  } finally {
    if (browser) {
      await browser.close();
    }
  }
};
