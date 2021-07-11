import axios from 'axios'
import { ICompetition, IMember, ITeam } from 'src/interface/common'

export const getMembers = () => axios.get('http://127.0.0.1:8000/teammembers')
export const getTeams = () => axios.get('http://127.0.0.1:8000/teams')
export const getCompetitions = () => axios.get('http://127.0.0.1:8000/competitions')
export const getLeagues = () => axios.get('http://127.0.0.1:8000/leagues')
export const postMember = (member: IMember) => axios.post('http://127.0.0.1:8000/teammembers-create', member)
export const postTeam = (team: ITeam) => axios.post('http://127.0.0.1:8000/teams-create', team)
export const postCompetition = (competition: ICompetition) => axios.post('http://127.0.0.1:8000/competitions-create', competition)
