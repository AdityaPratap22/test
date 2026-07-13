# Image Renaming Script
# This script renames all images in each category folder with structured naming

$baseDir = "d:\Decor'em by Sonya Mehta\public\images"

# Function to rename files in a folder
function Rename-Images {
    param(
        [string]$folderPath,
        [string]$prefix,
        [string]$extension
    )
    
    $files = Get-ChildItem -Path $folderPath -File | Where-Object { 
        $_.Extension -match '\.(jpg|jpeg|png|webp)$' -and $_.Name -notmatch '^(bathroom|bedroom|kitchen|living|housepaint)-\d+\.'
    } | Sort-Object Name
    
    $counter = 1
    foreach ($file in $files) {
        $newName = "$prefix-$counter$($file.Extension.ToLower())"
        $newPath = Join-Path $folderPath $newName
        
        # Check if target file already exists
        if (Test-Path $newPath) {
            Write-Host "Skipping: $newName already exists" -ForegroundColor Yellow
        } else {
            Rename-Item -Path $file.FullName -NewName $newName -Force
            Write-Host "Renamed: $($file.Name) -> $newName" -ForegroundColor Green
        }
        $counter++
    }
}

Write-Host "Starting image renaming process..." -ForegroundColor Cyan
Write-Host ""

# Rename bathrooms
Write-Host "Processing bathrooms folder..." -ForegroundColor Cyan
Rename-Images -folderPath "$baseDir\bathrooms" -prefix "bathroom" -extension ".jpg"

# Rename bedrooms
Write-Host "`nProcessing bedrooms folder..." -ForegroundColor Cyan
Rename-Images -folderPath "$baseDir\bedrooms" -prefix "bedroom" -extension ".png"

# Rename kitchens
Write-Host "`nProcessing kitchens folder..." -ForegroundColor Cyan
Rename-Images -folderPath "$baseDir\kitchens" -prefix "kitchen" -extension ".png"

# Rename living
Write-Host "`nProcessing living folder..." -ForegroundColor Cyan
Rename-Images -folderPath "$baseDir\living" -prefix "living" -extension ".png"

# Rename house paint (and rename folder)
Write-Host "`nProcessing House_Paint folder..." -ForegroundColor Cyan
$oldHousePaintDir = "$baseDir\House_Paint"
$newHousePaintDir = "$baseDir\housepaint"

if (Test-Path $oldHousePaintDir) {
    # First rename the images inside
    Rename-Images -folderPath $oldHousePaintDir -prefix "housepaint" -extension ".jpg"
    
    # Then rename the folder itself
    if (Test-Path $newHousePaintDir) {
        Write-Host "Target folder 'housepaint' already exists, skipping folder rename" -ForegroundColor Yellow
    } else {
        Rename-Item -Path $oldHousePaintDir -NewName "housepaint" -Force
        Write-Host "Renamed folder: House_Paint -> housepaint" -ForegroundColor Green
    }
}

# Remove the exe file from living folder
Write-Host "`nRemoving GoogleDriveSetup.exe from living folder..." -ForegroundColor Cyan
$exeFile = "$baseDir\living\GoogleDriveSetup.exe"
if (Test-Path $exeFile) {
    Remove-Item -Path $exeFile -Force
    Write-Host "Removed: GoogleDriveSetup.exe" -ForegroundColor Green
} else {
    Write-Host "GoogleDriveSetup.exe not found (may already be removed)" -ForegroundColor Yellow
}

Write-Host "`n=== Image renaming complete! ===" -ForegroundColor Green
Write-Host ""
Write-Host "Summary:" -ForegroundColor Cyan
Write-Host "- Bathrooms: Renamed to bathroom-1.jpg, bathroom-2.jpg, etc."
Write-Host "- Bedrooms: Renamed to bedroom-1.png, bedroom-2.png, etc."
Write-Host "- Kitchens: Renamed to kitchen-1.png, kitchen-2.png, etc."
Write-Host "- Living: Renamed to living-1.png, living-2.png, etc."
Write-Host "- House Paint: Renamed to housepaint-1.jpg, housepaint-2.jpg, etc."
Write-Host "- Folder 'House_Paint' renamed to 'housepaint'"
