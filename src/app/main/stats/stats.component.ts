import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import { RecordService } from '../../service/record/record.service';

@Component({
  selector: 'app-stats',
  templateUrl: './stats.component.html',
  styleUrls: ['./stats.component.css'],
  providers: [RecordService]
})
export class StatsComponent implements OnInit, OnChanges {

  statsData:number[] = [0, 0, 0, 0, 0];
  statsLabels:string[] = ['Untouched', 'Weak knowledge', 'Mid knowledge', 'Well known', 'Mastered'];
  type = 'doughnut';

  @Input()
  flashcardType:string = "HIRAGANA";

  @Input()
  level:string = "N5";

  constructor(private recordService:RecordService) { }

  ngOnInit() {
   this.getStats(); 
  }

  ngOnChanges(changes: SimpleChanges) {
    this.getStats();
  }

  getStats() {
    this.recordService.getStats(this.flashcardType, this.level).subscribe( data => {
      this.statsData = [data.untouched, data.weakKnown, data.midKnown, data.wellKnown, data.mastered];
    }, err => {
      console.log("Error occured");
    })
  }

  getStatsHeader() {
    let typeHeader:string = this.flashcardType.toLowerCase();
    if (this.flashcardType === 'HIRAGANA' || this.flashcardType === 'KATAKANA') {
      return "Stats for " + typeHeader;
    } else {
      return "Stats for " + typeHeader + " for level: " + this.level;
    }
  }

}
