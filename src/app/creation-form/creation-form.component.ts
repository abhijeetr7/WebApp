import { Component, OnInit } from '@angular/core';
import { ValidateModel, WebpageModel, formModel } from './formModel';
import { HttpClient } from '@angular/common/http';
import { LocalFileService } from '../_services/localfileService';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-creation-form',
  templateUrl: './creation-form.component.html',
  // styleUrls: ['./creation-form.component.css']
})
export class CreationFormComponent implements OnInit {
  pageTitle = 'Create Form';
  model = new formModel();
  webpageModel = new WebpageModel();
  validatorModel = new ValidateModel();
  paramList: formModel[] = [];



  constructor(
    private http: HttpClient,
    private localservice: LocalFileService,
    private route: ActivatedRoute, 
  ) {

  }

  ngOnInit(): void {
    this.route
      .data
      .subscribe(v => {
        this.pageTitle = v['title'];
      });

    this.http.get('/assets/data.json').subscribe(data => {
      console.log(data);
      // this.model = data;
      console.log(data);
    });
  }


  addnew() {


    this.webpageModel.webpageName = this.webpageModel.webpageName
    // this.webpageModel.paramList = this.webpageModel.paramList
    // this.paramList = this.webpageModel.paramList

    this.validatorModel.mandatory = this.validatorModel.mandatory,
      this.validatorModel.minlength = this.validatorModel.minlength,
      this.validatorModel.maxlength = this.validatorModel.maxlength,


      this.webpageModel.paramList.push({
        id: this.model.sequence,
        sequence: this.model.sequence,
        label: this.model.label,
        type: this.model.type,
        validator: this.validatorModel,

      })
      this.paramList = this.webpageModel.paramList;

      console.log(this.webpageModel);

    this.model.sequence = this.model.sequence + 1;
    this.model.label = '';
    this.model.type = '';
    this.validatorModel.mandatory = true;
    this.validatorModel == null;
    // this.validatorModel.minlength == undefined;
    // this.validatorModel.maxlength == undefined;

  }

  spliceEntry(index: number): void {
    // alert("working")
    this.webpageModel.paramList.splice(index, 1);
    this.model.sequence = this.model.sequence - 1;
  }

  Create() {
    // mysql.connect('sql-database-path', 'username', 'password')
    // .then(db => db.query('SELECT * FROM todos'));


    if (this.webpageModel != null) {
      this.localservice.writeJSONLocally
    }
  }

  saveJsonFile() {
    const jsonData = this.webpageModel;
    const blob = new Blob([JSON.stringify(jsonData)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);

    // const link = document.createElement('a');
    // link.href = url;
    // link.download = fileName;
    // link.click();
  }

}
