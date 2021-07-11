from rest_framework.decorators import api_view
from rest_framework.response import Response
from .models import TeamMember, Team, League, Competition
from .serializers import TeamMemberSerializer, TeamSerializer, LeagueSerializer, CompetitionSerializer


@api_view(['GET'])
def team_member_list(request):
    team_members = TeamMember.objects.all()
    serializer = TeamMemberSerializer(team_members, many=True)
    return Response(serializer.data)


@api_view(['POST'])
def team_member_create(request):
    serializer = TeamMemberSerializer(data=request.data)

    if serializer.is_valid():
        serializer.save()
    return Response(serializer.data)


@api_view(['GET'])
def team_list(request):
    teams = Team.objects.all()
    serializer = TeamSerializer(teams, many=True)
    return Response(serializer.data)


@api_view(['POST'])
def team_create(request):
    serializer = TeamSerializer(data=request.data)

    if serializer.is_valid():
        serializer.save()
    return Response(serializer.data)


@api_view(['GET'])
def competition_list(request):
    competitions = Competition.objects.all()
    serializer = CompetitionSerializer(competitions, many=True)
    return Response(serializer.data)


@api_view(['POST'])
def competition_create(request):
    serializer = CompetitionSerializer(data=request.data)

    if serializer.is_valid():
        serializer.save()
    return Response(serializer.data)


@api_view(['GET'])
def league_list(request):
    leagues = League.objects.all()
    serializer = LeagueSerializer(leagues, many=True)
    return Response(serializer.data)


@api_view(['POST'])
def league_create(request):
    serializer = LeagueSerializer(data=request.data)

    if serializer.is_valid():
        serializer.save()
    return Response(serializer.data)
