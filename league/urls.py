from django.urls import path

from . import views

urlpatterns = [
    path('teammembers', views.team_member_list, name='teammembers'),
    path('teammembers-create', views.team_member_create, name='teammembers-create'),
    path('teams', views.team_list, name='teams'),
    path('teams-create', views.team_create, name='teams-create'),
    path('competitions', views.competition_list, name='competitions'),
    path('competitions-create', views.competition_create, name='competitions-create'),
    path('leagues', views.league_list, name='leagues'),
    path('leagues-create', views.league_create, name='leagues-create'),
]
