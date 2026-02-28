# Step 1: Clean build cache
Remove-Item -Recurse -Force .next -ErrorAction SilentlyContinue

# Step 2: Verify the file
Get-Content app/services/page.tsx -First 5

# Step 3: Add and commit
git add .
git commit -m "Fix: Add use client directive to services page"

# Step 4: Push to git
git push origin main
