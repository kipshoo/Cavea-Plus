import { Component, EventEmitter, Output } from '@angular/core';
import { MoviesAndSeriesService } from '../../../view/services/movies-and-series.service';
import { FormControl } from '@angular/forms';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-filter-for-movies-and-series',
  standalone: false,
  
  templateUrl: './filter-for-movies-and-series.component.html',
  styleUrl: './filter-for-movies-and-series.component.css'
})
export class FilterForMoviesAndSeriesComponent {
  @Output() filteredData = new EventEmitter<Array<any>>();
  @Output() filteredDataS = new EventEmitter<Array<any>>();
  emitterM(){
    this.filteredData.emit([...this.filteredArray])
  }
  emitterS(){
    this.filteredDataS.emit([...this.filteredArrayS])
  }
  constructor(private filterservice:MoviesAndSeriesService){
    for(let i = 2025; i >= 1888; i--){
      this.years.push(i)
    }
    for(let i = 1; i <= 10; i++){
      this.ratingIMDB.push(i)
    }
    for(let i = 1; i <= 5; i++){
      this.ratingCavea.push(i)
    }
  }
  filteredArray:Array<any> = []
  filteredArrayS:Array<any> = []
  urlF!:any
  url2F!:any
  free:boolean = false
  premium:boolean = false
  url:Array<any> = []
  url2:Array<any> = []
  countryArray:Array<any> = []
  genre:FormControl = new FormControl([])
  ratingimdb:FormControl = new FormControl([])
  ratingcavea:FormControl = new FormControl([])
  language:FormControl = new FormControl([])
  subtitles:FormControl = new FormControl([])
  countries:FormControl = new FormControl([])
  genreArray:Array<any> = []
  selected:string = 'ჟანრი'
  years:number[] = []
  fromYear!:number;
  toYear!:number;
  ratingIMDB:number[] = []
  ratingCavea:number[] = []
  languages:Array<any> = [
    {name: 'ქართული', id: 'GEO'},
    {name: 'ინგლისური', id: 'ENG'},
    {name: 'რუსული', id: 'RUS'},
    {name: 'ფრანგული', id: 'FRA'},
    {name: 'ჰოლანდიური', id: 'NLD'},
    {name: 'გერმანული', id: 'DEU'},
    {name: 'დანიური', id: 'DAN'},
    {name: 'ჩეხური', id: 'CZE'},
    {name: 'სპარსული', id: 'PER'},
    {name: 'ჩინური', id: 'CHN'},
    {name: 'ისლანდიური', id: 'ISL'},
    {name: 'არაბული', id: 'ARA'},
    {name: 'ინდური', id: 'IND'},
    {name: 'შვედური', id: 'SWD'},
    {name: 'სერბული', id: 'SER'},
    {name: 'ირანული', id: 'IRN'},
    {name: 'ებრაული', id: 'HEB'},
    {name: 'თურქული', id: 'TR'},
    {name: 'პოლონური', id: 'PL'},
    {name: 'პორტუგალიური', id: 'PT'},
    {name: 'სომხური', id: 'ARM'},
    {name: 'აზერბაიჯანული', id: 'AZ'},
    {name: 'კორეული', id: 'KO'},
    {name: 'ბერძნული', id: 'EL'},
    {name: 'უკრაინული', id: 'UA'},
  ]
  unSubSubject:Subject<boolean> = new Subject()
  ngOnDestroy(): void {
    this.unSubSubject.next(true)
    this.unSubSubject.unsubscribe()
  }
  ngOnInit(): void {
    this.fetchGenre()
    this.fetchCountry()
  }

  public fetchGenre(){
    this.filterservice.getGenre()
    .subscribe((response) => {
      this.genreArray = response
    })
  }
  public fetchCountry(){
    this.filterservice.getCountry()
    .subscribe((response) => {
      this.countryArray = response
    })
  }

  getToYearOptions():number[] {
    if(this.fromYear) {
      return this.years.filter(year => year >= this.fromYear);
    }
    return this.years;
  }
  onFromYearChange() {
    this.toYear = this.fromYear;
  }

  public filter(){
      let genreParams = this.genre.value.map((g: string) => `genre=${g}`).join('&');
      let languageParams = this.language.value.map((l: string) => `dub=${l}`).join('&');
      let subtitlesParams = this.subtitles.value.map((s: string) => `sub=${s}`).join('&');
      let countriesParams = this.countries.value.map((c: string) => `country=${c}`).join('&');
    
      let ratingsI = this.ratingimdb.value.join(',');
      let ratingsC = this.ratingcavea.value.join(',');
    
      this.url = [];
      this.url2 = [];
      this.filteredArray = []
      this.filteredArrayS = []
      if(genreParams) {
        this.url.push(genreParams);
      }
      if(languageParams) {
        this.url.push(languageParams);
      }
      if(subtitlesParams) {
        this.url.push(subtitlesParams);
      }
      if(countriesParams) {
        this.url.push(countriesParams);
      }
      if(this.free) {
        this.url.push(`types=AVOD`);
      }
      if(this.premium){
        this.url.push(`types=SVOD`);
      }
      if(this.fromYear !== undefined) {
        this.url2.push(`year=${this.fromYear},${this.toYear}`);
      }
      if(ratingsI !== '') {
        this.url2.push(`imdb=${ratingsI}`);
      }
      if(ratingsC !== '') {
        this.url2.push(`rating=${ratingsC}`);
      }
    
      this.urlF = this.url.length > 0 ? `${this.url.join('&')}&` : '';
      this.url2F = this.url2.length > 0 ? `${this.url2.join('&')}&` : '';
      this.fetchmovies()
      this.fetchseries()
    }
    
  checkF(){
    this.free = !this.free
  }
  checkP(){
    this.premium = !this.premium
  }

  public fetchmovies(){
    let limit = 100
    let offset = 0
    this.fetchmoviespaginated(limit, offset)
  }
  private fetchmoviespaginated(limit:number, offset:number){
    this.filterservice.getfilteredmovies(this.urlF, this.url2F,limit, offset)
    .subscribe((response) => {
      this.filteredArray.push(...response.items)
      this.emitterM()
      if (this.filteredArray.length < response.count) {
        this.fetchmoviespaginated(limit, offset + limit)
      }
    })
  }
  public fetchseries(){
    let limit = 100
    let offset = 0
    this.fetchmoviespaginatedS(limit, offset)
  }
  private fetchmoviespaginatedS(limit:number, offset:number){
    this.filterservice.getfilteredseries(this.urlF, this.url2F,limit, offset)
    .subscribe((response) => {
      this.filteredArrayS.push(...response.items)
      this.emitterS()
      if (this.filteredArrayS.length < response.count) {
        this.fetchmoviespaginatedS(limit, offset + limit)
      }
    })
  }
}
