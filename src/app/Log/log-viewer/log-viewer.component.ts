import { Component, OnInit, ViewChild, TemplateRef, ElementRef, Renderer2 } from '@angular/core';
import {CdkStepperModule} from '@angular/cdk/stepper';
import { Validators, FormGroup, FormBuilder } from '@angular/forms';
import { AwscloudwatchService } from '../../Services/awscloudwatch.service';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Component({
  selector: 'app-log-viewer',
  templateUrl: './log-viewer.component.html',
  styleUrls: ['./log-viewer.component.css']
})
export class LogViewerComponent implements OnInit {

  
  logGroups: string[];
  logStream: string[];
  logItems: string[];

  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;


  @ViewChild('templateLogGroup') templateLogGroup : TemplateRef<any>;
  @ViewChild('ciccio') pippo : ElementRef<any>;
  

  constructor(private _formBuilder: FormBuilder, private cloudwatch :AwscloudwatchService, private sanitizer: DomSanitizer, private renderer: Renderer2,) {}
  
  ngOnInit() {

     this.logGroups = this.cloudwatch.getLogGroups();
     console.log("GRUPPI",this.logGroups);

    this.firstFormGroup = this._formBuilder.group({
      firstCtrl: ['', Validators.required]
    });
    this.secondFormGroup = this._formBuilder.group({
      secondCtrl: ['', Validators.required]
    });
  }

  selectLogGroup(item){

    let safeHtml: SafeHtml | string;
    safeHtml = this.sanitizer.bypassSecurityTrustHtml("<strong>changed<strong>");  // "<strong>changed<strong>";
    this.templateLogGroup.elementRef.nativeElement.innerHtml =  safeHtml;
  }

  changealessio()
  {
    this.renderer.setProperty(this.pippo.nativeElement, 'innerHtml', this.sanitizer.bypassSecurityTrustHtml("<strong>changed<strong>"));
    console.log("PIPPO",this.pippo.nativeElement.innerHtml)
  }
}
