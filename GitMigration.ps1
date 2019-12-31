Param(
[Parameter(Mandatory=$false,Position=0)]
[string]$filePath="",
[Parameter(Mandatory=$true,Position=1)]
[string]$gitPath=""
)

Function PushToGit(){
        Set-Location -Path $FilePath
        git init
        git add .
        git commit -m 'SVNtoGitMigration' 
        git remote set-url master $gitPath   
      # git remote add master $gitPath    
       # git remote -v
       git config --global push.default current
       #git push -f --set-upstream origin master
       git pull
       git push  master
}


PushToGit