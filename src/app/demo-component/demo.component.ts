import { GeneratorService } from './../core/services/generator.service';
import { ConstantService } from './../core/services/constant.service';
import { LocalStorageService } from './../core/services/local-storage.service';
import { ConfigOptionsService } from './../core/services/config-options.service';
import { Component, OnInit, Optional } from '@angular/core';



@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.css']
})
export class DemoComponent implements OnInit {
  value: string;
  randomString: string;
  id: number;

  constructor(
    private configOptionsService: ConfigOptionsService,
    private localStorageService: LocalStorageService,
    @Optional() private constantService: ConstantService,
    @Optional() private generatorService: GeneratorService
  ) {}

  ngOnInit() {
    this.localStorageService.setItem('some', 'value from localStorage');
    this.value = localStorage.getItem('some');
    this.randomString = this.generatorService.randomSring;
    this.configOptionsService.id = 1;
    this.id = this.configOptionsService.id;
  }

}
