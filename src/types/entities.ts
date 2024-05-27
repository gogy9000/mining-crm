export type Logbook = {
   id: number
   title: string
   mainePlace: string
   records: LogBookRecord[]
}
export type LogBookRecord = {
   id: number
   creationDate: Date
   workAreaName: string
   description: string
   picture: string
   authorSignature: string
   managementOrder: string
   managmentSignature: string
   recipientSignature: string
   completionMark: string
   notation: string
}
