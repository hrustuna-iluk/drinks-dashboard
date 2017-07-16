### Set up project



mkdir drinks-dashboard

cd drinks-dashboard

git clone https://github.com/hrustuna-iluk/drinks-dashboard.git



###To set up backend



install python 3.4.*

pip install virtualenv

virtualenv drinks-dashboard

drinks-dashboard/Script/activate.bat (or source Script/activate on mac and linux)

cd drinks-dashboard/backend

create file db.sqlite3 (touch db.sqlite3 on mac and linux)

pip install -r requirements.txt

python manage.py migrate

python manage.py runserver



###To set up UI


cd drinks-dashboard/ui

npm install && npm run

