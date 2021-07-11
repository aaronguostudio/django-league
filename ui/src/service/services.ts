import axios from 'axios'
import { ICompetition, IMember, ITeam } from 'src/interface/common'

axios.defaults.baseURL = 'http://localhost:8000/'

export const getMembers = () => axios.get('teammembers')
export const getTeams = () => axios.get('teams')
export const getCompetitions = () => axios.get('competitions')
export const getLeagues = () => axios.get('leagues')
export const postMember = (member: IMember) => axios.post('teammembers-create', member)
export const postTeam = (team: ITeam) => axios.post('teams-create', team)
export const postCompetition = (competition: ICompetition) => axios.post('competitions-create', competition)
