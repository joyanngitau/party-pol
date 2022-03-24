# pol-party
Political Party Alliance App
## Getting Started (Windows)
### Prerequisites
You will need:
1. Git - get it from [here](https://github.com/git-for-windows/git/releases/download/v2.35.1.windows.2/Git-2.35.1.2-64-bit.exe) or https://git-scm.com/download/win and install it in your system. Use the default setting unless you know otherwise.

1. Python - get it from [here](https://www.python.org/ftp/python/3.10.2/python-3.10.2-amd64.exe) or the microsoft store at https://www.microsoft.com/store/productId/9PJPW5LDXLZ5 make sure to add python to path during installation be careful to select that checkbox when running the installation app.

### Create new Folder Using CMD or Powershel AKA Windows Terminal

1. Create a new folder anywhere or where you store your projects - even the desktop is fine.
1. Open that folder in the terminal or cmd by holding down the `shift` key and right clicking in the empty folder in windows 10 and selecting `open in Powershell` or it might be something like `open in CMD window`

Or simply right clicking (on windows 11) and selecting Open in Terminal

PS if this doesn't work for you find a way to `cd` into it from the root folder of the CMD program.

You can: 
  1. Search for CMD on the windwos search on the start menu and run it. By default it usually is pointed to your home directory like so

![Terminal Image Snip](https://github.com/kgarchie/Valentines/blob/main/static/media/Screenshot%202022-02-14%20073153.png "PSH image")

  or:
  2. Press the key combination <kbd>![Windows Key][winlogo]</kbd> + <kbd>R</kbd> and typing in CMD in the pop up window.

[winlogo]: http://i.stack.imgur.com/Rfuw7.png

if the folder is on your desktop type 

`cd desktop`

then

`cd <your folder name>`

If you used more than one name with spaces be sure to add double quotation marks around it eg `cd "project folder"` or it won't work


### Create a Virtual ENVironment (venv)

1. **Create a virtual environment using python**

Type in `python -m venv venv` to create a virtual environment called `venv` in the folder.
The second venv parameter can be replaced with anything eg `python -m venv maryvenv` but if it's your first time just use as is (venv).

2. **Activate your virtual environment**

Type in `source venv/bin/activate` PS: It is case sensitive and venv is the name of your virtual environment aka venv if you used another name like `myvenv` or `virtvenv` or `maryvenv` etc it'll be eg `maryvenv/Scripts/activate`

You may get an error -- something to do with `running scripts is not allowed on this system`. Don't worry, it's just a security mechanism to prevent unsigned scripts from running. We can solve it by opening another CMD window as administrator. On the windows search results, just right click it and select run as administrator.

On the new CMD window type in `Set-ExecutionPolicy RemoteSigned`

The Set-ExecutionPolicy cmdlet changes PowerShell/CMD execution policies for Windows computers. For more information, see [about_Execution_Policies](https://docs.microsoft.com/en-us/powershell/module/microsoft.powershell.core/about/about_execution_policies?view=powershell-7.2).

3. **Install the required libraries as specified in [requirements.txt](https://github.com/kgarchie/Valentines/blob/main/requirements.txt)**

Type in `pip install -r requirements.txt`. This tells python to install everything in that file. You will need an internet connection

4. **Clone the repository**

Type in `git clone https://github.com/kgarchie/party-pol.git .` to clone this repository. <u>Don't forget the dot at the end. It tells git to store the files in this current folder instead of creating another folder for them in here.</u>

5. **Make migrations**

Type in `python manage.py makemigrations`. This initialises the database if any.

6. **Migrate**

Type in `python manage.py migrate`. This creates tables, rows, etc in the database.

7. **Run Server**

Type in `python manage.py runserver`. This runs the local development server.

8. **Open your browser and type in 127.0.0.1:8000 to see the project**

All Done!
