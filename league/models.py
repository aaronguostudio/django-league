from django.db import models


class Team(models.Model):
    name = models.CharField(max_length=30)

    def __str__(self):
        return self.name


class League(models.Model):
    name = models.CharField(max_length=30)
    teams = models.ManyToManyField(Team)

    def __str__(self):
        return self.name


class Competition(models.Model):
    teams = models.ManyToManyField(Team)
    location = models.CharField(max_length=50)
    datetime = models.DateTimeField("date published")
    league = models.ForeignKey(League, on_delete=models.CASCADE)

    def __str__(self):
        return self.location


class TeamMember(models.Model):
    team = models.ForeignKey(Team, on_delete=models.CASCADE)
    name = models.CharField(max_length=30)
    email = models.EmailField()

    def __str__(self):
        return self.name
