# PowerShell script to rename .js to .ts and .jsx to .tsx
# Recursive conversion of all .js and .jsx files within the script's directory and its subdirectories

# Set the path to the directory of the current script
$directoryPath = $PSScriptRoot

# Get all .js and .jsx files in the directory and subdirectories
Get-ChildItem -Path $directoryPath -Recurse -File -Include *.js, *.jsx | ForEach-Object {
    $newExtension = if ($_.Extension -eq ".js") { ".ts" } else { ".tsx" }
    $newFileName = $_.DirectoryName + "\" + $_.BaseName + $newExtension

    # Rename the file
    Rename-Item -Path $_.FullName -NewName $newFileName -Force
    Write-Output "Renamed $($_.FullName) to $newFileName"
}
