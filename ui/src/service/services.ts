import axios from 'axios'
import { ICompetition, ILeague, IMember, ITeam } from 'src/interface/common'

axios.defaults.baseURL = process.env.NODE_ENV === 'development' ? 'http://localhost:8000/' : 'https://league-aaron.herokuapp.com/'

export const getMembers = () => axios.get<IMember[]>('teammembers')
export const getTeams = () => axios.get<ITeam[]>('teams')
export const getCompetitions = () => axios.get<ICompetition[]>('competitions')
export const getLeagues = () => axios.get<ILeague[]>('leagues')
export const postMember = (member: IMember) => axios.post<IMember>('teammembers-create', member)
export const postTeam = (team: ITeam) => axios.post<ITeam>('teams-create', team)
export const postCompetition = (competition: ICompetition) => axios.post<ICompetition>('competitions-create', competition)
export const postLeague = (league: ILeague) => axios.post<ILeague>('leagues-create', league)
export const updateLeague = (league: ILeague) => axios.post<ILeague>(`leagues-update/${league.id as number}`, league)
