import axios from 'axios'
import { ICompetition, ILeague, IMember, ITeam } from 'src/interface/common'

axios.defaults.baseURL = process.env.NODE_ENV === 'development' ? 'http://localhost:8000/' : 'https://league-aaron.herokuapp.com/'

export const getMembers = () => axios.get('teammembers')
export const getTeams = () => axios.get('teams')
export const getCompetitions = () => axios.get('competitions')
export const getLeagues = () => axios.get('leagues')
export const postMember = (member: IMember) => axios.post('teammembers-create', member)
export const postTeam = (team: ITeam) => axios.post('teams-create', team)
export const postCompetition = (competition: ICompetition) => axios.post('competitions-create', competition)
export const postLeague = (league: ILeague) => axios.post('leagues-create', league)
