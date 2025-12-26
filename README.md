# imakepdf.site - Professional PDF Tools

A comprehensive, production-ready web application for PDF manipulation and management. Convert, merge, split, compress, and edit PDF files online with 29+ powerful tools.

## Features

### 29 PDF Tools

**Conversion Tools:**
- PDF to Word - Convert PDF to editable DOC/DOCX
- PDF to PowerPoint - Export to PPT/PPTX presentations
- PDF to Excel - Extract data to XLS/XLSX spreadsheets
- PDF to JPG - Convert pages to images
- Word to PDF - Create PDFs from Word documents
- PowerPoint to PDF - Convert presentations to PDF
- Excel to PDF - Generate PDFs from spreadsheets
- JPG to PDF - Combine images into PDF
- HTML to PDF - Convert web pages to PDF

**PDF Management:**
- Merge PDF - Combine multiple PDFs into one
- Split PDF - Extract specific pages
- Compress PDF - Reduce file size
- Rotate PDF - Rotate pages 90/180/270 degrees
- Organize PDF - Reorder pages
- Page Numbers - Add page numbering
- Repair PDF - Fix corrupted PDFs

**Editing & Security:**
- Edit PDF - Add text, images, annotations
- Sign PDF - Digital signatures
- Watermark - Add text/image watermarks
- Protect PDF - Add password protection
- Unlock PDF - Remove passwords
- Redact PDF - Permanently remove sensitive info
- Crop PDF - Trim page margins

**Advanced Tools:**
- OCR PDF - Extract text from scanned PDFs
- PDF to PDF/A - Archive-compliant conversion
- Compare PDF - Side-by-side comparison
- Scan to PDF - Mobile document scanning
- Generate PDF - Create PDFs from templates

## Tech Stack

### Frontend
- **Framework:** Next.js 16.0.10 with App Router
- **UI Library:** React 19.2.0
- **Styling:** Tailwind CSS 4.1.9 + Shadcn/ui
- **Icons:** Lucide React
- **Forms:** React Hook Form + Zod validation
- **File Upload:** React Dropzone
- **Notifications:** Sonner

### Backend
- **PDF Processing:** pdf-lib, pdfjs-dist
- **Image Processing:** Sharp, Canvas
- **Authentication:** Supabase Auth
- **Database:** Supabase (PostgreSQL)
- **Storage:** Vercel Blob / cPanel / External API

### Analytics & Monitoring
- Vercel Analytics
- SEO Optimized (Sitemap, Robots.txt, Structured Data)

## Getting Started

### Prerequisites

- Node.js 18+ or higher
- pnpm (recommended) or npm
- Supabase account
- Vercel account (for deployment)

### Installation

1. **Clone the repository:**
```bash
git clone https://github.com/yourusername/imakepdf-site.git
cd imakepdf-site
```

2. **Install dependencies:**
```bash
pnpm install
# or
npm install
```

3. **Set up environment variables:**

Copy `.env.example` to `.env.local`:
```bash
cp .env.example .env.local
```

Fill in your environment variables:
```env
# Supabase
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
SUPABASE_SERVICE_ROLE_KEY=your_service_role_key

# Storage (choose one)
STORAGE_PROVIDER=vercel-blob  # or 'cpanel' or 'external'

# Vercel Blob (if using)
BLOB_READ_WRITE_TOKEN=your_blob_token

# cPanel (if using)
CPANEL_UPLOAD_URL=https://yourdomain.com/pdf-api/upload.php
CPANEL_API_KEY=your_secure_api_key
CPANEL_PUBLIC_URL=https://yourdomain.com/pdf-files

# Database
DATABASE_URL=your_database_url
```

4. **Run database migrations:**

Execute the SQL script in `scripts/001-setup-database.sql` in your Supabase SQL editor.

5. **Run the development server:**
```bash
pnpm dev
# or
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Storage Options

### Option 1: Vercel Blob (Default)
- Automatic setup with Vercel deployment
- 500GB included with Pro plan
- No additional configuration needed

### Option 2: cPanel Hosting
1. Upload PHP scripts from `cpanel-scripts/` to your hosting
2. Configure environment variables
3. See `CPANEL_SETUP_GUIDE.md` for detailed instructions

### Option 3: External Storage API
- Use any S3-compatible storage
- Configure `EXTERNAL_STORAGE_URL` and `EXTERNAL_STORAGE_API_KEY`

## Deployment

### Deploy to Vercel (Recommended)

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/yourusername/imakepdf-site)

1. Click the button above or run:
```bash
vercel
```

2. Configure environment variables in Vercel dashboard
3. Connect Supabase integration
4. Enable Blob storage

### Deploy to Other Platforms

The app can be deployed to any platform that supports Next.js:
- Netlify
- Railway
- Render
- AWS Amplify

## Project Structure

```
imakepdf-site/
├── app/                    # Next.js App Router
│   ├── api/               # API routes
│   │   ├── files/        # File management
│   │   └── pdf/          # PDF processing endpoints
│   ├── blog/             # Blog pages
│   ├── auth/             # Authentication pages
│   ├── [tool-name]/      # Individual tool pages
│   └── layout.tsx        # Root layout
├── components/            # React components
│   ├── ui/               # Shadcn/ui components
│   ├── header.tsx
│   ├── footer.tsx
│   └── pdf-uploader.tsx
├── lib/                   # Utilities
│   ├── supabase/         # Supabase clients
│   ├── storage.ts        # Storage abstraction
│   ├── pdf-utils.ts      # PDF utilities
│   └── utils.ts          # General utilities
├── cpanel-scripts/        # cPanel hosting scripts
├── public/               # Static assets
└── scripts/              # Database migrations
```

## API Routes

All PDF processing happens server-side via API routes:

- `POST /api/pdf/merge` - Merge multiple PDFs
- `POST /api/pdf/split` - Split PDF into pages
- `POST /api/pdf/compress` - Compress PDF file size
- `POST /api/pdf/convert` - Convert between formats
- `POST /api/pdf/edit` - Edit PDF content
- `POST /api/pdf/protect` - Add password protection
- `POST /api/pdf/watermark` - Add watermarks
- And 22 more endpoints...

## SEO Features

- Dynamic sitemap generation for all 29 tools
- Structured data (JSON-LD) for search engines
- Optimized meta tags and Open Graph
- 15+ SEO-optimized blog posts
- Google-friendly robots.txt
- Mobile-responsive design

## Security

- Server-side PDF processing (never in browser)
- Row Level Security (RLS) with Supabase
- Automatic file deletion after 24 hours
- Password protection for PDFs
- Secure file upload validation
- API key authentication for external storage

## Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Support

- **Website:** [imakepdf.site](https://imakepdf.site)
- **Email:** support@imakepdf.site
- **Documentation:** See individual tool pages for usage guides

## Acknowledgments

- Built with [Next.js](https://nextjs.org/)
- UI components from [Shadcn/ui](https://ui.shadcn.com/)
- PDF processing by [pdf-lib](https://pdf-lib.js.org/)
- Hosted on [Vercel](https://vercel.com)
- Database by [Supabase](https://supabase.com)

---

Made with ❤️ for the PDF community
