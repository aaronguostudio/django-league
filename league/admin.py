from django.contrib import admin

from .models import Team, TeamMember, League, Competition

admin.site.register(Team)
admin.site.register(TeamMember)
admin.site.register(League)
admin.site.register(Competition)
