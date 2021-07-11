# Django Project
> This is a project for learning python development. It has a django backend
> and VueJS frontend. django backend offers a set of restful APIs for the frontend.

## Environment Setup

- Install `python3`
- Install `node v12`
- Install `yarn`

## Run Project

- Run `python manage.py runserver` to start the backend
    - Service will run on `http://127.0.0.1:8000`
    - Admin portal will run on `http://127.0.0.1:8000/admin`
- Run `yarn && yarn start` to start the frontend
    - Service will run on `http://127.0.0.1:8080`

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
