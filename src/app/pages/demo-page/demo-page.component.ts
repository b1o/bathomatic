import { Component, OnInit, OnDestroy, HostListener } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';
import { Room } from 'src/app/models/room';
import { generateChartData, generateTableData } from '../../utils/generateChartData';
import { multi } from './data';

@Component({
  selector: 'bm-demo-page',
  templateUrl: './demo-page.component.html',
  styleUrls: ['./demo-page.component.less'],
})
export class DemoPageComponent implements OnInit, OnDestroy {
  public room: Room;
  private id: string;

  public view = [700, 300];
  public data = generateChartData(new Date(2020, 2, 10), new Date(2020, 2, 30));

  private roomsRef: AngularFireList<Room>;
  legend: boolean = true;
  showLabels: boolean = true;
  animations: boolean = true;
  xAxis: boolean = true;
  yAxis: boolean = true;
  showYAxisLabel: boolean = true;
  showXAxisLabel: boolean = true;
  xAxisLabel: string = 'Year';
  yAxisLabel: string = 'Population';
  timeline: boolean = true;

  tableData = generateTableData(10);

  public showData = false;

  colorScheme = {
    domain: ['#5AA454', '#E44D25', '#CFC0BB', '#7aa3e5', '#a8385d', '#aae3f5']
  };

  constructor(
    private route: ActivatedRoute,
    private fbDatabase: AngularFireDatabase
  ) {

    this.roomsRef = this.fbDatabase.list('room');
    this.route.paramMap.subscribe((params) => {
      if (params.get('id')) {
        this.id = params.get('id');

        this.roomsRef.update(this.id, { isLocked: true });

        this.fbDatabase
          .list<Room>('room/')
          .query.ref.child(this.id)
          .on('value', (data) => (this.room = data.val()));
      }
    });
  }

  ngOnInit(): void {
    console.log(this.data)

  }

  @HostListener('window:unload', ['$event'])
  unloadHandler(event) {
    this.roomsRef.update(this.id, { isLocked: false });
  }

  @HostListener('window:beforeunload', ['$event'])
  beforeUnloadHandler(event) {
    this.roomsRef.update(this.id, { isLocked: false });
  }
  ngOnDestroy() {
    this.roomsRef.update(this.id, { isLocked: false });
  }
}
