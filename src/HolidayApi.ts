
interface IHoliday {
    date: string
    name: string
    observed: string
    public: boolean
}

interface IHolidayResponse {
    holidays: IHoliday[]
}

export class HolidayApi {
    readonly key: string

    constructor(key: string) {
        this.key = key
    }

    async fromNow(country: string) {
        let date = new Date()
        return this.find(country, date.getFullYear(), date.getMonth() + 1)
    }

    async find(country: string, year: number, month: number) {
        let url = `https://holidayapi.com/v1/holidays?country=${country}&year=${year}&month=${month}&key=${this.key}`
        let response = await fetch(url)  
        let json: IHolidayResponse = await response.json()
        return json.holidays
    }
}