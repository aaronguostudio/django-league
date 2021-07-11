# Django Project
> This is a project for learning python development. It has a django backend
> and VueJS frontend. django backend offers a set of restful APIs for the frontend.

- ### Demo Link: https://league-aaron.herokuapp.com/
- ### GitHub Repo: https://github.com/aaronguostudio/django-league

## Features

- `python django restful APIs`
- `VueJS SPA with composition API`
- `Responsive design`
- `Sqlite`
- `Heroku host`

## Environment Setup

- Install `python3`
- Install `node v12`
- Install `yarn`
- dependencies in `requirements.txt`

## Run Project

- Run `python manage.py runserver` to start the backend
    - Service will run on `http://127.0.0.1:8000`
    - Admin portal will run on `http://127.0.0.1:8000/admin`
- Run `yarn && yarn start` to start the frontend
    - Service will run on `http://127.0.0.1:8080`
  
## Deployment

- The host is using heroku. Before deployment, you need to run
  `heroku login`, run `./build.sh` and then commit your changes
- Run `./deploy.sh` to deploy the changes

## Commends for Admin management
- `python manage.py runserver`
- `python manage.py migrate`
- `python manage.py makemigrations league`
- `python manage.py sqlmigrate league 0001`
- `python manage.py check`
- `python manage.py shell`
- `python manage.py createsuperuser`

## Materials
- https://docs.djangoproject.com/en/3.2/topics/db/queries/

## Temp
```python
from league.models import Team, TeamMember, League, Competition
```
