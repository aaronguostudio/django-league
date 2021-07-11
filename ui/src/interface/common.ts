export interface IBaseEntity {
  id?: number,
  name: string,
}

export interface IMember extends IBaseEntity {
  email: string,
  team?: number,
}

export interface ITeam extends IBaseEntity {
  email: string,
}

export interface ITeamMap {[key: string]: ITeam}

export interface ILeague extends IBaseEntity {
  teams: number[],
}

export interface ICompetition {
  id?: string,
  location: string,
  datetime: string,
  league?: number,
  teams: number[],
}

export const leagueTemplate = { name: 'New League', teams: [] }
export const memberTemplate = { name: 'New Member', email: 'example@example.com' }
export const teamTemplate = { name: 'New Team', email: 'example@example.com' }
export const competitionTemplate = { location: 'New Competition', datetime: '', teams: [] }
