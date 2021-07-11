<template>
  <q-page class="bg-grey-3">
    <div class="full-vh">
      <div class="col">
        <q-card class="no-shadow">
          <q-card-section class="">
            <div class="flex q-gutter-md">
              <div v-for="league in leagues" :key="league.id">
                <q-btn
                  :color="selectedLeague === league ? 'primary' : 'black'" :label="league.name" no-caps
                  :outline="selectedLeague !== league" unelevated @click="handleSelectLeague(league)"
                />
              </div>
              <div class="flex items-center">
                <q-btn icon="add" size="sm" color="primary" round unelevated outline>
                  <q-popup-proxy>
                    <div class="q-pa-md league-create">
                      <q-form class="full-width cf-hover-container" @submit="handleLeagueCreate">
                        <div class="q-gutter-y-sm">
                          <q-input label="Name" v-model="leagueNew.name" dense />
                          <q-select
                            label="Teams" v-model="leagueNew.teams" map-options option-label="name"
                            emit-value option-value="id" :options="teams" dense multiple
                          />
                          <div class="flex justify-end">
                            <q-btn label="Submit" color="primary" size=".7rem" no-caps unelevated type="submit" />
                          </div>
                        </div>
                      </q-form>
                    </div>
                  </q-popup-proxy>
                </q-btn>
              </div>
            </div>
          </q-card-section>
        </q-card>
      </div>
      <q-separator />
      <div class="row q-col-gutter-md q-pa-md">
        <div class="col-md col-sm-12">
          <q-card class="no-shadow" bordered>
            <q-card-section>
              <div class="text-lg text-bold flex items-center justify-between">
                <div>Teams</div>
                <q-btn
                  icon="add" color="primary" size="sm" :outline="!teamCreate" round unelevated
                  @click="teamCreate = !teamCreate"
                />
              </div>
              <q-form v-if="teamCreate" class="full-width cf-hover-container" @submit="handleTeamCreate">
                <div class="q-gutter-y-sm">
                  <q-input label="Name" v-model="teamNew.name" dense />
                  <q-input label="Email" v-model="teamNew.email" dense />
                  <div class="flex justify-end">
                    <q-btn label="Submit" color="primary" size=".7rem" no-caps unelevated type="submit" />
                  </div>
                </div>
              </q-form>
              <div class="q-mt-md">
                <div class="q-gutter-md flex">
                  <q-btn
                    v-for="team in filteredTeams" :key="team.id" bordered
                    :color="selectedTeam === team ? 'primary' : 'black'" :label="team.name" no-caps
                    :outline="selectedTeam !== team" unelevated @click="handleTeamSelected(team)"
                  />
                </div>
              </div>
            </q-card-section>
          </q-card>
        </div>
        <div class="col-md col-sm-12">
          <q-card class="no-shadow" bordered>
            <q-card-section>
              <div class="text-lg text-bold flex items-center justify-between">
                <div>Members</div>
                <q-btn
                  icon="add" color="primary" size="sm" :outline="!memberCreate" round unelevated
                  @click="handleMemCreateEnable"
                />
              </div>
              <q-form v-if="memberCreate" class="full-width cf-hover-container" @submit="handleMemberCreate">
                <div class="q-gutter-y-sm">
                    <q-input label="Name" v-model="memberNew.name" dense />
                    <div class="row q-gutter-x-md">
                      <q-input class="col" label="Email" v-model="memberNew.email" dense />
                      <q-select
                        class="col" label="Team" v-model="memberNew.team" map-options option-label="name"
                        emit-value option-value="id" :options="filteredTeams" dense
                      />
                    </div>
                    <div class="flex justify-end">
                      <q-btn label="Submit" color="primary" size=".7rem" no-caps unelevated type="submit" />
                    </div>
                </div>
              </q-form>
              <div class="q-mt-md">
                <div class="q-gutter-md flex">
                  <q-card class="no-shadow" v-for="member in filteredMembers" :key="member.id" bordered>
                    <q-card-section class="q-gutter-y-sm">
                      <div class="flex items-center q-gutter-x-sm">
                        <q-avatar color="secondary text-white" size="md">{{ member.name.charAt(0) }}</q-avatar>
                        <div class="text-bold">
                          <div>{{ member.name }}</div>
                          <div class="text-grey-8">{{ member.email }}</div>
                        </div>
                      </div>
                    </q-card-section>
                  </q-card>
                </div>
              </div>
            </q-card-section>
          </q-card>
        </div>
        <div class="col-md col-sm-12">
          <q-card class="no-shadow" bordered>
            <q-card-section>
              <div class="text-lg text-bold flex items-center justify-between">
                <div>Competitions</div>
                <q-btn
                  icon="add" color="primary" size="sm" :outline="!competitionCreate" round unelevated
                  @click="handleCompCreateEnable"
                />
              </div>
              <q-form v-if="competitionCreate" class="full-width cf-hover-container" @submit="handleCompetitionCreate">
                <div class="q-gutter-y-sm">
                  <div class="row q-gutter-x-md">
                    <q-input class="col" label="Location" v-model="competitionNew.location" dense />
                    <q-input class="col" v-model="competitionNew.datetime" dense>
                      <template v-slot:prepend>
                        <q-icon name="event" class="cursor-pointer" size="xs">
                          <q-popup-proxy transition-show="scale" transition-hide="scale">
                            <q-date v-model="competitionNew.datetime" mask="YYYY-MM-DD HH:mm">
                              <div class="row items-center justify-end">
                                <q-btn v-close-popup label="Close" color="primary" flat />
                              </div>
                            </q-date>
                          </q-popup-proxy>
                        </q-icon>
                      </template>

                      <template v-slot:append>
                        <q-icon name="access_time" class="cursor-pointer" size="xs">
                          <q-popup-proxy transition-show="scale" transition-hide="scale">
                            <q-time v-model="competitionNew.datetime" mask="YYYY-MM-DD HH:mm" format24h>
                              <div class="row items-center justify-end">
                                <q-btn v-close-popup label="Close" color="primary" flat />
                              </div>
                            </q-time>
                          </q-popup-proxy>
                        </q-icon>
                      </template>
                    </q-input>
                  </div>
                  <div class="row q-gutter-x-md">
                    <q-select
                      class="col" label="League" v-model="competitionNew.league" map-options option-label="name"
                      emit-value option-value="id" :options="leagues" dense disable
                    />
                    <q-select
                      class="col" label="Team" v-model="competitionNew.teams" map-options option-label="name"
                      emit-value option-value="id" multiple :options="filteredTeams" dense
                    />
                  </div>
                  <div class="flex justify-end">
                    <q-btn label="Submit" color="primary" size=".7rem" no-caps unelevated type="submit" />
                  </div>
                </div>
              </q-form>
              <div class="q-mt-md">
                <div class="flex q-gutter-md">
                  <q-card class="no-shadow" v-for="com in filteredComps" :key="com.id" bordered>
                    <q-card-section>
                      <div class="text-lg text-bold">{{ com.location }}</div>
                      <div class="text-grey-8">{{ dayjs(com.datetime).format('MMM D, YYYY h:mm') }}</div>
                      <div class="q-mt-md">
                        <div class="flex q-gutter-md">
                          <q-btn
                            v-for="team in com.teams" :key="team" bordered
                            :label="teamsMap[team].name" no-caps outline
                          />
                        </div>
                      </div>
                    </q-card-section>
                  </q-card>
                </div>
              </div>
            </q-card-section>
          </q-card>
        </div>
      </div>
    </div>
  </q-page>
