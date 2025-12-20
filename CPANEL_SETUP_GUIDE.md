# cPanel Hosting Setup Guide for imakepdf.site

This guide will help you integrate your cPanel/StackCP hosting with the PDF website for file storage.

## Step 1: Upload PHP Scripts to Your cPanel Hosting

1. Log into your cPanel hosting account
2. Go to **File Manager**
3. Navigate to your `public_html` directory (or your domain's root directory)
4. Create a new folder called `pdf-files` (this will store your PDF files)
5. Upload the following files from the `cpanel-scripts` folder:
   - `upload.php` → to `public_html/upload.php`
   - `delete.php` → to `public_html/delete.php`

## Step 2: Configure API Key

1. Open `upload.php` and `delete.php` in the cPanel File Manager editor
2. Find the line: `define('API_KEY', 'your-secure-api-key-here');`
3. Replace `'your-secure-api-key-here'` with a strong random string (like: `'sk_live_xyz123abc456def789'`)
4. Use the **same API key** in both files
5. Save both files

## Step 3: Set Permissions

1. Right-click on the `pdf-files` folder
2. Set permissions to `755` (or `drwxr-xr-x`)
3. Right-click on `upload.php` and `delete.php`
4. Set permissions to `644` (or `-rw-r--r--`)

## Step 4: Configure Environment Variables in Vercel

Add these environment variables to your Vercel project:

```
STORAGE_PROVIDER=cpanel
CPANEL_UPLOAD_URL=https://yourdomain.com/upload.php
CPANEL_API_KEY=sk_live_xyz123abc456def789
CPANEL_PUBLIC_URL=https://yourdomain.com/pdf-files
```

Replace:
- `yourdomain.com` with your actual cPanel domain
- `sk_live_xyz123abc456def789` with the API key you set in Step 2

## Step 5: Test the Integration

1. Deploy your changes to Vercel
2. Try uploading and processing a PDF file
3. Check that files appear in your cPanel `pdf-files` directory
4. Verify that the download links work

## Troubleshooting

**Files not uploading:**
- Check that `upload.php` has the correct permissions (644)
- Verify the API key matches in both the environment variables and PHP files
- Check PHP error logs in cPanel

**Files not accessible:**
- Ensure the `pdf-files` folder is publicly accessible
- Check that your domain's SSL certificate is working
- Verify the `CPANEL_PUBLIC_URL` environment variable is correct

**Delete not working:**
- Check `delete.php` permissions (644)
- Verify the API key matches
- Check that the file path is correct

## Alternative: Using FTP Instead of HTTP Upload

If you prefer FTP, you can modify the `CpanelStorageAdapter` to use the `basic-ftp` package instead of HTTP uploads. This requires:

1. Installing `basic-ftp`: Add to package.json dependencies
2. Using FTP credentials instead of API key
3. Updating the adapter to use FTP commands

Let me know if you'd like me to implement the FTP version!

## Security Notes

- Keep your API key secret and never commit it to version control
- Consider adding IP whitelisting in your PHP scripts
- Use HTTPS for all file transfers
- Regularly update your cPanel PHP version
- Set up automatic file cleanup for old files (add to cron jobs)
```

```env file="" isHidden
