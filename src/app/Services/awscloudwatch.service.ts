import { Injectable } from '@angular/core';
import * as AWS from 'aws-sdk';

@Injectable({
  providedIn: 'root'
})
export class AwscloudwatchService {

  constructor() { }

  getLogGroups(){

    return ["group1","group2","group3","group4"];
  }
}