</template>

<script lang="ts">
import { defineComponent, computed, onMounted, ref } from 'vue'
import { IMember, ITeam, ITeamMap, ILeague, ICompetition, memberTemplate, teamTemplate, competitionTemplate, leagueTemplate } from 'src/interface/common'
import { getMembers, getTeams, getCompetitions, getLeagues, postMember, postTeam, postCompetition, postLeague } from 'src/service/services'
import dayjs from 'dayjs'

export default defineComponent({
  name: 'PageIndex',
  components: {},
  setup() {
    const members = ref<IMember[]>([])
    const teams = ref<ITeam[]>([])
    const teamsMap = ref<ITeamMap>({})
    const leagues = ref<ILeague[]>([])
    const competitions = ref<ICompetition[]>([])
    const selectedLeague = ref<ILeague>()
    const selectedTeam = ref<ITeam>()
    const memberCreate = ref(false)
    const leagueNew = ref<ILeague>({ ...leagueTemplate })
    const memberNew = ref<IMember>({ ...memberTemplate })
    const teamCreate = ref(false)
    const teamNew = ref<ITeam>({ ...teamTemplate })
    const competitionCreate = ref(false)
    const competitionNew = ref<ICompetition>({ ...competitionTemplate })
    const filteredComps = computed<ICompetition[]>(() => competitions.value.filter(comp => comp.league === selectedLeague.value?.id))
    const filteredTeams = computed<ITeam[]>(() => teams.value.filter(team => selectedLeague.value?.teams.includes(team.id as number)))
    const filteredMembers = computed<IMember[]>(() => {
      const mems: IMember[] = members.value.filter(member => selectedLeague.value?.teams.includes(member.team as number))
      if (selectedTeam.value)
        return mems.filter(m => m.team === selectedTeam.value?.id)
      return mems
    })

    onMounted(async () => {
      await refreshData()
    })

    const refreshData = async () => {
      const [ membersData, teamsData, competitionsData, leaguesData ] = await Promise.all([
        getMembers(),
        getTeams(),
        getCompetitions(),
        getLeagues(),
      ])

      members.value = membersData.data as IMember[]
      teams.value = teamsData.data as ITeam[]
      leagues.value = leaguesData.data as ILeague[]
      competitions.value = competitionsData.data as ICompetition[]

      if (teams.value) {
        teamsMap.value = teams.value.reduce((acc: ITeamMap, cur: ITeam) => {
          acc[(cur.id as number).toString()] = cur
          return acc
        }, {})
      }

      if (leagues.value && leagues.value.length > 0)
        selectedLeague.value = leagues.value[0]
    }

    const handleSelectLeague = (league: ILeague) => {
      competitionCreate.value = false
      teamCreate.value = false
      memberCreate.value = false
      selectedLeague.value = league
      selectedTeam.value = undefined
    }

    const handleTeamSelected = (team: ITeam) => {
      if (selectedTeam.value === team)
        selectedTeam.value = undefined
      else
        selectedTeam.value = team
      memberNew.value.team = selectedTeam.value?.id
    }

    const handleMemberCreate = async () => {
      await postMember(memberNew.value)
      memberNew.value = { ...memberTemplate }
      await refreshData()
    }

    const handleTeamCreate = async () => {
      await postTeam(teamNew.value)
      teamNew.value = { ...teamTemplate }
      await refreshData()
    }

    const handleCompetitionCreate = async () => {
      await postCompetition(competitionNew.value)
      competitionNew.value = { ...competitionTemplate }
      await refreshData()
    }

    const handleLeagueCreate = async () => {
      await postLeague(leagueNew.value)
      leagueNew.value = { ...leagueTemplate }
      await refreshData()
    }

    const handleCompCreateEnable = () => {
      competitionCreate.value = !competitionCreate.value
      if (competitionCreate.value) {
        competitionNew.value = { ...competitionTemplate }
        competitionNew.value.league = selectedLeague.value?.id
      }
    }

    const handleMemCreateEnable = () => {
      memberCreate.value = !memberCreate.value
      if (memberCreate.value) {
        memberNew.value = { ...memberTemplate }
        memberNew.value.team = selectedTeam.value?.id
      }
    }

    return {
      dayjs,
      members,
      teams,
      teamsMap,
      leagues,
      competitions,
      selectedLeague,
      selectedTeam,
      memberCreate,
      memberNew,
      teamCreate,
      teamNew,
      competitionCreate,
      competitionNew,
      leagueNew,
      filteredComps,
      filteredTeams,
      filteredMembers,
      handleSelectLeague,
      handleTeamSelected,
      handleMemberCreate,
      handleTeamCreate,
      handleCompetitionCreate,
      handleCompCreateEnable,
      handleMemCreateEnable,
      handleLeagueCreate,
    };
  }
});
</script>

<style lang="sass" scoped>
.league-create
  width: 20rem
  max-width: 20rem
</style>
